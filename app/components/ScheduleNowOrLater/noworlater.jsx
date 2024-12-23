"use client";
import React from "react";
import Image from "next/image";
import Blog from "../../components/MykonosBlog/blogsection";
import bgcover from "./assets/rafiki.svg"
import radical from "./assets/radial.svg";
import arrowSrc from "./assets/arrowtilt.svg";

const NowOrLater = () => {
  return (
    <>
      <div className="flex flex-col m-8 text-center justify-center items-center mt-0">
        <h1 className="text-[20px] font-bold">
          Schedule your ride to <br />Mykonos International Airport <br /> for now or later
        </h1>
        <Image
          src={bgcover}
          alt="icon"
          width={50}
          height={50}
          className="w-full"
        />
        {/* Button 2 */}
        <button
          className="bg-[#000000] text-white py-2 px-6 pl-3 rounded-3xl flex items-center justify-start space-x-4 sm:space-x-3 hover:opacity-90 transition mb-8"
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
            Book Online Now
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
      <Blog/>
    </>
  );
};

export default NowOrLater;
