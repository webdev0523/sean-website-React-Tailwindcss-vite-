import React, { useRef, useEffect } from "react";

import Title from "../../../components/title";
import Subscription from "../subscriptions/subscription";
import { properties } from "../subscriptions/subscriptions";
import useInteractionObserver from "../../../hooks/use-interaction-observer";
import curve from "../../../assets/subscription/curve.png";
import MobileResponsive from "./mobileResponsive";

export default function FeelLike() {
  const targetRef = useRef(null);

  const [setTarget, isIntersecting] = useInteractionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    setTarget(targetRef.current);
  }, []);

  return (
    <div className="" ref={targetRef}>
      <div className="flex justify-center my-[100px] relative max-md:my-12">
        <div className="relative">
          <Title
            label="Feel like getting"
            className="origin-bottom -rotate-[2.54deg]"
          />
          <Title
            label="an one off entry?"
            className="origin-bottom -rotate-[2.54deg]"
          />
          <div className="absolute right-0 top-[100px] max-md:top-12 w-full flex justify-end">
            <img src={curve} alt="curve" className="max-md:w-[167px] " />
          </div>
        </div>
      </div>

      <div
        className={`max-md:!display-none flex flex-row gap-4  justify-center flex-wrap max-w-[1200px] mx-auto duration-[2000ms] ${isIntersecting ? "opacity-1" : "opacity-0"
          }`}
      >
        {properties.map((property, index) => (
          <Subscription key={index} property={property} />
        ))}
      </div>


      {/* mobile responsive */}
      <MobileResponsive isIntersecting={isIntersecting} />
      {/* end mobile responsive */}

    </div>
  );
}
