import React from "react";
import check from "../../../assets/check.svg";
import star from "../../../assets/star.svg";

const Subscription = ({ property, className, style }) => {
  return (
    <div
      style={style}
      className={`md:hover:translate-y-3 duration-300 md:hover:opacity-90 ${className}`}
    >
      {property.title === "Platinum" ? (
        <div className="w-[165px] max-md:w-[150px] h-[36px] ml-[88px] max-md:ml-[77px]  flex items-center pl-6 text-white  bg-black rounded-t-2xl">
          <img src={star}></img>
          <p>Most Popular</p>
        </div>
      ) : (
        <div className="w-[165px] h-[36px] ml-[88px]"></div>
      )}

      <div
        className={`w-[342px] md:h-[404px] max-md:w-[299px] rounded-2xl ${property.backgroundColor} ${property.borderColor} border-2 `}
      >
        <div className="flex items-stretch pb-2">
          <div className="w-2/4 ml-8 mt-8 text-left">
            <h1 className="text-2xl text font-extrabold">{property.title}</h1>
            <p className="text-2xl font-light">Tier</p>
          </div>
          <div className="w-2/4 ml-8 mt-8 text-left">
            <h1 className="text-[35px] font-sans font-black">
              <span className="font-black">{property.number}</span>{" "}
              <span className="text-[15px] font-light">Free</span>
            </h1>
          </div>
        </div>

        <div className="p-[9px] bg-white">
          <p className="text-center font-medium text-xs bg-white/[.46] text-[#282C33]">
            Accumulation Entries
          </p>
        </div>
        <div className="pl-[29px] text-sm h-[105px] pt-[9px]">
          <div className="flex items-start py-1">
            <img src={check}></img>
            <p>
              <span className="font-bold">${property.price}</span> Per Month
            </p>
          </div>
          <div className="flex items-start py-1">
            <img src={check}></img>
            <p>
              Referral Commission:{" "}
              <span className="font-bold">{property.referral}</span>
            </p>
          </div>
          <div className="flex items-start py-1">
            <img src={check}></img>
            <p>
              {property.discounts}
              <span className="font-bold">{property.discountsPercent}</span>
            </p>
          </div>
        </div>
        <div className="mt-[23px] ml-[14px] max-md:m-2">
          <button className=" border border-black/[.13] rounded-lg  text-sm  px-[116px] font-normal py-[14px] max-md:text-xs max-md:px-5 max-md:w-full ">
            View More...
          </button>
        </div>
        <div className="mt-[19px] ml-[14px] max-md:m-2">
          <button
            className={`border hover:opacity-75 hover:-translate-y-0.5 border-black/[.13] rounded-lg text-white  text-sm  px-[105px] font-bold py-[14px] max-md:text-xs max-md:px-5 max-md:w-full ${property.buttonColor}`}
          >
            CHOOSE PLAN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
