import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock3, Flame, Sparkles, TrendingUp, Radio } from 'lucide-react';
import { articleCatalog, featuredArticles } from '@/lib/newsCatalog';
import LivePoll from '@/components/LivePoll';
import NewsroomInsightPanel from '@/components/NewsroomInsightPanel';
import EditorBriefing from '@/components/EditorBriefing';

const categories = ['All', 'Technology', 'Business', 'Politics', 'Climate', 'World', 'Culture'];

export default function Home() {
  const lead = featuredArticles[0];
  const secondary = featuredArticles.slice(1);
  const listStories = articleCatalog.slice(0, 5);

  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <section className="mb-8 rounded-[32px] border border-white/10 bg-slate-950 p-4 text-white shadow-2xl shadow-slate-950/30 sm:p-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-1 text-orange-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />
              Breaking
            </span>
            <span>Bangladesh edition</span>
            <span>•</span>
            <span>Latest global updates</span>
          </div>

          <div className="flex items-center gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] transition ${
                  index === 0
                    ? 'bg-orange-500 text-white'
                    : 'border border-white/10 bg-white/5 text-slate-300 hover:border-orange-400/40 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
          <Link href={`/article/${lead.slug}`} className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900">
            <div className="relative h-[420px] sm:h-[500px]">
              <Image
                src={lead.image}
                alt={lead.title}
                width={1600}
                height={900}
                unoptimized
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-200">
                <Flame className="h-3.5 w-3.5" />
                Top story
              </div>
              <h1 className="max-w-2xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                {lead.title}
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-200 sm:text-base">
                {lead.deck}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-slate-300">
                <span>{lead.author}</span>
                <span>•</span>
                <span>{lead.published}</span>
                <span>•</span>
                <span>{lead.readTime}</span>
              </div>
            </div>
          </Link>

          <div className="space-y-4">
            {secondary.map((item) => (
              <Link
                key={item.slug}
                href={`/article/${item.slug}`}
                className="group block overflow-hidden rounded-[24px] border border-white/10 bg-slate-900/80 transition hover:border-orange-400/30 hover:bg-slate-900"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={900}
                    height={420}
                    unoptimized
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-200">{item.category}</div>
                  <h2 className="line-clamp-3 text-lg font-black text-white group-hover:text-orange-100">{item.title}</h2>
                  <div className="mt-3 flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    <span>{item.author}</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mb-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] border border-white/10 bg-slate-950 p-5 text-white shadow-xl shadow-slate-950/20">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-300">AI quick brief</div>
              <h3 className="mt-2 text-2xl font-black">What leaders are watching</h3>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-300">
              <Sparkles className="h-5 w-5" />
            </div>
          </div>

          <div className="space-y-3 text-sm leading-6 text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
              <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-200">
                <TrendingUp className="h-3.5 w-3.5" />
                Trend
              </div>
              AI adoption is moving from experimentation to everyday workflow automation across product and editorial teams.
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
              <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-200">
                <Radio className="h-3.5 w-3.5" />
                Live signal
              </div>
              Reader trust is increasingly tied to transparency, human review, and explainable AI use in publishing.
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-slate-950 p-5 text-white shadow-xl shadow-slate-950/20">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-300">Latest coverage</div>
              <h3 className="mt-2 text-2xl font-black">Top headlines</h3>
            </div>
            <Link href="/news" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
              See all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="space-y-3">
            {listStories.map((story) => (
              <Link
                key={story.slug}
                href={`/article/${story.slug}`}
                className="group flex gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-3 transition hover:border-orange-400/30 hover:bg-slate-900"
              >
                <Image
                  src={story.image}
                  alt={story.title}
                  width={240}
                  height={120}
                  unoptimized
                  className="h-20 w-24 rounded-xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-200">{story.category}</div>
                  <div className="mt-1 line-clamp-2 text-sm font-bold text-white group-hover:text-orange-100">{story.title}</div>
                  <div className="mt-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    <Clock3 className="h-3 w-3" />
                    {story.readTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <NewsroomInsightPanel />
      <EditorBriefing />
      <LivePoll />

      <section className="mt-8 rounded-[30px] border border-white/10 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/30 sm:p-6">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-orange-300">Must read</div>
            <h3 className="mt-2 text-2xl font-black text-white">The best of this week</h3>
          </div>
          <Link href="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-300">
            Explore more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articleCatalog.slice(0, 6).map((story) => (
            <article key={story.slug} className="overflow-hidden rounded-[24px] border border-white/10 bg-slate-900/80">
              <Image
                src={story.image}
                alt={story.title}
                width={900}
                height={420}
                unoptimized
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <div className="mb-2 flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-200">
                  <span>{story.category}</span>
                  <span>{story.readTime}</span>
                </div>
                <h4 className="line-clamp-3 text-xl font-black text-white">{story.title}</h4>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300">{story.deck}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-400">{story.author}</span>
                  <Link href={`/article/${story.slug}`} className="inline-flex items-center gap-2 text-xs font-semibold text-orange-300">
                    Read story <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[30px] border border-orange-500/20 bg-gradient-to-r from-orange-500/10 via-slate-950 to-slate-950 p-5 text-white shadow-xl shadow-orange-500/10 sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-orange-300">Newsroom newsletter</div>
            <h3 className="mt-2 text-3xl font-black text-white">Get the briefing before the market opens.</h3>
          </div>
          <div className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400/40"
            />
            <button type="button" className="rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
