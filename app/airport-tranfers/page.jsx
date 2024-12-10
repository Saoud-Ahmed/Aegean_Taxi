"use client";

import React from "react";
import Image from "next/image";

import HamgurgerIcon from "./assets/hamburger.png";
import Logo from "./assets/logo.png";
import AppleStore from "./assets/apple.png";
import Maps from "./assets/img.png";
import Call from "./assets/phone.png";
import WhatsApp from "./assets/whatsapp.png";
import PickUpIcon from "./assets/pickupicon.png";
import DestinationIcon from "./assets/destination-icon.png";



import WhyBookSection from "../components/Why_Book_Section/WhyBookSection";
import ScheduleAirport from "../components/Schedule/Schedule";
import AirportTaxi from "../components/AirportTaxi/AirportTaxi";
import AdditionalAirport from "../components/AdditionalAirportServices/AdditionalServices";
import Testimonial from "../components/TestimonialSection/testimonial";
import FAQs from "../components/FAQsSection/faqs";
import Blog from "../components/BlogSection/blog";
import HowToBookSection from "../components/HowToBook/HowBook";

const AirportTransfers = () => {

  return (
            <div className="bg-gradient-to-b from-[#10014C] via-[#43659C] to-[#298ED1]">
{/* Header Section */}
      <header className="bg-transparent flex flex-row items-center justify-between px-8 py-2">
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
          <Image src={Logo} alt="Aegean Taxi" width={120} height={20} className="h-5 ml-1" />
        </div>

        <button className="ml-6 h-8 bg-white px-6 py-1 rounded-xl flex items-center">
          <Image src={AppleStore} alt="App Store" className="w-full h-6" />
        </button>
      </header>

      {/* Main Section */}
      <main className="mx-8 my-5 flex flex-col ">
        <div className="flex flex-col items-center text-left text-white">
          <h1 className="text-3xl font-bold ">
          Airport transfers for all airport in Greece
          </h1>
          <Image
            src={Maps}
            alt="Map showing locations"
            height={200}
            className="my-5 w-full max-w-lg h-[200px]"
          />
        </div>
        <h1 className="text-white font-bold ">
          Request an airport taxi ride
          </h1>

          <div className=" pt-6 rounded-xl">
              <div className="relative flex flex-col gap-4">
                {/* Pick-Up Input */}
                <div className="relative">
                  
                  <input
                    id="pickup"
                    type="text"
                    placeholder="Enter pick-up location"
                    className="w-full p-4 border border-black rounded-lg pl-12"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Image src={PickUpIcon} alt="Pick-up location icon" width={16} height={16} />
                  </div>
                </div>


                    {/* Connecting Line */}
                <div
                  className="absolute left-[23px] top-[35px] h-[60px] w-[2px] bg-black  z-20"
                  aria-hidden="true"
                ></div>

                {/* Destination Input */}
                <div className="relative">
                  
                  <input
                    id="destination"
                    type="text"
                    placeholder="Enter destination"
                    className="w-full p-4 border border-black rounded-lg pl-12"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Image
                      src={DestinationIcon}
                      alt="Destination location icon"
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
              </div>
            </div>
      </main>

      {/* Buttons Section */}
      <div className="flex flex-row justify-between mt-6 w-full">
        <button className="flex flex-col items-center justify-center w-36 h-20 bg-transparent rounded-xl text-white hover:bg-gray-100 transition-colors">
          <Image src={Call} alt="Phone" width={46} height={36} className="mb-1" />
          <span className="font-medium text-[10px]">Call</span>
        </button>
        <button className="flex items-center justify-center w-60 h-12 mt-1 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors">
          <span className="text-sm">Book Online</span>
        </button>
        <button className="flex flex-col items-center justify-center w-36 h-20 bg-transparent rounded-xl text-white hover:bg-gray-100 transition-colors">
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



        <WhyBookSection/>
        <ScheduleAirport/>
        <AirportTaxi/>
        <HowToBookSection/>
        <AdditionalAirport />
        <Testimonial />
        <FAQs />
        <Blog />
        

      </div>

  );
};

export default AirportTransfers;