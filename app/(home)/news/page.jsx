'use client';

import Image from 'next/image';
import Link from 'next/link';
import { articleCatalog } from '@/lib/newsCatalog';
import { ArrowRight, Clock3, Flame, Sparkles } from 'lucide-react';

export default function NewsPage() {
  const featured = articleCatalog[0];
  const rest = articleCatalog.slice(1);

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-950 text-white shadow-2xl shadow-slate-950/30">
        <div className="grid gap-0 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="relative min-h-[420px]">
            <Image
              src={featured.image}
              alt={featured.title}
              width={1500}
              height={900}
              unoptimized
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-200">
                <Flame className="h-3.5 w-3.5" />
                Top story
              </div>
              <h1 className="max-w-2xl text-3xl font-black leading-tight text-white sm:text-4xl">{featured.title}</h1>
              <p className="mt-3 max-w-xl text-base leading-7 text-slate-200">{featured.deck}</p>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                <span>{featured.author}</span>
                <span>•</span>
                <span>{featured.published}</span>
                <span>•</span>
                <span>{featured.readTime}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-slate-900/80 p-5 sm:p-6">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-orange-300">Daily briefing</div>
              <h2 className="mt-2 text-2xl font-black text-white">Monday round-up</h2>
            </div>

            <div className="mt-6 space-y-3">
              {rest.slice(0, 4).map((story) => (
                <Link
                  key={story.slug}
                  href={`/article/${story.slug}`}
                  className="group block rounded-2xl border border-white/10 bg-slate-950/60 p-3 transition hover:border-orange-400/30 hover:bg-slate-950"
                >
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-200">{story.category}</div>
                  <div className="text-sm font-bold text-white group-hover:text-orange-100">{story.title}</div>
                  <div className="mt-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    <Clock3 className="h-3 w-3" />
                    {story.readTime}
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-300"
            >
              Back to homepage <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-orange-300">Latest coverage</div>
            <h2 className="mt-2 text-3xl font-black text-white">All stories</h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
            <Sparkles className="h-3.5 w-3.5 text-orange-300" />
            Updated today
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articleCatalog.map((story) => (
            <Link
              key={story.slug}
              href={`/article/${story.slug}`}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-slate-950 text-white transition hover:border-orange-400/30 hover:bg-slate-900"
            >
              <Image
                src={story.image}
                alt={story.title}
                width={900}
                height={420}
                unoptimized
                className="h-52 w-full object-cover"
              />
              <div className="p-4">
                <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-200">{story.category}</div>
                <h3 className="line-clamp-3 text-xl font-black text-white group-hover:text-orange-100">{story.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300">{story.deck}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>{story.author}</span>
                  <span>{story.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
