import React, { useState, Suspense } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCreative, Pagination } from "swiper/modules";

import Title from "../../../components/title";
import curve from "../../../assets/subscription/curve.png";
import men2 from "../../../assets/videos/video1.png";
import car1 from "../../../assets/videos/car1.png";
import car2 from "../../../assets/videos/car2.png";
// import video1 from "../../../assets/videos/1.mp4";
import video1 from "../../../assets/videos/1.mp4";

const Video = React.lazy(() => import("./video"));
// import Video from "./video"

const videos = [
  {
    id: 1,
    content: video1,
    preview: car1
  },
  {
    id: 2,
    content: video1,
    preview: men2
  },
  {
    id: 3,
    content: video1,
    preview: car2
  },
  {
    id: 4,
    content: video1,
    preview: car1
  },
  {
    id: 5,
    content: video1,
    preview: men2
  },
  {
    id: 6,
    content: video1,
    preview: car2
  },
];

export default function Videos() {


  return (
    <div className="mb-20">
      <div className="flex justify-center my-[100px] max-md:my-14 relative">
        <div className="relative ">
          {/* <p className="text-5xl font-black z-[100] relative leading-[64px]"> */}
          <Title label="Videos" className="origin-bottom -rotate-[2.54deg] max-md:text-4xl" />
          {/* </p> */}
          <img src={curve} alt="curve" className="absolute right-0 top-10 max-md:top-5" />
        </div>
      </div>

      <div>
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
              rotate: [0, 0, -5.37],
              origin: "right bottom",
            },
            next: {
              translate: ["102%", 0, 0],
              rotate: [0, 0, 5.37],
              origin: "left bottom",
            },
          }}
          aria-current={2}
          pagination={false}
          modules={[EffectCreative, Pagination]}
          className="mySwiper"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <Suspense fallback={<div>Loading</div>}>
                <Video videoId={video.id} videoContent={video.content} videoPreview={video.preview} />
              </Suspense>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <div className="flex max-[1024px]:flex-col justify-center ">
        {
          videos.map((video) => (
            <div className="flex justify-center relative mx-5 mt-4" key={video.id}>
              <img
                src={video.content}
                alt="video_preview"
              />

              <button className="absolute top-[50%] left-[50%] ml-[-70px] mt-[-70px] hover:scale-105 transition-all">
                <svg width="137" height="137" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="68.2538" cy="68.2538" r="68.2538" fill="white" />
                  <path d="M53.0352 68.2533V61.3832C53.0352 52.8535 59.0754 49.3606 66.4665 53.6254L72.4296 57.0604L78.3927 60.4955C85.7838 64.7603 85.7838 71.7462 78.3927 76.011L72.4296 79.4461L66.4665 82.8811C59.0754 87.146 53.0352 83.653 53.0352 75.1233V68.2533Z" fill="#FF4C00" />
                </svg>
              </button>
            </div>
          ))
        }
      </div> */}
    </div>
  );
}
