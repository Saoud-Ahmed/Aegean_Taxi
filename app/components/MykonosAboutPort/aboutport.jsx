"use client";
import React from "react";
import Image from "next/image";

import mark from "./assets/mark.svg";
import reverse from "./assets/reverse.svg";
import arrowSrc from "./assets/w-front-arrow.png";
import ship from "./assets/shio.svg";
import map from "./assets/map.svg";

const PortAbout = () => {
  return (
    <>
      <div className="bg-[#E3E3E3] py-8 pb-12">
        <div className="flex flex-col mx-8">
          <div className="flex flex-row items-center mb-4">
            <Image
              src={mark}
              alt="icon"
              width={65}
              height={36}
              className="w-[50px] h-[50px]"
            />
            <h1 className="text-[24px] ml-[8px] font-bold">
              About Mykonos New Port (Tourlos)
            </h1>
          </div>
          <p className="text-[14px]">
            <span className="font-bold">Call Centre:</span>+30 22890 28933
            <br></br>
            email: {"info@MykonosPorts.gr"}
            <br></br>
            <br></br>
            <span className="font-bold">Address:</span>
            <br></br>
            Tourlos New Port
            <br></br>
            <span>Mykonos, 847 00, Greece</span>
            <br></br>
            <span className="font-bold">
              Port Latitude and Longitude:<br></br>
            </span>
            <span className="font-bold">UN/LOCODE: GRJMK</span>
            <br></br>
            Lat: 37.46280
            <br></br>
            Lon: 25.32190 
          </p>
          <p className="text-[14px] text-black my-8">
            Located approximately 2 kilometers from Mykonos town (Chora), the
            new port is the primary maritime gateway for the island. All major
            ferry companies, including Hellenic Seaways, Blue Star Ferries,
            Highspeed Ferries, and Golden Star Ferries, now operate from this
            newly constructed port. As the sole active commercial port, it
            handles virtually all passenger ferry traffic to and from Mykonos.
            <br />
          </p>
          <button
            className={`bg-[#000000] text-white py-2 px-3 rounded-3xl flex items-center justify-start space-x-2 sm:space-x-3 hover:opacity-90 transition mb-12 w-[90%]`}
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
          <Image
            src={ship}
            alt="cover"
            width={65}
            height={36}
            className="w-[100%] mt-4"
          />

          <h1 className="text-[24px] ml-[8px] font-bold mb-8 mt-4">
            About Mykonos Old Port
          </h1>

          <p className="text-[14px]">
            <span className="font-bold">Call Centre:</span>+30 22890 28933
            <br></br>
            email: {"info@MykonosPorts.gr"}
            <br></br>
            <br></br>
            <span className="font-bold">Address:</span>
            <br></br>
            Tourlos New Port
            <br></br>
            <span>Mykonos, 847 00, Greece</span>
            <br></br>
            <span className="font-bold">
              Port Latitude and Longitude:<br></br>
            </span>
            <span className="font-bold">UN/LOCODE: GRJMK</span>
            <br></br>
            Lat: 37.46280
            <br></br>
            Lon: 25.32190 
          </p>
          <p className="text-[14px] text-black my-12">
            Located in the heart of Mykonos town, the old port was the islands
            main harbor until about 15 years ago. Today, it serves a more
            limited function, primarily accommodating local fishermen and
            leisure yachts more than 25m in length. Occasionally, it may still
            receive passenger ferry arrivals of smaller vessels. Water taxis are
            also operating to and from the new port
            <br />
          </p>
          <div className="flex flex-row items-center mb-4">
            <Image
              src={reverse}
              alt="icon"
              width={65}
              height={36}
              className="w-[50px] h-[50px]"
            />
            <h1 className="text-[24px] ml-[8px] font-bold">
              Live Mykonos port traffic
            </h1>
          </div>
          <p className="text-[14px] text-black my-12">
            See the status of all vessels arriving and departing Mykonos port
            live. Complete with vessel names, estimated arrival to the port of
            mykonos, as well as ferries and ships anchored in and around Mykonos
            <br />
          </p>
          <Image
            src={map}
            alt="cover"
            width={65}
            height={36}
            className="w-[100%] mt-4"
          />
        </div>
      </div>
    </>
  );
};

export default PortAbout;
