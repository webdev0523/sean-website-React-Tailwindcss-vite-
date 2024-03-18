import React from 'react'

import Title from '../../../components/title'

export default function Roadmap() {
	return (
		<div className='mt-[100px] md:mt-[200px]'>
			{/* Title */}
			<div className='flex justify-center w-full'>
				<div className="relative fit-content">
					<Title
						label="Follow Roadmap"
						className="block-inline leading-[54px]"
					/>
					<div className="absolute top-0 right-[0%] w-[199px]  h-[74px] max-md:w-[99px] max-md:h-[40px] bg-[#56DFE6] origin-bottom -rotate-6 z-[-1]"></div>
				</div>
			</div>
			{/* End Title */}

			{/* Content */}
			<div className='mt-[200px] mx-24 relative z-[100]'>
				<div className='w-full h-[400px] border-4 border-l-0 border-dashed border-sky-400 rounded-r-full '></div>
				<div className='w-full h-[400px] border-4 border-r-0 border-dashed border-sky-400 rounded-l-full '></div>
				<div className='w-full h-[400px] border-4 border-l-0 border-dashed border-sky-400 rounded-r-full '></div>
				<div></div>
				<div></div>
			</div>
			{/* End Content */}

		</div >
	)
}