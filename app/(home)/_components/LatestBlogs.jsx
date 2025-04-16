"use client"
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import { FaCalendar } from 'react-icons/fa';

const LatestBlogs = () => {
    const items = [
        {
            title: "lorem Ipsum is Lore than others",
            img: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "lorem Ipsum is Lore than others",
            img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "lorem Ipsum is Lore than others",
            img: "https://images.unsplash.com/photo-1584798448292-5e7ba13a0826?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
    return (
        <div className='relative'>
            <h1 className='left-news-title'>Latest Blogs</h1>
            <div className=''>
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
                    className='blogsSwiper'
                >
                    {
                        items.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className=''>
                                    <Image src={item.img} className='w-full object-cover h-64 pt-16' height={100} width={1000} alt='best deal today' />
                                    <div className=''>
                                        <h2 className='text-[16px] font-bold my-2'>{item.title}</h2>
                                        <p className='text-xs text-secondary flex items-center gap-1'><FaCalendar/> October 24th,2023</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>

            </div>
        </div>
    );
};

export default LatestBlogs;