"use client";
import React from "react";

import Image from "next/image";
import Head from "next/head";
import HamburgerIcon from "./assets/hamburgerIcon.svg";
import AppleStore from "./assets/applelogo.svg";
import Logo1 from "./assets/logo1.svg";
import Logo2 from "./assets/logo2.svg";
import bg from "./assets/bg.svg";
import PickUpIcon from "./assets/pickupicon.svg";
import DestinationIcon from "./assets/destination-icon.svg";
import Call from "./assets/call.svg";
import WhatsApp from "./assets/whatsapp.svg";
import tonfrom from "./assets/toandfrom.svg";
import tnfcover from "./assets/tnfcover.svg";
import planecover from "./assets/planecoversection.svg";
import arrival from "./assets/depart.svg";
import arrivalsched from "./assets/arrivalsched.svg";
import depart from "./assets/arrival.svg";
import departsched from "./assets/departsched.svg";
import aim from "./assets/aim.svg";
import livetrack from "./assets/live.svg";
import planecover2 from "./assets/planecover2.svg";
import camera from "./assets/camera.svg";
import planecover3 from "./assets/planecover3.svg";

import AirportAbout from "../../components/MykonosAirportAbout/airportabout";
import AirportTaxi from "../../components/MykonosTaxiAirport/taxi";
import Bus from "../../components/MykonosBusAirport/bus";
import Car from "../../components/MykonosCarAirport/car";
import TerminalInfo from "../../components/MykonosTerminalInfo/terminalinfo";
import ServicesAirport from "../../components/MykonosServicesAirport/services";
import Practical from "../../components/MykonosPracticalAirport/practical";
import FAQ from "../../components/FAQsSection/faqs";
import Now from "../../components/ScheduleNowOrLater/noworlater";
import Footer from "../../components/Footer/footer";
//import Sliderfilter from "../../components/filter/page"

//const titles = ["About Mykonos\nAirport", "Getting to\nand from", "Live\nArrivals"];

