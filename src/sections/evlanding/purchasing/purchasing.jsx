import React from 'react'

import VideoPlay from './videoPlay';
import Title from '../../../components/title'
import bg from "../../../assets/giveaway/purchasing/bg.png";

export default function Purchasing() {
	return (
		<div className='mt-[250px] md:mt-[200px]'>
			{/* Title */}
			<div className='flex justify-center w-full'>
				<div className="relative fit-content">
					<Title
						label="PURCHASE YOUR MEMBERSHIP TODAY"
						className="block-inline leading-[54px]"
					/>
					<Title
						label="AND REAP THE REWARDS"
						className="block-inline leading-[54px]"
					/>
					{/* <Title
						label="ACCESS TO THE LMCT+"
						className="block-inline leading-[54px]"
					/>
					<Title
						label="PLATFORM"
						className="block-inline leading-[54px]"
					/> */}
					<div className="absolute top-0 right-[0%] w-[199px]  h-[74px] max-md:w-[99px] max-md:h-[40px] bg-[#FF6B00] origin-bottom -rotate-6 z-[-1]"></div>
				</div>
			</div>
			{/* End Title */}

			{/* Content */}
			<div className='mt-10 md:mx-24 mx-8 '>
				<p className='mx-auto max-w-[860px] font-light text-2xl max-md:text-lg text-center capitalize'>Doesn’t get much better – Access to all of our partner discounts and accumulating entries into our weekly and monthly draws. How good is that!!!!</p>
			</div>
			{/* End Content */}

			{/* Video and Button */}
			<div className="flex justify-center mt-[80px]  mx-8">
				<VideoPlay />
			</div>

			<div className='flex justify-center mt-20 z-10 mx-8'>
				<button className='bg-[#FF6C2E] w-[751px] py-6 md:py-10 text-white text-3xl max-md:text-lg focus:!outline-0 rounded-lg font-bold font-["Outfit"] hover:opacity-80 transition-opacity'>
					BECOME A MEMBER
				</button>
			</div>
			{/* End Video and Button */}

			{/* background image */}
			<div className='relative z-[-1]'>
				<img src={bg} alt='bg' className='w-full absolute bottom-0' />
			</div>
			{/* End background image */}

		</div >
	)
}