import React from "react";

import Title from "../../../components/title";
import cash from "../../../assets/cash/cash.png";
import car1 from "../../../assets/cash/car1.png";
import car2 from "../../../assets/cash/car2.png";

export default function Cash() {
  return (
    <div className="mt-24">

      <div className="flex justify-center md:mb-[-100px]">
        <img src={cash} alt="cash" className="drop-shadow-2xl" />
      </div>
      <div className="w-full h-[11px] bg-[#FF4C0042]">
      </div>

      <div className="flex flex-col justify-center items-center w-full bg-[#FF4C00] md:min-h-[436px] p-16">
        <div>
          <Title label="whoever wins can" className="text-white capitalize  origin-bottom -rotate-[2.54deg] drop-shadow-[3px_-3px_0px_rgba(0,0,0)]" />
        </div>
        <div>
          <Title label="Take cash if don’t" className="text-white capitalize origin-bottom -rotate-[2.54deg] drop-shadow-[3px_-3px_0px_rgba(0,0,0)]" />
        </div>
        <div>
          <Title label="want the car" className="text-white capitalize origin-bottom -rotate-[2.54deg] drop-shadow-[3px_-3px_0px_rgba(0,0,0)]" />
        </div>
      </div>

      <div className="w-full h-[19px] bg-[#9F2F00]">
      </div>

      <div className="flex lg:flex-row flex-col justify-center md:mt-[-150px]">
        <div className="flex justify-center">
          <img src={car1} alt="car1" />
        </div>
        <div className="flex justify-center">
          <img src={car2} alt="car2" />
        </div>
      </div>

    </div>
  );
}
