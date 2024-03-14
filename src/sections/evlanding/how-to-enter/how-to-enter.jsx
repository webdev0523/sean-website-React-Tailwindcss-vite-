import React, { useState, useEffect } from "react";
import ReactLoading from 'react-loading';

import lines from "../../../assets/howtoenter/lines.png";
import videoimg from "../../../assets/howtoenter/videoimg.png";
import car from "../../../assets/howtoenter/car.png";
import video1 from "../../../assets/videos/1.mp4";

export default function HowToEnter() {
  const [isPlay, SetIsPlay] = useState(false)
  const [isLoading, SetIsLoading] = useState(false)

  useEffect(() => {
    try {
      playVideo()
    } catch (err) { console.log() }
  }, [isPlay])

  const playVideo = () => {
    const vid = document.getElementById("myVideo1")
    vid.play()
  }

  return (
    <div className="mt-24">
      <div className="flex justify-center items-center bg-[#FF4C00] w-full md:h-[70px] relative">
        <p className="font-['Axiforma'] font-normal text-base capitalize text-white text-center">Receive invitations to exclusive Winlads VIP events and meet-ups!</p>
        <img src={lines} alt="lines" className="absolute" />
      </div>


      <div className="">
        <div className="relative">
          <div>
            {(!isPlay || isLoading) &&
              <div>
                <img src={videoimg} alt="videoimg" className="w-full" />
                {isLoading &&
                  <div className="absolute top-0 w-full h-full flex justify-center items-center">
                    <ReactLoading type={"spin"} color={"black"} height={'100px'} width={'100px'} />
                  </div>}
              </div>}

            {
              isPlay &&
              <video
                id="myVideo1"
                src={video1}
                onLoadStart={() => SetIsLoading(true)}
                onEnded={() => SetIsPlay(false)}
                onLoadedData={(data) => SetIsLoading(false)}
                className={isLoading ? "!invisible h-0" : "w-full"}
              />
            }

          </div>

          {!isPlay && <div className="absolute top-0 w-full h-full flex justify-center items-center">
            <button
              onClick={() => SetIsPlay(true)}
              className="hover:scale-105 transition-all">
              <svg className="md:w-[140px] md:h-[140px] w-[70px] h-[70px]" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="68.2538" cy="68.2538" r="68.2538" fill="white" />
                <path d="M53.0352 68.2533V61.3832C53.0352 52.8535 59.0754 49.3606 66.4665 53.6254L72.4296 57.0604L78.3927 60.4955C85.7838 64.7603 85.7838 71.7462 78.3927 76.011L72.4296 79.4461L66.4665 82.8811C59.0754 87.146 53.0352 83.653 53.0352 75.1233V68.2533Z" fill="#FF4C00" />
              </svg>
            </button>
          </div>
          }
        </div>
      </div>

      <div className="hover:bg-blend-darken flex justify-center bg-cover bg-center bg-[url('/bg.png')] bg-no-repeat opacity-90 w-full mb-0 md:mb-[100px]">
        <img src={car} alt="car" className=" mt-24" />
      </div>
    </div>
  );
}
