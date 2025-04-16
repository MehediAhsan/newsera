"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import DailyNewsCard from './DailyNewsCard';

const DailyNews = () => {
    const items = [1, 2, 3, 4, 5]
    return (
        <div className='my-10 relative daily'>
            <button className='btn-secondary'>Daily News</button>
            <div className='bg-fourth w-full h-[1.4px] -mt-[1.4px] mb-10'>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                navigation={{
                    prevEl: '.daily-swiper-button-prev',
                    nextEl: '.daily-swiper-button-next',
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination, Autoplay, Navigation]}
                className="dailyNewsSwiper mySwiper"
            >
                {
                    items.map((item) => (
                        <SwiperSlide key={item}>
                            <DailyNewsCard />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
            <div className="daily-swiper-button-prev swiper-button-prev"></div>
            <div className="daily-swiper-button-next swiper-button-next"></div>
        </div>
    );
};

export default DailyNews;