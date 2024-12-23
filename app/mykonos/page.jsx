"use client";
import React from "react";

import Image from "next/image";
import Head from "next/head";

import HamburgerIcon from "./assets/hamburgerIcon.svg";
import AppleStore from "./assets/applewhite.svg";
import Logo1 from "./assets/logo1.svg";
import Logo2 from "./assets/logo2.svg";
import bookhero from "./assets/herobook.svg";
import aihero from "./assets/heroai.svg";
import whatsapp from "./assets/whatsapp.svg";
import bgbeach from "./assets/bgbeach.svg";
import FrontArrow from "./assets/w-front-arrow.png";
import myk1 from "./assets/myk1.svg";
import myk2 from "./assets/myk2.svg";
import myk3 from "./assets/myk3.svg";
import arrow from "./assets/arrowdown.svg";
import abtmykonos from "./assets/abtmykonos.svg";
import airport from "./assets/airport.svg";
import bowl from "./assets/bowl.svg";
import mykg1 from "./assets/mykg1.svg";
import mykg2 from "./assets/mykg2.svg";
import cutlery from "./assets/cutlery.svg";
import shot from "./assets/shot.svg";
import bino from "./assets/bino.svg"

import Service from "../components/MykonosServices/mykonosservices";
import Stats from "../components/MykonosStats/stats";
import Paras from "../components/MykonosParas/paras";
import ParaswithBtn from "../components/Mykonosparasbtn/parasbtn";
import Blogs from "../components/MykonosBlog/blogsection";
import ParaswithLink from "../components/MykonosParasLink/paraslink";
import Guide from "../components/MykonosGuide/guide";
import BestTime from "../components/MykonosBestTime/besttime";
import Safety from "../components/MykonosSafety/safety"
import FAQ from "../components/FAQsSection/faqs"
import Footer from "../components/Footer/footer"

