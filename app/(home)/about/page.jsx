import Link from 'next/link';
import { ArrowRight, BookOpenText, Compass, Globe2, ShieldCheck } from 'lucide-react';
import { articleCatalog } from '@/lib/newsCatalog';

const principles = [
  {
    icon: BookOpenText,
    title: 'Make the story clear',
    description: 'Useful reporting should help people understand what happened, why it matters, and what to look at next.',
  },
  {
    icon: ShieldCheck,
    title: 'Treat trust as essential',
    description: 'Accuracy, context, and accountability belong at the center of every newsroom decision.',
  },
  {
    icon: Globe2,
    title: 'Connect local and global',
    description: 'The choices made nearby and the events unfolding worldwide are part of the same conversation.',
  },
];

export default function AboutPage() {
  const latestStories = articleCatalog.slice(0, 3);

  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 sm:pt-12 lg:px-8">
      <section className="relative isolate overflow-hidden rounded-[32px] border border-white/10 bg-slate-950 px-6 py-12 text-white shadow-2xl shadow-slate-950/30 sm:px-10 sm:py-16 lg:px-16">
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-200">
            <Compass className="h-3.5 w-3.5" />
            About NewsEra
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            The world moves fast.
            <span className="mt-1 block text-orange-300">Understanding takes context.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            NewsEra is a modern newsroom experience focused on the ideas, events, and
            shifts shaping Bangladesh and the wider world. We make it easier to find
            a story, understand its significance, and follow the coverage that matters to you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            >
              Explore our coverage
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            >
              Get in touch
            </Link>
          </div>
        </div>
        <div className="mt-12 grid max-w-3xl grid-cols-1 gap-3 border-t border-white/10 pt-6 sm:grid-cols-3 sm:gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Perspective</p>
            <p className="mt-1 font-semibold text-white">Bangladesh &amp; beyond</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Our focus</p>
            <p className="mt-1 font-semibold text-white">Stories with context</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Our promise</p>
            <p className="mt-1 font-semibold text-white">Readers come first</p>
          </div>
        </div>
      </section>

      <section className="grid gap-8 py-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:py-20">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300">Why we&apos;re here</div>
          <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
            A better way to keep up.
          </h2>
        </div>
        <div className="space-y-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
          <p>
            News is abundant. Time and attention are not. NewsEra is designed to make
            discovering coverage feel considered rather than overwhelming—with clear
            story summaries, readable article pages, and ways to save what you want to revisit.
          </p>
          <p>
            Our editorial ambition is to bring a wider perspective to the stories
            affecting people in Bangladesh, while staying curious about the global
            forces shaping business, technology, climate, culture, and everyday life.
          </p>
          <p>
            NewsEra is an evolving digital publication. We value thoughtful questions,
            reader feedback, and the work it takes to earn trust one story at a time.
          </p>
        </div>
      </section>

      <section className="rounded-[30px] border border-white/10 bg-slate-950 p-6 sm:p-9">
        <div className="max-w-2xl">
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300">What guides us</div>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Our newsroom principles</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            The experience we build should make it easier to read with clarity and curiosity.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {principles.map(({ icon: Icon, title, description }, index) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-400/[0.08] text-orange-300">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                0{index + 1}
              </div>
              <h3 className="mt-2 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300">From the newsroom</div>
            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">A few stories to start with</h2>
          </div>
          <Link href="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition hover:text-orange-200">
            All coverage <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {latestStories.map((story) => (
            <Link
              key={story.slug}
              href={`/article/${story.slug}`}
              className="group rounded-2xl border border-white/10 bg-slate-950 p-5 transition hover:-translate-y-0.5 hover:border-orange-400/30 hover:bg-slate-900"
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-200">{story.category}</div>
              <h3 className="mt-3 text-lg font-bold leading-6 text-white transition group-hover:text-orange-100">{story.title}</h3>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">{story.deck}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-orange-300">
                Read story <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
