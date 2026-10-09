'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { Bookmark, BookOpenText, Trash2 } from 'lucide-react';
import { articleMap } from '@/lib/newsCatalog';

const STORAGE_KEY = 'news-era-bookmarks';

export default function ReadingListPage() {
  const [savedSlugs, setSavedSlugs] = useState([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    setSavedSlugs(stored);
  }, []);

  const savedArticles = useMemo(
    () => savedSlugs.map((slug) => articleMap[slug]).filter(Boolean),
    [savedSlugs]
  );

  const clearSaved = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    setSavedSlugs([]);
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 rounded-[30px] border border-white/10 bg-slate-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-orange-300">Reading list</div>
          <h1 className="mt-2 text-3xl font-black text-white">Saved stories</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
            <Bookmark className="h-4 w-4 text-orange-300" />
            {savedArticles.length} saved
          </div>
          {savedArticles.length > 0 && (
            <button
              type="button"
              onClick={clearSaved}
              className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-200"
            >
              <Trash2 className="h-4 w-4" />
              Clear all
            </button>
          )}
        </div>
      </div>

      {savedArticles.length === 0 ? (
        <div className="rounded-[28px] border border-dashed border-white/10 bg-slate-950 p-10 text-center text-white">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/10 text-orange-300">
            <BookOpenText className="h-6 w-6" />
          </div>
          <h2 className="mt-5 text-2xl font-black">Your reading list is empty</h2>
          <p className="mt-3 text-slate-300">Save stories from the newsroom to keep them for later.</p>
          <Link href="/" className="mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-2.5 text-sm font-semibold text-white">
            Explore stories
          </Link>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {savedArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/article/${article.slug}`}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-slate-950 text-white transition hover:border-orange-400/30 hover:bg-slate-900"
            >
              <img src={article.image} alt={article.title} className="h-52 w-full object-cover" />
              <div className="p-4">
                <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-200">{article.category}</div>
                <h3 className="line-clamp-3 text-xl font-black text-white group-hover:text-orange-100">{article.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300">{article.deck}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>{article.author}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
