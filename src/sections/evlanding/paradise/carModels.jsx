import React from 'react'

import car1 from "../../../assets/paradise/car1.png";
import car2 from "../../../assets/paradise/car2.png";
import isuzu from "../../../assets/icons/isuzu.svg";
import tesla from "../../../assets/icons/tesla.svg";

const isuzuModel = {
    name: "D-MAX X-Terrain",
    range: "950",
    speed: "175",
    mph: "9.8",
    startMph: "0",
    endMph: "100",
    features: [
        "1. Brand new from dealership",
        "2. 3.0L Turbo Diesel",
        "3. 140KW Power",
        "4. 450NM Torque",
        "5. 3.5T towing",
        "6. Reversing Camera and Sensors",
        "7. Remote Entry Start",
    ]
}

const teslaModel = {
    name: "Model Y",
    range: "455",
    speed: "217",
    mph: "6.9",
    startMph: "0",
    endMph: "100",
    features: [
        "1. Brand new from dealership",
        "2. Pearl White Multi Coat",
        "3. 19” Gemini Wheels",
        "4. Black Leather Interior",
        "5. 5 Seater"
    ]
}

export default function CarModel() {
    return (
        <div className="flex lg:flex-row flex-col justify-center mt-[200px] max-lg:mt-12 md:mx-[100px]">
            {/* ISUZU model */}
            <div className="md:basis-1/2">
                <div className="flex justify-center px-12">
                    <img src={car1} alt="car1" />
                </div>
                <div className="flex justify-center mt-20">
                    <img src={isuzu} alt="isuzu" />
                </div>
                <div className="flex justify-center">
                    <p className="font-semibold text-5xl max-md:text-2xl text-justify mt-2 mb-4">{isuzuModel.name}</p>
                </div>

                <div className="flex max-lg:justify-between lg:justify-evenly mx-16 border-y-[1px] text-center max-lg:mx-6">
                    <div className="mt-3">
                        <p>
                            <span className="font-medium text-4xl text-justify max-lg:text-2xl">{isuzuModel.range}</span>
                            <span className="font-light text-2xl text-justify max-lg:text-base">Kms</span>
                        </p>
                        <p className="font-normal text-2xl max-lg:text-xs">Range(est.)</p>
                    </div>
                    <div className="mt-3">
                        <p>
                            <span className="font-medium text-4xl text-justify max-lg:text-2xl">{isuzuModel.speed}</span>
                            <span className="font-light text-2xl text-justify max-lg:text-base">km/h</span>
                        </p>
                        <p className="font-normal text-2xl max-lg:text-xs">Top Speed</p>
                    </div>
                    <div className="mt-3">
                        <p>
                            <span className="font-medium text-4xl text-justify max-lg:text-2xl">{isuzuModel.mph}</span>
                            <span className="font-light text-2xl text-justify max-lg:text-base">sec</span>
                        </p>
                        <p className="font-normal text-2xl max-lg:text-xs">{isuzuModel.startMph}-{isuzuModel.endMph} km/h</p>
                    </div>
                </div>
                <div className="flex justify-center max-md:justify-start mt-16 max-lg:mx-6">
                    <div>
                        {
                            isuzuModel.features.map((feature, index) => (
                                <p key={index} className="font-normal text-2xl max-md:text-sm max-md:leading-6 text-justify mt-3">{feature}</p>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Tesla Model */}
            <div className="md:basis-1/2 md:border-l-[1px] max-lg:mt-12">
                <div className="flex justify-center px-12">
                    <img src={car2} alt="car2" />
                </div>
                <div className="flex justify-center mt-20">
                    <img src={tesla} alt="tesla" />
                </div>
                <div className="flex justify-center">
                    <p className="font-semibold text-5xl max-md:text-2xl text-justify mt-2 mb-4">{teslaModel.name}</p>
                </div>

                <div className="flex max-lg:justify-between lg:justify-evenly mx-16 border-y-[1px] text-center max-lg:mx-6">
                    <div className="mt-3">
                        <p>
                            <span className="font-medium text-4xl text-justify max-lg:text-2xl">{teslaModel.range}</span>
                            <span className="font-light text-2xl text-justify max-lg:text-base">Kms</span>
                        </p>
                        <p className="font-normal text-2xl max-lg:text-xs">Range(est.)</p>
                    </div>
                    <div className="mt-3">
                        <p>
                            <span className="font-medium text-4xl text-justify max-lg:text-2xl">{teslaModel.speed}</span>
                            <span className="font-light text-2xl text-justify max-lg:text-base">km/h</span>
                        </p>
                        <p className="font-normal text-2xl max-lg:text-xs">Top Speed</p>
                    </div>
                    <div className="mt-3">
                        <p>
                            <span className="font-medium text-4xl text-justify max-lg:text-2xl">{teslaModel.mph}</span>
                            <span className="font-light text-2xl text-justify max-lg:text-base">sec</span>
                        </p>
                        <p className="font-normal text-2xl max-lg:text-xs">{teslaModel.startMph}-{teslaModel.endMph} km/h</p>
                    </div>
                </div>
                <div className="flex justify-center max-md:justify-start mt-16 max-lg:mx-6">
                    <div>
                        {
                            teslaModel.features.map((feature, index) => (
                                <p key={index} className="font-normal text-2xl max-md:text-sm max-md:leading-6 text-justify mt-3">{feature}</p>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}