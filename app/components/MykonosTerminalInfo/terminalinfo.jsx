"use client";
import React from "react";
import Image from "next/image";
import terminal from "./assets/terminal.svg";
import cafe from "./assets/cafe.svg";
import restlist from "./assets/restlist.svg"
import dutyfree from "./assets/dutyfree.svg"
import other from "./assets/other.svg"
import otherlist from "./assets/otherlist.svg"

const terminalinfo = () => {
  return (
    <>
      <div>
        <div className="flex flex-col mx-8 mt-16">
          <div className="flex flex-row items-center mb-4">
            <Image
              src={terminal}
              alt="icon"
              width={50}
              height={50}
              className="w-[50px] h-[50px]"
            />
            <h1 className="text-[24px] ml-4 font-bold">
              Mykonos Airport terminal information
            </h1>
          </div>

          <div className="flex flex-col  mx-6">
            <div className="flex flex-row items-center mt-4 mb-4">
              <Image
                src={cafe}
                alt="icon"
                width={50}
                height={50}
                className="w-[25px] h-[25px]"
              />
              <h1 className="text-[16px] ml-4 ">
                Restaurants and Cafes
              </h1>
            </div>
            <Image
                src={restlist}
                alt="icon"
                width={50}
                height={50}
                className="w-full mb-4"
              />
            <div className="flex flex-row items-center mt-4 mb-4">
              <Image
                src={dutyfree}
                alt="icon"
                width={50}
                height={50}
                className="w-[25px] h-[25px]"
              />
              <h1 className="text-[16px] ml-4 ">
              Duty Free shop
              </h1>
            </div>
            <p className="mb-4">
            In a cozy, totally refurbished, friendly, easy to shop environment you will find a breathtaking selection of all well-known brands of perfumes & cosmetics, confectionery, Hellenic gourmet, toys, electronics, tobacco, spirits, as well as all the latest fashion trends of sunglasses, watches and accessories in competitive prices!
            <br /><br />
            New shopping service available Reserve from home & collect at the airport.<a className="underline" href="https://mykonos.shopdutyfree.com/en/?utm_source=Fraport%20Website&utm_medium=banner&utm_campaign=Airport">Click here to place your order</a>
            </p>
            <div className="flex flex-row items-center mt-4 mb-4">
              <Image
                src={other}
                alt="icon"
                width={50}
                height={50}
                className="w-[25px] h-[25px]"
              />
              <h1 className="text-[16px] ml-4 ">
                Other Shops
              </h1>
            </div>
            <Image
                src={otherlist}
                alt="icon"
                width={50}
                height={50}
                className="w-full mb-16"
              />

              
          </div>
        </div>
      </div>
    </>
  );
};

export default terminalinfo;
