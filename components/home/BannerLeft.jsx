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
      img: "https://images.unsplash.com/photo-1506187334569-7596f62cf93f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80",
      heading: "sdf",
      des: "sdfsdf",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "sdf",
      des: "sdfsdf",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        // effect={'fade'}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
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
                      className="animate-fade-in block h-96 w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-105"
                      alt=""
                      height={300}
                      width={300}
                    />
                  </div>
                  <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
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
