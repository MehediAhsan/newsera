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
            img: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            img: "https://images.unsplash.com/photo-1584798448292-5e7ba13a0826?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1672883551967-ab11316526b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]

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
                            <Image src={item.img} className='w-full object-cover h-[424px]' height={100} width={1000} alt='best deal today' />
                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </div>
    );
};

export default BestNews;