import React, { useRef, useEffect } from "react";
import Title from "../../../components/title";
import Subscription from "../subscriptions/subscription";
import { properties } from "../subscriptions/subscriptions";

import useInteractionObserver from "../../../hooks/use-interaction-observer";
import bgImg from "../../../assets/images/AdobeStock_288590703 3.jpg";

export default function FeelLike() {
  const targetRef = useRef(null);

  const [setTarget, isIntersecting] = useInteractionObserver({
    threshold: 0.2,
  });

  useEffect(() => {
    setTarget(targetRef.current);
  }, []);

  return (
    <div className="md:p-0 p-5" ref={targetRef}>
      <div className="flex justify-center my-[100px] relative">
        <div className="relative">
          <div className="absolute sm:right-[-10%] right-[0%] w-[199px] h-[74px] bg-[#56DFE6] origin-bottom -rotate-6"></div>
          {/* <p className="text-5xl font-black z-[100] relative leading-[64px]"> */}
            {/* <span className="drop-shadow-[3px_-3px_0px_rgba(255,255,255)] ">
          How To Enter
        </span> */}
            <Title label="Feel like getting an one off entry?" />
          {/* </p> */}
        </div>

        <img
          className="absolute top-0 left-0 right-0 z-[-1] -translate-y-1/2 w-full"
          src={bgImg}
        />
        {/*         
        <div className="a">
          <img src={bgImg} />
        </div> */}
      </div>

      <div
        className={`flex flex-row gap-4  justify-center flex-wrap max-w-[1200px] mx-auto duration-[2000ms] ${
          isIntersecting ? "opacity-1" : "opacity-0"
        }`}
      >
        {properties.map((property, index) => (
          <Subscription key={index} property={property} />
        ))}
      </div>

    </div>
  );
}
