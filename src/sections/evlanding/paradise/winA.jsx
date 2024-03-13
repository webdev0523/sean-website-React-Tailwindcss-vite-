import React from "react";

import spark from "../../../assets/paradise/spark.png";
import isuzu from "../../../assets/paradise/isuzu.png";
import tesla from "../../../assets/paradise/tesla.png";
import cash from "../../../assets/paradise/cash.png";
import curvearrow from "./curvearrow.svg";
import curvearrow2 from "./curvearrow2.svg";

const WinA = ({ property, className, style }) => {
  return (
    <div className="bg-center bg-[url('/paradise_bg.png')] bg-no-repeat w-full mb-0 lg:mb-[100px] z-[-100] relative px-5">
      <div className="text-center p-24">
        <p className="font-['Neuething'] text-[#FF6B00] font-black lg:text-7xl text-4xl z-[1000] relative ">
          Win A
        </p>
      </div>
      <div className="absolute top-0 left-0 right-0 z-[-1]">
        <img src={spark} alt="spark" className="w-full" />
      </div>

      <div className="flex lg:flex-row flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className=" flex justify-center items-center rounded-full bg-[#F5F5F5] w-[300px] h-[300px] border-dashed border-2 border-[#B5B5B5]">
            <img src={tesla} alt="tesla" />
          </div>
          <div className="text-center relative mt-16 origin-bottom -rotate-[2.54deg]">
            <p className="font-['Neuething'] text-4xl text-medium  drop-shadow-[2px_-2px_0px_rgba(255,255,255)] ">
              Brand New
            </p>
            <p className="font-['Neuething'] text-4xl font-black mt-4 drop-shadow-[2px_-2px_0px_rgba(255,255,255)]">
              Tesla Model Y
            </p>
            <div className="bg-[#FF4C00] w-[126px] h-[126px] rounded-full absolute top-0 left-0 z-[-1]"></div>
          </div>
        </div>

        <div className="">
          <img
            src={curvearrow}
            alt="curvearrow"
            className="mt-12 lg:mt-48 max-[1024px]:origin-bottom  max-[1024px]:-rotate-[-60deg]"
          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className=" flex justify-center items-center rounded-full bg-[#F5F5F5] w-[300px] h-[300px] border-dashed border-2 border-[#B5B5B5] mt-24">
            <img src={isuzu} alt="isuzu" />
          </div>
          <div className="text-center mt-16 relative origin-bottom -rotate-[2.54deg]">
            <p className="font-['Neuething'] text-4xl drop-shadow-[2px_-2px_0px_rgba(255,255,255)]  text-medium">
              Or Brand New
            </p>
            <p className="font-['Neuething'] text-4xl mt-4 drop-shadow-[2px_-2px_0px_rgba(255,255,255)]  font-black ">
              Isuzu DMax
            </p>
            <div className="bg-[#56E6E6] w-[126px] h-[126px] rounded-full absolute top-0 right-[50px] z-[-1]"></div>
          </div>
        </div>

        <div>
          <img
            src={curvearrow2}
            alt="curvearrow"
            className="mt-12 lg:mt-48 max-[1024px]:origin-bottom  max-[1024px]:-rotate-[-120deg]"
          />
        </div>

        <div className="flex flex-col justify-center items-center max-[1024px]:mt-48">
          <div className=" flex justify-center items-center rounded-full bg-[#F5F5F5] w-[300px] h-[300px] border-dashed border-2 border-[#B5B5B5]">
            <img src={cash} alt="cash" />
          </div>
          <div className="text-center mt-16 relative origin-bottom -rotate-[2.54deg]">
            <p className="font-['Neuething'] text-4xl drop-shadow-[2px_-2px_0px_rgba(255,255,255)]">
              Or <span className="text-4xl ">50000</span>
            </p>
            <p className="font-['Neuething'] font-black text-4xl mt-4 drop-shadow-[2px_-2px_0px_rgba(255,255,255)] ">
              USD CASH
            </p>
            <div className="bg-[#74E486] w-[126px] h-[126px] rounded-full absolute top-0 left-[50px] z-[-1]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinA;
