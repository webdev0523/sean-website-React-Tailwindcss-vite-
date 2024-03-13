import React, { useEffect, useRef } from "react";
import Subscription from "./subscription";
import Title from "../../../components/title";

import useInteractionObserver from "../../../hooks/use-interaction-observer";

import bgImg from "../../../assets/images/AdobeStock_288590703 2.png";

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
    threshold: 0.5,
  });

  useEffect(() => {
    setTarget(targetRef.current);
  }, []);

  return (
    <div ref={targetRef}>
      {/* <div className="text-center mb-[91px]">
        <div className="text-[47px] font-black text-[#060606] font-sans z-[100]">
          Subscriptions
        </div>
        <div className="w-[199px] h-[74px] -rotate-[6.86deg] absolute bg-[#FF6B00] inset-x-1/2 top-10"></div>
      </div> */}

      <div className="flex justify-center my-[100px] relative">
        <div className="relative ">
          <div className="absolute sm:right-[-10%] right-[0%] w-[199px] h-[74px] bg-[#FF6B00] origin-bottom -rotate-6"></div>
          <p className="text-5xl font-black z-[100] relative leading-[64px]">
            <Title label="Subscriptions" />
          </p>
        </div>

        {/* <img
          className="absolute top-0 left-0 right-0 z-[-1] -translate-y-1/2 w-full"
          src={bgImg}
        /> */}
      </div>

      <div
        className={`flex flex-row gap-4 transition-all justify-center flex-wrap max-w-[1200px] mx-auto duration-[2000ms] ${
          isIntersecting ? "opacity-1" : "opacity-0"
        }`}
      >
        {properties.map((property, index) => (
          <Subscription
            key={index}
            property={property}
            // className={`${
            //   isIntersecting ? "opacity-1" : "opacity-0"
            // } ease-in duration-3000  transition-all`}
            // style={{
            //   animtionDuration: 4000,
            //   animationDelay: `${index * 1000}ms`,
            //   opacity: `${isIntersecting ? "1" : "0"}`,
            // }}
          />
        ))}
      </div>
    </div>
  );
}
