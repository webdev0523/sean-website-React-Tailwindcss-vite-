import React from 'react'

export default function Marquee() {
    return (
        <>
            <div className="relative pb-1 origin-bottom -rotate-[2.54deg] scrolling-text-container">
                <div className="md:h-[70px] h-[40px] w-full flex items-center scrolling-text-left">
                    <p behavior="scroll" direction="right" className="text-black font-['Neuething'] text-lg md:text-2xl font-extrabold drop-shadow-[2px_-2px_0px_rgba(255,255,255)] whitespace-pre ">TESLA MODEL Y   |   GIVEAWAY   |   TESLA MODEL Y   |   GIVEAWAY   |   $50,000 CASH   |   GIVEAWAY   |   TESLA MODEL Y   |   GIVEAWAY</p>
                </div>
                <div className="bg-[#56DFE6] absolute md:h-[70px] h-[40px] w-full left-0 right-0 top-0 -z-10" />
            </div>

            <div className="relative origin-bottom -rotate-[2.54deg] scrolling-text-container">
                <div className="md:h-[70px] h-[40px] w-full flex items-center scrolling-text-right">
                    <p behavior="scroll" direction="left" className="text-white font-['Neuething'] text-lg md:text-2xl font-extrabold drop-shadow-[1px_-1px_0px_rgba(0,0,0)] whitespace-pre ">TESLA Y   |   GIVEAWAY   |   ISUZU DMAX X-Terrain   |   GIVEAWAY   |   $50,000 CASH   |   GIVEAWAY   |   ISUZU DMAX X-Terrain   |   GIVEAWAY </p>
                </div>
                <div className="bg-[#FF4C00] absolute md:h-[70px] h-[40px] w-full left-0 right-0 top-0 -z-10" ></div>
            </div>
        </>
    )
}