"use client"
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import LatestNewsCard from './LatestNewsCard';
import { latestNewsItems } from '../_lib/data';

const LatestNews = () => {
    return (
        <div className=''>
            <h1 className='left-news-title'>Latest News</h1>
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
                    className='mySwiper'
                >
                    {
                        latestNewsItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className='mt-5 pb-5'>
                                    <LatestNewsCard item={item} />
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>

            </div>
        </div>
    );
};

export default LatestNews;