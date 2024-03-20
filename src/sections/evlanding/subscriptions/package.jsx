import React from "react";
import check from "../../../assets/check.svg";
import "./subscriptions.css"

const Package = ({ property, className, style }) => {
	return (
		<div
			style={style}
			className={`${className}`}
		>
			<div
				className={`w-[162px] md:w-[270px] rounded-2xl ${property.backgroundColor} ${property.borderColor} border-2 p-4`}
			>
				<div className="flex justify-between">
					<p className="text-[20px] font-bold font-['Axiforma']">{property.number}</p>
					<label className="custom-checkbox">
						<input type="checkbox" />
						<span className={`checkmark block w-[24px] h-[24px] border ${property.borderColor} rounded-full`}></span>
					</label>
					{/* <img src={checkbox} alt="checkbox" /> */}
				</div>

				<div className="flex justify-between mt-3">
					<p className="basis-1/2 text-xs font-light font-['Axiforma']">Entery Package</p>
					<p className="basis-1/2 text-sm font-black font-['Axiforma'] text-right">
						$10 &nbsp;&nbsp;
						<span className="text-[10px] font-normal font-['Axiforma] text-[#FE705C]"><del>$20</del></span>
					</p>
				</div>

				<div className="bg-[#0000001A] w-full h-[1px] mt-3"></div>

				<div className="flex items-center mt-3">
					<img src={check} alt="check" className="pr-3"></img>
					<p className="font-normal text-[10px] font-['Axiforma']">
						Full Access To Partnered
					</p>
				</div>

			</div>

		</div>
	);
};

export default Package;
