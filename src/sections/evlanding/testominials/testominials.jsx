import React, { useState } from "react";

import LeftButton from "../../../components/icons/leftButton";
import RightButton from "../../../components/icons/rightButton";
import Quote from "../../../components/icons/quote";

import SwiperMobile from "./swiperMobile";
import SwiperDesktop from "./swiperDesktop";

const cards = [
  {
    id: 1,
    userName: "Lou Anderson",
    review: "Loveliest guys creating a great community. I'd just moved into a new place and won $300 to put towards bills, which was super handy! Would recommend signing up - you've gotta be in it to win it!"
  },
  {
    id: 2,
    userName: "Switch Stephens",
    review: "honesty best bunch of guys running this, they called me and told me I had won 1500 and it was that little boost I needed to get my through the month I can't thank you boys enough"
  },
  {
    id: 3,
    userName: "MeriaNa Tjhia",
    review: "I am very happy because I won $500 gift card from the giveaway. Thank you so much, I am very lucky"
  },
  {
    id: 4,
    userName: "Lou Anderson",
    review: "Loveliest guys creating a great community. I'd just moved into a new place and won $300 to put towards bills, which was super handy! Would recommend signing up - you've gotta be in it to win it!"
  },
  {
    id: 5,
    userName: "Switch Stephens",
    review: "honesty best bunch of guys running this, they called me and told me I had won 1500 and it was that little boost I needed to get my through the month I can't thank you boys enough"
  },
  {
    id: 6,
    userName: "Steven Miller",
    review: "I recently won $1000 iin a raffle hosted by Winlads last Sunday and I wanted to leave a good review for them. The process was smooth and easy, and the staff was friendly and professional. I highly recommend Winlads to anyone looking to try their luck and potentially win big! Thank you for the amazing opportunity and for making my Sunday a memorable one."
  },
  {
    id: 7,
    userName: "Michael Brady",
    review: "Check them out amazing giveaways!! affordable entries :) would recommend"
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
              className="hover:scale-105 duration-300 hover:cursor-pointer transition-all"
            >
              <LeftButton />
            </span>
            &nbsp; &nbsp;
            <span
              onClick={() => swiperInstance.slideNext()}
              className="hover:scale-105 duration-300 hover:cursor-pointer transition-all"
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
