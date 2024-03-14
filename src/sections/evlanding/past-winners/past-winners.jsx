import React, { useRef, useEffect } from "react";

import Title from "../../../components/title";
import Winnder from "./winner";

import useInteractionObserver from "../../../hooks/use-interaction-observer";

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
import Icon4 from "../../../components/icons/icon4";

const winners = [
  { url: winner1 },
  { url: winner2 },
  { url: winner3 },
  { url: winner4 },
  { url: winner5 },
  { url: winner6 },
];

const winners1 = [
  { url: winner1 },
  { url: winner2 },
  { url: winner3 },
  { url: winner4 },
  { url: winner5 },
  { url: winner6 },
  { url: winner7 },
  { url: winner8 },
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
      <div className="flex justify-center mt-[200px] max-md:my-10">
        <Icon4 />
      </div>
      <div className="flex justify-center my-[100px] max-md:mt-0 relative">
        <div className="relative">
          <Title
            label="Past winners"
            className="origin-bottom -rotate-[2.54deg]"
          />
          <div className="absolute right-0 top-7 w-full flex justify-end">
            <img src={curve} alt="curve" className="max-md:w-[167px] " />
          </div>
        </div>

        <img
          className="absolute top-0 left-0 w-[50vw] z-[-1] -translate-y-2/3"
          src={linesL}
        />
        <img
          src={bgman}
          alt="bgman"
          className="absolute bottom-[-200px]  right-0 z-[-1] max-md:bottom-[-100px]  max-md:mr-[-100px]"
        />
        <img
          src={linesR}
          alt="linesR"
          className="absolute bottom-[-200px] right-0 z-[-1]"
        />
      </div>

      {/* grid-cols-1 sm:grid-cols-2 md: */}
      <div
        className={`max-md:!display-none grid grid-cols-3 gap-4 max-w-[1200px] mx-auto duration-[2000ms] relative max-md:grid-cols-4 max-md:gap-1 md:p-4 ${isIntersecting ? "opacity-1" : "opacity-0"
          }`}
      >
        {winners.map((w, index) => (
          <Winnder key={index} data={w} />
        ))}
      </div>

      {/* mobile responsive */}
      <div
        className={`md:!display-none grid grid-cols-3 gap-4 max-w-[1200px] mx-auto duration-[2000ms] relative max-md:grid-cols-4 max-md:gap-1 md:p-4 ${isIntersecting ? "opacity-1" : "opacity-0"
          }`}
      >
        {winners1.map((w, index) => (
          <Winnder key={index} data={w} />
        ))}
      </div>
      {/* end mobile responsive */}

      <img
        className="absolute bottom-0 right-0 w-[50vw] z-[-1] translate-y-1/2"
        src={bgImg1}
      />
      <img className="absolute bottom-[-300px] left-0 z-[-1]" src={lines} />
    </div>
  );
}
