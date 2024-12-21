"use client";
import React from "react";
import Image from "next/image";
import bluearrow from "./assets/bluearrow.svg";
import whitearrow from "./assets/whitearrow.svg";

const TourDetails = ({
  title,
  duration,
  cost,
  carType,
  description,
  imageSrc,
  clockIcon,
  costIcon,
  carIcon,
}) => {
  return (
    <div className="rounded-2xl border-2 border-black flex flex-col mx-4 mt-16">
      {/* Image Section */}
      <div className="w-full mb-4">
        <Image src={imageSrc} alt={title} className="w-full" />
      </div>

      <div className="p-4">
        {/* Title Section*/}
        <h1 className="text-2xl font-bold underline mb-6 leading-tight">{title}</h1>

        {/* Tour Details Section */}
        <div className="flex flex-row items-center mb-4">
          <Image
            src={clockIcon}
            alt="Clock Icon"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <p className="font-bold mx-4">Duration</p>
          <p className="ml-2">{duration}</p>
        </div>

        <div className="flex flex-row items-center mb-4">
          <Image
            src={costIcon}
            alt="Cost Icon"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <p className="font-bold mx-4">Cost</p>
          <p className="ml-2">{cost}</p>
        </div>

        <div className="flex flex-row items-center mb-4">
          <Image
            src={carIcon}
            alt="Car Icon"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <p className="font-bold mx-4">Car Type</p>
          <p className="ml-2">{carType}</p>
        </div>

        
        <hr className="border-t-1 border-black my-4" />

        {/* Description Section */}
        <p>
          <span className="font-bold">Description:</span> {description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col items-center mt-4 text-center">
          <button className="bg-[#174FCD] text-white py-2 px-4 rounded-md mb-2 flex justify-between items-center w-full">
            <span className="text-center flex-1">Book Tour</span> 
            <Image
              src={whitearrow}
              alt="whitearrow"
              width={24}
              height={24}
              className="h-5 w-5 ml-2"
            />
          </button>
        </div>

        <a href="#" className="text-[#174FCD] hover:underline text-left flex items-center">
          Contact us for more information
          <Image
            src={bluearrow}
            alt="bluearrow"
            width={24}
            height={24}
            className="ml-4 h-4 w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default TourDetails;
