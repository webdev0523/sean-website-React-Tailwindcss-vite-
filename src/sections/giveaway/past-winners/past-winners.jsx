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

const winners = [
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
    threshold: 0.5,
  });

  useEffect(() => {
    setTarget(targetRef.current);
  }, []);

  return (
    <div ref={targetRef} className="md:p-0 p-8 relative">
      <div className="flex justify-center my-[100px] relative">
        <div className="relative">
          <div className="absolute sm:right-[-10%] right-[0%] w-[199px] h-[74px] bg-[#56DFE6] origin-bottom -rotate-6"></div>
          <p className="text-5xl font-black z-[100] relative leading-[64px]">
            <Title label="Past winners" />
          </p>
        </div>

        <img
          className="absolute top-0 left-0 w-[50vw] z-[-1] -translate-y-2/3"
          src={bgImg}
        />
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-[1200px] mx-auto duration-[2000ms] ${
          isIntersecting ? "opacity-1" : "opacity-0"
        }`}
      >
        {winners.map((w) => (
          <Winnder data={w} />
        ))}
      </div>

      <img
        className="absolute bottom-0 right-0 w-[50vw] z-[-1] translate-y-1/2"
        src={bgImg1}
      />
    </div>
  );
}
