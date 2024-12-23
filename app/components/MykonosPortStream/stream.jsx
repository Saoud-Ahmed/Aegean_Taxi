"use client";
import React from "react";
import Image from "next/image";
import live from "./assets/live.svg";
import livestream from "./assets/livestream.svg";
import camera from "./assets/camera.svg";
import mark from "./assets/exclaimation.svg";
import wifi from "./assets/wifi.svg";
import kiosk from "./assets/kiosk.svg";
import toilet from "./assets/toilets.svg";
import counter from "./assets/ticket.svg";
import portcover from "./assets/portcover.svg";

const stream = () => {
  return (
    <>
      <div className="bg-[#E3E3E3] pt-12 mt-16">
        <div className="flex flex-col mx-8 ">
          <div className="flex flex-row items-center mb-4">
            <Image
              src={live}
              alt="icon"
              width={65}
              height={36}
              className="w-[50px] h-[57.88px]"
            />
            <h1 className="text-[24px] ml-4 font-bold">
              Mykonos port live streaming
            </h1>
          </div>
          <p className="text-[14px] text-black mb-8">
            See live camera footage of Mykonos new port now
          </p>
          <Image
            src={livestream}
            alt="icon"
            width={50}
            height={50}
            className="w-full mb-16"
          />

          <div className="flex flex-col mb-16">
            <div className="flex flex-row items-center mb-4">
              <Image
                src={camera}
                alt="icon"
                width={65}
                height={36}
                className="w-[50px] h-[57.88px]"
              />
              <h1 className="text-[24px] ml-4 font-bold">
                Photos of Mykonos Airport
              </h1>
            </div>
            <p className="text-[14px] text-black mb-8">
              Click on an image to enlarge
            </p>
            {/*Slider Section */}
          </div>

          <div className="flex flex-row items-center mb-4">
            <Image
              src={mark}
              alt="icon"
              width={50}
              height={50}
              className="w-[50px] h-[50px]"
            />
            <h1 className="text-[24px] ml-4 font-bold">
              Mykonos port terminal information
            </h1>
          </div>
          <div className="mx-8 mt-4">
            <div className="flex flex-row mt-4">
              <Image
                src={wifi}
                alt="icon"
                width={50}
                height={50}
                className="w-[25px] h-[25px]"
              />
              <p className="text-[16px] ml-4 ">Free wifi</p>
            </div>
            <div className="flex flex-row mt-4">
              <Image
                src={toilet}
                alt="icon"
                width={50}
                height={50}
                className="w-[25px] h-[25px]"
              />
              <p className="text-[16px] ml-4 ">Public Toilets</p>
            </div>
            <div className="flex flex-row mt-4">
              <Image
                src={kiosk}
                alt="icon"
                width={50}
                height={50}
                className="w-[25px] h-[25px]"
              />
              <p className="text-[16px] ml-4 ">Kiosk</p>
            </div>
            <div className="flex flex-row mt-4">
              <Image
                src={counter}
                alt="icon"
                width={50}
                height={50}
                className="w-[25px] h-[25px]"
              />
              <p className="text-[16px] ml-4 ">Ticket Counter</p>
            </div>

            
          </div>
          
        </div>
        <div className="mx-4">
        <Image
              src={portcover}
              alt="cover"
              width={65}
              height={36}
              className="w-full"
            />
        </div>
        
      </div>
    </>
  );
};

export default stream;
