import React from "react";

import Title from "../../../components/title";

import home1 from "../../../assets/images/home1.png";
import home2 from "../../../assets/images/home2.png";
import home3 from "../../../assets/images/home3.png";
import home4 from "../../../assets/images/home4.png";
import luxury from "../../../assets/images/luxury.png";
import map from "../../../assets/map.svg";
import sea from "../../../assets/images/sea.png";

import Icon5 from "../../../components/icons/icon5";
import VideoPlay from "./videoPlay";

export default function Paradise() {
  const homes = [home1, home2, home3, home4];
  return (
    <div className="py-20">
      <div className="flex justify-center">
        <div>
          <div className="relative text-center">
            <Title
              className="max-w-[900px]"
              label="WIN AN UNFORGETTABLE TRIP TO THE AWARD-WINNING PARADISE IN"
            />
            <div className="bg-[#56DFE6] absolute h-[55px] w-full left-0 right-0 top-0 -z-10" />
          </div>

          <div className="flex flex-row justify-center">
            {/* <img src={map}></img> */}
            <Icon5 />
            <div className="text-[22px] font-medium flex items-center">
              NUSA DUA, BAL
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row">
        <div className="basis-1/2 sm:mx-[160px] mx-4 flex-col mt-[69px]">
          <div className="flex flex-row">
            <div className="w-[49px] h-[199px] bg-[#FF6B00] mr-[20px]"></div>
            <div>
              <div className="text-[#060606]">
                <p className="font-medium text-xs leading-[15px]">HOTEL</p>
                <p className="text-[40px] max-md:text-2xl font-black leading-[51px] font-[Neuething]">
                  THE MULIA
                </p>
              </div>

              <p className="text-[24px] max-md:text-lg font-light leading-[30px] text-justify">
                Experience the height of luxury at The Mulia, a suite-only haven
                nestled within the renowned multi-award-winning mega resort, set
                against the pristine beachfront of Nusa Dua.
                <br />
                <br />
                Earning its place among the world's top resorts, this five-star
                sanctuary proudly secured the prestigious Forbes Travel Guide
                Five-Star Hotel Award 2023 in the past year. This resort not
                only features seven enchanting swimming pools, but also includes
                a breathtaking oceanfront infinity pool exclusively dedicated to
                Suites and Villas guests.
                <br />
                <br />
                Embark on an unforgettable getaway by participating in the
                WinLads Bali Giveaway, and YOU could be the lucky winner of this
                extraordinary experience at The Mulia.
              </p>
            </div>
          </div>

          <div className="mt-10  grid grid-cols-2 gap-4">
            {homes.map((home, index) => (
              <img key={index} src={home} className="w-full"></img>
            ))}
          </div>
        </div>

        <div className="basis-1/2 mt-7 max-lg:flex max-lg:flex-col items-center justify-center relative">
          <div className="relative float-right lg:mr-[-100px]">
            {/* <img src={luxury} className="xl:min-w-[600px] min-w-[400px]  z-30 relative block" /> */}
            <div>
              <VideoPlay />
            </div>
          </div>

          <img src={sea} className="z-[-100] absolute right-0"></img>
        </div>
      </div>
    </div>
  );
}
