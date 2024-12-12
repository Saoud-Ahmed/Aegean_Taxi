"use client";
import React from "react";
import Image from "next/image";
import taxi_dr from './assets/taxi_dr.png'
import cus from './assets/cus.png'
import apple from './assets/apple.png'

import price from './assets/price.png'
import OnlineIcon from "./assets/online-icon-removebg-preview.png";

export default function WhyBook() {
  return (
    <div className="my-20 flex flex-col">
      <div className="mx-8">
        {/* Heading Section */}
        <div className="text-center pb-4">
          <h1 className="text-3xl font-bold leading-[1.1] text-[#0000FF]">
            Why book your Taxi with Aegean Taxi
          </h1>
        </div>

        {/* Line and Description Section */}
        <div className="flex flex-col items-start mt-8">
          {/* Left vertical line */}
          <div className="w-1 bg-[#000000] h-[400px] z-[-1] left-[84px] absolute"></div> {/* Vertical line */}

          {/* Right Content with Images */}
          <div className="ml-8 space-y-8 relative">
            {/* Taxi Driver */}
            <div className="flex items-center space-x-8">
              <Image src={taxi_dr} alt="English speaking drivers" width={80} height={80} />
              <div> 
                <h4 className="text-[#3F3F3F] text-lg font-semibold" >
                  English speaking drivers
                </h4>
                <p>Our drivers are fluent in English and hold professional licenses.</p>
              </div>
            </div>
            {/* Customer Support */}
            <div className="flex items-center space-x-8">
              <Image src={cus} alt="24/7 customer support" width={80} height={80} />
              <div>
                <h4 className="text-[#3F3F3F] font-semibold text-lg">
                  24/7 customer support
                </h4>
                <p>We offer round-the-clock customer support for any assistance you need.</p>
              </div>
            </div>
            {/* Lowest Price */}
            <div className="flex items-center space-x-8">
              <Image src={price} alt="Lowest price guaranteed" width={80} height={80} />
              <div>
                <h4 className="text-[#3F3F3F] font-semibold text-lg">
                  Lowest price guaranteed
                </h4>
                <p>We guarantee the lowest price for your taxi ride with no hidden fees.</p>
              </div>
            </div>
            {/* World-Class App */}
            <div className="flex items-center space-x-8">
              <Image src={price} alt="World-class app" width={80} height={80} />
              <div>
                <h4 className="text-[#3F3F3F] font-semibold text-lg">
                  World-class app
                </h4>
                <p>Our app is easy to use, with seamless booking and payment features.</p>
              </div>
            </div>
          </div>

                    <div className="flex flex-row justify-between items-center mt-6 w-full gap-4"> {/* Added w-full and gap-4 */}
                <button className="flex-1 bg-black h-[40px] sm:h-[32px] text-white rounded-3xl px-2 sm:px-4 space-x-2 sm:space-x-3 hover:opacity-90 transition whitespace-nowrap flex items-center justify-center"> {/* Added flex items-center justify-center */}
                  <Image src={apple} alt="Online Icon"  /> {/* Added explicit width/height */}
                </button>
                
                <button className="flex-1 bg-[#343434] h-[40px]  sm:h-[32px] text-white rounded-3xl flex items-center justify-center px-2 sm:px-4 space-x-2 sm:space-x-3 hover:opacity-90 transition whitespace-nowrap"> 
                  <Image src={OnlineIcon} alt="Arrow Front" width={14} height={14} className="w-4 h-4 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-sm lg:text-base font-bold text-white">Contact Us</span>
                </button>
              </div>
          </div>
        </div>
      </div>
    
  );
}
