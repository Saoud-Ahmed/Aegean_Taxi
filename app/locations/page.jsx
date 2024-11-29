"use client";

import React, { useState } from "react";
import Image from "next/image";

import HamgurgerIcon from "./assets/hamburger.png";
import Logo from "./assets/logo.png";
import AppleStore from "./assets/apple.png";
import Maps from "./assets/Map.png";
import Call from "./assets/call.png";
import WhatsApp from "./assets/whatsapp.png";
import AthensMap from "./assets/AthensMap.png";
import ArrowRight from "./assets/arrow-forward.png";
import ArrowBlue from "./assets/blue_arrow.png";
import ArrowBlack from "./assets/black_arrow.png";
import BlueArrowFront from "./assets/b_front_arrow.png";
import WhiteArrowFront from "./assets/w-front-arrow.png";



const LocationsPage = () => {
  const locations = Array(20).fill({
    name: "Athens",
    mapPicture: AthensMap,
    address: "Leoforos Vouliagmenis 58, Voula, 16673",
    navigateLink: "#",
    hours: "24/7",
    phone: "+30 215 215 4000",
    phoneLink: "tel:+302152154000",
    email: "athens@aegeantaxi.com",
    emailLink: "mailto:athens@aegeantaxi.com",
    services: {
      taxi: "#",
      airportTransfers: "#",
      portTransfers: "#",
      tours: "#",
      bookOnline: "#",
    },
    goToLink: "#",
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % locations.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? locations.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      {/* Header Section */}
      <header className="bg-black flex flex-row items-center justify-between px-8 py-2">
        <button>
          <Image
            src={HamgurgerIcon}
            alt="Menu"
            width={24}
            height={24}
            className="h-6 w-6"
          />
        </button>

        <div>
          <Image src={Logo} alt="Aegean Taxi" width={120} height={32} className="h-8" />
        </div>

        <button className="ml-6 h-8 bg-white px-6 py-1 rounded-xl flex items-center">
          <Image src={AppleStore} alt="App Store" className="w-full h-6" />
        </button>
      </header>

      {/* Main Section */}
      <main className="mx-8 my-6 flex flex-col">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold mb-6">
            We are Local! Find us in the following locations
          </h1>
          <Image
            src={Maps}
            alt="Map showing locations"
            width={600}
            height={400}
            className="my-6 w-full max-w-lg"
          />
          <p className="text-gray-600 text-medium">
            You can find an Aegean Taxi in the following 20 locations. Click on
            a location to find out about the services we offer in each island,
            and also useful information about each location.
          </p>
        </div>
      </main>

      {/* Buttons Section */}
      <div className="flex flex-row justify-between mt-6 w-full">
        <button className="flex flex-col items-center justify-center w-36 h-20 bg-white rounded-xl text-black hover:bg-gray-100 transition-colors">
          <Image src={Call} alt="Phone" width={46} height={36} className="mb-1" />
          <span className="font-medium text-[10px]">Call</span>
        </button>
        <button className="flex items-center justify-center w-60 h-12 mt-1 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors">
          <span className="text-sm">Book Online</span>
        </button>
        <button className="flex flex-col items-center justify-center w-36 h-20 bg-white rounded-xl text-black hover:bg-gray-100 transition-colors">
          <Image
            src={WhatsApp}
            alt="WhatsApp"
            width={50}
            height={36}
            className="mb-1"
          />
          <span className="font-medium text-[10px]">WhatsApp</span>
        </button>
      </div>

     {/* Slider Section */}
<div className="relative flex flex-col items-center mt-3 ">
  <div className="relative w-full overflow-hidden">
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{
        width: `${locations.length * 100}%`,
        transform: `translateX(-${(currentIndex * 100) / locations.length}%)`,
      }}
    >
      {locations.map((location, index) => (
        <div
          key={index}
          className="inline-block w-full px-6 py-4"
          style={{
            width: `${100 / locations.length}%`,
            float: "left",
          }}
        >
          <div className="rounded-lg shadow-xl bg-white text-left p-4">
            <Image
              src={location.mapPicture}
              alt={`${location.name} Map`}
              width={300}
              height={200}
              className="mx-auto rounded-3xl"
            />

            <div className="mx-6">
            {/* Name Heading */}
            <h2 className="text-lg font-bold mt-4">{location.name} (HQ)</h2>

            {/* Address Section */}
            <div className="flex flex-row justify-between items-start mt-2">
              {/* Address Label Column */}
              <div className="flex">
                <p className=" text-[#646464] text-[13px]">Address:</p>
              </div>

              {/* Address and Navigate Link Column */}
              <div className="flex flex-col text-[13px] ml-2">
                <p className="text-[#646464]">{location.address}</p>
                <a
                  href={location.navigateLink}
                  className="text-blue-500 flex items-center mt-2"
                >
                  Navigate
                  <Image
                    src={ArrowBlue}
                    alt="Arrow"
                    width={12}
                    height={12}
                    className="ml-1"
                  />
                </a>
              </div>
            </div>

            {/* Hours */}
            
            <p className="text-[#646464] text-[13px] mt-2">
                 Hours: <span className="ml-3">{location.hours}</span>
                </p>


            {/* Phone */}
            <p className="text-[#646464] text-[13px] flex items-center mt-2">
              Phone:&nbsp;
              <a
                href={location.phoneLink}
                className="text-blue-500 underline ml-2"
              >
                {location.phone}
              </a>
            </p>

            {/* Email */}
            <p className="text-[#646464] text-[13px] flex items-center mt-2">
              Email:&nbsp;
              <a
                href={location.emailLink}
                className="text-[#646464] underline ml-3"
              >
                {location.email}
              </a>
            </p>

            {/* Services Section */}
            <div className="mt-4">
              <h3 className="font-semibold text-base">Services</h3>
              {Object.entries(location.services).map(([key, link]) => (
                <a
                  key={key}
                  href={link}
                  className={`flex items-center mt-1 text-[13px] ${
                    key === "bookOnline"
                      ? "text-blue-500 underline"
                      : "text-[#646464] underline"
                  }`}
                >
                  {key.charAt(0).toUpperCase() +
                    key.slice(1).replace(/([A-Z])/g, " $1")}
                   <Image
                         src={key === "bookOnline" ? BlueArrowFront : ArrowBlack}
                         alt="Arrow"
                         width={12}
                         height={12}
                         className="ml-1"
                    />
                </a>
              ))}
            </div>

            {/* Go to Link */}
            <a
              href={location.goToLink}
              className="mt-4 inline-flex items-center px-4 py-2 bg-[#343434] text-white rounded-full font-bold text-sm"
            >
              Go to {location.name}
              <Image
                src={WhiteArrowFront}
                alt="Arrow"
                width={12}
                height={12}
                className="ml-2"
              />
            </a>
          </div>
          </div>
        </div>
      ))}
    </div>
  </div>

        {/* Navigation Buttons */}
<div className="flex items-center justify-end gap-4 w-full mt-4 px-6 mb-6">
  {/* Previous Button */}
  <button
    onClick={handlePrev}
    className="flex items-center justify-center h-10 w-10 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
  >
    <Image src={ArrowRight} alt="Previous" width={14} height={14} className="rotate-180" />
  </button>
  
  {/* Page Indicator */}
  <span className="text-gray-600 text-center">
    {currentIndex + 1}/{locations.length}
  </span>

  {/* Next Button */}
  <button
    onClick={handleNext}
    className="flex items-center justify-center h-10 w-10 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
  >
    <Image src={ArrowRight} alt="Next" width={14} height={14} />
  </button>
</div>

      </div>
    </div>
  );
};

export default LocationsPage;
