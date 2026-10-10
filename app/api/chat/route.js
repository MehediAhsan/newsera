import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { articleCatalog } from "@/lib/newsCatalog";

export const runtime = "nodejs";
export const maxDuration = 30;

const STOP_WORDS = new Set([
  "about", "after", "again", "and", "are", "can", "could", "for", "from",
  "have", "help", "how", "into", "is", "me", "news", "of", "please", "show",
  "tell", "that", "the", "their", "this", "to", "what", "when", "where",
  "which", "with", "would", "you",
]);

function getArticleText(article) {
  return [
    article.title,
    article.category,
    article.deck,
    ...(article.tags || []),
    ...(article.summary || []),
    ...(article.sections || []).map((section) => `${section.heading} ${section.body}`),
  ].join(" ");
}

function findRelevantArticles(question) {
  const terms = question
    .toLowerCase()
    .match(/[a-z0-9]+/g)
    ?.filter((term) => term.length > 1 && !STOP_WORDS.has(term)) || [];

  return articleCatalog
    .map((article) => {
      const searchableText = getArticleText(article).toLowerCase();
      const score = terms.reduce((total, term) => total + (searchableText.includes(term) ? 1 : 0), 0);
      return { article, score };
    })
    .filter(({ score }) => score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, 3)
    .map(({ article }) => article);
}

function createLocalAnswer(question, articles) {
  if (!articles.length) {
    return "I couldn't find a close match in NewsEra's published stories yet. Try asking about AI and product teams, Bangladesh startups, climate resilience, or global supply chains. I can only search the stories currently available in this edition.";
  }

  const requestedSummary = /\b(summar|brief|tldr|key points|main points)\b/i.test(question);
  const lead = articles[0];
  const summary = lead.summary?.length
    ? lead.summary.slice(0, requestedSummary ? 3 : 2)
    : [lead.deck];
  const related = articles.slice(1);
  const response = [
    requestedSummary
      ? `Here are the key points from **${lead.title}**:`
      : `The closest NewsEra coverage I found is **${lead.title}**.`,
    ...summary.map((point) => `• ${point}`),
  ];

  if (related.length) {
    response.push(`Related coverage: ${related.map((article) => article.title).join("; ")}.`);
  }

  return response.join("\n\n");
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Request body must be valid JSON." }, { status: 400 });
  }

  const question = typeof body?.question === "string" ? body.question.trim() : "";
  if (!question) {
    return Response.json({ error: "Please enter a question." }, { status: 400 });
  }
  if (question.length > 1200) {
    return Response.json({ error: "Please keep your question under 1,200 characters." }, { status: 400 });
  }

  const history = body?.history === undefined ? [] : body.history;
  if (!Array.isArray(history) || history.length > 12 || history.some((message) =>
    !message ||
    !["user", "assistant"].includes(message.role) ||
    typeof message.content !== "string" ||
    message.content.length > 1200
  )) {
    return Response.json({ error: "Conversation history is invalid. Please start a new conversation." }, { status: 400 });
  }

  const previousUserQuestion = history.filter((message) => message.role === "user").at(-1)?.content || "";
  const isContextualFollowUp =
    /\b(it|that|this|those|them)\b/i.test(question) &&
    /\b(more|elaborate|expand|explain|why|how)\b/i.test(question);
  const contextualQuestion = isContextualFollowUp
    ? previousUserQuestion || question
    : [...history.filter((message) => message.role === "user").slice(-3).map((message) => message.content), question].join(" ");
  const relevantArticles = findRelevantArticles(contextualQuestion);
  const sources = relevantArticles.map(({ title, slug, category }) => ({ title, slug, category }));

  if (process.env.OPENAI_API_KEY) {
    try {
      const context = relevantArticles
        .map((article, index) => {
          const body = (article.sections || []).map((section) => section.body).join("\n");
          return `[${index + 1}] ${article.title} (${article.category})\n${article.deck}\n${(article.summary || []).join("\n")}\n${body}`;
        })
        .join("\n\n")
        .slice(0, 12000);

      const { text } = await generateText({
        model: openai("gpt-4o-mini"),
        system: `You are NewsEra's newsroom assistant. Be warm, concise, and useful. Answer questions about NewsEra coverage using the supplied article excerpts. Do not invent facts, quotes, dates, or reporting. If the excerpts do not answer a coverage question, say so clearly and suggest a related available story. For broader questions, distinguish general explanation from what NewsEra has reported. You do not have live news or web access. Use short paragraphs and bullet points when helpful.\n\nAvailable NewsEra coverage:\n${context || "No matching article excerpts were found for this question."}`,
        messages: [
          ...history.map((message) => ({ role: message.role, content: message.content })),
          { role: "user", content: question },
        ],
        maxTokens: 450,
        temperature: 0.4,
      });

      return Response.json({ answer: text, mode: "ai", sources });
    } catch (error) {
      const providerMessage = error instanceof Error ? error.message : "";
      const quotaUnavailable = /no credits|insufficient_quota|billing|quota/i.test(providerMessage);
      console.error(
        "NewsEra AI chat provider failed:",
        quotaUnavailable ? "Provider credits or quota unavailable." : "Provider request failed."
      );
      return Response.json({
        answer: createLocalAnswer(question, relevantArticles),
        mode: "local",
        notice: quotaUnavailable
          ? "The OpenAI account has no available credits or quota. This answer uses NewsEra's published stories; add provider credits to restore AI answers."
          : "The AI service is temporarily unavailable, so this answer uses NewsEra's published stories only.",
        sources,
      });
    }
  }

  return Response.json({
    answer: createLocalAnswer(question, relevantArticles),
    mode: "local",
    notice: "AI chat is not configured yet. This answer uses NewsEra's published stories only.",
    sources,
  });
}
