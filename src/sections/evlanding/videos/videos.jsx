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
          <Title label="Videos" className="origin-bottom -rotate-[2.54deg] max-md:text-4xl" />
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

    </div>
  );
}
