"use client";
import React from "react";
import Image from "next/image";
import Blogs from "../MykonosBlog/blogsection";
import iconSrc2 from "./assets/mykicon2.svg";
const MykonosParas = ({ iconSrc, headingText, paragraphs = [] }) => {
  return (
    <>
      <div className="bg-[#F0F0F0]">
        <div className="p-8 py-12 mt-12">
          <div className="flex flex-row items-center space-x-4 mb-8">
            <Image
              src={iconSrc}
              alt="Icon"
              width={14}
              height={14}
              className="w-[30px] h-[30px] sm:w-6 sm:h-6"
            />
            <p className="text-[24px] font-bold">{headingText}</p>
          </div>

          {Array.isArray(paragraphs) && paragraphs.length > 0 ? (
            paragraphs.map((text, index) => (
              <p key={index} className="text-black text-[14px]">
                {text}
                <br></br>
              </p>
            ))
          ) : (
            <p className="text-black text-[14px]">No content available.</p>
          )}
        </div>

        <Blogs />

        <div className="p-8 py-12 mt-12">
          <div className="flex flex-row items-center space-x-4 mb-8">
            <Image
              src={iconSrc2}
              alt="Icon"
              width={14}
              height={14}
              className="w-[30px] h-[30px] sm:w-6 sm:h-6"
            />
            <p className="text-[24px] font-bold text-[#2B2B6E]">Getting to Mykonos</p>
          </div>

          <p className="text-[14px]">
            <span className="font-bold">By Air:</span> <br></br>
            Mykonos International Airport (JMK) operates a number of
            international and domestic flights Flights are frequent during the
            summer season, but its wise to book early as they fill up quickly.
            <br></br>
            <br></br>
            <span className="font-bold">By Sea:</span> <br></br>
            Ferries are available from Athens (Piraeus and Rafina ports) and
            neighboring islands like Santorini and Paros.<br></br>
            There is frequent service during the summer months and a mix of fast
            and slower ferries which stop in other islands. Most ferries can
            take cars.
          </p>
        </div>
      </div>
    </>
  );
};

export default MykonosParas;
