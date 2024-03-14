'use client'

import Link from "next/link";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { PiNewspaper } from "react-icons/pi";
import { BiAddToQueue } from "react-icons/bi";
import { IoSettingsOutline, IoLogOutOutline  } from "react-icons/io5";

const DashboardSiveNav = () => {

    const navigation = [
        {
            href: '/dashboard',
            name: 'Overview',
            icon: <MdOutlineDashboardCustomize />
        },
        {
            href: '/',
            name: 'All News',
            icon: <PiNewspaper />
        },
        {
            href: '/',
            name: 'Add News',
            icon: <BiAddToQueue />
        },
    ]

    const navsFooter = [
        {
            href: 'javascript:void(0)',
            name: 'Settings',
            icon: <IoSettingsOutline />
        },
        {
            href: 'javascript:void(0)',
            name: 'Logout',
            icon: <IoLogOutOutline />
        }
    ]

    return (
        <>
            <nav
                className="fixed top-0 left-0 h-full bg-[#181616] space-y-8 w-60">
                <div class="flex flex-col h-full">
                    <div className='h-20 flex items-center px-8'>
                        <Link href="/" className='text-xl font-semibold text-primary'>
                            📙 NewsEra
                        </Link>
                    </div>
                    <div className="flex-1 flex flex-col h-full overflow-auto">
                        <ul className="px-4 text-sm font-medium flex-1">
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx}>
                                        <Link href={item.href} className="flex items-center gap-x-2 text-gray-300 p-2 rounded-lg  hover:bg-gray-700 duration-150">
                                            <div className="text-gray-300">{item.icon}</div>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div>
                            <ul className="px-4 pb-4 text-sm font-medium">
                                {
                                    navsFooter.map((item, idx) => (
                                        <li key={idx}>
                                            <a href={item.href} className="flex items-center gap-x-2 text-gray-300 p-2 rounded-lg  hover:bg-gray-700 duration-150">
                                                <div className="text-gray-300">{item.icon}</div>
                                                {item.name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="py-4 px-4 border-t">
                                <div className="flex items-center gap-x-4">
                                    <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-12 h-12 rounded-full" />
                                    <div>
                                        <span className="block text-gray-300 text-sm font-semibold">Alivika tony</span>
                                        <span
                                            className="block mt-px text-gray-400 hover:text-indigo-600 text-xs"
                                        >
                                            avih@gmail.com
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </nav>
        </>
    );
};

export default DashboardSiveNav;