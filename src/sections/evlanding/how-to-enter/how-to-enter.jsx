import React from "react";

import lines from "../../../assets/howtoenter/lines.png";
import car from "../../../assets/howtoenter/car.png";
import VideoPlay from "./videoPlay";

export default function HowToEnter() {
  return (
    <div className="mt-24">
      <div className="flex justify-center items-center bg-[#FF4C00] w-full md:h-[70px] relative">
        <p className="font-['Axiforma'] font-normal text-base max-md:text-xs max-md:p-3 text-white text-center">Receive invitations to exclusive Winlads VIP events and meet-ups!</p>
        <img src={lines} alt="lines" className="absolute" />
      </div>

      <VideoPlay />

      <div className="flex justify-center bg-cover bg-center bg-[url('/bg.png')] bg-no-repeat opacity-90 w-full mb-0 md:mb-[100px] p-24">
        <img src={car} alt="car" className="" />
      </div>
    </div>
  );
}
