import React from "react";

import Title from "../../../components/title";
import cash from "../../../assets/cash/cash.png";
import car1 from "../../../assets/cash/car1.png";
import car2 from "../../../assets/cash/car2.png";

export default function Cash() {
  return (
    <div className="mt-24">

      <div className="flex justify-center mb-[-100px] max-md:mb-[-70px] mx-5">
        <img src={cash} alt="cash" className="drop-shadow-2xl" />
      </div>
      <div className="w-full h-[11px] bg-[#FF4C0042]">
      </div>

      <div className="flex flex-col justify-center items-center w-full bg-[#FF4C00] md:min-h-[436px] p-16 max-md:min-h-[351px]">
        <div>
          <Title label="whoever wins can" className="text-white capitalize  origin-bottom -rotate-[2.54deg] drop-shadow-[3px_-3px_0px_rgba(0,0,0)] max-md:text-2xl" />
        </div>
        <div>
          <Title label="Take cash if don’t" className="text-white capitalize origin-bottom -rotate-[2.54deg] drop-shadow-[3px_-3px_0px_rgba(0,0,0)] max-md:text-2xl" />
        </div>
        <div>
          <Title label="want the car" className="text-white capitalize origin-bottom -rotate-[2.54deg] drop-shadow-[3px_-3px_0px_rgba(0,0,0)] max-md:text-2xl" />
        </div>
      </div>

      <div className="w-full h-[19px] bg-[#9F2F00]">
      </div>

      <div className="flex justify-center mt-[-150px] max-md:mt-[-150px] overflow-hidden">
        <div className="flex justify-center">
          <img src={car1} alt="car1" className="max-md:min-w-[300px]" />
        </div>
        <div className="flex justify-center">
          <img src={car2} alt="car2" className="max-md:min-w-[300px]" />
        </div>
      </div>

    </div>
  );
}
