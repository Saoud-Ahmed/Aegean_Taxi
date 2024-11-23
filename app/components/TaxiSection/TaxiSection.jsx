"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import standardCar from "./assets/standard-car.png";
import vanCar from "./assets/van-bus.png";
import miniBus from "./assets/mini-bus.png";
import taxiIcon from "./assets/car-icon.png";
import bagIcon from "./assets/bag-icon.png";

const TaxiSection = () => {
  useEffect(() => {
    // GSAP Animations
    gsap.to("#title", { opacity: 1, y: -20, duration: 1, delay: 0.5 });
    gsap.to("#description", { opacity: 1, y: -20, duration: 1, delay: 1 });
    gsap.to("#card", { opacity: 1, y: -20, stagger: 0.2, duration: 1, delay: 1.5 });
  }, []);

  return (
    <div className="flex flex-col px-5 py-8 bg-[#f5f5f5]">
      {/* Title Section */}
      <div className="flex flex-col items-left mb-6">
        <h1
          id="title"
          className="text-3xl font-semibold font-inter opacity-0 translate-y-10"
        >
          Your Mykonos Taxi App
        </h1>
        <p
          id="description"
          className="text-[18px] font-medium font-inter mt-2 text-left text-[#5E5E5E] opacity-0 translate-y-10"
        >
          Aegean Taxi is the best taxi service in Mykonos operating since 2015
          with the largest fleet and cheapest prices
        </p>
      </div>

      {/* Card Section */}
      <div className="flex flex-col bg-[#D0D8EF] rounded-[40px] px-6 py-8 gap-6">
        <div
          id="card"
          className="flex flex-col items-left mb-4 opacity-0 translate-y-10"
        >
          <h1 className="text-[24px] font-semibold font-inter">Ride Your Way</h1>
          <p className="text-[18px] font-medium font-inter mt-2 text-left">
            From taxis to luxury cars, you choose the right ride for you
          </p>
        </div>

        {/* Standard Car */}
        <div
          id="card"
          className="flex flex-row items-center justify-between opacity-0 translate-y-10"
        >
          <Image src={standardCar} alt="Standard Car" width={163} height={134} />
          <div className="flex flex-col items-center">
            <h2 className="text-[20px] font-medium font-inter">Standard</h2>
            <div className="flex flex-row mt-2 gap-2">
              <button className="flex items-center justify-center w-14 h-8 border border-[#8A8A8B] border-[3px] rounded-full bg-black">
                <Image src={taxiIcon} alt="Car Icon" width={20} height={20} />
                <p className="text-white text-[16px] ml-[5px]">4</p>
              </button>
              <button className="flex items-center justify-center w-14 h-8 border border-[#8A8A8B] border-[3px] rounded-full bg-black">
                <Image src={bagIcon} alt="Bag Icon" width={20} height={20} />
                <p className="text-white text-[16px] ml-[5px]">3</p>
              </button>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-[#C3C3C3]"></div>

        {/* Van */}
        <div
          id="card"
          className="flex flex-row items-center justify-between opacity-0 translate-y-10"
        >
          <Image src={vanCar} alt="Van Car" width={163} height={134} />
          <div className="flex flex-col items-center">
            <h2 className="text-[20px] font-medium font-inter">Van</h2>
            <div className="flex flex-row mt-2 gap-2">
              <button className="flex items-center justify-center w-14 h-8 border border-[#8A8A8B] border-[3px] rounded-full bg-black">
                <Image src={taxiIcon} alt="Car Icon" width={20} height={20} />
                <p className="text-white text-[16px] ml-[5px]">4</p>
              </button>
              <button className="flex items-center justify-center w-14 h-8 border border-[#8A8A8B] border-[3px] rounded-full bg-black">
                <Image src={bagIcon} alt="Bag Icon" width={20} height={20} />
                <p className="text-white text-[16px] ml-[5px]">3</p>
              </button>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-[#C3C3C3]"></div>

        {/* Mini Bus */}
        <div
          id="card"
          className="flex flex-row items-center justify-between opacity-0 translate-y-10"
        >
          <Image src={miniBus} alt="Mini Bus" width={163} height={134} />
          <div className="flex flex-col items-center">
            <h2 className="text-[20px] font-medium font-inter">Mini Bus</h2>
            <div className="flex flex-row mt-2 gap-2">
              <button className="flex items-center justify-center w-14 h-8 border border-[#8A8A8B] border-[3px] rounded-full bg-black">
                <Image src={taxiIcon} alt="Car Icon" width={20} height={20} />
                <p className="text-white text-[16px] ml-[5px]">4</p>
              </button>
              <button className="flex items-center justify-center w-14 h-8 border border-[#8A8A8B] border-[3px] rounded-full bg-black">
                <Image src={bagIcon} alt="Bag Icon" width={20} height={20} />
                <p className="text-white text-[16px] ml-[5px]">3</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxiSection;
