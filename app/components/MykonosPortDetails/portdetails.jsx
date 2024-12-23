"use client";
import React from "react";
import Image from "next/image";
import cross from "./assets/cross.svg";

const portDetails = () => {
  return (
    <>
      <div className="bg-[#E3E3E3] pb-8">
        <div className="flex flex-col mx-8">
          <div className="flex flex-row items-center mb-4 mt-8">
            <Image
              src={cross}
              alt="icon"
              width={65}
              height={36}
              className="w-[50px] h-[50px]"
            />
            <h1 className="text-[24px] ml-2 font-bold">
              Ferries from Mykonos port to other locations
            </h1>
          </div>
          <p className="text-[14px] text-black">
            In the list below, you will find all the destinations that you can
            reach with direct or indirect ferry connections from Mykonos port.
            Due to seasonality some destinations from Mykonos are only available
            in the peak months.
          </p>
          <span className="font-bold py-4">Mainland Greece Ports</span>

          <ul className="list-disc pl-5">
            <li className="py-[2px]">Piraeus (Athens)</li>
            <li className="py-[2px]">Rafina</li>
            <li className="py-[2px]">Thessaloniki</li>
          </ul>

          <span className="font-bold py-4">Cycladic Islands</span>

          <ul className="list-disc pl-5">
            <li className="py-[2px]">Santorini</li>
            <li className="py-[2px]">Naxos</li>
            <li className="py-[2px]">Paros</li>
            <li className="py-[2px]">Antiparos</li>
            <li className="py-[2px]">Milos</li>
            <li className="py-[2px]">Ios</li>
            <li className="py-[2px]">Tinos</li>
            <li className="py-[2px]">Syros</li>
            <li className="py-[2px]">Andros</li>
            <li className="py-[2px]">Amorgos</li>
            <li className="py-[2px]">Folegandros</li>
          </ul>

          <span className="font-bold py-4">Dodecanese Islands</span>

          <ul className="list-disc pl-5">
            <li className="py-[2px]">Rhodes</li>
            <li className="py-[2px]">Kos</li>
            <li className="py-[2px]">Patmos</li>
            <li className="py-[2px]">Leros</li>
            <li className="py-[2px]">Kalymnos</li>
            <li className="py-[2px]">Symi</li>
            <li className="py-[2px]">Nisyros</li>
          </ul>

          <span className="font-bold py-4">Other Nearby Greek Islands</span>

          <ul className="list-disc pl-5">
            <li className="py-[2px]">Crete (Heraklion, Chania)</li>
            <li className="py-[2px]">Samos
            </li>
            <li className="py-[2px]">Ikaria</li>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default portDetails;
