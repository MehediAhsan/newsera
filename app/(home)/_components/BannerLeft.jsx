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
      img: "/assets/home/blockchain.jpg",
      heading: "Blockchain.com is a cryptocurrency financial services company...",
      des: "10 may, 2023",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Artificial intelligence (AI) is the intelligence of machines or software...",
      des: "10 may, 2023",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Artificial intelligence (AI) is the intelligence of machines or software...",
      des: "10 may, 2023",
    },
  ];

  return (
    <div>
      <Swiper
        spaceBetween={30}
        style={{
          "--swiper-navigation-color": "#EA580C",
          "--swiper-navigation-size": "35px"
        }}
        // effect={'fade'}
        pagination={{ clickable: true }}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="bannerSwiper mySwiper"
      >
        {data.map((dt, _) => {
          return (
            <SwiperSlide key={dt.id}>
              <div
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-black/30 z-40 w-full"></div>

                <div className="h-full w-full">
                  <Image
                    src={dt.img}
                    className="h-[420px] w-full object-cover opacity-100"
                    alt="Image"
                    height={500}
                    width={1000}
                  />
                </div>
                <div className="absolute bottom-0 z-50 m-0 pb-6 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 w-8/12">
                  <h1 className="text-sm font-light text-third mb-4">
                    <span className="bg-primary text-xs p-1 uppercase font-semibold mr-2 text-secondary">technology</span>{dt.des}
                  </h1>
                  <h1 className="font-serif text-2xl font-bold text-secondary">
                    {dt.heading}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
