'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import Header from './Header';

const Navbar = () => {
    const dropdownNavs = [

        {
            title: "International",
            path: "/international",
            icon: ''
        },
        {
            title: "Sports",
            path: "/sports",
            icon: ''
        },
        {
            title: "Entertainment",
            path: "/entertainment",
            icon: ''
        },
        {
            title: "Politics",
            path: "/politics",
            icon: ''
        },
        {
            title: "Education",
            path: "/education",
            icon: ''
        },
        {
            title: "Health",
            path: "/health",
            icon: ''
        },

    ]


    const [state, setState] = useState(false)
    const [drapdownState, setDrapdownState] = useState({ isActive: false, idx: null })

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Home", path: "/", isDrapdown: false },
        { title: "News", path: "javascript:void(0)", isDrapdown: true, navs: dropdownNavs },
        { title: "About Us", path: "/about", isDrapdown: false },
        { title: "Contact Us", path: "/contact", isDrapdown: false }
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".nav-menu")) setDrapdownState({ isActive: false, idx: null });
        };
    }, [])


    return (
        <>
            <div className="absolute inset-0 z-50 h-16">
                <nav className={`relative z-20 opacity-95 w-full md:static md:text-sm md:border-none shadow ${state ? "shadow-lg rounded-b-xl md:shadow-none" : ""}`}>
                    <Header></Header>
                    <div className="flex flex-col md:flex-row md:justify-around items-center px-4 py-2 md:py-0 max-w-screen-xl md:px-8">
                        <div className="flex items-center justify-between md:py-5 md:block w-full md:w-auto">
                            <Link href="/" className='text-xl font-semibold text-primary'>
                                📙 NewsEra
                            </Link>
                            <div className="md:hidden">
                                <button className="text-gray-500 hover:text-gray-800"
                                    onClick={() => setState(!state)}
                                >
                                    {
                                        state ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                            </svg>

                                        )
                                    }
                                </button>
                            </div>
                        </div>
                        <div className={`nav-menu text-white uppercase pb-3 mt-8 md:block text-start w-full md:w-auto md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                            <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                                {
                                    navigation.map((item, idx) => {
                                        return (
                                            <li key={idx}>
                                                {
                                                    item.isDrapdown ? (
                                                        <button className="w-full flex items-center text-sm p-2 gap-1 uppercase rounded"
                                                            onClick={() => setDrapdownState({ idx, isActive: !drapdownState.isActive })}
                                                        >
                                                            {item.title}
                                                            {
                                                                drapdownState.idx == idx && drapdownState.isActive ? (
                                                                    <FaAngleUp />
                                                                ) : (
                                                                    <FaAngleDown />
                                                                )
                                                            }
                                                        </button>
                                                    ) : (
                                                        <Link href={item.path} className="block text-sm p-3 hover:text-primary rounded">
                                                            {item.title}
                                                        </Link>
                                                    )
                                                }
                                                {
                                                    item.isDrapdown && drapdownState.idx == idx && drapdownState.isActive ? (
                                                        <div className="mt-6 top-[120px] z-50 md:right-20 lg:right-20 md:absolute  md:border-x md:border-primary md:shadow-md md:mt-0 w-auto md:w-[450px] lg:w-[600px] bg-black">
                                                            <ul className='max-w-screen-xl grid items-center gap-6 md:px-8 md:grid-cols-1 lg:grid-cols-2'>
                                                                {dropdownNavs.map((navItem, idx) => (
                                                                    <Link key={idx} href={navItem.path} onclick={() => setDrapdownState({ isActive: false, idx: null })}>
                                                                        <li className="group flex items-center gap-2  px-4 py-2 rounded cursor-pointer">
                                                                            {/* <FaAngleDown/> */}
                                                                            <span className="duration-200 text-sm font-medium">{navItem.title}</span>
                                                                        </li>
                                                                    </Link>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ) : ""
                                                }
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
                {
                    state ? (
                        <div
                            className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
                            onClick={() => setState(false)}></div>
                    ) : ""
                }
            </div>
        </>

    );
};

export default Navbar;