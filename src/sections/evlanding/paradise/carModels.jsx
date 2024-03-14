import React from 'react'

import car1 from "../../../assets/paradise/car1.png";
import car2 from "../../../assets/paradise/car2.png";
import isuzu from "../../../assets/icons/isuzu.svg";
import tesla from "../../../assets/icons/tesla.svg";

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
                    <p className="font-semibold text-5xl max-md:text-2xl text-justify mt-2 mb-4">D-MAX DL20</p>
                </div>

                <div className="flex max-lg:justify-between lg:justify-evenly mx-16 border-y-[1px] text-center max-lg:mx-6">
                    <div className="mt-3">
                        <p>
                            <span className="font-medium text-4xl text-justify max-lg:text-2xl">242</span>
                            <span className="font-light text-2xl text-justify max-lg:text-base">mi</span>
                        </p>
                        <p className="font-normal text-2xl max-lg:text-xs">Range(est.)</p>
                    </div>
                    <div className="mt-3">
                        <p>
                            <span className="font-medium text-4xl text-justify max-lg:text-2xl">135</span>
                            <span className="font-light text-2xl text-justify max-lg:text-base">mph</span>
                        </p>
                        <p className="font-normal text-2xl max-lg:text-xs">Top Speed</p>
                    </div>
                    <div className="mt-3">
                        <p>
                            <span className="font-medium text-4xl text-justify max-lg:text-2xl">6.6</span>
                            <span className="font-light text-2xl text-justify max-lg:text-base">sec</span>
                        </p>
                        <p className="font-normal text-2xl max-lg:text-xs">0-60 mph</p>
                    </div>
                </div>
                <div className="flex justify-center max-md:justify-start mt-16 max-lg:mx-6">
                    <div>
                        <p className="font-normal text-2xl max-md:text-sm max-md:leading-6 text-justify">1. Demo Vehicle</p>
                        <p className="font-normal text-2xl max-md:text-sm max-md:leading-6 text-justify">2. 778 mile odometer</p>
                        <p className="font-normal text-2xl max-md:text-sm max-md:leading-6 text-justify">3. Pearl White Paint</p>
                        <p className="font-normal text-2xl max-md:text-sm max-md:leading-6 text-justify">4. 20" Induction Wheels</p>
                        <p className="font-normal text-2xl max-md:text-sm max-md:leading-6 text-justify">5. Black and White Premium Interior</p>
                        <p className="font-normal text-2xl max-md:text-sm max-md:leading-6 text-justify">6. Autopilot</p>
                        <p className="font-normal text-2xl max-md:text-sm max-md:leading-6 text-justify">7. Five Seat Interior</p>
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
                    <p className="font-semibold text-5xl max-md:text-2xl text-justify mt-2 mb-4">Model Y</p>
                </div>

                <div className="flex max-lg:justify-between lg:justify-evenly mx-16 border-y-[1px] text-center max-lg:mx-6">
                    <div className="mt-3">
                        <p>
                            <span className="font-medium text-4xl text-justify max-lg:text-2xl">242</span>
                            <span className="font-light text-2xl text-justify max-lg:text-base">mi</span>
                        </p>
                        <p className="font-normal text-2xl max-lg:text-xs">Range(est.)</p>
                    </div>
                    <div className="mt-3">
                        <p>
                            <span className="font-medium text-4xl text-justify max-lg:text-2xl">135</span>
                            <span className="font-light text-2xl text-justify max-lg:text-base">mph</span>
                        </p>
                        <p className="font-normal text-2xl max-lg:text-xs">Top Speed</p>
                    </div>
                    <div className="mt-3">
                        <p>
                            <span className="font-medium text-4xl text-justify max-lg:text-2xl">6.6</span>
                            <span className="font-light text-2xl text-justify max-lg:text-base">sec</span>
                        </p>
                        <p className="font-normal text-2xl max-lg:text-xs">0-60 mph</p>
                    </div>
                </div>
                <div className="flex justify-center max-md:justify-start mt-16 max-lg:mx-6">
                    <div>
                        <p className="font-normal text-2xl max-md:text-sm max-md:leading-6 text-justify">1. Demo Vehicle</p>
                        <p className="font-normal text-2xl max-md:text-sm max-md:leading-6 text-justify">2. 778 mile odometer</p>
                        <p className="font-normal text-2xl max-md:text-sm max-md:leading-6 text-justify">3. Pearl White Paint</p>
                        <p className="font-normal text-2xl max-md:text-sm max-md:leading-6 text-justify">4. 20" Induction Wheels</p>
                        <p className="font-normal text-2xl max-md:text-sm max-md:leading-6 text-justify">5. Black and White Premium Interior</p>
                        <p className="font-normal text-2xl max-md:text-sm max-md:leading-6 text-justify">6. Autopilot</p>
                        <p className="font-normal text-2xl max-md:text-sm max-md:leading-6 text-justify">7. Five Seat Interior</p>
                    </div>
                </div>
            </div>

        </div>
    );
}