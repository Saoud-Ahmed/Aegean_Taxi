"use client";
import React from "react";
import Image from "next/image";
import blogimage from "./assets/blog.svg"; 
import buttonIcon from "./assets/arrowblue.svg"; 

export default function Blogpost() {
  return (
    <>
      <div className="my-8">
      <div className="border-t border-b border-t-[#00000080] border-b-[#00000080] flex flex-row gap-4 mx-4 py-4">

          {/* Main Image */}
          <Image
            src={blogimage}
            alt="Blog Image"
            width={240}
            height={240}
            className="h-36"
          />

          {/* Content Section */}
          <div className="flex flex-col gap-4">
            {/* Text Content */}
            <h2 className="text-md font-bold text-black">
              Mykonos relocates main port to Tourlos area and is ready to
              welcome more ferries
            </h2>

            {/* Read the Blog Post*/}
            <div className="flex items-center gap-2">
              <p className="font-medium text-black">Read the blog post</p>
              <Image
                src={buttonIcon}
                alt="Arrow Icon"
                width={16}
                height={16}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
