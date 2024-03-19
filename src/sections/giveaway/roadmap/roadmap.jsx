import React from 'react'

import Title from '../../../components/title'
import road from '../../../assets/giveaway/roadmap/road.png'
import img1 from '../../../assets/giveaway/roadmap/1.png'
import img2 from '../../../assets/giveaway/roadmap/2.png'
import img3 from '../../../assets/giveaway/roadmap/3.png'
import img4 from '../../../assets/giveaway/roadmap/4.png'
import img5 from '../../../assets/giveaway/roadmap/5.png'
import img6 from '../../../assets/giveaway/roadmap/6.png'
import vector1 from '../../../assets/giveaway/roadmap/vector1.svg'
import bg from '../../../assets/giveaway/roadmap/bg.svg'
import roadmap from '../../../assets/giveaway/roadmap/roadmap.png'


export default function Roadmap() {
	return (
		<div className='mt-[100px] md:mt-[200px] relative'>
			<img src={bg} alt='bg' className='absolute top-[-300px] w-full z-[-1]' />
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
			<div className=' max-xl:!display-none min-w-[800px] mt-[200px] mx-[200px] p-[35px] relative z-[100]'>
				<img src={road} alt='road' className='w-full' />

				<div className='absolute top-0 left-0'>
					<div className='relative'>
						<img src={img1} alt='img1' className='hover:scale-110 duration-1000' />
						<div className='flex items-center absolute top-[-50%] right-[-120%]'>
							<div className=''>
								<img src={vector1} alt='vector1' />
							</div>
							<div>
								<p className=' font-medium text-2xl'>10th March</p>
								<p className=' font-normal text-base'>Cash</p>
							</div>
						</div>
					</div>
				</div>

				<div className='absolute top-0 left-1/3'>
					<div className='relative'>
						<img src={img2} alt='img2' className='hover:scale-110 duration-1000' />
						<div className='flex items-start absolute bottom-[-150%] left-[-150%] max-w-[230px]'>
							<div>
								<p className=' font-medium text-2xl'>17th Of March</p>
								<p className=' font-normal text-base'>Bali Campaign Launch - 50% Off One-Off Packages Will Lanuch On This Date Straight Away</p>
							</div>
							<div className=''>
								<svg width="66" height="23" viewBox="0 0 66 23" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M65 1L44 22H0" stroke="#DAE4E7" strokeWidth="1.5" />
								</svg>
							</div>
						</div>
					</div>
				</div>

				<div className='absolute top-0 left-2/3' >
					<div className='relative'>
						<img src={img3} alt='img3' className='hover:scale-110 duration-1000' />
						<div className='flex items-center absolute top-[-50%] left-[-120%] max-w-[200px]'>
							<div>
								<p className=' font-medium text-2xl text-[#FF4C00]'>24th March</p>
								<p className=' font-normal text-base'>EV Launch 2month campaign</p>
							</div>
							<div className=''>
								<svg width="66" height="23" viewBox="0 0 66 23" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M65 22L44 1H0" stroke="#FF4C00" strokeWidth="1.5" />
								</svg>
							</div>
						</div>
					</div>
				</div>

				<div className='absolute top-[16.7%] right-0 ' >
					<div className='relative'>
						<img src={img4} alt='img4' className='hover:scale-110 duration-1000' />
						<div className='flex items-center absolute top-[-50%] left-[-200%] max-w-[200px]'>
							<div>
								<p className=' font-medium text-2xl font-[#FF4C00]'>31th March</p>
								<p className=' font-normal text-base'>Voucher/Bills/Anything?</p>
							</div>
							<div className=''>
								<svg width="66" height="23" viewBox="0 0 66 23" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M65 22L44 1H0" stroke="#DAE4E7" strokeWidth="1.5" />
								</svg>
							</div>
						</div>
					</div>
				</div>

				<div className='absolute top-1/3 right-1/3 mt-[-65px]'>
					<div className='relative'>
						<img src={img5} alt='img5' className='hover:scale-110 duration-1000' />
						<div className='flex items-center absolute bottom-[-50%] right-[-100%] max-w-[200px]'>
							<div className=''>
								<svg width="66" height="23" viewBox="0 0 66 23" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 1L22 22H66" stroke="#DAE4E7" strokeWidth="1.5" />
								</svg>
							</div>
							<div>
								<p className=' font-medium text-2xl font-[#FF4C00]'>4th April</p>
								<p className=' font-normal text-base'>Cash</p>
							</div>
						</div>
					</div>
				</div>

				<div className='absolute top-1/3 left-1/4 mt-[-65px]'>
					<div className='relative'>
						<img src={img6} alt='img6' className='hover:scale-110 duration-1000' />
						<div className='flex items-center absolute top-[-100%] right-[-150%] max-w-[220px]'>
							<div className=''>
								<svg width="66" height="23" viewBox="0 0 66 23" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 22L22 1H66" stroke="#DAE4E7" strokeWidth="1.5" />
								</svg>
							</div>
							<div>
								<p className=' font-medium text-2xl'>13th April</p>
								<p className=' font-normal text-base'>Bali Draw Closes 11.59pm (Drawn 14th APril)</p>
							</div>
						</div>
					</div>
				</div>

				<div className='absolute top-1/2 left-0 mt-[-65px]'>
					<div className='relative'>
						<img src={img5} alt='img7' className='hover:scale-110 duration-1000' />
						<div className='flex items-center absolute top-[20%] left-[100%] min-w-[200px]'>
							<div className=''>
								<svg width="56" height="2" viewBox="0 0 56 2" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0 1H22.9262H56" stroke="#DAE4E7" strokeWidth="1.5" />
								</svg>
							</div>
							<div>
								<p className=' font-medium text-2xl'>21st April</p>
								<p className=' font-normal text-base'>1000$</p>
							</div>
						</div>
					</div>
				</div>

				<div className='absolute bottom-1/3 left-1/4 mb-[-20px] '>
					<div className='relative'>
						<img src={img6} alt='img8' className='hover:scale-110 duration-1000' />
						<div className='flex items-center absolute top-[100%] right-[100%] min-w-[200px]'>
							<div>
								<p className=' font-medium text-2xl'>28st April</p>
								<p className=' font-normal text-base'>FB Live Giveaway (5-10x Winners?)</p>
							</div>
							<div className=''>
								<svg width="66" height="23" viewBox="0 0 66 23" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M65 1L44 22H0" stroke="#DAE4E7" strokeWidth="1.5" />
								</svg>
							</div>
						</div>
					</div>
				</div>

				<div className='absolute bottom-1/3 right-1/4 mb-[-20px] '>
					<div className='relative'>
						<img src={img5} alt='img9' className='hover:scale-110 duration-1000' />
						<div className='flex items-center absolute top-[-100%] right-[100%] min-w-[200px]'>
							<div>
								<p className=' font-medium text-2xl'>5th May</p>
								<p className=' font-normal text-base'>1000$</p>
							</div>
							<div className=''>
								<svg width="66" height="23" viewBox="0 0 66 23" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M65 22L44 1H0" stroke="#DAE4E7" strokeWidth="1.5" />
								</svg>
							</div>
						</div>
					</div>
				</div>

				<div className='absolute bottom-[16.7%] right-0 '>
					<div className='relative'>
						<img src={img4} alt='img10' className='hover:scale-110 duration-1000' />
						<div className='flex items-center absolute top-[-50%] right-[100%] min-w-[200px]'>
							<div>
								<p className=' font-medium text-2xl'>12th May</p>
								<p className=' font-normal text-base'>Go-Karting Event Giveaway</p>
							</div>
							<div className=''>
								<svg width="66" height="23" viewBox="0 0 66 23" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M65 22L44 1H0" stroke="#DAE4E7" strokeWidth="1.5" />
								</svg>
							</div>
						</div>
					</div>
				</div>

				<div className='absolute bottom-0 right-1/3'>
					<div className='relative'>
						<img src={img5} alt='img11' className='hover:scale-110 duration-1000' />
						<div className='flex items-center absolute top-[120%] left-[100%] min-w-[200px]'>
							<div className=''>
								<svg width="66" height="23" viewBox="0 0 66 23" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 1L22 22H66" stroke="#DAE4E7" strokeWidth="1.5" />
								</svg>
							</div>
							<div>
								<p className=' font-medium text-2xl'>19th May</p>
								<p className=' font-normal text-base'>1000$</p>
							</div>
						</div>
					</div>
				</div>

				<div className='absolute bottom-0 left-0 '>
					<div className='relative'>
						<img src={img4} alt='img12' className='hover:scale-110 duration-1000' />
						<div className='flex items-center absolute bottom-[120%] left-[100%] min-w-[200px]'>
							<div className=''>
								<svg width="66" height="23" viewBox="0 0 66 23" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 22L22 1H66" stroke="#DAE4E7" strokeWidth="1.5" />
								</svg>
							</div>
							<div>
								<p className=' font-medium text-2xl'>May 25th</p>
								<p className=' font-normal text-base capitalize'>EV Draw 11.59 (drawn on the 26th of May)</p>
							</div>
						</div>
					</div>
				</div>

			</div>
			{/* End Content */}

			{/* mobile */}
			<div className=' xl :!display-none mt-[100px] mx-6 p-[35px] relative z-[100]'>
				<div>
					<img src={roadmap} alt='roadmap' />
				</div>
			</div>
			{/* End mobile */}

		</div >
	)
}