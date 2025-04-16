'use client'

import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

const BannerRight = () => {
    const items = [
        {
            title: "AI Innovation",
            img: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "10 May, 2025"
        },
        {
            title: "Tech Breakthrough",
            img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "10 May, 2025"
        },
        {
            title: "Sustainable Future",
            img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "10 May, 2025"
        },
        {
            title: "Space Exploration",
            img: "https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "10 May, 2025"
        },
    ]

    const chunkedItems = [];
    for (let i = 0; i < items.length; i += 3) {
        chunkedItems.push(items.slice(i, i + 3));
    }
    return (
        <div className='relative'>
            <h1 className='left-news-title'>Recent News</h1>
            <div>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    className='recentSwiper'
                >
                    {
                        chunkedItems.map((group, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex flex-col gap-4 my-4'>
                                    {
                                        group.map((item, idx) => (
                                            <div key={idx} className='flex gap-4 border border-fifth'>
                                                <Image
                                                    src={item.img}
                                                    className="h-28 w-40 object-cover"
                                                    alt=""
                                                    height={500}
                                                    width={1000}
                                                />
                                                <div className='flex flex-col justify-center'>
                                                    <h1 className="text-sm font-light text-third mb-2">
                                                        <span className="bg-primary text-xs p-1 uppercase font-semibold mr-2 text-secondary">sports</span>{item.date}
                                                    </h1>
                                                    <p className='text-secondary mt-2'>{item.title}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </div>
    );
};

export default BannerRight;