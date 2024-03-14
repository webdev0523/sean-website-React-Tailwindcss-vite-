import React from "react";
import Title from "../../../components/title";

import img1 from "../../../assets/images/1.jpg";
import img2 from "../../../assets/images/2.jpg";
import img3 from "../../../assets/images/3.jpg";
import img4 from "../../../assets/images/4.jpg";
import img5 from "../../../assets/images/5.jpg";
import curve from "../../../assets/subscription/curve.png";
import linesL from "../../../assets/whatiswinlands/LinesL.png";
import linesR from "../../../assets/whatiswinlands/LinesR.png";

const Winlads = [
  { url: img1, left: 10, top: 40, rotate: -10 },
  { url: img2, left: 30, top: 30, rotate: 10 },
  { url: img4, left: 45, top: 53, rotate: -20 },
  { url: img3, left: 65, top: 40, rotate: -10 },
  { url: img5, left: 88, top: 30, rotate: 6 },
];

export default function WhatIsWinlads() {
  return (
    <div className="relative">
      <div className="flex justify-center my-[60px] max-md:mt-0 md:my-[100px]">
        <div className="relative">
          <Title
            label="What Is Winlads"
            className="origin-bottom -rotate-[2.54deg] max-md:text-2xl max-md:font-black"
          />
          <div className="absolute right-0 top-7 max-md:top-4 w-full flex justify-end">
            <img src={curve} alt="curve" className="max-md:w-[167px] " />
          </div>
        </div>
      </div>

      <div className="px-0 md:px-10 mx-10 mt-10">
        <p className="font-Outfit text-[22px] text-center capitalize max-md:text-sm max-md:font-light max-md:leading-5">
          Everyone from driftworks was super helpful. i’ve heard this before
          from many people and that’s why i decided to buy through them! i
          ordered Stanceparts aircups for my car and they arrived damaged. UPS
          crushed the box and snapped a lead line out of the compressor. Chris,
          Alex and everyone else at DW were very very helpful getting me a new
          compressor, and they did it fast! thanks again guys! Everyone from
          driftworks was super helpful. i’ve heard this before from many people
          and that’s why i decided to buy through them! i ordered Stanceparts
          aircups for my car and they arrived damaged. UPS crushed the box and
          snapped a lead line out of the compressor. Chris, Alex and everyone
          else at DW were very very helpful getting me a new compressor, and
          they did it fast! thanks again guys!
        </p>
      </div>

      <img src={linesL} alt="linesL" className="absolute left-0 top-[200px]" />
      <img src={linesR} alt="linesR" className="absolute right-0 top-[200px]" />
    </div>
  );
}
