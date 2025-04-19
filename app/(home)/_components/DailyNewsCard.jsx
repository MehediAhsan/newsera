'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { RiShoppingBasketLine } from "react-icons/ri";
import { IoHeartSharp } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { ImEye } from "react-icons/im";

const DailyNewsCard = ({
    img = '',
    cardTitle = 'Olympics',
}) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className='grid grid-cols-2 gap-10 text-fifth dark:text-secondary mb-16 items-center'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className='bg-secondary dark:bg-sixth p-4 relative'>
                <div className='z-[15] hover:cursor-pointer text-white'>
                    <div
                        className={`absolute z-20 left-2 top-7 flex flex-col gap-2 ${isHover ? 'block' : 'hidden'
                            }`}
                    >
                        <div className={`group relative bg-dark  transition-colors duration-500 ease-out hover:bg-primary p-[6px] rounded font-bold text-xs flex gap-1 animate-[horizontalWave_0.3s_ease-in-out]`}>
                            <RiShoppingBasketLine />
                            <span className={`absolute w-20 p-1 -z-10 rounded-e bg-dark top-0 left-0 group-hover:left-5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-500 ease-out group-hover:bg-primary`}>
                                Add to cart
                            </span>
                        </div>
                        <div className={`group relative bg-dark  transition-colors duration-500 ease-in-out hover:bg-primary p-[6px] rounded font-bold text-xs flex gap-1 animate-[horizontalWave_0.5s_ease-in-out]`}>
                            <IoHeartSharp />
                            <span className={`absolute w-28 p-1 -z-10 rounded-e bg-dark top-0 left-0 group-hover:left-5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-500 ease-in-out group-hover:bg-primary`}>
                                Add to whitelist
                            </span>
                        </div>
                        <div className={`group relative bg-dark transition-colors duration-500 ease-in-out hover:bg-primary p-[6px] rounded font-bold text-xs flex gap-1 animate-[horizontalWave_0.9s_ease-in-out]`}>
                            <ImEye />
                            <span className={`absolute w-16 p-1 -z-10 rounded-e bg-dark top-0 left-0 group-hover:left-5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-500 ease-in-out group-hover:bg-primary`}>
                                Preview
                            </span>
                        </div>
                    </div>
                    <div className={`absolute top-5 right-5 bg-primary px-2 py-1 text-xs text-center font-bold`}>
                        <span className='mt-3'>Sports</span>
                    </div>
                    <Image
                        src={`${img
                            ? img
                            : 'https://images.unsplash.com/photo-1570004119777-2b1786b0e5bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            }`}
                        width={200}
                        height={200}
                        alt=''
                        className='h-[270px] w-full object-cover'
                    ></Image>
                </div>
            </div>

            <div className='space-y-3'>
                <p className={`text-xl font-bold cursor-pointer`}>
                    {cardTitle}
                </p>
                <p className='text-sm'>Los Angeles 2028 Olympics will feature mixed-gender golf event, as new venues confirmed for Games ...</p>

                <div className='flex gap-5'>
                    <div className='flex flex-col items-center'>
                        <p className={`bg-dark rounded-full size-8 p-1 text-center text-secondary`}>
                            20
                        </p>
                        <p className='text-xs uppercase mt-1'>Days</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className={`bg-dark rounded-full size-8 p-1 text-center text-secondary`}>
                            6
                        </p>
                        <p className='text-xs uppercase mt-1'>Hours</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className={`bg-dark rounded-full size-8 p-1 text-center text-secondary`}>
                            44
                        </p>
                        <p className='text-xs uppercase mt-1'>Mins</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className={`bg-dark rounded-full size-8 p-1 text-center text-secondary`}>
                            43
                        </p>
                        <p className='text-xs uppercase mt-1'>Secs</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DailyNewsCard;
