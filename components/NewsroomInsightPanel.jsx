'use client';

import { ArrowRight, BarChart3, CloudSun, TrendingUp } from 'lucide-react';

const marketPulse = [
  { label: 'BDT/USD', value: '108.45', change: '+0.12%' },
  { label: 'DSEX', value: '6,482.91', change: '+1.24%' },
  { label: 'Dhaka', value: '31°C', change: 'Cloudy' },
];

const briefs = [
  { title: 'AI policy debate intensifies across public and private sectors', category: 'AI', time: '5 min ago' },
  { title: 'Bangladesh startups see stronger retention and smarter capital allocation', category: 'Business', time: '18 min ago' },
  { title: 'Coastal resilience plans accelerate after climate risk review', category: 'Climate', time: '32 min ago' },
];

export default function NewsroomInsightPanel() {
  return (
    <section className="my-8 rounded-[30px] border border-white/10 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/30 sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300">Newsroom pulse</div>
          <h3 className="mt-2 text-2xl font-black text-white">The signals shaping today</h3>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-200">
          <TrendingUp className="h-3.5 w-3.5 text-orange-300" />
          Updated live
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-slate-900 to-slate-950 p-5">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-200">
            <BarChart3 className="h-4 w-4" />
            Market brief
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {marketPulse.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-3">
                <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">{item.label}</div>
                <div className="mt-2 text-xl font-black text-white">{item.value}</div>
                <div className="mt-1 text-xs text-emerald-300">{item.change}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Weather monitor</div>
                <div className="mt-2 text-2xl font-black text-white">31°C</div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/10 text-sky-300">
                <CloudSun className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-3 text-sm text-slate-300">Expect hazy skies with a mild afternoon breeze and a slight chance of rain in Dhaka later today.</div>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">Trending now</div>
              <h4 className="mt-2 text-xl font-black text-white">Top briefs</h4>
            </div>
            <button type="button" className="inline-flex items-center gap-1 text-xs font-medium text-orange-300">
              See all <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {briefs.map((brief) => (
              <div key={brief.title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-3">
                <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-200">{brief.category}</div>
                <div className="text-sm font-medium text-slate-100">{brief.title}</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.14em] text-slate-400">{brief.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
