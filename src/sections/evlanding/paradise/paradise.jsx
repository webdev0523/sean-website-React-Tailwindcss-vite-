import React, { useEffect, useState } from "react";

import ReactLoading from 'react-loading';

import linesR from "../../../assets/paradise/Union (2).png";
import linesL from "../../../assets/paradise/Union (3).png";
import car1 from "../../../assets/paradise/car1.png";
import car2 from "../../../assets/paradise/car2.png";
import videoImg from "../../../assets/paradise/videoImg.png";
import video1 from "../../../assets/videos/1.mp4";
import isuzu from "../../../assets/icons/isuzu.svg";
import tesla from "../../../assets/icons/tesla.svg";
import WinA from "./winA";

export default function Paradise() {
  const [isPlay, SetIsPlay] = useState(false)
  const [isLoading, SetIsLoading] = useState(false)

  useEffect(() => {
    try {
      playVideo()
    } catch (err) { console.log() }
  }, [isPlay])

  const playVideo = () => {
    const vid = document.getElementById("myVideo")
    vid.play()
  }

  return (
    <div className="py-20">

      <div className="relative pb-1 origin-bottom -rotate-[2.54deg]">
        <div className="h-[70px] w-full flex items-center">
          <marquee behavior="scroll" direction="right" className="text-black font-['Neuething'] text-2xl font-extrabold drop-shadow-[2px_-2px_0px_rgba(255,255,255)]">TESLA Y | GIVEAWAY | ISUZU DMAX | GIVEAWAY | 50000CASH | GIVEAWAY | ISUZU DMAX | GIVEAWAY</marquee>
        </div>
        <div className="bg-[#56DFE6] absolute h-[70px] w-full left-0 right-0 top-0 -z-10" />
      </div>

      <div className="relative origin-bottom -rotate-[2.54deg]">
        <div className="h-[70px] w-full flex items-center">
          <marquee behavior="scroll" direction="left" className="text-white font-['Neuething'] text-2xl font-extrabold drop-shadow-[1px_-1px_0px_rgba(255,255,255)]">TESLA Y | GIVEAWAY | ISUZU DMAX | GIVEAWAY | 50000CASH | GIVEAWAY | ISUZU DMAX | GIVEAWAY </marquee>
        </div>
        <div className="bg-[#FF4C00] absolute h-[70px] w-full left-0 right-0 top-0 -z-10" ></div>
      </div>


      {/* Empty for now */}
      <WinA />


      <div className="flex flex-col-reverse lg:flex-row justify-center">

        <div className="basis-1/2 px-4 sm:px-28 mt-[200px]">
          <p className="font-light text-xl leading-8 text-justify capitalize">
            Welcome to our BIGGEST giveaway yet! We are offering three irresistible options: A brand New Tesla Model Y, a brand-new Isuzu D-Max or a whopping $50,000 in cold, hard cash.
          </p>
          <p className="font-light text-xl leading-8 text-justify capitalize">
            Whether you have a need for speed, crave the outdoor adventures or simply desire the flexibility that a hefty cash prize provides, our giveaway has something for everyone.
          </p>
          <p className="font-light text-xl leading-8 text-justify capitalize">
            Buckle up for the chance of a lifetime, where luxury, power, and financial freedom wait for ONE lucky winner. And here's the twist – if neither car suits your style, you have the option to take home the incredible cash prize. Don't let this opportunity slip away; make 2024 your best year yet!
          </p>
          <button className="w-full p-6 bg-[#56E6E6] rounded-full border border-black font-bold text-xl mt-[75px] relative z-[100]  hover:opacity-80"><span className="drop-shadow-[3px_-4px_0px_rgba(255,255,255)]">ENTER NOW</span></button>

        </div>

        <div className="basis-1/2 flex justify-end mt-[200px]">
          <div>
            <div className="relative z-[1000]">
              <div className=" rounded-l-full overflow-hidden bg-[#FF4C00]" style={{ paddingBottom: 10 }}>
                {
                  !isPlay ?
                    <img src={videoImg} alt="videoImg" />
                    :
                    <>
                      <video
                        id="myVideo"
                        src={video1}
                        onLoadStart={() => SetIsLoading(true)}
                        onEnded={() => SetIsPlay(false)}
                        onLoadedData={(data) => SetIsLoading(false)}
                        className={isLoading ? "!invisible" : ""}
                      />
                      {isLoading && <div className="absolute top-0 w-full h-full flex justify-center items-center">
                        <ReactLoading type={"spin"} color={"black"} height={'100px'} width={'100px'} />
                      </div>}
                    </>

                }
              </div>

              {!isPlay && <div className="absolute top-0 w-full h-full flex justify-center items-center">
                <button
                  onClick={() => SetIsPlay(true)}
                  className="hover:scale-105 transition-all z-[1000]">
                  <svg className="md:w-[140px] md:h-[140px] w-[70px] h-[70px]" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="68.2538" cy="68.2538" r="68.2538" fill="white" />
                    <path d="M53.0352 68.2533V61.3832C53.0352 52.8535 59.0754 49.3606 66.4665 53.6254L72.4296 57.0604L78.3927 60.4955C85.7838 64.7603 85.7838 71.7462 78.3927 76.011L72.4296 79.4461L66.4665 82.8811C59.0754 87.146 53.0352 83.653 53.0352 75.1233V68.2533Z" fill="#FF4C00" />
                  </svg>
                </button>
              </div>}
            </div>
            {/* Right Lines */}
            <div className="relative">
              <img src={linesR} alt="lines" className="absolute top-[-300px] right-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Left Lines */}
      <div className="relative">
        <img src={linesL} alt="lines" className="absolute top-[-300px] left-0" />
      </div>

      {/* Car Models */}
      <div className="flex lg:flex-row flex-col justify-center mt-[200px] md:mx-[100px]">

        <div className="md:basis-1/2">
          <div className="flex justify-center">
            <img src={car1} alt="car1" />
          </div>
          <div className="flex justify-center mt-20">
            <img src={isuzu} alt="isuzu" />
          </div>
          <div className="flex justify-center">
            <p className="font-semibold text-5xl text-justify mt-2 mb-4">D-MAX DL20</p>
          </div>
          <div className="flex lg:flex-row flex-col justify-center lg:justify-evenly p-5 mx-16 border-y-[1px] text-center">
            <div className="mt-3">
              <p>
                <span className="font-medium text-4xl text-justify">242</span>
                <span className="font-light text-2xl text-justify">mi</span>
              </p>
              <p className="font-normal text-2xl">Range(est.)</p>
            </div>
            <div className="mt-3">
              <p>
                <span className="font-medium text-4xl text-justify">135</span>
                <span className="font-light text-2xl text-justify">mph</span>
              </p>
              <p className="font-normal text-2xl">Top Speed</p>
            </div>
            <div className="mt-3">
              <p>
                <span className="font-medium text-4xl text-justify">6.6</span>
                <span className="font-light text-2xl text-justify">sec</span>
              </p>
              <p className="font-normal text-2xl">0-60 mph</p>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <div>
              <p className="font-normal text-2xl text-justify">1. Demo Vehicle</p>
              <p className="font-normal text-2xl text-justify">2. 778 mile odometer</p>
              <p className="font-normal text-2xl text-justify">3. Pearl White Paint</p>
              <p className="font-normal text-2xl text-justify">4. 20" Induction Wheels</p>
              <p className="font-normal text-2xl text-justify">5. Black and White Premium Interior</p>
              <p className="font-normal text-2xl text-justify">6. Autopilot</p>
              <p className="font-normal text-2xl text-justify">7. Five Seat Interior</p>
            </div>
          </div>
        </div>

        <div className="md:basis-1/2 md:border-l-[1px]">
          <div className="flex justify-center">
            <img src={car2} alt="car2" />
          </div>
          <div className="flex justify-center mt-20">
            <img src={tesla} alt="tesla" />
          </div>
          <div className="flex justify-center">
            <p className="font-semibold text-5xl text-justify mt-2 mb-4">Model Y</p>
          </div>
          <div className="flex lg:flex-row flex-col justify-center lg:justify-evenly justify-evenly p-5 mx-16 border-y-[1px] text-center">
            <div className="mt-3">
              <p>
                <span className="font-medium text-4xl text-justify">242</span>
                <span className="font-light text-2xl text-justify">mi</span>
              </p>
              <p className="font-normal text-2xl ">Range(est.)</p>
            </div>
            <div className="mt-3">
              <p>
                <span className="font-medium text-4xl text-justify">135</span>
                <span className="font-light text-2xl text-justify">mph</span>
              </p>
              <p className="font-normal text-2xl">Top Speed</p>
            </div>
            <div className="mt-3">
              <p>
                <span className="font-medium text-4xl text-justify">6.6</span>
                <span className="font-light text-2xl text-justify">sec</span>
              </p>
              <p className="font-normal text-2xl">0-60 mph</p>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <div>
              <p className="font-normal text-2xl text-justify">1. Demo Vehicle</p>
              <p className="font-normal text-2xl text-justify">2. 778 mile odometer</p>
              <p className="font-normal text-2xl text-justify">3. Pearl White Paint</p>
              <p className="font-normal text-2xl text-justify">4. 20" Induction Wheels</p>
              <p className="font-normal text-2xl text-justify">5. Black and White Premium Interior</p>
              <p className="font-normal text-2xl text-justify">6. Autopilot</p>
              <p className="font-normal text-2xl text-justify">7. Five Seat Interior</p>
            </div>
          </div>
        </div>

      </div>

    </div >
  );
}
