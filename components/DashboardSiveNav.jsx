'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { BiAddToQueue } from 'react-icons/bi';
import { FaAlignLeft } from 'react-icons/fa';
import { IoLogOutOutline, IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { PiNewspaper } from 'react-icons/pi';
import { logoutUser } from '@/redux/slices/authSlice';

const DashboardSiveNav = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);

  const navigation = [
    { href: '/dashboard', name: 'Dashboard', icon: <MdOutlineDashboardCustomize /> },
    { href: '/dashboard/allNews', name: 'All News', icon: <PiNewspaper /> },
    { href: '/dashboard/addNews', name: 'Add News', icon: <BiAddToQueue /> },
  ];

  const navsFooter = [
    { name: 'Settings', icon: <IoSettingsOutline /> },
    { name: 'Logout', icon: <IoLogOutOutline /> },
  ];

  const handleLogout = async () => {
    await dispatch(logoutUser());
    router.push('/login');
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="absolute left-4 top-6 z-50 rounded-full border border-white/10 bg-slate-900/80 p-2 text-xl text-slate-200 lg:hidden"
        aria-label="Toggle sidebar"
      >
        <FaAlignLeft className={open ? 'rotate-180 transition-transform' : 'transition-transform'} />
      </button>

      <aside
        className={`${open ? 'translate-x-0' : '-translate-x-full'} fixed left-0 top-0 z-40 h-screen w-72 border-r border-white/10 bg-slate-950/95 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur-xl transition-transform duration-300 lg:translate-x-0`}
      >
        <div className="flex h-full flex-col">
          <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
            <Link href="/" className="inline-flex items-center gap-3 text-lg font-black text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-300 text-sm text-white shadow-lg shadow-orange-500/30">
                N
              </span>
              NewsEra
            </Link>
          </div>

          <div className="mb-6 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-3">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-200">Editorial dashboard</div>
            <div className="mt-2 text-sm text-slate-200">Publisher workspace</div>
          </div>

          <nav className="flex-1">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 text-sm font-medium text-slate-200 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                  >
                    <span className="text-lg text-orange-300">{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-2 border-t border-white/10 pt-5">
            {navsFooter.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={item.name === 'Logout' ? handleLogout : undefined}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
              >
                <span className="text-lg text-slate-400">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/user.jpg"
                alt="User avatar"
                width={56}
                height={56}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-orange-500/40"
              />
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold text-white">{user?.name || 'News Editor'}</div>
                <div className="truncate text-xs text-slate-400">{user?.email || 'editor@newsera.com'}</div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSiveNav;