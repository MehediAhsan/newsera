'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  Bookmark,
  Clock3,
  Headphones,
  MessageSquareText,
  Share2,
  Sparkles,
  ThumbsUp,
} from 'lucide-react';

const articleMap = {
  'ai-reshaping-product-teams': {
    slug: 'ai-reshaping-product-teams',
    category: 'Technology',
    author: 'Nafisa Rahman',
    readTime: '6 min read',
    published: 'May 12, 2026',
    title: 'AI tools are reshaping product teams, but trust and governance remain the real challenge',
    deck: 'From content operations to customer support, teams are racing to integrate AI while balancing speed, quality, and responsible deployment.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
    tags: ['AI', 'Product', 'Governance', 'Workflow'],
    summary: [
      'AI is moving from pilot projects to everyday operational software across product teams.',
      'Teams are reducing manual overhead, but governance, quality review, and accountability are becoming the real bottlenecks.',
      'The most effective teams are building human review loops around AI instead of treating automation as a complete replacement.',
    ],
    sections: [
      {
        heading: 'Product teams are changing faster than policy',
        body:
          'The most visible shift is not in the number of AI tools being tested; it is in how quickly product teams are embedding them into daily workflows. Research, user interviews, content generation, customer support, and release documentation all now have AI-assisted layers. That speed is attractive, but it also creates a mismatch between experimentation and accountability. Teams need sharper review systems before they can safely scale.',
      },
      {
        heading: 'The efficiency gain is real — but uneven',
        body:
          'For marketing and product operations, AI is reducing repetitive work in a way that feels measurable. Drafting briefs, summarizing stakeholder threads, and creating rough content are no longer bottlenecks. But the biggest gain is not raw generation speed; it is the decision velocity created when teams move from raw research to iteration faster. The challenge is that not every AI output is safe to publish without scrutiny.',
      },
      {
        heading: 'Trust and governance are the new product moat',
        body:
          'The strongest teams are creating clear frameworks: human review gates, explicit data handling policies, and documented prompts for high-impact decisions. They are building AI literacy into their workflows instead of assuming a one-click automation fix. In other words, the next competitive advantage is not just AI adoption — it is responsible adoption that preserves trust.',
      },
    ],
    reactionCount: 1840,
  },
  'bangladesh-startups-scale': {
    slug: 'bangladesh-startups-scale',
    category: 'Business',
    author: 'Imran Hassan',
    readTime: '4 min read',
    published: 'May 11, 2026',
    title: 'Bangladesh startups attract fresh capital as digital-first businesses scale faster',
    deck: 'Investors are returning to local growth stories, with fintech, logistics, and commerce platforms proving resilient across a shifting economy.',
    image:
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1400&q=80',
    tags: ['Startup', 'Funding', 'Bangladesh', 'Fintech'],
    summary: [
      'Early-stage funding is returning to digital-first businesses with stronger unit economics and clearer regional strategy.',
      'The investor appetite is especially strong where companies are solving local operational pain rather than chasing vanity metrics.',
      'Growth is now being measured in retention and monetization, not just top-line expansion.',
    ],
    sections: [
      {
        heading: 'Capital is returning to sectors with real usage',
        body:
          'The local startup ecosystem is maturing from “growth at any cost” to pragmatic scaling. Investors are prioritizing ventures that have measurable product-market fit, clear revenue loops, and stronger execution in the last mile of service delivery. That is a healthy shift, especially in sectors like fintech, B2B commerce, logistics, and embedded enterprise software.',
      },
      {
        heading: 'Local demand is driving stronger outcomes',
        body:
          'The most promising companies are not simply digitizing a foreign model. They are building products for the realities of Bangladesh: transaction complexity, distribution issues, and the need for reliable trust infrastructure. That makes the market more compelling for founders who can design with local conditions in mind rather than importing a generic template.',
      },
      {
        heading: 'What matters now is disciplined execution',
        body:
          'For startups, the next phase is not just raising capital. It is proving that the revenue engine can compound without heavy dependency on subsidies or a short-term market surge. Strong founders are being rewarded when they combine product clarity with operational discipline and a long view of user trust.',
      },
    ],
    reactionCount: 1432,
  },
};

const relatedStories = [
  {
    title: 'Cities are rethinking flood resilience as extreme weather hits everyday life',
    category: 'Climate',
    image:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80',
    slug: 'climate-resilience',
  },
  {
    title: 'Global supply chains are recovering, but regional volatility keeps pricing unstable',
    category: 'World',
    image:
      'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=80',
    slug: 'global-supply-chains',
  },
  {
    title: 'Creative communities are turning local stories into global digital experiences',
    category: 'Culture',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    slug: 'creative-communities',
  },
];

