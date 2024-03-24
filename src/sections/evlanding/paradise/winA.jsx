import React from "react";

import spark from "../../../assets/paradise/spark.png";
import isuzu from "../../../assets/paradise/isuzu.png";
import tesla from "../../../assets/paradise/tesla.png";
import cash from "../../../assets/paradise/cash.png";
import wina from "../../../assets/paradise/wina.png";
import toplines from "../../../assets/paradise/toplines.png";
import curvearrow from "./curvearrow.svg";
import curvearrow2 from "./curvearrow2.svg";
import curvearrow3 from "./curvearrow3.svg";

const WinA = ({ property, className, style }) => {
  return (
    <div className="w-full mb-0 relative px-5">
      {/* <div className="bg-center bg-[url('/paradise_bg.png')] bg-no-repeat w-full mb-0 lg:mb-[100px] relative px-5"> */}
      <img src={wina} alt="wina" className="absolute top-0 max-md:top-[100px] left-0 w-full z-[-1] " />
      <img src={toplines} alt="toplines" className="absolute bottom-[-400px] right-0 z-[-1]" />
      <div className="text-center md:p-24 p-8 max-md:mt-8">
        <p className="font-['Neuething'] text-[#FF6B00] font-black text-7xl  z-[1000] relative ">
          Win A
        </p>
      </div>
      <div className="absolute left-0 top-0 right-0 z-[-1]">
        <img src={spark} alt="spark" className="w-full" />
      </div>

      <div className="flex lg:flex-row flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center max-lg:items-start w-full">
          <div className=" flex justify-center items-center  rounded-full bg-[#F5F5F5] w-[300px] h-[300px] max-md:w-[150px] max-md:h-[150px] border-dashed border-2 border-[#B5B5B5] hover:scale-105 duration-300 transition-all">
            <img src={tesla} alt="tesla" />
          </div>
          <div className="text-center relative mt-16 origin-bottom -rotate-[2.54deg] max-lg:mt-[-60px] max-lg:ml-[100px]">
            <p className="font-['Neuething'] text-4xl max-md:text-[19px] font-medium  drop-shadow-[2px_-2px_0px_rgba(255,255,255)] ">
              Brand New
            </p>
            <p className="font-['Neuething'] text-4xl max-md:text-[19px] font-black mt-4 max-md:mt-0 drop-shadow-[2px_-2px_0px_rgba(255,255,255)]">
              Tesla Model Y
            </p>
            <div className="bg-[#FF4C00A0] w-[126px] h-[126px] max-md:w-[74px] max-md:h-[74px] rounded-full absolute top-0 left-0 z-[-1]"></div>
          </div>
        </div>

        <div className="flex justify-center w-full relative">
          <div className=" relative">
            <img
              src={curvearrow}
              alt="curvearrow"
              className="mt-12 lg:mt-48 max-md:mt-[-20px] max-md:z-[1000]"
            />
            <p className="absolute md:bottom-[-50px] left-0 bottom-0 font-['Neuething'] text-4xl max-md:text-[19px] font-medium  drop-shadow-[2px_-2px_0px_rgba(255,255,255)] text-[#FF4C00]">
              OR
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center max-lg:items-end w-full max-md:mt-[-30px]">
          <div className=" flex justify-center items-center rounded-full bg-[#F5F5F5] w-[300px] h-[300px] max-md:w-[150px] max-md:h-[150px] border-dashed border-2 border-[#B5B5B5] lg:mt-24 hover:scale-105 duration-300 transition-all">
            <img src={isuzu} alt="isuzu" />
          </div>
          <div className="text-center mt-16 relative origin-bottom -rotate-[2.54deg] max-lg:mt-[-70px] max-lg:mr-[130px]">
            <p className="font-['Neuething'] text-4xl drop-shadow-[2px_-2px_0px_rgba(255,255,255)]  font-medium max-md:text-[19px]">
              Brand New
            </p>
            <p className="font-['Neuething'] text-4xl mt-4 max-md:mt-0 drop-shadow-[2px_-2px_0px_rgba(255,255,255)]  font-black max-md:text-[19px] ">
              Isuzu DMax
            </p>
            <p className="font-['Neuething'] text-4xl mt-4 max-md:mt-0 drop-shadow-[2px_-2px_0px_rgba(255,255,255)]  font-black max-md:text-[19px] ">
              X-Terrain
            </p>
            <div className="bg-[#56E6E6A0] w-[126px] h-[126px] rounded-full absolute top-0 right-[50px] z-[-1] max-md:w-[74px] max-md:h-[74px]"></div>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className=" relative">
            <img
              src={curvearrow2}
              alt="curvearrow"
              className="mt-12 lg:mt-48 max-lg:!display-none max-md:mt-0"
            />
            <img
              src={curvearrow3}
              alt="curvearrow"
              className="mt-12 lg:mt-48 lg:!display-none max-md:mt-[-30px] max-md:z-[1000]"
            />
            <p className="absolute md:bottom-[-50px] right-0 bottom-7 font-['Neuething'] text-4xl max-md:text-[19px] font-medium  drop-shadow-[2px_-2px_0px_rgba(255,255,255)] text-[#FF4C00] ">
              OR
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center max-lg:items-start w-full max-md:mt-[-50px]">
          <div className=" flex justify-center items-center rounded-full bg-[#F5F5F5] w-[300px] h-[300px] max-md:w-[150px] max-md:h-[150px] border-dashed border-2 border-[#B5B5B5] hover:scale-105 duration-300 transition-all">
            <img src={cash} alt="cash" />
          </div>
          <div className="text-center mt-16 relative origin-bottom -rotate-[2.54deg] max-lg:mt-[-50px] max-lg:ml-[100px]">
            <p className="font-['Neuething'] text-4xl drop-shadow-[2px_-2px_0px_rgba(255,255,255)] max-md:text-[19px]">
              <span className="text-4xl max-md:text-[19px] ">$50,000</span>
            </p>
            <p className="font-['Neuething'] font-black text-4xl mt-4 max-md:mt-0 drop-shadow-[2px_-2px_0px_rgba(255,255,255)] max-md:text-[19px] ">
              CASH
            </p>
            <div className="bg-[#74E486EE] w-[126px] h-[126px] rounded-full absolute top-0 left-[20px] z-[-1] max-md:w-[74px] max-md:h-[74px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinA;
