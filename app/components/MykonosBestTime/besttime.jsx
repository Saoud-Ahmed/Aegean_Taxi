"use client";
import React from "react";
import Image from "next/image";

import bestTime from "./assets/besttime.svg";
import gettingAround from "./assets/gettingaround.svg";
import weather from "./assets/weather.svg";
import taxi from "./assets/taxi.svg";
import rental from "./assets/rental.svg";
import bus from "./assets/bus.svg";
import foot from "./assets/foot.svg";
import watertaxi from "./assets/watertaxi.svg";
import scooter from "./assets/scooter.svg";
import arrowSrc from "./assets/w-front-arrow.png";

const BestTime = () => {
  return (
    <>
      <div
        className="bg-[#F0F0F0] relative"
        style={{ transform: "translateY(-130px)", zIndex: -100 }}
      >
        <div className="p-8 py-12 pt-28">
          <div className="flex flex-row items-center space-x-2 mb-8">
            <Image
              src={bestTime}
              alt="Icon"
              width={14}
              height={14}
              className="w-[28px] h-[27px] sm:w-6 sm:h-6"
            />
            <p className="text-[24px] text-[#2B2B6E]">
              Best time to Visit Mykonos
            </p>
          </div>

          <p className="text-black text-[14px]">
            Mykonos Airport (JMK) serves as the primary entry point to the
            island, welcoming both domestic and international travelers.
            Situated just 4 kilometers from Mykonos Town, it provides convenient
            access to the island’s famous beaches, ports, and vibrant
            attractions. The airport operates year-round, with a significant
            increase in flights during the summer season to accommodate the
            influx of visitors. Facilities include a range of services such as
            cafes, shops, and car rental options, ensuring a comfortable
            experience for passengers.
            <br></br>
            <br></br>
            For more details about flight schedules, airport facilities, and
            transportation options, visit our comprehensive guide
          </p>
        </div>

        <hr className="border-t border-gray-500 border-[0.5px] my-2 mb-12 mx-8" />

        <div className="mx-8">
          <h1 className="text-[16px] font-bold mb-10 ">
            Check the weather in Mykonos now
          </h1>

          <Image
            src={weather}
            alt="Icon"
            width={14}
            height={14}
            className="w-[100%]"
          />
        </div>
        <hr className="border-t border-gray-500 border-[0.5px] mt-16 mx-8" />
        <div className="p-8 py-12 mt-4">
          <div className="flex flex-row items-center space-x-4 mb-8">
            <Image
              src={gettingAround}
              alt="Icon"
              width={14}
              height={14}
              className="w-[30px] h-[30px] sm:w-6 sm:h-6"
            />
            <p className="text-[24px] text-[#2B2B6E]">Getting Around Mykonos</p>
          </div>

          <p className="text-[14px]">
            Mykonos has a length of 12 to 15 km and a width of 10km, and is one
            of the smallest of the Cyclades islands. In the link below, we
            explore some tips on the best ways of how to move around on Mykonos
            island, as well as how to use public transportation such as buses
            and taxis.
            <br></br>
            <br></br>
            The main options on how to get around in Mykonos are the following:
            <br></br>
            <br></br>
          </p>

          <div className="flex flex-col">
            <div className="flex flex-row space-x-4 mt-2">
              <Image
                src={taxi}
                alt="Icon"
                width={14}
                height={14}
                className="w-[20px] h-[20px] sm:w-6 sm:h-6"
              />
              <p className="text-[16px] font-bold">Taxi</p>
            </div>
            <div className="flex flex-row space-x-4 mt-2">
              <Image
                src={rental}
                alt="Icon"
                width={14}
                height={14}
                className="w-[20px] h-[20px] sm:w-6 sm:h-6"
              />
              <p className="text-[16px] font-bold">Car Rental</p>
            </div>
            <div className="flex flex-row space-x-4 mt-2">
              <Image
                src={bus}
                alt="Icon"
                width={14}
                height={14}
                className="w-[20px] h-[20px]sm:w-6 sm:h-6"
              />
              <p className="text-[16px] font-bold">Bus</p>
            </div>
            <div className="flex flex-row space-x-4 mt-2">
              <Image
                src={watertaxi}
                alt="Icon"
                width={14}
                height={14}
                className="w-[20px] h-[20px] sm:w-6 sm:h-6"
              />
              <p className="text-[16px] font-bold">Water Taxi</p>
            </div>
            <div className="flex flex-row space-x-4 mt-2">
              <Image
                src={scooter}
                alt="Icon"
                width={14}
                height={14}
                className="w-[20px] h-[20px] sm:w-6 sm:h-6"
              />
              <p className="text-[16px] font-bold">Scooter</p>
            </div>
            <div className="flex flex-row space-x-4 mt-2">
              <Image
                src={foot}
                alt="Icon"
                width={14}
                height={14}
                className="w-[20px] h-[20px] sm:w-6 sm:h-6"
              />
              <p className="text-[16px] font-bold">On foot</p>
            </div>

            <button
              className={`w-full bg-[#2B2B6E] text-white py-2 my-8 px-6 rounded-3xl flex items-center justify-center space-x-2 sm:space-x-3 hover:opacity-90 transition`}
            >
              <span className="text-[14px] sm:text-[14px] lg:text-[14px] font-bold">
                Explore how to get around Mykonos
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
        </div>
      </div>
    </>
  );
};

export default BestTime;
