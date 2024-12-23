"use client";
import React from "react";
import Image from "next/image";

import taxiimg from "./assets/taxi.svg";
import arrowSrc from "./assets/arrowtilt.svg";
import whatsapp from "./assets/whatsapp.svg";
import radical from "./assets/radial.svg";

const Taxi = () => {
  return (
    <>
    <div className="bg-[#000000]  mx-8 rounded-tl-2xl rounded-tr-2xl p-8 pb-1 px-10">
      
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <Image
            src={taxiimg}
            alt="icon"
            width={65}
            height={36}
            className="w-[60px] h-[30px] mr-6"
          />
          <h1 className="text-[24px] ml-[4px] font-bold text-[#FFFFFF]">
            By Taxi
          </h1>
        </div>

        <p className="text-[16px] text-white my-6">
          There is a taxi rank serving Mykonos Airport outside the Arrivals Hall
          as soon as you exit the terminal building.
          <br />
          <br />
          Taxis are hard to find and there is always big lines, so make sure you
          book your Mykonos airport taxi or transfer in advance.
          <br />
          <br />
          Aegean Taxi offers the best airport taxi and transfer service in
          Mykonos
        </p>

        
      </div>
      {/* Button 1 */}
      <button
          className="bg-[#006FE1] text-white py-2 px-6 pl-3 rounded-3xl flex items-center justify-start space-x-4 sm:space-x-3 hover:opacity-90 transition mb-8"
        >
          {radical && (
            <Image
              src={radical}
              alt="Arrow"
              width={14}
              height={14}
              className="w-6 h-6 sm:w-6 sm:h-6"
            />
          )}
          <span className="text-[14px] sm:text-[14px] lg:text-[14px] font-bold">
            Book Online
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

        {/* Button 2 */}
        <button
           className="w-[80%] bg-[#3ED145] text-white py-2 px-6 pl-3 rounded-3xl flex items-center justify-start space-x-2 sm:space-x-3 hover:opacity-90 transition mb-7 w-auto"
        >
          {/* Whatsapp icon */}
          {whatsapp && (
            <Image
              src={whatsapp}
              alt="Whatsapp"
              width={14}
              height={14}
              className="w-6 h-6 sm:w-6 sm:h-6"
            />
          )}
          <span className="text-[14px] sm:text-[14px] lg:text-[14px] font-bold">
            Book via Whatsapp
          </span>
        </button>
    </div>
      
    </>
  );
};

export default Taxi;
