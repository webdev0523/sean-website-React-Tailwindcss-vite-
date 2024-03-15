import React, { useState, useEffect } from 'react'
import ReactLoading from 'react-loading';

import videoimg from "../../../assets/howtoenter/videoimg.png";
import video1 from "../../../assets/videos/1.mp4";
import PlayButton from "../../../components/playButton";

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
              className={isLoading ? "!display-none" : "w-full"}
            />
          }

        </div>

        {!isPlay && <div className="absolute top-0 w-full h-full flex justify-center items-center">
          <button
            onClick={() => SetIsPlay(true)}
            className="hover:scale-105 transition-all">
            <PlayButton />
          </button>
        </div>
        }
      </div>
    </div>
  );
}