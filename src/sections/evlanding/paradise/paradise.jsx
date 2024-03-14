import React from "react";

import linesL from "../../../assets/paradise/Union (3).png";

import WinA from "./winA";
import Marquee from "./marquee";
import VideoPlay from "./videoPlay";
import CarModel from "./carModels";

export default function Paradise() {

  return (
    <div className="py-20">

      <Marquee />

      {/* Empty for now */}
      <WinA />

      <VideoPlay />

      {/* Left Lines */}
      <div className="relative">
        <img src={linesL} alt="lines" className="absolute top-[-300px] left-0" />
      </div>

      {/* Car Models */}
      <CarModel />

    </div >
  );
}
