"use client";
import React from "react";
import Image from "next/image";
import loca from './assets/loca.png';
import two from './assets/two.png';
import three from './assets/three.png';
import bgbg from './assets/bgbg.png'
import four from './assets/four.png';
import five from './assets/five.png';
import six from './assets/six.png';
import arrow from "./assets/Arrow 32.svg"

export default function Number() {
  return (
    <div className="my-20">
      <div className="mx-4 sm:mx-8">
        {/* Heading Section */}
        <div className="text-left pb-4">
          <h1 className="text-2xl sm:text-3xl font-bold leading-[1.1] text-[#0000FF]">
            Aegean Taxi in Numbers
          </h1>
        </div>
        <div>
          <p className="text-grey font-bold text-base sm:text-[20px]">Since 2015</p>
        </div>
        
        {/* Data Cards Section */}
        <div className="mt-8">
          {/* Grid for all screen sizes */}
          <div className="grid grid-cols-[1fr_2px_1fr_2px_1fr] gap-4 -mx-4 overflow-x-auto">
            {/* First Row */}
            {/* Card 1 */}
            <div className="p-2 sm:p-6 font-bold text-center flex flex-col items-center">
              <Image
                src={loca}
                alt="Location Image"
                width={60} 
                height={60} 
                className="mx-auto mb-2 sm:mb-4 w-[50px] sm:w-[80px]"
              />
              <div className="text-base sm:text-xl font-semibold mb-2 sm:mb-4">20</div>
              <p className="text-xs sm:text-sm text-black font-light">
                <strong className="font-bold">Location</strong> Operating
              </p>
            </div>
            
            {/* Vertical Line */}
            <div className="bg-black w-[2px] "></div>

            {/* Card 2 */}
            <div className="p-2 sm:p-6 font-bold text-center flex flex-col items-center">
              <Image
                src={two}
                alt="Location Image"
                width={60}
                height={60}
                className="mx-auto mb-2 sm:mb-4 w-[50px] sm:w-[80px]"
              />
              <div className="text-base sm:text-xl font-semibold mb-2 sm:mb-4">12</div>
              <p className="text-xs sm:text-sm text-black font-light">
                <strong className="font-bold">Airports</strong> Servicing
              </p>
            </div>
            
            {/* Vertical Line */}
            <div className="bg-black w-[2px] "></div>

            {/* Card 3 */}
            <div className="p-2 sm:p-6 text-center font-bold flex flex-col items-center">
              <Image 
                src={three} 
                alt="Location Image" 
                width={60} 
                height={60} 
                className="mx-auto mb-2 sm:mb-4 w-[50px] sm:w-[80px]" 
              />
              <div className="text-base sm:text-xl font-semibold mb-2 sm:mb-4">22</div>
              <p className="text-xs sm:text-sm text-black font-light">
                <strong className="font-bold">Ports</strong> Present
              </p>
            </div>

            {/* Second Row */}
            {/* Card 4 */}
            <div className="p-2 sm:p-6 font-bold text-center flex flex-col items-center">
              <Image 
                src={four} 
                alt="Location Image" 
                width={60} 
                height={60} 
                className="mx-auto mb-2 sm:mb-4 w-[50px] sm:w-[80px]" 
              />
              <div className="text-base sm:text-xl font-semibold mb-2 sm:mb-4">2.5M</div>
              <p className="text-xs sm:text-sm text-black font-light">
                <strong className="font-bold">Clients</strong> Served
              </p>
            </div>
            
            {/* Vertical Line */}
            <div className="bg-black w-[2px] "></div>

            {/* Card 5 */}
            <div className="p-2 sm:p-6 font-bold text-center flex flex-col items-center">
              <Image 
                src={five} 
                alt="Location Image" 
                width={60} 
                height={60} 
                className="mx-auto mb-2 sm:mb-4 w-[50px] sm:w-[80px]" 
              />
              <div className="text-base sm:text-xl font-semibold mb-2 sm:mb-4">1.5M+</div>
              <p className="text-xs sm:text-sm text-black font-light">
                <strong className="font-bold">Rides</strong> Completed
              </p>
            </div>
            
            {/* Vertical Line */}
            <div className="bg-black w-[2px] "></div>

            {/* Card 6 */}
            <div className="p-2 sm:p-6 text-center font-bold flex flex-col items-center">
              <Image 
                src={six} 
                alt="Location Image" 
                width={60} 
                height={60} 
                className="mx-auto mb-2 sm:mb-4 w-[50px] sm:w-[80px]" 
              />
              <div className="text-base sm:text-xl mb-2 sm:mb-3">500k+</div>
              <p className="text-xs sm:text-sm text-black font-light">
                App <strong className="font-bold">Downloads</strong>
              </p>
            </div>
          </div>

          <div className="flex justify-start mt-6 mb-4">
            <button className="bg-[#004080] h-[35px] px-6 sm:h-[32px] text-white rounded-3xl flex items-center justify-center px-2 sm:px-4 space-x-2 sm:space-x-3 hover:opacity-90 transition whitespace-nowrap">
              <span className="text-xs sm:text-sm lg:text-base font-bold text-white">
                Find out more about us
              </span>
              <Image
                src={arrow}
                alt="Arrow Front"
                width={14}
                height={14}
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
            </button>
          </div>

          <div>
            <Image
              src={bgbg}
              alt="Background"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}