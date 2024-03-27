'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import '../../styles/newsStyle.css';

const InternationalNews = () => {
    const items = [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1485823040952-99ef05fe1637?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 3,
            img: 'https://images.unsplash.com/photo-1494883759339-0b042055a4ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 4,
            img: 'https://plus.unsplash.com/premium_photo-1709311417346-0497456aef0e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 5,
            img: 'https://images.unsplash.com/photo-1553835973-dec43bfddbeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 5,
            img: 'https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 6,
            img: 'https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ]
    return (
        <div className='my-24 mx-10 relative news'>
            <div className='mb-10'>
                <button className='bg-gray-300 p-2 border-b border-primary  font-medium -skew-x-6 text-black'>International News</button>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                // navigation={true}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper custom-swiper"
            >
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="relative">
                            <div className='absolute h-64 w-full bg-black opacity-30 z-1'></div>
                                <div
                                    className="block rounded-lg ">
                                    <img
                                        className="rounded-lg h-64 object-cover w-full"
                                        src={item.img}
                                        alt="" />
                                        
                                    <div className="absolute top-0 p-6">
                                        <h5 className="mb-2 text-xl font-medium leading-tight ">
                                            Card title
                                        </h5>
                                        <p className="mb-4 text-base">
                                            This is a wider card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </p>
                                        <p className="text-base">
                                            <small>Last updated 3 mins ago</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
};

export default InternationalNews;