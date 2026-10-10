'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowUp,
  Bot,
  Check,
  CircleAlert,
  LoaderCircle,
  MessageCircle,
  Minus,
  Plus,
  Sparkles,
  X,
} from 'lucide-react';

const suggestedQuestions = [
  'Summarize the latest AI coverage',
  'What is changing for Bangladesh startups?',
  'Show me climate resilience stories',
];

function formatAnswer(text) {
  return text.split('\n').filter(Boolean).map((line, index) => (
    <p key={`${index}-${line}`} className={index ? 'mt-2' : undefined}>
      {line.split(/(\*\*.*?\*\*)/g).map((part, partIndex) =>
        part.startsWith('**') && part.endsWith('**')
          ? <strong key={partIndex}>{part.slice(2, -2)}</strong>
          : part
      )}
    </p>
  ));
}

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [lastQuestion, setLastQuestion] = useState('');
  const [copiedMessage, setCopiedMessage] = useState(null);
  const conversationEndRef = useRef(null);
  const inputRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    conversationEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isLoading, open]);

  useEffect(() => () => requestRef.current?.abort(), []);

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 120);
    return () => window.clearTimeout(timer);
  }, [open]);

  async function sendQuestion(value, addUserMessage = true) {
    const trimmedQuestion = value.trim();
    if (!trimmedQuestion || isLoading) return;

    if (addUserMessage) {
      setMessages((current) => [...current, {
        id: `user-${Date.now()}`,
        role: 'user',
        text: trimmedQuestion,
      }]);
    }
    const history = addUserMessage
      ? [...messages, { role: 'user', text: trimmedQuestion }]
      : messages;

    setQuestion('');
    setLastQuestion(trimmedQuestion);
    setError('');
    setIsLoading(true);
    requestRef.current?.abort();
    const controller = new AbortController();
    requestRef.current = controller;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: trimmedQuestion,
          history: history.slice(-10).map(({ role, text }) => ({ role, content: text })),
        }),
        signal: controller.signal,
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'The newsroom assistant could not answer right now.');
      }

      setMessages((current) => [...current, {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        text: result.answer,
        mode: result.mode,
        notice: result.notice,
        sources: result.sources || [],
      }]);
    } catch (requestError) {
      if (requestError.name !== 'AbortError') {
        setError(requestError.message || 'Could not connect to the newsroom assistant. Please try again.');
      }
    } finally {
      if (requestRef.current === controller) {
        requestRef.current = null;
        setIsLoading(false);
      }
    }
  }

  function clearConversation() {
    requestRef.current?.abort();
    requestRef.current = null;
    setMessages([]);
    setError('');
    setLastQuestion('');
    setQuestion('');
    setIsLoading(false);
  }

  async function copyAnswer(message) {
    try {
      await navigator.clipboard.writeText(message.text);
      setCopiedMessage(message.id);
      window.setTimeout(() => setCopiedMessage(null), 1800);
    } catch {
      setError('Could not copy that answer. Check your browser clipboard permissions.');
    }
  }

  return (
    <>
      {open && (
        <section
          role="dialog"
          aria-label="NewsEra newsroom assistant"
          aria-modal="false"
          className="fixed bottom-24 right-4 z-[60] flex h-[min(680px,calc(100dvh-8rem))] w-[min(420px,calc(100vw-2rem))] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-slate-950 text-slate-100 shadow-2xl shadow-slate-950/50 ring-1 ring-black/10 sm:bottom-24 sm:right-6"
        >
          <header className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950/50 px-5 pb-4 pt-5">
            <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="relative flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-lg shadow-orange-500/20">
                  <Bot className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">Newsroom assistant</h2>
                  <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Here to help you explore NewsEra
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <button
                    type="button"
                    onClick={clearConversation}
                    aria-label="Start a new conversation"
                    title="New conversation"
                    className="rounded-xl p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Minimize newsroom assistant"
                  className="rounded-xl p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close newsroom assistant"
                  className="rounded-xl p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="relative mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-[11px] text-slate-300">
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-orange-300" />
              Ask about our coverage, or get a quick story briefing.
            </div>
          </header>

          <div
            className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-5 sm:px-5"
            aria-live="polite"
            aria-relevant="additions text"
          >
            {messages.length === 0 ? (
              <div className="flex min-h-full flex-col justify-center">
                <div className="mb-5 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-400/10 text-orange-300">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">What would you like to know?</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Get clear answers grounded in NewsEra&apos;s published stories.
                  </p>
                </div>
                <div className="space-y-2">
                  {suggestedQuestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => sendQuestion(suggestion)}
                      className="group flex w-full items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm text-slate-300 transition hover:border-orange-400/30 hover:bg-orange-400/[0.06] hover:text-white"
                    >
                      {suggestion}
                      <ArrowUp className="h-4 w-4 -rotate-45 text-slate-500 transition group-hover:text-orange-300" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <div key={message.id} className={`flex gap-2.5 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {message.role === 'assistant' && (
                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-orange-400/10 text-orange-300">
                      <Bot className="h-4 w-4" />
                    </div>
                  )}
                  <div className={`max-w-[86%] min-w-0 ${message.role === 'user' ? 'rounded-2xl rounded-br-md bg-orange-500 px-4 py-3 text-sm leading-6 text-white' : 'rounded-2xl rounded-bl-md border border-white/10 bg-slate-900 px-4 py-3 text-sm leading-6 text-slate-200'}`}>
                    {message.role === 'assistant' ? formatAnswer(message.text) : message.text}
                    {message.notice && (
                      <p className="mt-3 border-t border-white/10 pt-2 text-xs leading-5 text-amber-200/90">
                        {message.notice}
                      </p>
                    )}
                    {message.sources?.length > 0 && (
                      <div className="mt-3 border-t border-white/10 pt-3">
                        <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Related coverage</div>
                        <div className="space-y-1.5">
                          {message.sources.map((source) => (
                            <Link
                              key={source.slug}
                              href={`/article/${source.slug}`}
                              onClick={() => setOpen(false)}
                              className="block text-xs leading-5 text-orange-200 transition hover:text-orange-100 hover:underline"
                            >
                              {source.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                    {message.role === 'assistant' && (
                      <button
                        type="button"
                        onClick={() => copyAnswer(message)}
                        aria-label="Copy assistant answer"
                        className="mt-2 inline-flex items-center gap-1 text-[11px] text-slate-500 transition hover:text-slate-200"
                      >
                        {copiedMessage === message.id ? <Check className="h-3 w-3" /> : null}
                        {copiedMessage === message.id ? 'Copied' : 'Copy answer'}
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}

            {isLoading && (
              <div className="flex items-start gap-2.5">
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-lg bg-orange-400/10 text-orange-300">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-white/10 bg-slate-900 px-4 py-3 text-sm text-slate-400">
                  <LoaderCircle className="h-4 w-4 animate-spin text-orange-300" />
                  Checking the newsroom…
                </div>
              </div>
            )}

            {error && (
              <div className="rounded-2xl border border-rose-400/20 bg-rose-400/[0.06] p-3 text-sm text-rose-200" role="alert">
                <div className="flex items-start gap-2">
                  <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />
                  <div className="flex-1">
                    <p>{error}</p>
                    {lastQuestion && (
                      <button
                        type="button"
                        onClick={() => sendQuestion(lastQuestion, false)}
                        className="mt-2 font-semibold text-white underline decoration-rose-300/50 underline-offset-4 hover:decoration-white"
                      >
                        Try again
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
            <div ref={conversationEndRef} />
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendQuestion(question);
            }}
            className="border-t border-white/10 bg-slate-950 p-3 sm:p-4"
          >
            <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-slate-900 p-2 transition focus-within:border-orange-400/50 focus-within:ring-2 focus-within:ring-orange-400/10">
              <label htmlFor="newsroom-chat-input" className="sr-only">Ask the NewsEra assistant</label>
              <textarea
                id="newsroom-chat-input"
                ref={inputRef}
                rows={1}
                maxLength={1200}
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault();
                    sendQuestion(question);
                  }
                }}
                placeholder="Ask about a story…"
                className="max-h-28 min-h-10 flex-1 resize-y bg-transparent px-2 py-2 text-sm leading-5 text-white outline-none placeholder:text-slate-500"
              />
              <button
                type="submit"
                disabled={!question.trim() || isLoading}
                aria-label="Send message"
                className="mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-lg shadow-orange-500/10 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {isLoading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <ArrowUp className="h-4 w-4" />}
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between px-1 text-[10px] text-slate-500">
              <span>Enter to send · Shift + Enter for a new line</span>
              <span>{question.length}/1200</span>
            </div>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? 'Close newsroom assistant' : 'Open newsroom assistant'}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-xl shadow-orange-950/30 ring-1 ring-white/20 transition duration-200 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-300/40 sm:bottom-6 sm:right-6"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!open && <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-emerald-400" />}
      </button>
    </>
  );
}
