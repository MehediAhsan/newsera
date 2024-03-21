'use client'

import Link from "next/link";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { PiNewspaper } from "react-icons/pi";
import { BiAddToQueue } from "react-icons/bi";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { FaAlignLeft } from "react-icons/fa";
import { useState } from "react";

const DashboardSiveNav = () => {
    const [open, setOpen] = useState(false);

    const navigation = [
        {
            href: '/dashboard',
            name: 'Overview',
            icon: <MdOutlineDashboardCustomize />
        },
        {
            href: '/dashboard/allNews',
            name: 'All News',
            icon: <PiNewspaper />
        },
        {
            href: '/dashboard/addNews',
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
            <FaAlignLeft
                onClick={() => setOpen(!open)}
                className={`absolute z-50 top-6 left-4 text-xl lg:hidden transition duration-300 cursor-pointer text-green-50 ${open ? "rotate-180" : ""
                    }`}
            ></FaAlignLeft>

            <nav
            className={`${
                open ? "absolute z-40" : "hidden"
              } w-72 overflow-hidden rounded lg:block bg-[#181616] space-y-8 h-screen `}>
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
                                    <img src="https://avatars.githubusercontent.com/u/83613654?v=4" className="w-12 h-12 rounded-full" />
                                    <div>
                                        <span className="block text-gray-300 text-sm font-semibold">Mehedi Ahsan</span>
                                        <span
                                            className="block mt-px text-gray-400 text-xs"
                                        >
                                            mehediahsan@gmail.com
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