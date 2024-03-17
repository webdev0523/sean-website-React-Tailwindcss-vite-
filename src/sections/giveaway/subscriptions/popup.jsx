import React from 'react'
import Package from './package'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCreative, Pagination } from "swiper/modules";
import user from "./user.svg"
import checkbox1 from "./checkbox1.svg"

export const properties = [
	{
		borderColor: "border-[#5EC1DC]",
		backgroundColor: "bg-[#EFF9FB]",
		title: "Platinum",
		number: "10",
		price: "49.99",
		referral: "10%",
		discounts: "Partner Store Discounts: ",
		discountsPercent: "10%-15%",
		buttonColor: "bg-[#5EC1DC]",
	},
	{
		borderColor: "border-[#FE705C]",
		backgroundColor: "bg-[#FFF1EF]",
		title: "Boomer",
		number: "3",
		price: "19.99",
		referral: "5%",
		discounts: "Partner Store Discounts: ",
		discountsPercent: "10%",
		buttonColor: "bg-[#FE705C]",
	},
	{
		borderColor: "border-[#FFBC0B]",
		backgroundColor: "bg-[#FFF8E7]",
		title: "Gold",
		number: "25",
		price: "100",
		referral: "25%",
		discounts: "Be Elighible To Apply For Winlad GOLD Card",
		discountsPercent: "",
		buttonColor: "bg-[#FFBC0B]",
	},
	{
		borderColor: "border-[#1A1D21]",
		backgroundColor: "bg-[#F1F1F1]",
		title: "Black",
		number: "150",
		price: "500",
		referral: "50%",
		discounts: "Customized Partner Store Discount Rates Ranging Upto 20%",
		discountsPercent: "",
		buttonColor: "bg-[#1A1D21]",
	},
	{
		borderColor: "border-[#296FB8]",
		backgroundColor: "bg-[#EAF1F8]",
		title: "Starter",
		number: "1",
		price: "49.99",
		referral: "10%",
		discounts: "Partner Store Discounts: ",
		discountsPercent: "10%-15%",
		buttonColor: "bg-[#296FB8]",
	},
];

export default function Popup({ setIsOpen }) {
	return (
		<div className='popup w-full bg-white h-dvh fixed bottom-0 z-[10000] flex items-end'>
			{/* modal content*/}
			<div className='bg-white w-full pt-5 overflow-y-auto rounded-2xl '>
				{/* Line */}
				<div className='flex justify-center'>
					<div className='w-[96px] h-[3px] bg-[#D5D5D5]'></div>
				</div>
				{/* Title */}
				<div className='text-center mt-6'>
					<p className='text-2xl font-bold'>Get Entries</p>
				</div>

				{/* Packages */}
				<div className='mt-5'>
					<Swiper
						initialSlide={2}
						effect={"creative"}
						grabCursor={true}
						centeredSlides={true}
						slidesPerView={"auto"}
						// loop={true}
						creativeEffect={{
							limitProgress: 4,
							prev: {
								translate: ["-102%", 0, 0],
							},
							next: {
								translate: ["102%", 0, 0],
							},
						}}
						aria-current={2}
						pagination={false}
						modules={[EffectCreative, Pagination]}
						className="subscription-swiper"
					>
						{properties.map((property, index) => (
							<SwiperSlide key={index}>
								<Package key={index} property={property} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				{/* Form */}
				<div className='p-5'>

					<div className='relative mt-3 flex items-center'>
						<input type='text' placeholder='First Name' className='text-sm rounded-l-2xl w-full h-14 bg-[#C4CDDF1A] pl-12' />
						<div className='w-[3px] h-[33px] bg-[#D5D5D5]'></div>
						<input type='text' placeholder='First Name' className='text-sm rounded-r-2xl w-full h-14 bg-[#C4CDDF1A] pl-5' />
						<img src={user} alt='user' className='absolute top-[15px] left-[12px] ' />
					</div>

					<div className='relative mt-3'>
						<input type='text' placeholder='Email' className='text-sm rounded-2xl w-full h-14 bg-[#C4CDDF1A] pl-12' />
						<img src={user} alt='user' className='absolute top-[15px] left-[12px] ' />
					</div>

					<div className='relative mt-3'>
						<input type='text' placeholder='Phone Number' className='text-sm rounded-2xl w-full h-14 bg-[#C4CDDF1A] pl-12' />
						<img src={user} alt='user' className='absolute top-[15px] left-[12px] ' />
					</div>

					<div className='flex justify-center'>
						<div className='flex items-center p-3'>
							<label className="custom-checkbox">
								<input type="checkbox" />
								<span className={`checkmark1 block w-[24px] h-[24px] border border-[#FF4D00] rounded-[3px]`}></span>
							</label>
							{/* <img src={checkbox1} alt='checkbox1' /> */}
							<p className='text-[10px] font-bold leading-3 p-3'>
								By Checking The Box You Agree To Our
								<span className='text-[#FF4D00]'>Terms OfUse</span>
							</p>
						</div>
					</div>

				</div>

				<div>
					<button
						onClick={() => setIsOpen(false)}
						className='w-full bg-[#FF4D00] text-sm text-white font-medium p-7'>Enter Now</button>
				</div>
				{/* End Form */}

			</div>
		</div>
	)
}