export default function ArticlePage({ params }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showSummary, setShowSummary] = useState(true);

  const slug = params?.slug;
  const article = useMemo(
    () => articleMap[slug] || articleMap['ai-reshaping-product-teams'],
    [slug]
  );

  useEffect(() => {
    if (!slug) return;

    const stored = JSON.parse(localStorage.getItem('news-era-bookmarks') || '[]');
    setBookmarked(stored.includes(slug));
  }, [slug]);

  useEffect(() => {
    if (!isSpeaking) return;

    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(
      article.sections.map((section) => section.body).join(' ')
    );
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice =
      voices.find((voice) => /google|samsung|english/i.test(voice.name)) || voices[0];

    if (preferredVoice) utterance.voice = preferredVoice;
    utterance.rate = 1;
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);

    return () => {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    };
  }, [isSpeaking, article]);

  const toggleBookmark = () => {
    const key = 'news-era-bookmarks';
    const stored = JSON.parse(localStorage.getItem(key) || '[]');
    const next = bookmarked ? stored.filter((item) => item !== slug) : [...stored, slug];
    localStorage.setItem(key, JSON.stringify(next));
    setBookmarked(!bookmarked);
  };

  const toggleAudio = () => {
    if (!('speechSynthesis' in window)) return;
    setIsSpeaking((prev) => !prev);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-orange-400/40 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to homepage
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleBookmark}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-orange-400/40 hover:text-white"
            >
              <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-orange-400 text-orange-400' : ''}`} />
              {bookmarked ? 'Saved' : 'Save'}
            </button>
            <button
              type="button"
              onClick={toggleAudio}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/20"
            >
              <Headphones className="h-4 w-4" />
              {isSpeaking ? 'Stop audio' : 'Listen'}
            </button>
          </div>
        </div>

        <article className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/60">
          <div className="relative">
            <img
              src={article.image}
              alt={article.title}
              className="h-[340px] w-full object-cover sm:h-[440px] lg:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute left-5 top-5 rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-orange-200">
              {article.category}
            </div>
          </div>

          <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-400">
                <span>{article.author}</span>
                <span>•</span>
                <span>{article.published}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>

              <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                {article.title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{article.deck}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-[28px] border border-orange-400/20 bg-orange-500/10 p-4 sm:p-5">
                <button
                  type="button"
                  onClick={() => setShowSummary((prev) => !prev)}
                  className="flex w-full items-center justify-between gap-3 text-left"
                >
                  <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">
                    <Sparkles className="h-4 w-4" />
                    TL;DR AI summary
                  </span>
                  <span className="text-sm text-orange-200">{showSummary ? 'Hide' : 'Show'}</span>
                </button>

                {showSummary && (
                  <ul className="mt-4 space-y-3 text-base leading-7 text-slate-200">
                    {article.summary.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-8 space-y-8 text-lg leading-8 text-slate-300">
                {article.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="mb-3 text-2xl font-bold text-white">{section.heading}</h2>
                    <p>{section.body}</p>
                  </section>
                ))}
              </div>
            </div>

            <aside className="space-y-5 lg:pt-4">
              <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Reader pulse
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-2 py-1 text-[10px] font-medium text-orange-200">
                    <ThumbsUp className="h-3.5 w-3.5" />
                    {article.reactionCount.toLocaleString()} reactions
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {['Insightful', 'Important', 'Fascinating', 'Disagree'].map((label, index) => (
                    <button
                      key={label}
                      type="button"
                      className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-left text-sm text-slate-200 transition hover:border-orange-400/30 hover:bg-orange-500/5"
                    >
                      <span>{label}</span>
                      <span className="text-xs text-slate-400">{Math.max(18, 60 - index * 10)}%</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-5">
                <div className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  <MessageSquareText className="h-4 w-4 text-orange-300" />
                  Related reading
                </div>
                <div className="space-y-3">
                  {relatedStories.map((story) => (
                    <Link
                      key={story.title}
                      href={`/article/${story.slug}`}
                      className="group block rounded-2xl border border-white/10 bg-white/5 p-2.5 transition hover:border-orange-400/30 hover:bg-orange-500/5"
                    >
                      <div className="flex gap-3">
                        <img
                          src={story.image}
                          alt={story.title}
                          className="h-20 w-24 rounded-xl object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-200">
                            {story.category}
                          </div>
                          <div className="line-clamp-3 text-sm font-medium text-slate-100 group-hover:text-white">
                            {story.title}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-5">
                <div className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  <Share2 className="h-4 w-4 text-orange-300" />
                  Share this story
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Facebook', 'LinkedIn', 'X', 'Copy link'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 transition hover:border-orange-400/30 hover:text-white"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </main>
  );
}
