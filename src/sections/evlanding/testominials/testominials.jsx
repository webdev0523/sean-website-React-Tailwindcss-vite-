import React, { useState } from "react";

import LeftButton from "../../../components/icons/leftButton";
import RightButton from "../../../components/icons/rightButton";
import Quote from "../../../components/icons/quote";

import SwiperMobile from "./swiperMobile";
import SwiperDesktop from "./swiperDesktop";

const cards = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

export default function Testominials() {
  const [swiperInstance, setSwiperInstance] = useState();

  return (
    <div className="flex max-[1024px]:flex-col justify-center mt-52 max-md:mt-5 min-[780px]:mx-24 mx-5">
      <div className="min-[1024px]:p-16">
        <div className="text-center">
          <div className="mt-8 flex max-[1024px]:justify-center">
            <Quote />
          </div>
          <div>
            <p className="font-['Axiforma'] font-[950] italic text-4xl md:text-7xl mt-8">
              Testominials
            </p>
          </div>
          <div className="flex max-[1024px]:justify-center mt-8 max-md:!display-none ">
            <span
              onClick={() => swiperInstance.slidePrev()}
              className="hover:scale-105 hover:cursor-pointer transition-all"
            >
              <LeftButton />
            </span>
            &nbsp; &nbsp;
            <span
              onClick={() => swiperInstance.slideNext()}
              className="hover:scale-105 hover:cursor-pointer transition-all"
            >
              <RightButton />
            </span>
          </div>
        </div>
      </div>

      {/* desktop part */}
      <SwiperDesktop cards={cards} setSwiperInstance={setSwiperInstance} />

      {/* mobile part */}
      <SwiperMobile cards={cards} />
    </div>
  );
}
