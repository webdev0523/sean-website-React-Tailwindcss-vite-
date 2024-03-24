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
          <div className="absolute right-0 bottom-[-70px] max-md:bottom-4 w-full flex justify-end">
            <img src={curve} alt="curve" className="max-md:w-[167px] " />
          </div>
        </div>
      </div>

      <div className="px-0 md:px-10 mx-10 mt-10">
        <p className="font-Outfit text-[22px] text-center max-md:text-sm max-md:font-light max-md:leading-5">
          Welcome to Winlads, where rewards, excitement and pleasure meet in the middle. We are here to reward our people – with weekly minor draws and monthly major draws, the chances to win will just keep coming and coming. For our members we offer accumulating packages, meeting your entries will keep multiplying EVERY SINGE MONTH.
          <br/><br/>
          Not into the membership vibe? We have you covered. We offer one of packages to all and prizes to cater to all. Join us at Winlads and find out for yourself how incredible the opportunities to win are.
        </p>
      </div>

      <img src={linesL} alt="linesL" className="absolute left-0 top-[200px]" />
      <img src={linesR} alt="linesR" className="absolute right-0 top-[200px]" />
    </div>
  );
}
