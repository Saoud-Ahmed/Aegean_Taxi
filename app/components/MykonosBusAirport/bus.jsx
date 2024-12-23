"use client";
import React from "react";
import Image from "next/image";

import busimg from "./assets/bus.svg";
import arrowSrc from "./assets/arrowtiltblack.svg";


const bus = () => {
  return (
    <>
    <div className="bg-[#000000]  mx-8 rounded-tl-2xl rounded-tr-2xl p-8 pb-1 px-[52px] mt-12">
      
      <div className="flex flex-col">
      <div className="flex flex-row items-center justify-start">
  <Image
    src={busimg}
    alt="icon"
    width={65}
    height={36}
    className="w-[40px] h-[40px] mr-6"  // Use margin-right to separate image and text
  />
  <h1 className="text-[24px] ml-[4px] font-bold text-[#FFFFFF]">
    By Bus
  </h1>
</div>

        <p className="text-[16px] text-white my-6">
        Bus service is provided between the Airport and the town of Mykonos (Chora) which start from the Fabrika area. The bus stop is located in front of the terminal building (Arrivals area). Tickets can be purchased by the bus driver.
          <br />
          <br />
          For more Information please contact: <span className="underline"><a href="http://www.mykonosbus.com/index.en.htm">http://<br></br>www.mykonosbus.com/<br></br>index.en.htm</a></span>
          <br />
          
        </p>

        
      </div>
      {/* Button 1 */}
      <button
          className="w-full h-[40px] bg-[#FFFFFF] text-black py-2 px-6 pl-3 rounded-3xl flex items-center justify-center space-x-4 sm:space-x-3 hover:opacity-90 transition mb-8"
        >
          
          <span className="text-[14px] sm:text-[14px] lg:text-[14px] font-bold text-black">
            Check Bus Schedules
          </span>
          {/* Arrow image */}
          {arrowSrc && (
            <Image
              src={arrowSrc}
              alt="Arrow"
              width={14}
              height={14}
              className="w-4 h-4 sm:w-6 sm:h-6"
            />
          )}
        </button>

        
    </div>
      
    </>
  );
};

export default bus;
