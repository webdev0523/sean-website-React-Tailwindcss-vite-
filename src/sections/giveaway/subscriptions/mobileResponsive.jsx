import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCreative, Pagination } from "swiper/modules";

import Subscription from "../subscriptions/subscription";
import { properties } from "../subscriptions/subscriptions";

export default function MobileResponsive({isIntersecting, setIsOpen}) {
    return (
        <div
            className={`md:!display-none flex flex-row gap-4  justify-center flex-wrap max-w-[1200px] mx-auto duration-[2000ms] ${isIntersecting ? "opacity-1" : "opacity-0"
                }`}
        >
            <Swiper
                initialSlide={1}
                effect={"creative"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                loop={true}
                creativeEffect={{
                    limitProgress: 4,
                    prev: {
                        translate: ["-102%", 0, 0],
                    },
                    next: {
                        translate: ["102%", 0, 0],
                    },
                }}
                aria-current={2}
                pagination={false}
                modules={[EffectCreative, Pagination]}
                className="feel-like-swiper"
            >
                {properties.map((property, index) => (
                    <SwiperSlide key={index}>
                        <Subscription key={index} property={property} setIsOpen={setIsOpen} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}