import React, { useState, useEffect } from 'react'
import ReactLoading from 'react-loading';

import preview from "../../../assets/giveaway/paradise/preview.png";
import video1 from "../../../assets/videos/1.mp4";
import PlayButton from "../../../components/playButton";
import HeroVideo from "../../../assets/HeroVideo.png";

export default function VideoPlay() {
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
    <div className="w-full h-full">
      <div className="relative h-full ">
        <div className='overflow-hidden h-full flex justify-center items-center bg-black'>
          {/* bg-[black]  border-4 border-[#101821] rounded-3xl overflow-hidden */}
          {(!isPlay || isLoading) &&
            <div className='w-full h-full bg-black/[.2] hero-video-radius'>
              {/* <img src={previewImage} alt="videoimg" className="w-full rounded-3xl" /> */}
              <img
                className="w-full h-full object-cover z-40 hero-video-radius"
                src={HeroVideo}
                alt="HeroVideo"
              />
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
              className={isLoading ? "!display-none" : "w-full"}
            />
          }

        </div>

        {!isPlay && <div className="absolute top-0 w-full h-full flex justify-center items-center">
          <button
            onClick={() => SetIsPlay(true)}
            className="hover:scale-105 duration-300 transition-all relative z-[1000]">
            <PlayButton />
          </button>
        </div>
        }
      </div>
    </div>
  );
}