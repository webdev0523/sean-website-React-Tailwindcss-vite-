import React, { useState, useEffect } from 'react'
import ReactLoading from 'react-loading';

import video1 from "../../../assets/videos/video1.png";
// import video1 from "../../../assets/videos/1.mp4";

export default function Videos({ videoId, videoContent, videoPreview }) {
    const [isPlay, SetIsPlay] = useState(false)
    const [isLoading, SetIsLoading] = useState(false)

    useEffect(() => {
        try {
            playVideo()
        } catch (error) {
            console.log()
        }
    }, [isPlay])

    const playVideo = () => {
        const vid = document.getElementById("myVideo" + videoId)
        vid.play()
    }

    return (
        <div className="flex justify-center relative rounded-3xl" >
            <div >
                {
                    !isPlay ?
                        <img src={videoPreview} alt="videoimg" className='w-full h-full rounded-3xl' />
                        :
                        <>
                            <video
                                id={"myVideo" + videoId}
                                src={videoContent}
                                onLoadStart={() => SetIsLoading(true)}
                                onLoadedData={(data) => SetIsLoading(false)}
                                onEnded={() => SetIsPlay(false)}
                                className={isLoading ? "!invisible rounded-3xl w-full h-full" : "rounded-3xl w-full h-full"}
                            />
                            {isLoading && <div className="absolute top-0 rounded-l-full overflow-hidden bg-[#FF4C00]">
                                <img src={videoPreview} alt="videoimg" className='w-full h-full rounded-3xl' />
                                <div className="absolute top-0 w-full h-full flex justify-center items-center">
                                    <ReactLoading type={"spin"} color={"black"} height={'100px'} width={'100px'} />
                                </div>
                            </div>}
                        </>

                }
            </div>

            {!isPlay && <div className="absolute w-full h-full flex justify-center items-center">
                <button
                    onClick={() => SetIsPlay(true)}
                    className="hover:scale-105 transition-all">
                    <svg
                        className="md:w-[140px] md:h-[140px] w-[70px] h-[70px]"
                        viewBox="0 0 137 137"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="68.2538"
                            cy="68.2538"
                            r="68.2538"
                            fill="white"
                        />
                        <path
                            d="M53.0352 68.2533V61.3832C53.0352 52.8535 59.0754 49.3606 66.4665 53.6254L72.4296 57.0604L78.3927 60.4955C85.7838 64.7603 85.7838 71.7462 78.3927 76.011L72.4296 79.4461L66.4665 82.8811C59.0754 87.146 53.0352 83.653 53.0352 75.1233V68.2533Z"
                            fill="#FF4C00"
                        />
                    </svg>
                </button>
            </div>
            }
        </div>
    )
} 