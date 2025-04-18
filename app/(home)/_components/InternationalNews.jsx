'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import '../../../styles/newsStyle.css';

const InternationalNews = () => {
    const newsItems = [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Global Markets React to New Policies',
            description: 'Find out how recent changes are impacting the economy.',
            date: 'October 10, 2023',
        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1485823040952-99ef05fe1637?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Health Breakthrough: New Vaccine Announced',
            description: 'A new vaccine promises to combat a deadly disease.',
            date: 'October 9, 2023',
        },
        {
            id: 3,
            img: 'https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'New Technology Revolutionizes Industry',
            description: 'Discover how the latest tech is changing the game.',
            date: 'October 8, 2023',
        },
        {
            id: 4,
            img: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Climate Change Summit: Key Takeaways',
            description: 'Leaders discuss urgent actions to combat climate change.',
            date: 'October 7, 2023',
        },
        {
            id: 5,
            img: 'https://images.unsplash.com/photo-1553835973-dec43bfddbeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Global Travel Restrictions Eased',
            description: 'Countries reopen borders as vaccination rates rise.',
            date: 'October 6, 2023',
        },
        {
            id: 6,
            img: 'https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Space Exploration: New Discoveries',
            description: 'Scientists uncover new insights into distant planets.',
            date: 'October 5, 2023',
        },
    ];

    return (
        <div className='my-20 relative news'>
            <div className='mb-10'>
                <button className='bg-sixth px-3 py-2 border-b border-fourth font-medium -skew-x-6 text-secondary'>
                    Most Viewed
                </button>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
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
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper custom-swiper"
            >
                {newsItems.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="relative">
                            <div className='absolute h-full w-full bg-gradient-to-t from-black to-black/30 z-1'></div>
                            <div className="block rounded">
                                <Image
                                    className="rounded h-52 object-cover w-full"
                                    src={item.img}
                                    alt={item.title}
                                    width={1000}
                                    height={500}
                                    loading='lazy'
                                />
                                <div className="absolute bottom-0 p-7">
                                    <h5 className="mb-3 text-xl font-medium leading-tight text-white underline">
                                        {item.title}
                                    </h5>
                                    <p className="text-sm text-gray-300">
                                        <small><span className='bg-primary text-secondary px-2 py-0.5 font-semibold text-xs uppercase mr-1'>{item?.title.split(' ')[0]}</span>Last updated: {item.date}</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
};

export default InternationalNews;