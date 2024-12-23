"use client";
import React from "react";
import Image from "next/image";


import mark from "./assets/mark.svg";
import bgcover from "./assets/abtcover.svg";
import arrowSrc from "./assets/w-front-arrow.png";

const AirportAbout = () => {
  return (
    <>
      <div className="flex flex-col mx-8">
        <div className="flex flex-row items-center mb-4">
          <Image src={mark} alt="icon" width={65} height={36} className="w-[50px] h-[50px]" />
          <h1 className="text-[24px] ml-[4px] font-bold">About Mykonos Airport (JMK)</h1>
        </div>
        <p className="text-[14px]">
          <span className="font-bold">Call Centre:</span> +30 (22890) 79000{" "}
          <br></br>
          Online form for{" "}
          <a href="https://www.jmk-airport.gr/en/jmk/feedback">
            Inquiries and Complaints.
          </a>
          <br></br>
          Online form for{" "}
          <a href="https://deliverback.com/mykonos-airport/?utm_source=fraport">
            Lost Property.
          </a>
          <br></br>
          <br></br>
         
          <span className="font-bold">Address:</span>
          <br></br>
          Mykonos International Airport (JMK)<br></br>Mykonos, 847 00,Greece
          <br></br>
          <br></br>
          <span className="font-bold">Airport Latitude and Longitude:</span>
          <br></br>
          Lat: 37.434211
          <br></br>
          Lon: 25.345744
        </p>
        <Image
          src={bgcover}
          alt="cover"
          width={65}
          height={36}
          className="w-[100%] mt-4 mb-4"
        />
        <p className="text-[14px] text-black mb-12">
          Mykonos Airport (JMK) is the primary arrival point for travelers
          visiting this iconic Cycladic island. Located just 4 kilometers from
          Mykonos Town, the airport provides convenient access to the island’s
          renowned beaches, ports, and luxury accommodations. Serving both
          domestic and international flights, Mykonos Airport operates
          year-round, with a surge in activity during the summer months to
          accommodate the influx of visitors. Its manageable size and
          straightforward layout make it easy for passengers to navigate,
          offering a smooth start or end to their journey
          <br />
          <br />
          The airport features essential facilities such as cafes, duty-free
          shops, and car rental services, ensuring a comfortable travel
          experience. For onward transportation, taxis and private transfers are
          the most popular options, providing quick and reliable connections to
          your destination. Public buses also operate to select locations,
          though schedules can vary. To make your arrival stress-free, booking
          an Aegean Taxi transfer in advance guarantees a seamless and
          comfortable ride, allowing you to focus on enjoying your time in
          Mykonos.
        </p>
        <button
          className={`w-full bg-[#000000] text-white py-2 px-6 rounded-3xl flex items-center justify-center space-x-2 sm:space-x-3 hover:opacity-90 transition mb-12`}
        >
          <span className="text-[14px] sm:text-[14px] lg:text-[14px] font-bold">
            Go to Mykonos Airport Transfers
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
    </>
  );
};

export default AirportAbout;
