import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCreative, Pagination } from "swiper/modules";
import Panel from "./panel";

export default function MobileResponsive({ Winlads }) {
    return (
        <div
            className={`md:!display-none  max-md:mt-5 flex flex-row gap-4  justify-center flex-wrap max-w-[1200px] mx-auto duration-[2000ms]"
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
                className="winlads-swiper"
            >
                {Winlads.map((d, index) => (
                    <SwiperSlide key={index}>
                        <Panel data={d} key={index} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}