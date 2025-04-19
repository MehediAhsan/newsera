'use client'

import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

const BannerRight = () => {
    const items = [
        {
            title: "AI Innovation",
            keyword: "OpenAI",
            description: "Exploring cutting-edge advancements in artificial intelligence.",
            img: "https://images.unsplash.com/photo-1679403766665-67ed6cd2df30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "10 May, 2025"
        },
        {
            title: "Tech Breakthrough",
            keyword: "Tech",
            description: "A major leap in technology reshaping global industries.",
            img: "https://images.unsplash.com/photo-1581093803931-46e730e7622e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "10 May, 2025"
        },
        {
            title: "Urban Mobility",
            keyword: "Transit",
            description: "Redesigning city transportation for speed and sustainability.",
            img: "https://images.unsplash.com/photo-1501587370732-8fdda655aace?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "10 May, 2025"
        },
        {
            title: "Sustainable Future",
            keyword: "Green",
            description: "Innovations driving us toward an eco-friendly tomorrow.",
            img: "https://images.unsplash.com/photo-1633432695542-b2c8e2b8a26c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "10 May, 2025"
        },
        {
            title: "Space Exploration",
            keyword: "Space",
            description: "Discovering the next frontier beyond our planet.",
            img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "10 May, 2025"
        },
        {
            title: "Climate Action",
            keyword: "Climate",
            description: "Global efforts to combat the escalating climate crisis.",
            img: "https://images.unsplash.com/photo-1570358934836-6802981e481e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "10 May, 2025"
        },
    ];


    const chunkedItems = [];
    for (let i = 0; i < items.length; i += 3) {
        chunkedItems.push(items.slice(i, i + 3));
    }
    return (
        <div className='relative'>
            <h1 className='left-news-title mb-2'>Recent News</h1>
            <div>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    className='recentSwiper'
                >
                    {
                        chunkedItems.map((group, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex flex-col gap-4 my-4'>
                                    {
                                        group.map((item, idx) => (
                                            <div key={idx} className='flex gap-4 border border-dark'>
                                                <Image
                                                    src={item.img}
                                                    className="h-28 w-40 object-cover"
                                                    alt="Image"
                                                    height={500}
                                                    width={1000}
                                                    loading='lazy'
                                                />
                                                <div className='flex flex-col justify-center'>
                                                    <h1 className="text-sm font-light text-fifth dark:text-third mb-2">
                                                        <span className="bg-primary text-xs p-1 uppercase font-semibold mr-2 text-secondary">{item.keyword}</span>{item.date}
                                                    </h1>
                                                    <p className='text-sixth dark:text-secondary mt-2'>{item.description}</p>
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