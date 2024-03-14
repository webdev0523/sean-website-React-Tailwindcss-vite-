import React, { useRef, useEffect } from "react";
import Title from "../../../components/title";
import Subscription from "../subscriptions/subscription";
import { properties } from "../subscriptions/subscriptions";

import useInteractionObserver from "../../../hooks/use-interaction-observer";

import Icon4 from "../../../components/icons/icon4";

import bgImg from "../../../assets/images/AdobeStock_288590703 3.jpg";
import curve from "../../../assets/subscription/curve.png";

export default function FeelLike() {
  const targetRef = useRef(null);

  const [setTarget, isIntersecting] = useInteractionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    setTarget(targetRef.current);
  }, []);

  return (
    <div className="md:p-0 p-5" ref={targetRef}>
      <div className="flex justify-center my-[100px] relative">
        <div className="relative">
          {/* <p className="text-5xl font-black z-[100] relative leading-[64px]"> */}
          <Title
            label="Feel like getting"
            className="origin-bottom -rotate-[2.54deg]"
          />
          <Title
            label="an one off entry?"
            className="origin-bottom -rotate-[2.54deg]"
          />
          {/* </p> */}
          <img
            src={curve}
            alt="curve"
            className="absolute right-0 bottom-[-60px] md:w-[347px]"
          />
        </div>

        {/* <img
          className="absolute top-0 left-0 right-0 z-[-1] -translate-y-1/2 w-full"
          src={bgImg}
        /> */}
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

      <div className="flex justify-center mt-[200px]">
        <Icon4 />
      </div>
    </div>
  );
}
