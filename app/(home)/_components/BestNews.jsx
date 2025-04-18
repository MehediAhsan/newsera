"use client"
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

const BestNews = () => {

    const items = [
        {
            img: "/assets/news/olympics.jpg",
            keyword: 'sports',
            heading: "Olympic committee unveils new rules for upcoming games...",
            des: "13 Apr, 2025",
        },
        {
            img: "/assets/news/health.jpg",
            keyword: 'health',
            heading: "Breakthrough in cancer research offers new hope to patients...",
            des: "12 Apr, 2025",
        },
        {
            img: "/assets/news/space.jpg",
            keyword: 'science',
            heading: "New telescope discovers Earth-like planet in nearby galaxy...",
            des: "11 Apr, 2025",
        },
        {
            img: "/assets/news/economy.jpg",
            keyword: 'economy',
            heading: "Stock markets rally after central bank rate cut announcement...",
            des: "10 Apr, 2025",
        },
    ];


    return (
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
                className='customSwiper'
            >
                {
                    items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-black/20 z-40 w-full"></div>

                                <div className="h-full w-full">
                                    <Image src={item.img} className='w-full object-cover h-[424px]' height={100} width={1000} alt='Image' loading='lazy' />
                                </div>
                                <div className="absolute bottom-0 z-50 m-0 pb-10 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 w-8/12">
                                    <h1 className="text-sm font-light text-third mb-4">
                                        <span className="bg-primary text-xs p-1 uppercase font-semibold mr-2 text-secondary">{item.keyword}</span>{item.des}
                                    </h1>
                                    <h1 className="font-serif text-2xl font-bold text-secondary underline">
                                        {item.heading}
                                    </h1>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </div>
    );
};

export default BestNews;