import React from "react";
import HeroVideo from "../../../assets/HeroVideo.png";
import VideoPlay from "../../../assets/VideoPlay.svg";
import Union from "../../../assets/Union.svg";
import SunVector from "../../../assets/Vector.svg";
import WinladsLogo from "../../../assets/WinladsLogo.svg";
import LuxuryEscapesLogo from "../../../assets/LuxuryEscapesLogo.svg";
import Plane from "../../../assets/Plane.svg";
import BALI from "../../../assets/BALI.png";
import Highlight from "../../../assets/Highlight.svg";
import Arrow from "../../../assets/Arrow.svg";
import { Timer } from "../../../components/Timer";

import lineImg from "../../../assets/images/Union (2).png";

export default function Hero() {
  const deadline = new Date("2/23/2025");

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-[48%] relative">
        <div className="absolute bg-primary w-full h-full my-5 -z-10 hero-video-radius"></div>
        <div className="absolute bg-secondary w-full h-full my-10 -z-20 hero-video-radius"></div>
        <div className="absolute w-full h-full flex items-center justify-center z-50">
          <button>
            <img src={VideoPlay} alt="HeroVideo" />
          </button>
        </div>
        <div className="h-full relative">
          <div className="absolute w-full h-full bg-black/[.2] hero-video-radius" />
          <img
            className="w-full h-full object-cover z-40 hero-video-radius"
            src={HeroVideo}
            alt="HeroVideo"
          />

          <img src={lineImg} className="absolute bottom-0 left-0 translate-y-2/3 w-[50vw]" />
        </div>
      </div>
      <div className="w-full md:w-[52%] relative">
        <div className="absolute right-0">
          <img src={Union} />
        </div>
        <div className="flex justify-center p-12 xl:p-24 2xl:p-48 pb-0 xl:pb-0 2xl:pb-8">
          <div className="flex gap-7 xl:gap-9 justify-center md:justify-start">
            <img className="w-1/3 xl:w-full" src={WinladsLogo} />
            <span className="text-xl lg:text-[46px] text-black/[.37]">X</span>
            <img className="w-1/3 xl:w-full" src={LuxuryEscapesLogo} />
          </div>
        </div>
        <div className="relative px-4">
          <div className="absolute -top-3 lg:-top-6 z-40">
            <img className="w-1/2 lg:w-full" src={Plane} />
          </div>
          <div className="uppercase font-extrabold leading-tight -rotate-[3.3deg] text-center pb-12 2xl:pb-20 pt-6 2xl:pt-10 font-[Neuething]">
            <p className="color-primary text-7xl lg:text-[106px] leading-tight">
              win
            </p>
            <p className="text-5xl lg:text-[65px] relative inline-block leading-tight	">
              a trip to
              <img className="absolute -right-4 -top-2" src={Highlight} />
              <img className="absolute -right-20 -bottom-16" src={Arrow} />
            </p>
          </div>
          <div className="flex justify-center relative">
            <div className="absolute -top-[265%] -left-[230px]">
              <img src={SunVector} />
            </div>
            <div className="relative flex justify-center">
              <img className="w-1/2 lg:w-3/4 2xl:w-full" src={BALI} />
            </div>
          </div>
          <Timer deadline={deadline} />
          <p className="text-base lg:text-xl px-8 md:px-12 xl:px-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel e
          </p>
        </div>
      </div>
    </div>
  );
}
