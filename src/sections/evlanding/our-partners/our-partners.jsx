import React from 'react'

import Title from '../../../components/title'
import car from '../../../assets/giveaway/our-partners/car.png'
import Marquee from './marquee'

export default function Purchasing() {
    return (
        <div className='mt-[100px] md:mt-[100px]'>
            {/* Title and Image */}
            <div className='flex max-md:flex-col max-md:gap-10 justify-center items-center'>
                <div className='basis-1/2 flex justify-center w-full'>
                    <div className="relative fit-content">
                        <Title
                            label="Our Partners"
                            className="block-inline leading-[54px]"
                        />
                        <div className="absolute top-0 right-[0%] w-[199px]  h-[74px] max-md:w-[99px] max-md:h-[40px] bg-[#5EC1DC] origin-bottom -rotate-6 z-[-1]"></div>
                    </div>
                </div>

                <div className='basis-1/2 flex justify-center max-md:mx-10'>
                    <img src={car} alt='car' />
                </div>
            </div>

            {/* End Title and Image */}

            {/* Flow */}
            <div>
                <Marquee />
            </div>
            {/* End Flow */}

        </div >
    )
}