const MykonosAirPort = () => {
  return (
    <>
      <Head>
        <title>Aegean Taxi - Your Mykonos Taxi App</title>
        <meta
          name="description"
          content="Book the fastest, cheapest, and easiest taxi in Mykonos. Choose from standard, van, and mini-bus options with transparent pricing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col bg-white justify-between pb-10 pt-[2%]">
          {/* Header Section */}
          <header className="bg-transparent flex flex-row items-center justify-between px-[5%] py-[1%]">
            <button aria-label="Menu">
              <Image
                src={HamburgerIcon}
                alt="Menu"
                width={24}
                height={24}
                className="h-5 w-5"
              />
            </button>

            <div className="flex flex-row absolute">
              <Image
                src={Logo1}
                alt="Aegean Taxi"
                width={120}
                height={20}
                className="h-7 relative"
              />
              <Image
                src={Logo2}
                alt="Aegean Taxi"
                width={120}
                height={20}
                className="h-15 relative right-12 mt-1"
              />
            </div>

            <button
              className="ml-6 h-8 bg-white pl-auto py-1 mt-1 rounded-xl flex items-center"
              aria-label="Download on App Store"
            >
              <Image src={AppleStore} alt="App Store" className="w-full h-9" />
            </button>
          </header>

          <div className="mt-8">
            <h1 className=" md:text-3xl text-3xl text-black font-bold text-center">
              Mykonos Airport
            </h1>
            <h1 className=" md:text-3xl text-3xl text-black font-bold text-center">
              (JMK)
            </h1>
          </div>

          {/* Background Image Section */}
          <div
            className="flex justify-center items-center w-full"
            style={{ transform: "translateY(-60px)" }}
          >
            <div className="w-full max-w-lg h-[50%] min-h-[200px]">
              <Image
                src={bg}
                alt="Map showing locations"
                layout="responsive"
                width={500}
                height={220}
                className="w-full h-full object-cover rounded-lg"
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                // Moves the image up by 10px
              />
            </div>
          </div>

          <main
            className="mx-[5%] flex flex-col my-auto space-y-[5%]"
            style={{ transform: "translateY(-60px)" }}
          >
            <h2 className="text-black font-bold text-lg text-center">
              Useful Mykonos airport information. Book a ride to and from
              Mykonos airport, for now or later
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
            <div className="flex flex-row w-full justify-between items-center">
              {/* Call Button */}
              <button
                className="flex flex-col justify-center bg-transparent rounded-xl text-black hover:bg-gray-100"
                aria-label="Call Taxi"
              >
                <div>
                  <Image
                    src={Call}
                    alt="Phone icon"
                    width={60}
                    height={36}
                    className=""
                  />
                  <span className="font-medium text-[10px] text-black">
                    Call
                  </span>
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
                className="flex flex-col justify-center bg-transparent rounded-xl text-black hover:bg-gray-100"
                aria-label="Contact via WhatsApp"
              >
                <div>
                  <Image
                    src={WhatsApp}
                    alt="WhatsApp contact icon"
                    width={65}
                    height={36}
                    className=""
                  />
                  <span className="font-medium text-[10px] text-black">
                    WhatsApp
                  </span>
                </div>
              </button>
            </div>
          </main>
        </div>
        <div className="mx-2">
          {/*}<Sliderfilter 
                                        titles={titles} 
                                        activeStyles="bg-black text-white" 
                                        inactiveStyles="text-gray-500" 
                                        backgroundColor="bg-gray-100"
                                        />*/}{" "}
        </div>

        <AirportAbout />

        <div className="flex flex-col mx-8">
          <div className="flex flex-row items-center">
            <Image
              src={tonfrom}
              alt="icon"
              width={65}
              height={36}
              className="w-[50px] h-[50px]"
            />
            <h1 className="text-[24px] ml-2 font-bold">
              Getting to and from Mykonos Airport
            </h1>
          </div>
          <Image
            src={tnfcover}
            alt="cover"
            width={65}
            height={36}
            className="w-[100%] mt-4 mb-4"
          />
        </div>

        <AirportTaxi />
        <Bus />
        <Car />
        <div className=" my-16 mx-4">
          <Image
            src={planecover}
            alt="cover"
            width={65}
            height={36}
            className="w-full"
          />
        </div>

        <div className="flex flex-col mx-8">
          <div className="flex flex-row items-center mb-4">
            <Image
              src={arrival}
              alt="icon"
              width={65}
              height={36}
              className="w-[50px] h-[57.88px]"
            />
            <h1 className="text-[24px] ml-4 font-bold">
              Live Mykonos<br></br>Airport Arrivals
            </h1>
          </div>
          <p className="text-[14px] text-black mb-8">
            Track the status of Mykonos airport flights<br></br> arriving now,
            live.
          </p>
        </div>
        <div className="mx-4">
          <Image
            src={arrivalsched}
            alt="cover"
            width={65}
            height={36}
            className="w-full"
          />
        </div>

        <div className="flex flex-col mx-8 mt-16">
          <div className="flex flex-row items-center mb-4">
            <Image
              src={depart}
              alt="icon"
              width={65}
              height={36}
              className="w-[50px] h-[57.88px]"
            />
            <h1 className="text-[24px] ml-4 font-bold">
              Live Mykonos Airport Departures
            </h1>
          </div>
          <p className="text-[14px] text-black mb-8">
            Track the status of Mykonos airport flights departing now, live.
          </p>
        </div>
        <div className="mx-4">
          <Image
            src={departsched}
            alt="cover"
            width={65}
            height={36}
            className="w-full"
          />
        </div>

        <div className="flex flex-col mx-8 mt-16">
          <div className="flex flex-row items-center mb-4">
            <Image
              src={aim}
              alt="icon"
              width={65}
              height={36}
              className="w-[50px] h-[57.88px]"
            />
            <h1 className="text-[24px] ml-4 font-bold">
              Mykonos Airport (JMK) live flights map
            </h1>
          </div>
          <p className="text-[14px] text-black mb-8">
            Check the Mykonos airport live map for all flights above mykonos
            now.
          </p>
        </div>
        <div className="mx-8">
          <Image
            src={livetrack}
            alt="cover"
            width={65}
            height={36}
            className="w-full"
          />
        </div>

        <div className="mx-4 mt-20">
          <Image
            src={planecover2}
            alt="cover"
            width={65}
            height={36}
            className="w-full"
          />
        </div>

        <TerminalInfo />

        <div className="flex flex-col mx-8 mb-16">
          <div className="flex flex-row items-center mb-4">
            <Image
              src={camera}
              alt="icon"
              width={65}
              height={36}
              className="w-[50px] h-[57.88px]"
            />
            <h1 className="text-[24px] ml-4 font-bold">
              Photos of Mykonos Airport
            </h1>
          </div>
          <p className="text-[14px] text-black mb-8">
            Click on an image to enlarge
          </p>
          {/*Slider Section */}
        </div>

        <Image
          src={planecover3}
          alt="cover"
          width={65}
          height={36}
          className="w-full"
        />

        <ServicesAirport />
        <Practical />
        <FAQ />
        <Now />
        <Footer />
      </div>
    </>
  );
};

export default MykonosAirPort;
