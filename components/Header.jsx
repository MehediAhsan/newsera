'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import ThemeSwitcher from './common/ThemeSwitcher';

const marketData = {
  Bangladesh: [
    { label: 'DSEX', value: '6,482.91', change: '+1.24%' },
    { label: 'BDT/USD', value: '108.45', change: '+0.12%' },
    { label: 'Dhaka', value: '31°C', change: 'Cloudy' },
  ],
  Global: [
    { label: 'NASDAQ', value: '18,421.32', change: '+1.68%' },
    { label: 'USD/EUR', value: '0.92', change: '-0.09%' },
    { label: 'NYC', value: '22°C', change: 'Clear' },
  ],
};

const headlineTicker = [
  'Breaking: Bangladesh launches new fintech policy framework for digital payments.',
  'Global markets rally as trade optimism improves across emerging economies.',
  'AI adoption accelerates in local startups as productivity gains become measurable.',
  'Climate resilience funding expands in coastal districts after revised risk maps.',
];

const Header = () => {
  const [edition, setEdition] = useState('Bangladesh');

  const currentMarketData = useMemo(() => marketData[edition], [edition]);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date());

  return (
    <div className="border-b border-slate-200/80 bg-slate-950 text-slate-100 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 lg:flex-row lg:items-center lg:justify-between lg:px-6">
        <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-slate-300">
          <span>{formattedDate}</span>
          <div className="flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-2 py-1 text-orange-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />
            Live updates
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-slate-200">
            <span className="text-[10px] uppercase tracking-[0.18em]">Edition</span>
            <select
              value={edition}
              onChange={(e) => setEdition(e.target.value)}
              className="cursor-pointer bg-transparent text-xs font-medium text-white outline-none"
              aria-label="Select edition"
            >
              <option className="text-slate-900" value="Bangladesh">Bangladesh</option>
              <option className="text-slate-900" value="Global">Global</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {currentMarketData.map((item) => (
            <div key={item.label} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] text-slate-200">
              <span className="text-slate-400">{item.label}</span>
              <span className="ml-2 font-semibold text-white">{item.value}</span>
              <span className="ml-1 text-orange-300">{item.change}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden border-t border-white/10 bg-slate-900/80">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2 lg:px-6">
          <div className="hidden shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-200 md:flex">
            <span className="h-2 w-2 rounded-full bg-orange-400" />
            Breaking
          </div>

          <div className="relative min-h-[22px] flex-1 overflow-hidden">
            <div className="animate-[ticker_20s_linear_infinite] whitespace-nowrap text-[12px] text-slate-200 hover:[animation-play-state:paused]">
              {headlineTicker.concat(headlineTicker).map((item, index) => (
                <span key={`${item}-${index}`} className="mr-8 inline-block">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a href="#" aria-label="Instagram" className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-orange-400 hover:text-orange-200">
              <FaInstagram size={12} />
            </a>
            <a href="#" aria-label="Twitter" className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-orange-400 hover:text-orange-200">
              <FaTwitter size={12} />
            </a>
            <a href="#" aria-label="LinkedIn" className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-orange-400 hover:text-orange-200">
              <FaLinkedinIn size={12} />
            </a>
            <a href="#" aria-label="Facebook" className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-orange-400 hover:text-orange-200">
              <FaFacebookF size={12} />
            </a>
          </div>

          <div className="flex items-center gap-2 text-slate-200">
            <ThemeSwitcher />
            <Link
              href="/login"
              className="rounded-full border border-orange-400/40 bg-orange-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-200 transition hover:bg-orange-500 hover:text-white"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
