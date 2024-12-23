"use client";
import React from "react";
import Image from "next/image";
import services from "./assets/services.svg";
import fast from "./assets/fast.svg";
import access from "./assets/access.svg";

import other from "./assets/other.svg";

const servicesMyk = () => {
  return (
    <>
      <div className="bg-[#E3E3E3]">
        <div className="flex flex-col mx-8 pt-4 pb-8">
          <div className="flex flex-row items-center mb-4">
            <Image
              src={services}
              alt="icon"
              width={50}
              height={50}
              className="w-[50px] h-[50px]"
            />
            <h1 className="text-[24px] ml-4 font-bold">
              Mykonos Airport Services
            </h1>
          </div>

          <div className="flex flex-col  mx-6">
            <div className="flex flex-row items-center mt-4 mb-4">
              <Image
                src={fast}
                alt="icon"
                width={50}
                height={50}
                className="w-[25px] h-[25px]"
              />
              <h1 className="text-[16px] ml-4 font-bold">Fast Lane Service</h1>
            </div>
            <p className="mb-4">
              Mykonos Airport offers a Fast Lane service to interested airlines
              that operate at JMK. Eligible passengers use a designated lane to
              quickly pass through security checkpoints and passport control
              areas in Mykonos Airport.
            </p>
            <div className="flex flex-row items-center mt-4 mb-4">
              <Image
                src={access}
                alt="icon"
                width={50}
                height={50}
                className="w-[25px] h-[25px]"
              />
              <h1 className="text-[16px] ml-4 font-bold">
                Accessibility and assistance
              </h1>
            </div>
            <p className="mb-4">
              Mykonos Airport is equipped with all necessary facilities for
              disabled people and people with reduced mobility, such as
              accessible toilets, lifts and ramps
              <br />
              <br />
              If your circumstances require special assistance upon your arrival
              or departure in Mykonos airport, you must request it in advance by
              contacting your airline or travel agent 48 hours before your
              scheduled flight time. Mykonos airport staff will take it from
              there.
            </p>
            <div className="flex flex-row items-center mt-4 mb-4">
              <Image
                src={other}
                alt="icon"
                width={50}
                height={50}
                className="w-[25px] h-[25px]"
              />
              <h1 className="text-[16px] ml-4 font-bold">Airport Lounge</h1>
            </div>
            <p className="mb-4">
              On Departures Level 1, you will find the Mykonian Luxury Lounge by
              Goldair Handling. It provides premium services to passengers
              flying business class but it’s also accessible with an entrance
              fee of €46 per person.
              <br />
              <br />
              Opening Hours:Daily, 08:00-22:00 Contact:+30 (698) 516
              3023,jmk.lounge.sup@goldair-handling.gr
              <br />
              <br />
              There is also a Private Flights Lounge, the upscale Mykonian style
              Lounge called Delos
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default servicesMyk;
