import React from 'react'
import Package from './package'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCreative, Pagination } from "swiper/modules";
import user from "../../../assets/icons/user.svg"
import email from "../../../assets/icons/email.svg"
import phone from "../../../assets/icons/phone.svg"

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
	const onSubmit = (e) => {
		e.preventDefault()
		setIsOpen(false)
	}

	return (
		<div className='w-full h-dvh md:p-40 bg-white md:bg-black md:bg-opacity-30 fixed bottom-0 z-[10000] overflow-y-auto'>
			{/* modal content*/}
			<div className='popup bg-white w-full pt-5 rounded-2xl overflow-hidden md:p-8'>
				{/* Line */}
				<div className='md:!display-none flex justify-center'>
					<div className='w-[96px] h-[3px] bg-[#D5D5D5]'></div>
					<p
						onClick={() => setIsOpen(false)}
						className='font-bold text-3xl absolute top-0 right-5 cursor-pointer'>x</p>
				</div>

				{/* Title */}
				<div className='max-md:text-center mt-6 flex justify-between'>
					<p className=' w-full text-2xl font-bold md:basis-1/2'>Get Entries</p>
					<p
						onClick={() => setIsOpen(false)}
						className='max-md:!display-none text-xs cursor-pointer md:basis-1/2 text-right'>X &nbsp; Close</p>
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
								<Package key={index} property={property} className='hover:scale-105 duration-300 duration-300' />
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				{/* Form */}
				<form onSubmit={onSubmit}>
					<div className='p-5'>

						<div className='mt-3 flex items-center'>
							<div className='relative basis-1/2'>
								<input type='text' placeholder='First Name' className='text-sm rounded-l-2xl md:rounded-2xl w-full h-14 bg-[#C4CDDF1A] pl-12' />
								<img src={user} alt='user' className='absolute top-[15px] left-[12px] ' />
							</div>

							<div className=' md:!display-none w-[3px] h-[33px] bg-[#D5D5D5]'></div>

							<div className='relative basis-1/2 md:ml-6'>
								<img src={user} alt='user' className='max-md:!display-none absolute top-[15px] left-[12px] ' />
								<input type='text' placeholder='Sur Name' className='text-sm rounded-r-2xl md:rounded-2xl w-full h-14 bg-[#C4CDDF1A] pl-5 md:pl-12' />
							</div>
						</div>

						<div className='md:flex'>
							<div className='relative mt-3 md:basis-1/2'>
								<input type='text' placeholder='Email' className='text-sm rounded-2xl w-full h-14 bg-[#C4CDDF1A] pl-12' />
								<img src={email} alt='user' className='absolute top-[15px] left-[12px] ' />
							</div>

							<div className='relative mt-3 md:basis-1/2 md:ml-6'>
								<input type='text' placeholder='Phone Number' className='text-sm rounded-2xl w-full h-14 bg-[#C4CDDF1A] pl-12' />
								<img src={phone} alt='user' className='absolute top-[15px] left-[12px] ' />
							</div>
						</div>

						{/* form divider */}
						<div className='max-md:!display-none mt-8'>
							<div className='w-full h-[1px] bg-[#D5D5D5]'></div>
						</div>

					</div>

					<div className='md:flex justify-between items-center'>
						<div className='flex justify-center md:justify-start md:basis-1/2'>
							<div className='flex items-center p-3'>
								<label className="custom-checkbox">
									<input type="checkbox" />
									<span className={`checkmark1 block w-[24px] h-[24px] border border-[#FF4D00] rounded-[3px]`}></span>
								</label>
								<p className='text-[10px] md:text-sm font-bold md:font-normal leading-3 p-3'>
									By Checking The Box You Agree To Our
									<span className='text-[#FF4D00]'>Terms Of Use</span>
								</p>
							</div>
						</div>

						<div className='md:basis-1/2'>
							<button
								type='submit'
								className='w-full bg-[#FF4D00] text-sm text-white font-medium p-7  md:rounded-2xl hover:scale-105 duration-300 duration-300'>Enter Now</button>
						</div>
					</div>

				</form>
				{/* End Form */}

			</div>
		</div>
	)
}