'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Search, Sparkles, X } from 'lucide-react';

const catalog = [
  {
    title: 'AI tools are reshaping product teams, but trust and governance remain the real challenge',
    category: 'Technology',
    excerpt: 'Teams are deploying AI in product research and operations while balancing governance and review loops.',
    tags: ['AI', 'Product', 'Governance'],
    slug: 'ai-reshaping-product-teams',
  },
  {
    title: 'Bangladesh startups attract fresh capital as digital-first businesses scale faster',
    category: 'Business',
    excerpt: 'Local investors are backing ventures with healthier unit economics and clearer regional growth loops.',
    tags: ['Startup', 'Bangladesh', 'Funding'],
    slug: 'bangladesh-startups-scale',
  },
  {
    title: 'Cities are rethinking flood resilience as extreme weather hits everyday life',
    category: 'Climate',
    excerpt: 'Urban planning teams are improving resilience infrastructure after repeated climate disruptions.',
    tags: ['Climate', 'Infrastructure', 'Policy'],
    slug: 'climate-resilience',
  },
  {
    title: 'Global supply chains are recovering, but regional volatility keeps pricing unstable',
    category: 'World',
    excerpt: 'Trade corridors remain volatile while inflation risk and shipping costs create uneven efficiency gains.',
    tags: ['Global', 'Trade', 'Economy'],
    slug: 'global-supply-chains',
  },
  {
    title: 'Creative communities are turning local stories into global digital experiences',
    category: 'Culture',
    excerpt: 'Independent creators are building stronger storytelling ecosystems around local identity and digital reach.',
    tags: ['Culture', 'Media', 'Creators'],
    slug: 'creative-communities',
  },
];

const quickTags = ['AI', 'Business', 'Climate', 'Technology', 'Startup', 'Culture'];

function normalize(text = '') {
  return text.toLowerCase().trim();
}

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = JSON.parse(localStorage.getItem('news-era-search-history') || '[]');
    setHistory(stored);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    setTimeout(() => inputRef.current?.focus(), 50);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('news-era-search-history', JSON.stringify(history));
    }
  }, [history]);

  const filteredResults = useMemo(() => {
    const term = normalize(query);

    return catalog.filter((story) => {
      const matchesTag = activeTag === 'All' || story.tags.includes(activeTag);
      const haystack = [story.title, story.category, story.excerpt, story.tags.join(' ')].join(' ');
      const matchesQuery = !term || normalize(haystack).includes(term);
      return matchesTag && matchesQuery;
    });
  }, [activeTag, query]);

  const saveSearch = (value) => {
    const nextValue = value.trim();
    if (!nextValue) return;

    setHistory((prev) => {
      const unique = prev.filter((item) => item.toLowerCase() !== nextValue.toLowerCase());
      return [nextValue, ...unique].slice(0, 6);
    });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] bg-slate-950/80 backdrop-blur-sm">
      <div className="mx-auto mt-8 max-w-4xl rounded-[28px] border border-white/10 bg-slate-900/95 p-4 shadow-2xl shadow-slate-950/50 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/15 text-orange-300">
              <Search className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">Global search</div>
              <h3 className="text-lg font-bold text-white">Find stories, trends, and topics</h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-orange-400/50 hover:text-white"
            aria-label="Close search"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            saveSearch(query);
          }}
          className="mb-4 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3"
        >
          <div className="flex items-center gap-3">
            <Search className="h-5 w-5 text-slate-400" />
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search the newsroom..."
              className="w-full bg-transparent text-base text-white placeholder:text-slate-500 focus:outline-none"
            />
            <kbd className="rounded border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300">
              Esc
            </kbd>
          </div>
        </form>

        <div className="mb-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTag('All')}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition ${
              activeTag === 'All'
                ? 'bg-orange-500 text-white'
                : 'border border-white/10 bg-white/5 text-slate-300 hover:border-orange-400/40 hover:text-white'
            }`}
          >
            All
          </button>
          {quickTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                activeTag === tag
                  ? 'bg-orange-500 text-white'
                  : 'border border-white/10 bg-white/5 text-slate-300 hover:border-orange-400/40 hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {history.length > 0 && (
          <div className="mb-4">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">Recent searches</div>
            <div className="flex flex-wrap gap-2">
              {history.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setQuery(item);
                    saveSearch(item);
                  }}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 transition hover:border-orange-400/40 hover:text-white"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-3">
          {filteredResults.length > 0 ? (
            filteredResults.map((story) => (
              <Link
                key={story.slug}
                href={`/article/${story.slug}`}
                onClick={onClose}
                className="group block rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-orange-400/30 hover:bg-slate-950"
              >
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-200">
                    {story.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-300">
                    Open story <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-orange-100">{story.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-300">{story.excerpt}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-white/10 bg-slate-950/60 p-10 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-300">
                <Sparkles className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-lg font-bold text-white">No matching stories found</h4>
              <p className="mt-2 text-sm text-slate-300">Try a broader keyword or switch to another topic filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
