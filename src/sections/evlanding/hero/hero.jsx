import React from "react";

import logo from "../../../assets/hero/Logo.png";
import cash from "../../../assets/hero/dasdsada 3 1.png";
import car1 from "../../../assets/hero/image 181.png";
import car2 from "../../../assets/hero/image 179.png";
import tape from "../../../assets/hero/Group.png";
import lines from "../../../assets/hero/Union.png";
import vector from "../../../assets/hero/Vector.svg";

export default function Hero() {
  const deadline = new Date("2/23/2025");

  return (
    <div className="bg-[url('/hero/Mask_group.png')] bg-center bg-no-repeat bg-cover bg-[length:100%_100%] relative  max-md:overflow-hidden">
      <img src={lines} alt="lines" className="absolute top-0 left-0" />

      <div className="flex sm:flex-row flex-col justify-center sm:justify-between p-8 md:p-[78px]">
        <div className="flex max-[700px]:justify-center">
          <img src={logo} alt="logo" className="w-[160px] h-[30px]" />
        </div>
        <div className="flex justify-evenly items-center bg-black rounded-full md:min-w-[312px] h-[62px] max-[700px]:mt-8">
          <div className="text-center">
            <p className="font-['Neuething] text-3xl font-semibold text-white">18</p>
            <p className="font-['Neuething] text-[6px] font-medium text-white">DAYS</p>
          </div>
          <div className="text-center">
            <p className="font-['Neuething] text-3xl font-semibold text-white">45</p>
            <p className="font-['Neuething] text-[6px] font-medium text-white">HOURS</p>
          </div>
          <div className="text-center">
            <p className="font-['Neuething] text-3xl font-semibold text-white">27</p>
            <p className="font-['Neuething] text-[6px] font-medium text-white">MINUTES</p>
          </div>
          <div className="text-center">
            <p className="font-['Neuething] text-3xl font-semibold text-white">36</p>
            <p className="font-['Neuething] text-[6px] font-medium text-white">SECONDS</p>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-evenly">
        <div className=" px-5 lg:px-0">
          <div className=" flex justify-center">
            <div className="origin-center -rotate-[3.33deg] max-lg:mt-8">
              <p className="text-base mb-4 leading-4 font-['Neuething'] font-normal drop-shadow-[3px_-3px_0px_rgba(255,255,255)] max-md:tracking-normal">WELCOME TO OUR</p>
              <p className="text-5xl md:text-8xl max-md:leading-9  text-[#FF4C00] font-['Neuething'] font-extrabold drop-shadow-[3px_-3px_0px_rgba(255,255,255)] max-md:tracking-normal">BIGGEST </p>
              <p className="text-4xl md:text-8xl max-md:leading-12  text-black font-['Neuething'] font-extrabold drop-shadow-[3px_-3px_0px_rgba(255,255,255)] max-md:tracking-normal">GIVEAWAY </p>
              <p className="text-4xl md:text-8xl max-md:leading-12  text-black font-['Neuething'] font-extrabold text-center pr-4 drop-shadow-[3px_-3px_0px_rgba(255,255,255)] max-md:tracking-normal">YET! </p>
            </div>
          </div>

          {/*  */}
          <div className="relative mt-8" >
            {/* <img src={vector} alt="vector" className="absolute bottom-[150px] left-[80px] w-100%" /> */}
            <svg className="absolute bottom-[100px] left-[-50px] max-md:left-[100px] max-md:bottom-[50px] w-100% lg:w-[878px]" viewBox="0 0 878 572" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.15" d="M-292 556.142L292.673 572L-286.84 494.011L-292 556.142ZM873.382 496.632L293.522 572L878 554.331L873.382 496.632ZM836.286 355.662L293.396 571.92C293.396 571.92 293.41 571.89 293.41 571.87L808.273 296.252L765.071 228.298L293.41 571.83C293.396 571.81 293.396 571.79 293.396 571.79L723.093 177.653L664.243 122.535L293.341 571.73C293.341 571.73 293.341 571.67 293.327 571.67L610.86 83.8559L540.048 44.9965L293.285 571.64C293.271 571.62 293.243 571.62 293.229 571.6L478.681 20.7044L400.386 0.554276L293.174 571.6C293.16 571.6 293.16 571.58 293.16 571.58L334.874 -7.81991L253.978 -8L293.063 571.58C293.035 571.58 293.021 571.6 293.007 571.6L188.424 0.0740356L110.018 19.8739L292.951 571.6C292.937 571.62 292.91 571.62 292.896 571.64L48.5528 43.8859L-22.4258 82.4452L292.868 571.69C292.854 571.69 292.854 571.73 292.84 571.75L-75.9763 120.864L-135.063 175.722L292.798 571.79C292.798 571.81 292.784 571.81 292.784 571.83L-177.305 226.187L-220.827 293.921L292.771 571.87C292.771 571.89 292.784 571.91 292.784 571.91L-249.09 353.221L-274.294 429.589L292.812 571.98C292.812 571.98 292.826 571.98 292.826 572H293.369C293.383 571.98 293.382 571.98 293.382 571.98L861.142 432.15L836.286 355.662Z" fill="url(#paint0_radial_719_1116)" fillOpacity="0.42" />
              <defs>
                <radialGradient id="paint0_radial_719_1116" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(301.478 481.622) rotate(-91.665) scale(291.789 599.903)">
                  <stop stopColor="#060606" />
                  <stop offset="1" stopColor="#060606" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
            <div className="flex max-md:justify-center ">
              <div className="relative ">
                <img src={tape} alt="tape" className="absolute max-md:w-[133px] right-[-180px] max-md:right-[-80px] top-0" />
                <img src={cash} alt="cash" className="max-md:w-[200px] lg:z-[100] relative " />
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex justify-center max-md:overflow-hidden ">
          <div className="max-md:flex max-md:justify-center">
            <img src={car1} alt="car1" className="car1 max-md:w-[224px] max-md:h-[128px]" />
            <img src={car2} alt="car2" className="md:mt-[-74px] max-md:w-[300px] max-md:h-[186px] max-md:ml-[-100px]" />
          </div>
        </div>
      </div>


    </div>
  );
}
