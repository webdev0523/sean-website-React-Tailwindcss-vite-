import React from "react";

import logo from "../../../assets/hero/Logo.png";
import cash from "../../../assets/hero/dasdsada 3 1.png";
import car1 from "../../../assets/hero/image 181.png";
import car2 from "../../../assets/hero/image 179.png";
import tape from "../../../assets/hero/Group.png";
import lines from "../../../assets/hero/Union.png";
import { Timer1 } from "../../../components/Timer1";
import Vector from "./vector";

export default function Hero() {
  const deadline = new Date("2/23/2025");

  return (
    <div className="bg-[url('/hero/Mask_group.png')] bg-center bg-no-repeat bg-cover bg-[length:100%_100%] relative  max-md:overflow-hidden">
      <img src={lines} alt="lines" className="absolute top-0 left-0" />

      <div className="flex sm:flex-row flex-col justify-center sm:justify-between p-8 md:p-[78px]">
        <div className="flex max-[700px]:justify-center">
          <img src={logo} alt="logo" className="w-[160px] h-[30px]" />
        </div>
        <div>
          <Timer1 deadline={deadline} />
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
            <Vector />
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