const Mykonos = () => {
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
        <div
          className="h-screen flex flex-col justify-between pb-10 pt-[2%]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #2A54EF 0%, #234BD4 25%, #113286 50%, #0B2146 100%)",
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

          <h1 className="text-3xl md:text-3xl text-3xl text-white font-bold text-left ml-8 mt-16">
            Mykonos travel guide<br></br> and information
          </h1>

          {/* Main Section */}
          <main className=" mr-[2%] flex flex-col my-auto space-y-[5%] pt-12">
            {/* Image Section */}
            <div className=" ml-[5%] flex justify-end space-x-4">
              <Image
                src={bookhero}
                alt="Book Hero Section"
                width={240}
                height={240}
                className="h-28 w-28 absolute right-0 top-[14rem]"
              />

              <Image
                src={aihero}
                alt="AI Face Hero Section"
                width={240}
                height={240}
                className="h-60 w-60"
              />
            </div>

            {/* Text Section */}
            <div className="justify-center ml-8">
              <p className="text-2xl md:text-2xl text-white max-w-xs mt-4 ">
                The ultimate up to date Mykonos travel guide, through the
                knowledge<br></br> of real experts.
              </p>
            </div>

            <div className="flex justify-end">
              <button>
                <Image
                  src={whatsapp}
                  alt="Whatsapp"
                  width={240}
                  height={240}
                  className="h-12"
                />
              </button>
            </div>
          </main>
        </div>

        <div
          className="h-[100vh] flex flex-col justify-between pb-10 pt-[2%]"
          style={{
            backgroundImage: `url(${bgbeach.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundPosition: "center 200%",
          }}
        >
          <div className="flex flex-col justify-center">
            <h1 className="text-[32px] font-bold text-[#2B2B6E] mt-12 text-center">
              We know Mykonos!
            </h1>
            <p className="text-[18px] black font-bold mx-[48px] mt-12">
              We have covered every inch of Mykonos island! Our Mykonos taxi
              fleet transports tourists in every beach, every restaurant, bar,
              and every tourist attraction in Mykonos. Our Mykonos Airport
              transfer and Mykonos Port transfer services welcome and transport
              thousands of tourists to and from the airport and ports of Mykonos
            </p>
            <div className="flex mt-44 mx-12">
              <a href="/mykonos-taxi" aria-label="Go to Mykonos Taxi">
                <button className="flex items-center w-48 gap-2 px-6 py-2 bg-[#2B2B6E] hover:bg-blue-800 text-white font-semibold rounded-3xl transition-all duration-300 text-sm sm:text-base justify-center">
                  <span className="whitespace-nowrap">Read more about us</span>
                  {{ FrontArrow } && (
                    <Image
                      src={FrontArrow}
                      alt="Button Icon"
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  )}
                </button>
              </a>
            </div>
          </div>
        </div>

        <Service />
        <Stats />

        <div>
          <div className="flex flex-row justify-center items-center">
            <p className="w-[50%] text-[16px] py-4 mx-4 leading-[1.1]">
              Our in depth and up to date{" "}
              <span className="font-bold">knowledge of Mykonos</span>, puts us
              in a unique position of{" "}
              <span className="font-bold">authority</span>, when it comes to
              travel itineraries and{" "}
              <span className="font-bold">travel advice</span>.
            </p>
            <Image
              src={myk1}
              alt="img"
              width={16}
              height={16}
              className="w-[50%]"
            />
          </div>
          <div className="flex flex-row-reverse justify-center items-center">
            <p className="w-[50%] text-[16px] py-4 mx-4 leading-[1.1]">
              <span className="font-bold">Every year</span>, we compile a{" "}
              <span className="font-bold">list</span> of all the{" "}
              <span className="font-bold">popular places</span> per category in{" "}
              <span className="font-bold">Mykonos</span>, and we are happy to{" "}
              <span className="font-bold">share</span> these in the sections
              below.
            </p>
            <Image
              src={myk2}
              alt="img"
              width={16}
              height={16}
              className="w-[50%]"
            />
          </div>
          <div className="flex flex-row justify-center items-center">
            <p className="w-[50%] text-[16px] py-4 mx-4 leading-[1.1]">
              Our <span className="font-bold">Mykonos travel blog</span> is the
              product of <span className="font-bold">data</span> gathering and{" "}
              <span className="font-bold">analysis</span> of thousands of{" "}
              <span className="font-bold">rides</span> from our{" "}
              <span className="font-bold">Mykonos Taxi fleet</span>. we hope you
              find these useful.
            </p>
            <Image
              src={myk3}
              alt="img"
              width={16}
              height={16}
              className="w-[50%]"
            />
          </div>
        </div>

        <div className="flex justify-end mt-16 mb-4 mx-4">
          <button className="bg-[#2B2B6E] h-[35px] px-4 sm:h-[35px] text-white rounded-3xl flex items-center justify-center px-1 sm:px-4 space-x-2 sm:space-x-3 hover:opacity-90 transition whitespace-nowrap">
            <span className="text-[14px] sm:text-[14px] lg:text-[14px] font-bold text-white">
              Download Mykonos statistics
            </span>
            <Image
              src={arrow}
              alt="Arrow Front"
              width={14}
              height={14}
              className="w-4 h-4 sm:w-6 sm:h-6"
            />
          </button>
        </div>

        <Paras
          iconSrc={abtmykonos}
          headingText="About Mykonos Island"
          paragraphs={[
            "Mykonos, called by most 'The island of the Winds,' is a slice of paradise in the Cyclades island complex. With its postcard-perfect whitewashed houses, stunning blue-domed churches, and golden beaches, Mykonos offers a rare mix of tranquility, high end entertainment and world class cuisine, unmatched by any other island. Whether you want to relax by the crystal-clear waters, stroll through quaint cobblestone streets, or dance the night away at world-famous beach clubs, this island has something for all age groups and demographics.",
            "",
            "Mykonos has a rich history that dates back to ancient times. It was named after the hero Mykons, a descendant of the god Apollo. The island played a significant role in Greek mythology, said to be the site where Hercules defeated the Giants, whose petrified remains formed the island's rocky landscape. In later centuries, Mykonos became an important maritime hub during the Byzantine and Venetian eras, with nearby Delos acting as a significant trading post",
          ]}
        />

        <ParaswithBtn
          iconSrc={airport}
          headingText="Mykonos Airport (JMK)"
          paragraphs={[
            "Mykonos Airport (JMK) serves as the primary entry point to the island, welcoming both domestic and international travelers. Situated just 4 kilometers from Mykonos Town, it provides convenient access to the island’s famous beaches, ports, and vibrant attractions. The airport operates year-round, with a significant increase in flights during the summer season to accommodate the influx of visitors. Facilities include a range of services such as cafes, shops, and car rental options, ensuring a comfortable experience for passengers",
            "For more details about flight schedules, airport facilities, and transportation options, visit our comprehensive guide",
          ]}
          btntext={"Go to Mykonos Airport"}
        />
        <Blogs />

        <ParaswithLink
          iconSrc={airport}
          headingText="Mykonos Airport Taxis"
          paragraphs={[
            "Mykonos Airport taxi services provide a convenient and hassle-free way to reach your destination on the island. With its proximity to Mykonos Town and other popular areas, taxis are a preferred choice for travelers seeking quick and reliable transportation. Whether you’re heading to your hotel, a beach, or the port, taxis ensure a comfortable ride without the need to navigate public transport or wait for shuttles.",
            "Learn more about booking a reliable taxi from Mykonos Airport, including tips, pricing, and recommendations, on our dedicated page from the link below. Aegean Taxi offers a seamless, stress-free travel experience tailored to your needs.",
          ]}
          btntext={"Go to Mykonos Airport"}
        />

        <div className="bg-[#F0F0F0] pb-6 pt-2">
          <ParaswithBtn
            iconSrc={airport}
            headingText="Mykonos Port (Tourlos)"
            paragraphs={[
              "Mykonos Airport (JMK) serves as the primary entry point to the island, welcoming both domestic and international travelers. Situated just 4 kilometers from Mykonos Town, it provides convenient access to the island’s famous beaches, ports, and vibrant attractions. The airport operates year-round, with a significant increase in flights during the summer season to accommodate the influx of visitors. Facilities include a range of services such as cafes, shops, and car rental options, ensuring a comfortable experience for passengers.",
              "For more details about flight schedules, airport facilities, and transportation options, visit our comprehensive guide",
            ]}
            btntext={"Go to Mykonos Port"}
          />
          <Blogs />

          <ParaswithLink
            iconSrc={airport}
            headingText="Mykonos Port Taxis"
            paragraphs={[
              "Mykonos Airport taxi services provide a convenient and hassle-free way to reach your destination on the island. With its proximity to Mykonos Town and other popular areas, taxis are a preferred choice for travelers seeking quick and reliable transportation. Whether you’re heading to your hotel, a beach, or the port, taxis ensure a comfortable ride without the need to navigate public transport or wait for shuttles.",
              "Learn more about booking a reliable taxi from Mykonos Airport, including tips, pricing, and recommendations, on our dedicated page from the link below. Aegean Taxi offers a seamless, stress-free travel experience tailored to your needs.",
            ]}
            btntext={"Mykonos Port Taxis"}
          />
        </div>

        <div className="mb-16">
          <Guide
            backgroundColor="#E3E3E3"
            buttonColor="#2B2B6E"
            imageSrc1={bowl}
            imageSrc2={mykg1}
            headingText="Mykonos Beach Guide"
            paragraphText="Our Mykonos Taxi app is available in the iOS and Google play store. Follow these simple steps to download and register to book your Mykonos Taxi "
            buttonText="Explore Mykonos Beaches"
            buttonLink="/explore-mykonos"
          />
        </div>
        <div className="mb-16">
          <Guide
            backgroundColor="#C2D3E4"
            buttonColor="#000000"
            imageSrc1={cutlery}
            imageSrc2={mykg2}
            headingText="Mykonos Restaurants"
            paragraphText="Our Mykonos Taxi app is available in the iOS and Google play store. Follow these simple steps to download and register to book your Mykonos Taxi "
            buttonText="Explore Mykonos Restaurants"
            buttonLink="/explore-mykonos"
          />
        </div>
        <div className="mb-16">
          <Guide
            backgroundColor="#E3E3E3"
            buttonColor="#2B2B6E"
            imageSrc1={shot}
            imageSrc2={mykg1}
            headingText="Mykonos Bars and Clubs Guide"
            paragraphText="Our Mykonos Taxi app is available in the iOS and Google play store. Follow these simple steps to download and register to book your Mykonos Taxi "
            buttonText="Explore Mykonos Bars & Clubs"
            buttonLink="/explore-mykonos"
          />
        </div>
        <div>
          <Guide
            backgroundColor="#C2D3E4"
            buttonColor="#000000"
            imageSrc1={bino}
            imageSrc2={mykg2}
            headingText="Mykonos attractions & sights"
            paragraphText="Our Mykonos Taxi app is available in the iOS and Google play store. Follow these simple steps to download and register to book your Mykonos Taxi "
            buttonText=" Mykonos Sightseeing"
            buttonLink="/explore-mykonos"
          />
        </div>
        
        <div>
            <BestTime/>
        </div>
        
        <Safety/>
        <div style={{transform:"translateY(-230px)"}}>
        <FAQ/>
        <Footer/>
        </div>
      </div>
    </>
  );
};

export default Mykonos;
