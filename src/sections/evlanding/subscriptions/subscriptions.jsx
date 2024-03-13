import React, { useEffect, useRef } from "react";
import Subscription from "./subscription";
import Title from "../../../components/title";

import useInteractionObserver from "../../../hooks/use-interaction-observer";

import curve from "../../../assets/subscription/curve.png";
import bg1 from "../../../assets/subscription/bg1.png";
import bg2 from "../../../assets/subscription/bg2.png";

export const properties = [
  {
    borderColor: "border-[#5EC1DC]",
    backgroundColor: "bg-[#EFF9FB]",
    title: "Platinum",
    number: "10",
    price: "49.99",
    referral: "10%",
    discounts: "Partner Store Discounts: ",
    discountsPercent: "10%-15%",
    buttonColor: "bg-[#5EC1DC]",
  },
  {
    borderColor: "border-[#FE705C]",
    backgroundColor: "bg-[#FFF1EF]",
    title: "Boomer",
    number: "3",
    price: "19.99",
    referral: "5%",
    discounts: "Partner Store Discounts: ",
    discountsPercent: "10%",
    buttonColor: "bg-[#FE705C]",
  },
  {
    borderColor: "border-[#FFBC0B]",
    backgroundColor: "bg-[#FFF8E7]",
    title: "Gold",
    number: "25",
    price: "100",
    referral: "25%",
    discounts: "Be Elighible To Apply For Winlad GOLD Card",
    discountsPercent: "",
    buttonColor: "bg-[#FFBC0B]",
  },
  {
    borderColor: "border-[#1A1D21]",
    backgroundColor: "bg-[#F1F1F1]",
    title: "Black",
    number: "150",
    price: "500",
    referral: "50%",
    discounts: "Customized Partner Store Discount Rates Ranging Upto 20%",
    discountsPercent: "",
    buttonColor: "bg-[#1A1D21]",
  },
  {
    borderColor: "border-[#296FB8]",
    backgroundColor: "bg-[#EAF1F8]",
    title: "Starter",
    number: "1",
    price: "49.99",
    referral: "10%",
    discounts: "Partner Store Discounts: ",
    discountsPercent: "10%-15%",
    buttonColor: "bg-[#296FB8]",
  },
];

export default function Subscriptions() {
  const targetRef = useRef(null);

  const [setTarget, isIntersecting] = useInteractionObserver({
    threshold: 0.2,
  });

  useEffect(() => {
    setTarget(targetRef.current);
  }, []);

  return (
    <div ref={targetRef} className="relative">
      <img src={bg1} alt="bg1" className="absolute right-0 top-[-200px]" />

      <div className="flex justify-center my-[100px] relative">
        <div className="relative ">
          {/* <p className="text-5xl font-black z-[100] relative leading-[64px]"> */}
          <Title label="One time Entry Options" className="origin-bottom -rotate-[2.54deg]" />
          {/* </p> */}
          <img src={curve} alt="curve" className="absolute right-0 top-7" />
        </div>
      </div>

      <div
        className={`flex flex-row gap-4 transition-all justify-center flex-wrap max-w-[1200px] mx-auto duration-[2000ms] ${isIntersecting ? "opacity-1" : "opacity-0"
          }`}
      >
        {properties.map((property, index) => (
          <Subscription
            key={index}
            property={property}
            className="z-[1000]"
          />
        ))}
        <img src={bg2} alt="bg2" className="absolute left-0 bottom-0" />
      </div>
    </div>
  );
}
