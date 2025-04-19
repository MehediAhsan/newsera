"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Rating, RoundedStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { RiShoppingBasketLine } from "react-icons/ri";
import { IoHeartSharp } from "react-icons/io5";
import { ImEye } from "react-icons/im";
import { FaCalendar } from 'react-icons/fa';

const TrendingNewsCard = ({ rating = null, img }) => {
    const [isHover, setIsHover] = useState(false);
    const myStyle = {
        itemShapes: RoundedStar,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#ffffff'
    }
    return (
        <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className='border border-dark text-center text-sixth dark:text-secondary relative p-3'>
            <div className=' z-[15] hover:cursor-pointer'>
                <div className={`absolute z-20 left-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 ${isHover ? "block" : "hidden"}`}>
                    <div className='group relative bg-gray-600 transition-colors duration-500 ease-out hover:bg-red-500 p-[6px] rounded font-bold text-xs flex gap-1 animate-[horizontalWave_0.3s_ease-in-out]'>
                        <RiShoppingBasketLine size={14} />
                        <span className='absolute w-20 p-1 h-[26px] -z-10 rounded-e bg-gray-600 top-0 left-0 group-hover:left-5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-500 ease-out group-hover:bg-red-500'>Add to cart</span>
                    </div>
                    <div className='group relative bg-gray-600 transition-colors duration-500 ease-in-out hover:bg-red-500 p-[6px] rounded font-bold text-xs flex gap-1 animate-[horizontalWave_0.5s_ease-in-out]'>
                        <IoHeartSharp size={14} />
                        <span className='absolute w-28 p-1 h-[26px] -z-10 rounded-e bg-gray-600 top-0 left-0 group-hover:left-5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-500 ease-in-out group-hover:bg-red-500'>Add to whitelist</span>
                    </div>
                    <div className='group relative bg-gray-600 transition-colors duration-500 ease-in-out hover:bg-red-500 p-[6px] rounded font-bold text-xs flex gap-1 animate-[horizontalWave_0.9s_ease-in-out]'>
                        <ImEye size={14} />
                        <span className='absolute w-16 p-1 h-[26px] -z-10 rounded-e bg-gray-600 top-0 left-0 group-hover:left-5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-500 ease-in-out group-hover:bg-red-500'>Preview</span>
                    </div>
                </div>
                <Image src={img ? img : "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='' height={400} width={200} className='object-cover w-full h-28 mx-auto'></Image>
            </div>
            <div className='mt-3'>
                <h1 className='mb-2 text-sm font-semibold'>Education System</h1>
                <p className='text-xs text-fourth dark:text-third flex justify-center gap-1'><FaCalendar/> October 24th,2025</p>
            </div>
        </div>
    );
};

export default TrendingNewsCard;