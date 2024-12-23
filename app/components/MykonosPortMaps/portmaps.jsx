"use client";
import React from "react";
import Image from "next/image";
import maps from "./assets/mapicon.svg";
import oldmap from "./assets/oldmap.svg";
import newmap from "./assets/newmap.svg";
import parking from "./assets/parking.svg";

const portmaps = () => {
  return (
    <>
      <div>
        <div className="flex flex-col mx-8 mt-8">
          <div className="flex flex-row items-center mb-4 mt-8">
            <Image
              src={maps}
              alt="icon"
              width={65}
              height={36}
              className="w-[50px] h-[50px]"
            />
            <h1 className="text-[24px] ml-2 font-bold">Mykonos port maps</h1>
          </div>
          <p className="text-[16px] text-center justify-center my-4">
            Map of New Port
          </p>
          <Image
            src={newmap}
            alt="icon"
            width={65}
            height={36}
            className="w-full"
          />

          <p className="text-[16px] text-center justify-center my-4">
            Map of Old Port
          </p>
          <Image
            src={oldmap}
            alt="icon"
            width={65}
            height={36}
            className="w-full"
          />

          <div className="flex flex-row items-center mb-4 mt-8">
            <Image
              src={parking}
              alt="icon"
              width={65}
              height={36}
              className="w-[50px] h-[50px]"
            />
            <h1 className="text-[24px] ml-2 font-bold">Mykonos port parking</h1>
          </div>

          <p className="text-[16px] mt-4 pt-4">
            Mykonos Port offers many public parking spaces available free of
            charge. These can be found in the designated parking spots around
            the main port building, and before entering the port.
          </p>
        </div>
      </div>
    </>
  );
};

export default portmaps;
