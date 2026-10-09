'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Bot, BriefcaseBusiness, Newspaper, TrendingUp } from 'lucide-react';
import { articleCatalog } from '@/lib/newsCatalog';

const topPicks = articleCatalog.slice(0, 3);

export default function EditorBriefing() {
  return (
    <section className="my-8 rounded-[30px] border border-white/10 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/30 sm:p-6">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300">Editor brief</div>
          <h3 className="mt-2 text-2xl font-black text-white">What matters now</h3>
        </div>

        <Link
          href="/news"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 transition hover:border-orange-400/40 hover:text-white"
        >
          Full briefing <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <div className="rounded-[24px] border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-slate-900 p-4">
            <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-200">
              <Bot className="h-4 w-4" />
              AI desk
            </div>
            <p className="text-lg font-bold text-white">AI adoption is moving from experimentation to operational scale.</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Product teams are cutting repetitive work, but governance and quality control remain the deciding factor in whether AI creates leverage or risk.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-slate-900/80 p-4">
            <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              <BriefcaseBusiness className="h-4 w-4 text-amber-300" />
              Market watch
            </div>
            <div className="space-y-2 text-sm text-slate-200">
              <div className="flex items-center justify-between gap-3">
                <span>Startup funding</span>
                <span className="font-semibold text-emerald-300">+12.4%</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span>Consumer tech</span>
                <span className="font-semibold text-orange-300">+8.1%</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span>Digital commerce</span>
                <span className="font-semibold text-sky-300">+6.9%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {topPicks.map((story) => (
            <Link
              key={story.slug}
              href={`/article/${story.slug}`}
              className="group overflow-hidden rounded-[24px] border border-white/10 bg-slate-900/80 transition hover:border-orange-400/30 hover:bg-slate-900"
            >
              <Image
                src={story.image}
                alt={story.title}
                width={900}
                height={350}
                unoptimized
                className="h-28 w-full object-cover"
              />
              <div className="p-3">
                <div className="mb-2 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-200">
                  <TrendingUp className="h-3 w-3" />
                  {story.category}
                </div>
                <h4 className="line-clamp-3 text-sm font-bold text-white group-hover:text-orange-100">{story.title}</h4>
                <div className="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-slate-400">
                  <Newspaper className="h-3 w-3" />
                  {story.readTime}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
