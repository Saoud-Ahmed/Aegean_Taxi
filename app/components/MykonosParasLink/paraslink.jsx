"use client";
import React from "react";
import Image from "next/image";
import FrontArrow from "./assets/w-front-arrow.png";
import rightArrow from "./assets/rightarrow.svg";
const MykonosParasLink = ({
  iconSrc,
  headingText,
  paragraphs = [],
  btntext,
}) => {
  return (
    <>
      <div className="p-8 pt-6 pb-0 mt-12">
        <div className="flex flex-row items-center space-x-4 mb-8">
          <Image
            src={iconSrc}
            alt="Icon"
            width={14}
            height={14}
            className="w-[30px] h-[30px] sm:w-6 sm:h-6"
          />
          <p className="text-[24px] font-bold text-[#2B2B6E]">{headingText}</p>
        </div>

        {Array.isArray(paragraphs) && paragraphs.length > 0 ? (
          paragraphs.map((text, index) => (
            <p key={index} className="text-black text-[14px]">
              {text}
              <br></br>
              <br></br>
            </p>
          ))
        ) : (
          <p className="text-black text-[14px]">No content available.</p>
        )}
      </div>
      <div className="flex flex-col items-end mt-4 mb-36 mx-4 ">
        <a href="/book-taxi" className="flex items-center space-x-2 pb-8 pr-2">
          <span className="mr-2 text-[#0066FF]">Book Mykonos Airport Taxi</span>
          <Image
            src={rightArrow}
            alt="Right Arrow"
            width={14}
            height={14}
            className="w-4 sm:w-6 sm:h-6"
          />
        </a>

        <button className="flex bg-[#2B2B6E] h-[35px] px-6 sm:h-[35px] text-white rounded-3xl items-center justify-center space-x-2 sm:space-x-3 hover:opacity-90 transition whitespace-nowrap self-end">
          <span className="text-[14px] sm:text-[14px] lg:text-[14px] font-bold text-white">
            {btntext}
          </span>
          <Image
            src={FrontArrow}
            alt="Arrow Front"
            width={14}
            height={14}
            className="w-4 h-4 sm:w-6 sm:h-6"
          />
        </button>
      </div>
    </>
  );
};

export default MykonosParasLink;
