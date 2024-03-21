import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCreative, Pagination } from "swiper/modules";

import icon from "../../../assets/testominials/icon.svg";

export default function SwiperDesktop({ cards, setSwiperInstance }) {

    return (
        <div className="max-md:!display-none min-[780px]:p-8 max-[780px]:mt-8 flex justify-center pb-0 mb-0 overflow-auto max-md:!display-none">
            <Swiper
                effect={"creative"}
                grabCursor={true}
                loop={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                creativeEffect={{
                    prev: {
                        translate: [0, "100%", -50],
                    },
                    next: {
                        translate: [0, -30, -50],
                    },
                    limitProgress: 4,
                    shadowPerProgress: true,
                    progressMultiplier: 1.5
                }}
                aria-current={2}
                pagination={false}
                modules={[EffectCreative, Pagination]}
                className="mySwiper1"
                onSwiper={(swiper) => setSwiperInstance(swiper)}
            >
                <div className="max-w-[500px] overflow-hidden">
                    {cards.map((card, i) => (
                        <SwiperSlide key={card.id} className="">
                            <div className="p-8 bg-[#ECF6F8EB] rounded-2xl max-w-[668px] relative drop-shadow-3xl max-md:text-center md:min-h-[500px] overflow-hidden">
                                <p className="font-['Axiforma'] font-black text-3xl mt-8 max-md:text-xl">
                                    {card.userName}
                                </p>
                                <br />
                                <p className="font-['Axiforma'] font-light text-sm md:text-xl text-justify">
                                    {card.review}
                                </p>
                                <img src={icon} alt="icon" className="absolute top-0 right-0" />
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
}