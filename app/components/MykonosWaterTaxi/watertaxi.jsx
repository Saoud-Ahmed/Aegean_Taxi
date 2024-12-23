"use client";
import React from "react";
import Image from "next/image";

import carimg from "./assets/car.svg";

const watertaxi = () => {
  return (
    <>
      <div className="bg-[#000000]  mx-8 rounded-tl-2xl rounded-tr-2xl p-8 pb-1 px-[52px] mt-12">
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-start">
            <Image
              src={carimg}
              alt="icon"
              width={65}
              height={36}
              className="w-[45px] h-[45px] mr-6" // Use margin-right to separate image and text
            />
            <h1 className="text-[24px] ml-[4px] font-bold text-[#FFFFFF]">
            By Water Taxi
            </h1>
          </div>

          <p className="text-[16px] text-white my-6">
          There is a taxi rank serving Mykonos Airport outside the Arrivals Hall as soon as you exit the terminal building. 
            <br />
            <br />
            Taxis are hard to find and there is always big lines, so make sure you book your Mykonos airport taxi or transfer in advance.
            <br />
            <br />
            Aegean Taxi offers the best airport taxi and transfer service in Mykonos
          </p>
        </div>
      </div>
    </>
  );
};

export default watertaxi ;
