import React, { useRef, useEffect } from "react";

import Title from "../../../components/title";
import Winnder from "./winner";

import useInteractionObserver from "../../../hooks/use-interaction-observer";

import bgImg from "../../../assets/images/Union.png";
import bgImg1 from "../../../assets/images/Union (1).png";

import winner1 from "../../../assets/images/Rectangle 34624628.jpg";
import winner2 from "../../../assets/images/Rectangle 34624629.jpg";
import winner3 from "../../../assets/images/Rectangle 34624630.jpg";
import winner4 from "../../../assets/images/Rectangle 34624631.jpg";
import winner5 from "../../../assets/images/Rectangle 34624632.jpg";
import winner6 from "../../../assets/images/Rectangle 34624628.jpg";
import winner7 from "../../../assets/images/Rectangle 34624634.jpg";
import winner8 from "../../../assets/images/Rectangle 34624635.jpg";
import curve from "../../../assets/subscription/curve.png";
import bgman from "../../../assets/pastwinners/bg.png";
import linesL from "../../../assets/pastwinners/linesL.png";
import linesR from "../../../assets/pastwinners/linesR.png";
import lines from "../../../assets/pastwinners/lines.svg";

const winners = [
  { url: winner1 },
  { url: winner2 },
  { url: winner3 },
  { url: winner4 },
  { url: winner5 },
  // { url: winner6 },
  { url: winner7 },
  // { url: winner8 },
];

export default function PastWinners() {
  const targetRef = useRef(null);

  const [setTarget, isIntersecting] = useInteractionObserver({
    threshold: 0.2,
  });

  useEffect(() => {
    setTarget(targetRef.current);
  }, []);

  return (
    <div ref={targetRef} className="md:p-0 p-8 relative">
      <div className="flex justify-center my-[100px] relative">
        <div className="relative">
          {/* <p className="text-5xl font-black z-[100] relative leading-[64px]"> */}
          <Title
            label="Past winners"
            className="origin-bottom -rotate-[2.54deg]"
          />
          {/* </p> */}
          <img
            src={curve}
            alt="curve"
            className="absolute right-0 top-7 md:w-[347px]"
          />
        </div>

        <img
          className="absolute top-0 left-0 w-[50vw] z-[-1] -translate-y-2/3"
          src={linesL}
        />
        <img
          src={bgman}
          alt="bgman"
          className="absolute bottom-[-200px] right-0 z-[-1]"
        />
        <img
          src={linesR}
          alt="linesR"
          className="absolute bottom-[-200px] right-0 z-[-1]"
        />
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[1200px] mx-auto duration-[2000ms] relative ${
          isIntersecting ? "opacity-1" : "opacity-0"
        }`}
      >
        {winners.map((w, index) => (
          <Winnder key={index} data={w} />
        ))}
      </div>

      <img
        className="absolute bottom-0 right-0 w-[50vw] z-[-1] translate-y-1/2"
        src={bgImg1}
      />
      <img className="absolute bottom-[-300px] left-0 z-[-1]" src={lines} />
    </div>
  );
}
