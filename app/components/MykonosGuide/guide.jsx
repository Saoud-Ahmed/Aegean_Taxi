"use client";
import React from "react";
import Image from "next/image";
import arrowSrc from "./assets/w-front-arrow.png"

const Guide = ({
  backgroundColor,
  buttonColor,
  imageSrc1,                      // Image source 1
  imageSrc2,                      // Image source 2 (for full width image)
  headingText,
  paragraphText,           
  buttonText,

  buttonLink = "#"
}) => {
  return (
    <div className="mx-4"  style={{transform:"translateY(-70px)"}}>
      <div
        className={`py-4 px-8 pb-12 rounded-2xl bg-[${backgroundColor}]` } // Dynamic background color
      >
        {/* First image */}
        <div className="flex justify-end">
            {imageSrc1 && (
            <Image src={imageSrc1} alt="Guide Image" className="relative top-[-35px]" />
            )}
        </div>

        {/* Heading Text */}
        <h1 className={`text-[32px] font-bold mb-4 text-[${buttonColor}]`}>{headingText}</h1>


        {/* Paragraph Text */}
        {paragraphText && (
          <p className="text-[#5B5963] text-[14px] mb-8">{paragraphText}</p>
        )}

        {/* Second image (full width) */}
        {imageSrc2 && (
          <Image src={imageSrc2} alt="Full width image" className="rounded-2xl w-full pb-8" />
        )}

        {/* Button */}
        <a href={buttonLink} className="w-full ">
          <button
            className={`w-full bg-[${buttonColor}] text-white py-2 px-6 rounded-3xl flex items-center justify-center space-x-2 sm:space-x-3 hover:opacity-90 transition`}
          >
            <span className="text-[14px] sm:text-[14px] lg:text-[14px] font-bold">
              {buttonText}
            </span>
            {/* Arrow image */}
            {arrowSrc && (
              <Image src={arrowSrc} alt="Arrow" width={14} height={14} className="w-4 h-4 sm:w-6 sm:h-6" />
            )}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Guide;
