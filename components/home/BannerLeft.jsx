"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function BannerLeft() {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1559445368-b8a993676d7a?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Blockchain.com is a cryptocurrency financial services company...",
      des: "10 may, 2023",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Artificial intelligence (AI) is the intelligence of machines or software...",
      des: "10 may, 2023",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        style={{
          "--swiper-navigation-color": "#EA580C",
          "--swiper-navigation-size": "35px"
        }}
        // effect={'fade'}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((dt, i) => {
          return (
            <SwiperSlide key={dt.id}>
              <div
                className="relative flex flex-col justify-center overflow-hidden bg-gray-50"
              >
                <div className="absolute inset-0 bg-center bg-black"></div>
                <div className="group relative flex shadow-xl ring-gray-900/5">
                  <div className="z-10 h-full w-full overflow-hidden opacity-80 transition duration-300 ease-in-out group-hover:opacity-100">
                    <Image
                      src={dt.img}
                      className="animate-fade-in block h-96 w-full scale-100 transform object-cover object-center opacity-100 transition duration-300"
                      alt=""
                      height={300}
                      width={300}
                    />
                  </div>
                  <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 w-8/12">
                    <h1 className="font-serif text-2xl font-bold text-white shadow-xl">
                      {dt.heading}
                    </h1>
                    <h1 className="text-sm font-light text-gray-200 shadow-xl">
                      {dt.des}
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
