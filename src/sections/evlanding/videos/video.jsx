import React, { useState, useEffect } from 'react'
import ReactLoading from 'react-loading';

import PlayButton from '../../../components/playButton';

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
                {(!isPlay || isLoading) &&
                    <div>
                        <img src={videoPreview} alt="videoPreview" className="w-full h-full rounded-3xl" />
                        {isLoading &&
                            <div className="absolute top-0 w-full h-full flex justify-center items-center">
                                <ReactLoading type={"spin"} color={"black"} height={'100px'} width={'100px'} />
                            </div>}
                    </div>}

                {
                    isPlay &&
                    <video
                        id={"myVideo" + videoId}
                        src={videoContent}
                        onLoadStart={() => SetIsLoading(true)}
                        onLoadedData={(data) => SetIsLoading(false)}
                        onEnded={() => SetIsPlay(false)}
                        className={isLoading ? "!invisible h-0" : "rounded-3xl w-full h-full"}
                    />
                }
            </div>

            {!isPlay && <div className="absolute w-full h-full flex justify-center items-center">
                <button
                    onClick={() => SetIsPlay(true)}
                    className="hover:scale-105 transition-all">
                    <PlayButton />
                </button>
            </div>
            }
        </div>
    )
} 