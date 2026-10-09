'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  BellRing,
  CheckCircle2,
  Clock3,
  Eye,
  Newspaper,
  TrendingUp,
} from 'lucide-react';

const stats = [
  {
    label: 'Page views',
    value: '1.24M',
    delta: '+18.7%',
    trend: 'up',
    icon: Eye,
    accent: 'from-orange-500/20 to-amber-500/5',
  },
  {
    label: 'Avg. read time',
    value: '6m 42s',
    delta: '+2.4%',
    trend: 'up',
    icon: Clock3,
    accent: 'from-cyan-500/20 to-sky-500/5',
  },
  {
    label: 'Published stories',
    value: '184',
    delta: '+26',
    trend: 'up',
    icon: Newspaper,
    accent: 'from-emerald-500/20 to-teal-500/5',
  },
  {
    label: 'Reader retention',
    value: '72.8%',
    delta: '+4.3%',
    trend: 'up',
    icon: TrendingUp,
    accent: 'from-pink-500/20 to-rose-500/5',
  },
];

const workflow = [
  { name: 'Drafts', value: 24, color: 'bg-orange-500' },
  { name: 'Pending review', value: 13, color: 'bg-amber-500' },
  { name: 'Published', value: 86, color: 'bg-emerald-500' },
  { name: 'Archived', value: 19, color: 'bg-slate-500' },
];

const categories = [
  { name: 'Technology', percentage: 34, value: '324k views' },
  { name: 'Business', percentage: 26, value: '287k views' },
  { name: 'Politics', percentage: 18, value: '196k views' },
  { name: 'Sports', percentage: 14, value: '142k views' },
  { name: 'Culture', percentage: 8, value: '89k views' },
];

const activity = [
  { title: 'AI policy explainer went live', time: '2 min ago', status: 'Published' },
  { title: 'Bangladesh startup brief updated', time: '18 min ago', status: 'Reviewed' },
  { title: 'Finance market watch trending', time: '43 min ago', status: 'Monitoring' },
  { title: 'Subscriber newsletter scheduled', time: '1 hour ago', status: 'Queued' },
];

const articles = [
  { title: 'AI adoption is changing newsroom workflows', category: 'Technology', author: 'Nafisa R.', status: 'Published', reads: '48.6k' },
  { title: 'Local fintech startups scale with stronger retention', category: 'Business', author: 'Imran H.', status: 'Review', reads: '32.1k' },
  { title: 'Urban resilience plans gain traction in flood-prone zones', category: 'Climate', author: 'Shihab M.', status: 'Draft', reads: '17.4k' },
  { title: 'Weekend sports preview drives record traffic', category: 'Sports', author: 'Jamil A.', status: 'Published', reads: '56.8k' },
];

const statusStyles = {
  Published: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
  Review: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
  Draft: 'border-orange-500/30 bg-orange-500/10 text-orange-300',
  Monitoring: 'border-sky-500/30 bg-sky-500/10 text-sky-300',
  Queued: 'border-violet-500/30 bg-violet-500/10 text-violet-300',
};

const DashboardPage = () => {
  const { user } = useSelector((state) => state.auth);
  const role = user?.role || 'reader';
  const roleTitle = {
    admin: 'Platform control center',
    editor: 'Editorial command center',
    reader: 'Reader engagement overview',
  }[role] || 'Newsroom performance overview';

  const roleSummary = {
    admin: {
      badge: 'Platform admin',
      action: 'Review system health',
    },
    editor: {
      badge: 'Editorial access',
      action: 'Publish story',
    },
    reader: {
      badge: 'Reader access',
      action: 'View saved items',
    },
  }[role] || { badge: 'Editorial access', action: 'Publish story' };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-slate-950/70 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-orange-300">{roleSummary.badge}</div>
            <div className="rounded-full border border-orange-500/30 bg-orange-500/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-orange-200">
              {role}
            </div>
          </div>
          <h1 className="mt-2 text-3xl font-black text-white">{roleTitle}</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
            <BellRing className="h-4 w-4 text-orange-300" />
            5 live updates
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20"
          >
            {roleSummary.action}
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, delta, icon: Icon, accent }) => (
          <div key={label} className={`rounded-[24px] border border-white/10 bg-gradient-to-br ${accent} p-4`}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-300">{label}</div>
                <div className="mt-3 text-3xl font-black text-white">{value}</div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 text-orange-300">
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
              <TrendingUp className="h-3.5 w-3.5" />
              {delta}
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.35fr_0.95fr]">
        <div className="rounded-[28px] border border-white/10 bg-slate-950 p-5">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">Traffic overview</div>
              <h2 className="mt-2 text-2xl font-black text-white">Average monthly reach</h2>
            </div>
            <div className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-200">
              Live source
            </div>
          </div>

          <div className="grid grid-cols-12 items-end gap-3 pb-2">
            {[58, 72, 66, 84, 96, 88, 112, 118, 108, 128, 134, 152].map((height, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div
                  className="w-full rounded-t-2xl bg-gradient-to-t from-orange-500 via-orange-400 to-amber-300"
                  style={{ height: `${height}px` }}
                />
                <span className="text-[10px] text-slate-500">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-slate-950 p-5">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">Workflow</div>
              <h2 className="mt-2 text-2xl font-black text-white">Content pipeline</h2>
            </div>
            <BookOpen className="h-5 w-5 text-orange-300" />
          </div>

          <div className="space-y-4">
            {workflow.map((item) => (
              <div key={item.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-slate-200">{item.name}</span>
                  <span className="font-semibold text-white">{item.value}</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                  <div className={`${item.color} h-full rounded-full`} style={{ width: `${Math.min(item.value * 2.2, 100)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-white/10 bg-slate-950 p-5">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">Latest work</div>
              <h2 className="mt-2 text-2xl font-black text-white">Published stories</h2>
            </div>
            <button type="button" className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
              View archive
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm text-slate-200">
              <thead className="bg-slate-900 text-[10px] uppercase tracking-[0.22em] text-slate-400">
                <tr>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Author</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Reads</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => (
                  <tr key={article.title} className="border-t border-white/10 bg-slate-950/60">
                    <td className="px-4 py-3 font-medium text-white">{article.title}</td>
                    <td className="px-4 py-3 text-slate-300">{article.category}</td>
                    <td className="px-4 py-3 text-slate-300">{article.author}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${statusStyles[article.status]}`}>
                        {article.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-300">{article.reads}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-[28px] border border-white/10 bg-slate-950 p-5">
            <div className="mb-5">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">Audience mix</div>
              <h2 className="mt-2 text-2xl font-black text-white">Top categories</h2>
            </div>

            <div className="space-y-4">
              {categories.map((item) => (
                <div key={item.name}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="text-slate-200">{item.name}</span>
                    <span className="text-slate-300">{item.value}</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400" style={{ width: `${item.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-slate-950 p-5">
            <div className="mb-5">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">Live feed</div>
              <h2 className="mt-2 text-2xl font-black text-white">Recent activity</h2>
            </div>

            <div className="space-y-3">
              {activity.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-medium text-white">{item.title}</div>
                    <span className={`inline-flex rounded-full border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${statusStyles[item.status]}`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;