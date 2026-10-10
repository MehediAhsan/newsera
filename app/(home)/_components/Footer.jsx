import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BookOpenText, Mail, Newspaper } from 'lucide-react';
import { articleCatalog } from '@/lib/newsCatalog';

const navigationLinks = [
  { label: 'Latest coverage', href: '/news' },
  { label: 'Reading list', href: '/reading-list' },
  { label: 'About NewsEra', href: '/about' },
  { label: 'Contact the newsroom', href: '/contact' },
];

export default function Footer() {
  const categories = [...new Set(articleCatalog.map((article) => article.category))].slice(0, 6);
  const featuredStories = articleCatalog.slice(0, 3);

  return (
    <footer className="relative mt-16 overflow-hidden border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="pointer-events-none absolute -right-40 -top-48 h-96 w-96 rounded-full bg-orange-500/[0.07] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-6 pt-10 sm:px-6 sm:pt-14 lg:px-8">
        <div className="mb-12 grid gap-8 rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950/30 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300">
              <Newspaper className="h-3.5 w-3.5" />
              The NewsEra briefing
            </div>
            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Stay curious. Stay informed.
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
              Independent perspectives on the stories shaping Bangladesh and the world.
              Explore the latest coverage from the NewsEra newsroom.
            </p>
          </div>
          <Link
            href="/news"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            Explore the news
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="group inline-flex items-center gap-3" aria-label="NewsEra home">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 text-lg font-black text-white shadow-lg shadow-orange-950/30">
                N
              </span>
              <span className="text-xl font-black tracking-tight text-white">
                News<span className="text-orange-300">Era</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              A modern newsroom for clear reporting, useful context, and stories worth your time.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
              <BookOpenText className="h-4 w-4 text-orange-300" />
              Reporting with context, not noise.
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">Explore</h3>
            <ul className="mt-4 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-orange-200 focus:outline-none focus-visible:text-orange-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">On the agenda</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400"
                >
                  {category}
                </span>
              ))}
            </div>
            <Link
              href="/news"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-orange-300 transition hover:text-orange-200"
            >
              Browse all coverage
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">Editor&apos;s picks</h3>
            <ul className="mt-4 space-y-4">
              {featuredStories.map((story) => (
                <li key={story.slug}>
                  <Link
                    href={`/article/${story.slug}`}
                    className="group flex gap-3"
                  >
                    <span className="mt-0.5 text-xs font-semibold text-orange-300">
                      {story.category}
                    </span>
                    <span className="line-clamp-2 text-sm leading-5 text-slate-400 transition group-hover:text-white">
                      {story.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" />
              Get in touch
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NewsEra. All rights reserved.</p>
          <a
            href="https://mehediahsan.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition hover:text-orange-200"
          >
            Designed &amp; built by Mehedi Ahsan
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
