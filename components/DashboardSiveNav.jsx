'use client';

import Link from "next/link";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { PiNewspaper } from "react-icons/pi";
import { BiAddToQueue } from "react-icons/bi";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { FaAlignLeft } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";

const DashboardSiveNav = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    const { user } = useSelector((state) => state.auth);

    const navigation = [
        {
            href: '/dashboard',
            name: 'Dashboard',
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
    ];

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
    ];

    const handleLogout = async () => {
        await dispatch(logoutUser());
        router.push('/login');
    };

    return (
        <>
            <FaAlignLeft
                onClick={() => setOpen(!open)}
                className={`absolute z-50 top-6 left-4 text-xl lg:hidden transition duration-300 cursor-pointer text-green-50 ${open ? "rotate-180" : ""
                    }`}
            ></FaAlignLeft>

            <nav
                className={`${open ? "absolute z-40" : "hidden"
                    } w-72 overflow-hidden rounded lg:block bg-black space-y-8 fixed top-0 left-0 h-screen`}>
                <div className="flex flex-col h-full">
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
                                        <Link href={item.href} className="flex items-center gap-x-2 text-secondary p-2 rounded-lg  hover:bg-sixth duration-150">
                                            <div className="text-secondary">{item.icon}</div>
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
                                            <button
                                                onClick={item.name === "Logout" ? handleLogout : undefined}
                                                className="flex items-center gap-x-2 text-secondary p-2 rounded-lg hover:bg-sixth duration-150 w-full text-left"
                                            >
                                                <div className="text-secondary">{item.icon}</div>
                                                {item.name}
                                            </button>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="py-3 px-4 border-t border-fourth">
                                <div className="flex items-center gap-x-4">
                                    <Image src="/assets/user.jpg" alt="Image" className="w-12 h-12 rounded-full object-cover" width={1000} height={500} />
                                    <div>
                                        <span className="block text-secondary text-sm font-semibold">{user?.name}</span>
                                        <span
                                            className="block mt-px text-gray-400 text-xs"
                                        >
                                            {user?.email}
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