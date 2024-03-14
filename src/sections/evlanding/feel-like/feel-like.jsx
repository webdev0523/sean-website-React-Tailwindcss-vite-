import React, { useRef, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCreative, Pagination } from "swiper/modules";

import Title from "../../../components/title";
import Subscription from "../subscriptions/subscription";
import { properties } from "../subscriptions/subscriptions";
import useInteractionObserver from "../../../hooks/use-interaction-observer";
import curve from "../../../assets/subscription/curve.png";

export default function FeelLike() {
  const targetRef = useRef(null);

  const [setTarget, isIntersecting] = useInteractionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    setTarget(targetRef.current);
  }, []);

  return (
    <div className="md:p-0 p-5" ref={targetRef}>
      <div className="flex justify-center my-[100px] relative max-md:my-12">
        <div className="relative">
          {/* <p className="text-5xl font-black z-[100] relative leading-[64px]"> */}
          <Title
            label="Feel like getting"
            className="origin-bottom -rotate-[2.54deg]"
          />
          <Title
            label="an one off entry?"
            className="origin-bottom -rotate-[2.54deg]"
          />
          {/* </p> */}
          {/* <img
            src={curve}
            alt="curve"
            className="absolute right-0 bottom-[-60px] md:w-[347px]"
          /> */}
          <div className="absolute right-0 top-[100px] max-md:top-12 w-full flex justify-end">
            <img src={curve} alt="curve" className="max-md:w-[167px] " />
          </div>
        </div>

        {/* <img
          className="absolute top-0 left-0 right-0 z-[-1] -translate-y-1/2 w-full"
          src={bgImg}
        /> */}
        {/*         
        <div className="a">
          <img src={bgImg} />
        </div> */}
      </div>

      <div
        className={`max-md:!display-none flex flex-row gap-4  justify-center flex-wrap max-w-[1200px] mx-auto duration-[2000ms] ${isIntersecting ? "opacity-1" : "opacity-0"
          }`}
      >
        {properties.map((property, index) => (
          <Subscription key={index} property={property} />
        ))}
      </div>


      {/* mobile responsive */}
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
              <Subscription key={index} property={property} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <div className="flex justify-center mt-[200px] max-md:mt-20">
        <Icon4 />
      </div> */}
    </div>
  );
}
