import React, { useState } from "react";
import previewImage from "../../../assets/howtoenter_01.png";
import Title from "../../../components/title";

import bgImg from "../../../assets/images/AdobeStock_288590703 4.jpg";
import VideoPlay from "./videoPlay";

export default function HowToEnter() {
  return (
    <div className="md:p-0 p-5">
      <div className="flex justify-center my-[100px] relative">
        <div className="relative">
          <div className="absolute sm:right-[-10%] right-[0%] w-[199px] h-[74px] bg-[#56DFE6] origin-bottom -rotate-6"></div>
          {/* <p className="text-5xl font-black z-[100] relative leading-[64px]"> */}
            {/* <span className="drop-shadow-[3px_-3px_0px_rgba(255,255,255)] ">
              How To Enter
            </span> */}
            <Title label="How To Enter" />
          {/* </p> */}
        </div>

        <img
          className="absolute top-0 left-0 right-0 z-[-1] -translate-y-1/3 w-full"
          src={bgImg}
        />
      </div>

      <div className="flex justify-center">
        <p className='max-w-4xl font-["Outfit"] text-[24px]  max-md:text-lg text-center capitalize font-light leading-[34px] tracking-[-0.01em] px-4'>
          So, what are you waiting for? Dive into paradise and enter now for a
          chance to win the exquisite Earl Suite Beachfront. With breathtaking
          ocean views, a private jacuzzi, and 24-hour butler service, this is
          your ticket to the ultimate Bali getaway. Don't miss out – enter now
          and let the dream begin!
        </p>
      </div>

      <div className="flex justify-center mt-[80px] px-6">
        <button className='bg-[#FF6C2E] w-[751px] py-6 md:py-10 text-white text-3xl max-md:text-lg focus:!outline-0 rounded-lg font-bold font-["Outfit"] hover:opacity-80 transition-opacity'>
          ENTER NOW
        </button>
      </div>

      <div className="flex justify-center mt-[80px]">
        <VideoPlay />
      </div>

      <div className=" bg-blend-saturation hover:bg-blend-darken flex justify-center bg-cover bg-center bg-[url('/howtoenter_02.png')] bg-no-repeat opacity-90 w-full mt-[-100px] mb-0 md:mb-[100px] relative z-[-1]">
        <div className="bg-[url('/howtoenter_03.png')] bg-center w-[650px] lg:w-[797px] h-[220px] sm:h-[300px] md:h-[340px] lg:h-[437px] rounded-[60px] sm:rounded-full border-black border-4 bg-cover sm:bg-[length:100%] mb-[100px] lg:mb-0 mt-[200px] lg:mt-[300px] bg-no-repeat mx-8 lg:mx-0"></div>
      </div>
    </div>
  );
}
