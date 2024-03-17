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
        <div className="sm:mx-[160px] mx-4 flex-col mt-[69px]">
          <div className="flex flex-row">
            <div className="w-[49px] h-[199px] bg-[#FF6B00] mr-[20px]"></div>
            <div>
              <div className="text-[#060606]">
                <p className="font-medium text-xs leading-[15px]">HOTEL</p>
                <p className="text-[40px] font-black leading-[51px] font-[Neuething]">
                  THE MULIA
                </p>
              </div>

              <p className="text-[24px] font-light leading-[30px] text-justify">
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

          <div className="mt-10  grid grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-4">
            {homes.map((home, index) => (
              <img key={index} src={home} className="w-full"></img>
            ))}
          </div>
        </div>

        <div className="mt-7">
          <div className="relative float-right">
            {/* <img src={luxury} className="xl:min-w-[600px] min-w-[400px]  z-30 relative block" /> */}
            <div>
              <video
                src=""
                className="xl:min-w-[600px] min-w-[400px]  z-30 relative block min-h-[400px] object-cover"
              />
            </div>

            <button className="absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-[45px] hover:scale-105 duration-300 transition-all">
              <svg
                width="137"
                height="137"
                viewBox="0 0 137 137"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="68.2538" cy="68.2538" r="68.2538" fill="#ffffff" />
                <path
                  d="M53.0352 68.2533V61.3832C53.0352 52.8535 59.0754 49.3606 66.4665 53.6254L72.4296 57.0604L78.3927 60.4955C85.7838 64.7603 85.7838 71.7462 78.3927 76.011L72.4296 79.4461L66.4665 82.8811C59.0754 87.146 53.0352 83.653 53.0352 75.1233V68.2533Z"
                  fill="#FF6B00"
                />
              </svg>
            </button>
          </div>

          <img src={sea} className=" -mt-80 float-right z-20"></img>
        </div>
      </div>
    </div>
  );
}
