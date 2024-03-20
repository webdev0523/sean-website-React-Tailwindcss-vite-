import React from 'react'

import Title from '../../../components/title'
import car from '../../../assets/giveaway/purchase/car.png'
import bg from '../../../assets/giveaway/purchase/bg.png'
import SaveIcon from './save-icon'
import WinIcon from './win-icon'

export default function PurchaseToday() {
	return (
		<div className='mt-[50px] md:mt-[200px]'>
			{/* Title */}
			<div className='flex justify-center w-full'>
				<div className="relative fit-content">
					<Title
						label="PURCHASE TODAY & GET"
						className="block-inline leading-[54px]"
					/>
					<div className="absolute top-0 right-[0%] w-[199px]  h-[74px] max-md:w-[99px] max-md:h-[40px] bg-[#FF4C00] origin-bottom -rotate-6 z-[-1]"></div>
				</div>
			</div>
			{/* End Title */}

			<div className='flex justify-center max-md:flex-col-reverse items-center max-md:p-8 mt-[30px] md:mt-[100px] md:mx-[100px]'>
				{/* left content */}
				<div className='basis-1/2 flex justify-center max-md:mt-10'>
					<div className='relative w-fit'>
						<img src={bg} alt='bg' />
						<img src={car} alt='car' className='absolute bottom-[-50px] right-[-100px]' />
					</div>
				</div>
				{/* End left content */}

				{/* right content */}
				<div className='basis-1/2 flex flex-col gap-12'>

					<div className='flex justify-start items-center'>
						<div className='py-4 pr-4'>
							<SaveIcon />
						</div>
						<div>
							<p className='font-extrabold text-2xl leading-7 max-md:text-xl'>SAVE</p>
							<p className='font-normal text-lg leading-5 pt-4 text-[#060606B2]'>
								Gain access to exclusive discounts to over 900+ businesses across &nbsp;
								<span className='font-bold'>
									1000+ LMCT+
								</span>
								partner stores Australia wide
							</p>
						</div>
					</div>

					<div className='flex justify-start items-center'>
						<div className='py-4 pr-4'>
							<WinIcon />
						</div>
						<div>
							<p className='font-extrabold text-2xl leading-7 max-md:text-xl'>WIN</p>
							<p className='font-normal text-lg leading-5 pt-4 text-[#060606B2]'>
								Get your name placed in this draw to win 1ST: The Block House
								<span className='font-bold'>#1 or $2 MIL</span> Cash. 2ND: <span className='font-bold'>$10K</span> to spend with our partners. 3RD: $5K to spend with our partners.
							</p>
						</div>
					</div>

					<div className='flex justify-start items-center'>
						<div className='py-4 pr-4'>
							<SaveIcon />
						</div>
						<div>
							<p className='font-extrabold text-2xl leading-7 max-md:text-xl'>JOIN</p>
							<p className='font-normal text-lg leading-5 pt-4 text-[#060606B2]'>
								Join Australia's most trusted, diverse and original automotive rewards club with Australia's most valuable and frequent prize giveaways
							</p>
						</div>
					</div>

					<div className='flex justify-start items-center'>
						<div className='py-4 pr-4'>
							<WinIcon />
						</div>
						<div>
							<p className='font-extrabold text-2xl leading-7 max-md:text-xl'>RECEIVE</p>
							<p className='font-normal text-lg leading-5 pt-4 text-[#060606B2]'>
								Access to all early bird offers to future promotional giveaways offering free triple entry packages
							</p>
						</div>
					</div>

				</div>
				{/* End right content */}

			</div>

		</div >
	)
}