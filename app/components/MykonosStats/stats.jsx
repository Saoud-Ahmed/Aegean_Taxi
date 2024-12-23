"use client";
import React from "react";
import Image from "next/image";
import passenger from "./assets/passenger.svg"
import covered from "./assets/covered.svg"
import days from "./assets/days.svg"
import trips from "./assets/trips.svg"
import visited from "./assets/visited.svg"
import surveyed from "./assets/surveyed.svg"
import arrow from "./assets/arrowdown.svg"

export default function Number() {
  return (
    <div className="my-20">
      <div className="mx-4 sm:mx-8">
        {/* Heading Section */}
        <div className="text-left pb-4">
          <h1 className="text-2xl sm:text-2xl font-bold leading-[1.1] text-[#2B2B6E]">
          Mykonos statistics (2024)
          </h1>
        </div>
       
        
        {/* Data Cards Section */}
        <div className="mt-8 mx-5">
          {/* Grid for all screen sizes */}
          <div className="grid grid-cols-[1fr_1px_1fr_1px_1fr] gap-2 -mx-4 overflow-x-auto">
            {/* First Row */}
            {/* Card 1 */}
            <div className="p-2 sm:p-6 font-bold text-center flex flex-col items-start">
              <Image
                src={passenger}
                alt="Location Image"
                width={60} 
                height={60} 
                className="mb-2 sm:mb-4 w-[35px] h-[30px]"
              />
              <div className="text-[20px] sm:text-[20px] font-semibold mb-2 sm:mb-4 text-[#2A56F6]">545k</div>
              <div className="flex-col">
              <p className="text-[14px] sm:text-[14px] text-black font-bold">
                Passenger
              </p>
              <p className="text-[14px] sm:text-[14px] text-black font-light text-left">
                 arrivals
              </p>
              </div>
            </div>
            
            {/* Vertical Line */}
            <div className="bg-gray-500 w-[1px] mb-4"></div>

            {/* Card 2 */}
            <div className="p-2 sm:p-6 font-bold text-center flex flex-col items-start">
              <Image
                src={trips}
                alt="Location Image"
                width={60} 
                height={60} 
                className="mb-2 sm:mb-4 w-[35px] h-[30px]"
              />
              <div className="text-[20px] sm:text-[20px] font-semibold mb-2 sm:mb-4 text-[#2A56F6]">350k</div>
              <div className="flex-col">
              <p className="text-[14px] sm:text-[14px] text-black font-bold">
                Passenger
              </p>
              <p className="text-[14px] sm:text-[14px] text-black font-light text-left">
                 trips
              </p>
              </div>
            </div>
            
            {/* Vertical Line */}
            <div className="bg-gray-500 w-[1px] mb-4"></div>

            {/* Card 3 */}
            <div className="p-2 sm:p-6 font-bold text-center flex flex-col items-start">
              <Image
                src={days}
                alt="Location Image"
                width={60} 
                height={60} 
                className="mb-2 sm:mb-4 w-[30.22px] h-[31.18px]"
              />
              <div className="text-[20px] sm:text-[20px] font-semibold mb-2 sm:mb-4 text-[#2A56F6]">210</div>
              <div className="flex-col">
              <p className="text-[14px] sm:text-[14px] text-black font-bold">
                Operational
              </p>
              <p className="text-[14px] sm:text-[14px] text-black font-light text-left">
                 days
              </p>
              </div>
            </div>
            
           

            {/* Second Row */}
            <div className="p-2 sm:p-6 font-bold text-center flex flex-col items-start">
              <Image
                src={covered}
                alt="Location Image"
                width={60} 
                height={60} 
                className="mb-2 sm:mb-4 w-[30.76px] h-[35px]"
              />
              <div className="text-[20px] sm:text-[20px] font-semibold mb-2 sm:mb-4 text-[#2A56F6]">2.5M km</div>
              <div className="flex-col">
              <p className="text-[14px] sm:text-[14px] text-black font-bold">
                Distance
              </p>
              <p className="text-[14px] sm:text-[14px] text-black font-light text-left">
                 covered
              </p>
              </div>
            </div>
            
            {/* Vertical Line */}
            <div className="bg-gray-500 w-[1px] mb-4"></div>

            {/* Card 5 */}
            <div className="p-2 sm:p-6 font-bold text-center flex flex-col items-start">
              <Image
                src={visited}
                alt="Location Image"
                width={60} 
                height={60} 
                className="mb-2 sm:mb-4 w-[34px] h-[35px]"
              />
              <div className="text-[20px] sm:text-[20px] font-semibold mb-2 sm:mb-4 text-[#2A56F6]">215</div>
              <div className="flex-col">
              <p className="text-[14px] sm:text-[14px] text-black font-bold">
                Places
              </p>
              <p className="text-[14px] sm:text-[14px] text-black font-light text-left">
                 visited
              </p>
              </div>
            </div>
            
            {/* Vertical Line */}
            <div className="bg-gray-500 w-[1px] mb-4"></div>

            {/* Card 6 */}
            <div className="p-2 sm:p-6 font-bold text-center flex flex-col items-start">
              <Image
                src={surveyed}
                alt="Location Image"
                width={60} 
                height={60} 
                className="mb-2 sm:mb-4 w-[35px] h-[35px]"
              />
              <div className="text-[20px] sm:text-[20px] font-semibold mb-2 sm:mb-4 text-[#2A56F6]">220</div>
              <div className="flex-col">
              <p className="text-[14px] sm:text-[14px] text-black font-bold">
                Drivers
              </p>
              <p className="text-[14px] sm:text-[14px] text-black font-light text-left">
                 surveyed
              </p>
              </div>
            </div>
          </div>

          

          
        </div>
        <div className="flex justify-end mt-16 mb-4">
            <button className="bg-[#2B2B6E] h-[35px] px-4 sm:h-[35px] text-white rounded-3xl flex items-center justify-center px-1 sm:px-4 space-x-2 sm:space-x-3 hover:opacity-90 transition whitespace-nowrap">
              <span className="text-[14px] sm:text-[14px] lg:text-[14px] font-bold text-white">
                Download Mykonos statistics
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
      </div>
    </div>
  );
}