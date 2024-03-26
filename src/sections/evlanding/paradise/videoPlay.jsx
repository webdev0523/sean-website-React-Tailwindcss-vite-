import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading';

import linesR from "../../../assets/paradise/Union (2).png";
import videoImg from "../../../assets/paradise/videoImg.png";
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
        const vid = document.getElementById("myVideo")
        vid.play()
    }

    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row justify-center">

                <div className="basis-1/2 px-4 sm:px-28 mt-[200px] max-lg:mt-10 ">
                    <p className="font-light text-xl leading-8  text-justify">
                        Welcome to our BIGGEST giveaway yet! We are offering three irresistible options: A brand New Tesla Model Y, a brand-new Isuzu D-Max X-Terrain or a whopping $50,000 in cold, hard cash.
                    </p>
                    <br />
                    <p className="font-light text-xl leading-8  text-justify">
                        Whether you have a need for speed, crave the outdoor adventures or simply desire the flexibility that a hefty cash prize provides, our giveaway has something for everyone.
                    </p>
                    <br />
                    <p className="font-light text-xl leading-8  text-justify">
                        Buckle up for the chance of a lifetime, where luxury, power, and financial freedom wait for ONE lucky winner. And here's the twist – if neither car suits your style, you have the option to take home the incredible cash prize. Don't let this opportunity slip away; make 2024 your best year yet!
                    </p>
                    <button className="w-full p-6 bg-[#56E6E6] rounded-full border border-black font-bold text-xl mt-[75px] relative z-[100]  hover:opacity-80"><span className="drop-shadow-[1px_-1px_0px_rgba(255,255,255)]">ENTER NOW</span></button>

                </div>

                <div className="basis-1/2 flex justify-end mt-[200px] ml-8 max-lg:mt-20">
                    <div>
                        <div className="relative z-[1000]">
                            {(!isPlay || isLoading) &&
                                <div className="top-0 rounded-l-full pb-3 overflow-hidden bg-[#FF4C00] ">
                                    <img src={videoImg} alt="videoImg" className="w-full h-full" />
                                    {isLoading &&
                                        <div className="absolute top-0 w-full h-full flex justify-center items-center">
                                            <ReactLoading type={"spin"} color={"black"} height={'100px'} width={'100px'} />
                                        </div>}
                                </div>}

                            {
                                isPlay &&
                                <div className={isLoading ? "!display-none" : "top-0 rounded-l-full pb-3 overflow-hidden bg-[#FF4C00]"}>
                                    <video
                                        id="myVideo"
                                        src={video1}
                                        onLoadStart={() => SetIsLoading(true)}
                                        onEnded={() => SetIsPlay(false)}
                                        onLoadedData={(data) => SetIsLoading(false)}
                                        className={isLoading ? "!invisible h-0" : ""}
                                    />
                                </div>
                            }

                            {!isPlay && <div className="absolute top-0 w-full h-full flex justify-center items-center">
                                <button
                                    onClick={() => SetIsPlay(true)}
                                    className="hover:scale-105 duration-300 transition-all z-[1000]">
                                    <PlayButton />
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
        </>
    )
}