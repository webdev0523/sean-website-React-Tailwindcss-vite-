import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCreative, Pagination } from "swiper/modules";

import LeftButton from "../../../components/icons/leftButton";
import RightButton from "../../../components/icons/rightButton";
import Quote from "../../../components/icons/quote";

import icon from "../../../assets/testominials/icon.svg";

const cards = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

export default function Testominials() {
  const swiper = useSwiper();
  const [swiperInstance, setSwiperInstance] = useState();

  return (
    <div className="flex max-[1024px]:flex-col justify-center mt-52 min-[780px]:mx-24 mx-5">
      <div className="min-[1024px]:p-16">
        <div className="text-center">
          <div className="mt-8 flex max-[1024px]:justify-center">
            <Quote />
          </div>
          <div>
            <p className="font-['Axiforma'] font-[950] italic text-5xl md:text-7xl mt-8">
              Testominials
            </p>
          </div>
          <div className="flex max-[1024px]:justify-center mt-8">
            <span
              onClick={() => swiperInstance.slidePrev()}
              className="hover:scale-105 hover:cursor-pointer transition-all"
            >
              <LeftButton />
            </span>
            &nbsp; &nbsp;
            <span
              onClick={() => swiperInstance.slideNext()}
              className="hover:scale-105 hover:cursor-pointer transition-all"
            >
              <RightButton />
            </span>
          </div>
        </div>
      </div>

      <div className="min-[780px]:p-8 max-[780px]:mt-8 flex justify-center pb-0 mb-0">
        <Swiper
          // direction={"vertical"}
          effect={"creative"}
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          creativeEffect={{
            prev: {
              translate: [0, "100%", -50],
              // shadow: true,
            },
            next: {
              translate: [0, -30, -50],
              // shadow: true,
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
          <div>
            {cards.map((card, i) => (
              <SwiperSlide key={card.id} className="">
                <div className="p-8 bg-[#ECF6F8EB] rounded-2xl max-w-[668px] relative drop-shadow-3xl">
                  <p className="font-['Axiforma'] font-black text-3xl mt-8">
                    Greg Wheatley
                  </p>
                  <p className="font-['Axiforma'] font-normal text-2xl mt-2">
                    One Off Purchase {card.id}
                  </p>
                  <br />
                  <p className="font-['Axiforma'] font-light text-sm md:text-2xl text-justify">
                    Everyone from driftworks was super helpful. i’ve heard this
                    before from many people and that’s why i decided to buy
                    through them! i ordered Stanceparts aircups for my car and
                    they arrived damaged. UPS crushed the box and snapped a lead
                    line out of the compressor. Chris, Alex and everyone else at
                    DW were very very helpful getting me a new compressor, and
                    they did it fast! thanks again guys!
                  </p>
                  <img src={icon} alt="icon" className="absolute top-0 right-0" />
                </div>
              </SwiperSlide>
            ))}
          </div>

        </Swiper>
      </div>
    </div>
  );
}
