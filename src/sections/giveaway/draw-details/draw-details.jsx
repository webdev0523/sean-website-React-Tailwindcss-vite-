import React from 'react'

import car from '../../../assets/giveaway/past-winners/car.png'

export default function DrawDetails() {
    return (
        <div className='flex justify-center max-md:flex-col-reverse items-center mt-20 md:mx-20'>
            <div className='basis-1/2 relative mt-12 md:m-12 flex justify-end'>
                <img src={car} alt='car' className='relative z-[100]' />
                <div className='absolute top-20 right-16 w-[1400px] h-[379px] bg-[#56DFE6] rounded-br-[260px] rounded-tr-2xl '>
                    <div className='flex justify-end w-full relative z-[-1]'>
                        <div className='w-[476px] h-[438px] bg-[#FF6B00] rounded-br-[300px] rounded-tr-2xl rounded-bl-2xl'></div>
                    </div>
                </div>
            </div>
            <div className='basis-1/2 max-md:p-8'>
                <p className=' text-5xl font-black font-["Neuething"] max-md:text-center'>DRAW</p>
                <p className=' text-5xl font-black font-["Neuething"] max-md:text-center'>DETAILS</p>
                <ul className='list-image-[url(/icons/bullet.svg)] pl-5'>
                    <li className='mt-7 font-normal text-[18px] '>Valid to all Australian residents</li>
                    <li className='mt-5 font-normal text-[18px]'>Winner announced 25th of February, 2024 8:30PM via Facebook live</li>
                    <li className='mt-5 font-normal text-[18px] '>​The prizes will be drawn using our Digital Draw System</li>
                    <li className='mt-5 font-normal text-[18px] '>​​The winner will be contacted immediately via phone</li>
                    <li className='mt-5 font-normal text-[18px] '>​​The Cash prize will be transferred to your nominated bank account within 48 hours.</li>
                </ul>
            </div>
        </div>
    )
}