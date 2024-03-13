import React from "react";
import ImgPanel from "./ImgPanel";
import Title from "../../../components/title";
import Panel from "./panel";

import img1 from "../../../assets/images/1.jpg";
import img2 from "../../../assets/images/2.jpg";
import img3 from "../../../assets/images/3.jpg";
import img4 from "../../../assets/images/4.jpg";
import img5 from "../../../assets/images/5.jpg";

const Winlads = [
  { url: img1, left: 10, top: 40, rotate: -10 },
  { url: img2, left: 30, top: 30, rotate: 10 },
  { url: img4, left: 45, top: 53, rotate: -20 },
  { url: img3, left: 65, top: 40, rotate: -10 },
  { url: img5, left: 88, top: 30, rotate: 6 },
];

export default function WhatIsWinlads() {
  return (
    <div>
      {/* <div className="flex items-center justify-center mb-6">
        <div className="relative">
          <div className="absolute right-[-10%] w-[235px] h-[65px] bg-[#FF6C2E] origin-bottom -rotate-6"></div>
          <p className='text-5xl font-black font-["Neuething"] z-[100] relative'>
            What Is Winlads
          </p>
        </div>
      </div> */}

      <div className="flex justify-center my-[60px] md:my-[100px]">
        <div className="relative">
          <div className="absolute sm:right-[-10%] right-[0%] w-[199px] h-[74px] bg-[#FF6B00] origin-bottom -rotate-6"></div>
          <p className="text-5xl font-black z-[100] relative leading-[64px]">
            <Title label="What Is Winlads" />
          </p>
        </div>
      </div>

      <div className="px-0 md:px-10 mx-10 mt-10">
        <p className="font-Outfit text-[22px] text-center capitalize">
          Everyone from driftworks was super helpful. i’ve heard this before
          from many people and that’s why i decided to buy through them! i ordered Stanceparts
          aircups for my car and they arrived damaged. UPS crushed the
          box and snapped a lead line out of the compressor. Chris, Alex and everyone else at DW were very very helpful getting me a
          new compressor, and they did it fast! thanks again guys! Everyone from driftworks was super helpful. i’ve heard this
          before from many people and that’s why i decided to buy through them! i ordered Stanceparts aircups for my car and
          they arrived damaged. UPS crushed the box and snapped a lead line out of the compressor. Chris, Alex and everyone else at DW were
          very very helpful getting me a new compressor, and they did it fast! thanks again guys!
        </p>
      </div>

      <div className="h-auto px-4 flex gap-4 md:min-h-[70vw] flex-col mt-8 relative max-w-full overflow-hidden">
        {/* {[0, 1, 2, 3, 4].map((num) => (
          <ImgPanel order={num} key={num} />
        ))} */}
        {Winlads.map((d) => (
          <Panel data={d} />
        ))}
      </div>
    </div>
  );
}
