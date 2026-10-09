'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Search } from 'lucide-react';
import Header from './Header';
import SearchModal from './SearchModal';

const dropdownNavs = [
  { title: 'International', path: '/international' },
  { title: 'Sports', path: '/sports' },
  { title: 'Entertainment', path: '/entertainment' },
  { title: 'Politics', path: '/politics' },
  { title: 'Education', path: '/education' },
  { title: 'Health', path: '/health' },
];

const navigation = [
  { title: 'Home', path: '/', isDropdown: false },
  { title: 'News', path: '#', isDropdown: true, navs: dropdownNavs },
  { title: 'About', path: '/about', isDropdown: false },
  { title: 'Contact', path: '/contact', isDropdown: false },
  { title: 'Dashboard', path: '/dashboard', isDropdown: false },
];

const Navbar = () => {
  const [state, setState] = useState(false);
  const [dropdownState, setDropdownState] = useState({ isActive: false, idx: null });
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.nav-menu')) {
        setDropdownState({ isActive: false, idx: null });
      }
    };

    const handleKeyboardShortcut = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchOpen(true);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleKeyboardShortcut);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyboardShortcut);
    };
  }, []);

  return (
    <>
      <nav className="border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/70">
        <Header />

        <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center justify-between md:w-auto">
          <Link href="/" className="inline-flex items-center gap-3 text-xl font-black tracking-tight text-slate-900 dark:text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-300 text-base text-white shadow-lg shadow-orange-500/30">
              N
            </span>
            NewsEra
          </Link>

          <button
            type="button"
            className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 md:hidden"
            onClick={() => setState((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {state ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>

        <div className={`nav-menu ${state ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="relative flex flex-col gap-2 pt-4 md:flex md:flex-row md:items-center md:gap-1 md:pt-0">
            {navigation.map((item, idx) => (
              <li key={item.title} className="relative">
                {item.isDropdown ? (
                  <button
                    type="button"
                    className="flex w-full items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white md:w-auto"
                    onClick={() => setDropdownState({ idx, isActive: !dropdownState.isActive })}
                  >
                    {item.title}
                    {dropdownState.idx === idx && dropdownState.isActive ? <FaAngleUp size={12} /> : <FaAngleDown size={12} />}
                  </button>
                ) : (
                  <Link href={item.path} className="flex rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white">
                    {item.title}
                  </Link>
                )}

                {item.isDropdown && dropdownState.idx === idx && dropdownState.isActive && (
                  <div className="absolute left-0 z-50 mt-2 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900 dark:shadow-slate-950/50 md:left-0 md:top-full">
                    {item.navs.map((navItem) => (
                      <Link
                        key={navItem.title}
                        href={navItem.path}
                        className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                        onClick={() => setDropdownState({ isActive: false, idx: null })}
                      >
                        {navItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}

            <li className="md:ml-2">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-orange-400/50 hover:bg-orange-500/10 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-orange-400/50 dark:hover:text-white md:w-auto"
              >
                <Search className="h-4 w-4" />
                Search
                <span className="hidden rounded border border-slate-300 bg-white/80 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 md:inline-flex dark:border-slate-600 dark:bg-slate-900 dark:text-slate-300">
                  Ctrl K
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      </nav>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Navbar;