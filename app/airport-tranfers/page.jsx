"use client";

import React, { Suspense } from "react";
import dynamic from 'next/dynamic';
import Image from "next/image";
import Head from "next/head";

// Optimize image imports
import HamburgerIcon from "./assets/hamburger.png";
import Logo from "./assets/logo.png";
import AppleStore from "./assets/apple.png";
import Maps from "./assets/img.png";
import PickUpIcon from "./assets/pickupicon.png";
import DestinationIcon from "./assets/destination-icon.png";
import Call from "./assets/call.svg";
import WhatsApp from "./assets/whatsapp.svg";

// Dynamic imports for components to reduce initial bundle size
const WhyBookSection = dynamic(() => import('../components/Why_Book_Section/WhyBookSection'), { 
  loading: () => <div className="h-96 flex items-center justify-center">Loading...</div>,
  ssr: false 
});
const ScheduleAirport = dynamic(() => import('../components/Schedule/Schedule'), { 
  loading: () => <div className="h-96 flex items-center justify-center">Loading...</div>,
  ssr: false 
});
const AirportTaxi = dynamic(() => import('../components/AirportTaxi/AirportTaxi'), { 
  loading: () => <div className="h-96 flex items-center justify-center">Loading...</div>,
  ssr: false 
});
const HowToBookSection = dynamic(() => import('../components/HowToBook/HowBook'), { 
  loading: () => <div className="h-96 flex items-center justify-center">Loading...</div>,
  ssr: false 
});
const AdditionalAirport = dynamic(() => import('../components/AdditionalAirportServices/AdditionalServices'), { 
  loading: () => <div className="h-96 flex items-center justify-center">Loading...</div>,
  ssr: false 
});
const Testimonial = dynamic(() => import('../components/TestimonialSection/testimonial'), { 
  loading: () => <div className="h-96 flex items-center justify-center">Loading...</div>,
  ssr: false 
});
const FAQs = dynamic(() => import('../components/FAQsSection/faqs'), { 
  loading: () => <div className="h-96 flex items-center justify-center">Loading...</div>,
  ssr: false 
});
const Blog = dynamic(() => import('../components/BlogSection/blog'), { 
  loading: () => <div className="h-96 flex items-center justify-center">Loading...</div>,
  ssr: false 
});

const AirportTransfers = () => {
  return (
    <>
      <Head>
        <title>Aegean Taxi - Your Mykonos Taxi App</title>
        <meta name="description" content="Book the fastest, cheapest, and easiest taxi in Mykonos. Choose from standard, van, and mini-bus options with transparent pricing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <div 
          className="h-screen flex flex-col justify-between pb-10 pt-[2%]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #10014C 0%, #43659C 30%, #5078B1 67%, #298ED1 100%)",
          }}
        >
          {/* Header Section */}
          <header className="bg-transparent flex flex-row items-center justify-between px-[5%] py-[1%]">
            <button aria-label="Menu">
              <Image
                src={HamburgerIcon}
                alt="Menu"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </button>

            <div>
              <Image 
                src={Logo} 
                alt="Aegean Taxi" 
                width={120} 
                height={20} 
                className="h-5 ml-1" 
              />
            </div>

            <button 
              className="ml-6 h-8 bg-white pl-auto py-1 mt-1 rounded-xl flex items-center"
              aria-label="Download on App Store"
            >
              <Image 
                src={AppleStore} 
                alt="App Store" 
                className="w-full h-8" 
              />
            </button>
          </header>

          {/* Main Section */}
          <main className="mx-[5%] flex flex-col my-auto space-y-[5%]">
          <h1 className="text-2xl md:text-3xl text-3xl text-white font-bold text-left">
                Airport transfers for all airports in Greece
              </h1>
            <div className="flex flex-col items-center text-left text-white space-y-[3%]">
              
              
              <div className="w-full max-w-lg h-[40%] min-h-[200px]">
                <Image
                  src={Maps}
                  alt="Map showing locations"
                  layout="responsive"
                  width={500}
                  height={220}
                  className="w-full h-full object-cover rounded-lg"
                  priority
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>

            <h2 className="text-white font-bold text-lg text-left">
              Request an airport taxi ride
            </h2>

            <div className="pt-[2%] rounded-xl">
              <div className="relative flex flex-col gap-4">
                {/* Pick-Up Input */}
                <div className="relative">
                  <input
                    id="pickup"
                    type="text"
                    placeholder="Enter pick-up location"
                    className="w-full p-[4%] border border-black rounded-lg pl-[12%]"
                  />
                  <div className="absolute left-[4%] top-1/2 -translate-y-1/2">
                    <Image 
                      src={PickUpIcon} 
                      alt="Pick-up location icon" 
                      width={16} 
                      height={16} 
                    />
                  </div>
                </div>

                {/* Connecting Line */}
                <div
                  className="absolute left-[6%] top-[35px] h-[60px] w-[2px] bg-black z-20"
                  aria-hidden="true"
                ></div>

                {/* Destination Input */}
                <div className="relative">
                  <input
                    id="destination"
                    type="text"
                    placeholder="Enter destination"
                    className="w-full p-[4%] border border-black rounded-lg pl-[12%]"
                  />
                  <div className="absolute left-[4%] top-1/2 -translate-y-1/2">
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

            
                        {/* Buttons Section */}
            <div className="flex flex-row w-full justify-between items-center  ">
              {/* Call Button */}
              <button 
                className="flex flex-col  justify-center  bg-transparent rounded-xl text-black hover:bg-gray-100"
                aria-label="Call Taxi"
              >
                <div>
                <Image 
                  src={Call} 
                  alt="Phone icon" 
                  width={60} 
                  height={36} 
                  className=" " 
                />
                <span className="font-medium text-[10px] text-white">Call</span>
                </div>
              </button>

              {/* Main Button */}
              <button 
                className="flex items-center mx-4 mb-auto justify-center w-full h-12 bg-black text-white rounded-xl font-bold hover:bg-gray-600"
                aria-label="See prices and book taxi"
              >
                <span className="text-md">See prices & book</span>
              </button>

              {/* WhatsApp Button */}
              <button 
                className="flex flex-col justify-center  bg-transparent rounded-xl text-black hover:bg-gray-100"
                aria-label="Contact via WhatsApp"
              >
                <div className>
                <Image 
                  src={WhatsApp} 
                  alt="WhatsApp contact icon" 
                  width={65} 
                  height={36} 
                  className="" 
                />
               
                <span className="font-medium text-[10px] text-white">WhatsApp</span>
                </div>
              </button>
              
            </div>

          </main>
        </div>

        {/* Lazy-loaded Sections */}
        <Suspense fallback={<div>Loading sections...</div>}>
          <WhyBookSection/>
          <ScheduleAirport/>
          <AirportTaxi/>
          <HowToBookSection/>
          <AdditionalAirport />
          <Testimonial />
          <FAQs />
          <Blog />
        </Suspense>
      </div>
    </>
  );
};

export default AirportTransfers;