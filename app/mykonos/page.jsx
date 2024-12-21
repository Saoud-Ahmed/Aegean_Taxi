"use client";
import React from "react";

import Image from "next/image";
import Head from "next/head";

import HamburgerIcon from "./assets/hamburgerIcon.svg"
import AppleStore from "./assets/applewhite.svg"
import Logo1 from "./assets/logo1.svg";
import Logo2 from "./assets/logo2.svg";
import bookhero from "./assets/herobook.svg";
import aihero from "./assets/heroai.svg";
import whatsapp from "./assets/whatsapp.svg"
import bgbeach from "./assets/bgbeach.svg"
import FrontArrow from "./assets/w-front-arrow.png"

import Service from "../components/MykonosServices/mykonosservices"

const Mykonos = ()=>{

    return (
        <>

            <Head>
                <title>Aegean Taxi - Your Mykonos Taxi App</title>
                <meta name="description" content="Book the fastest, cheapest, and easiest taxi in Mykonos. Choose from standard, van, and mini-bus options with transparent pricing." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen">
                <div className="h-screen flex flex-col justify-between pb-10 pt-[2%]"
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
                        <Image 
                            src={AppleStore} 
                            alt="App Store" 
                            className="w-full h-9" 
                        />
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
                            The ultimate up to date Mykonos travel guide, through the knowledge<br></br> of real experts.
                            </p>
                        </div>

                        <div className="flex justify-end">
                            <button><Image 
                                src={whatsapp} 
                                alt="Whatsapp" 
                                width={240} 
                                height={240} 
                                className="h-12" 
                            /></button>
                        </div>
                        
                    </main>
                    
                </div>

                <div
                    className="h-[100vh] flex flex-col justify-between pb-10 pt-[2%]" 
                    style={{
                        backgroundImage: `url(${bgbeach.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                         backgroundPosition: 'center 200%'
                    }}
                >
                    
                    <div className="flex flex-col justify-center">
                        <h1 className="text-[32px] font-bold text-[#2B2B6E] mt-12 text-center">We know Mykonos!</h1>
                        <p className="text-[18px] black font-bold mx-[48px] mt-12">We have covered every inch of Mykonos  island! Our Mykonos taxi fleet transports tourists in every beach, every restaurant, bar, and every tourist attraction in Mykonos. Our Mykonos Airport transfer and Mykonos Port transfer services welcome and transport thousands of tourists to and from the airport and ports of Mykonos</p>
                        <div className="flex mt-44 mx-12">
                            <a href="/mykonos-taxi" aria-label="Go to Mykonos Taxi">
                                <button
                                className="flex items-center w-48 gap-2 px-6 py-2 bg-[#2B2B6E] hover:bg-blue-800 text-white font-semibold rounded-3xl transition-all duration-300 text-sm sm:text-base justify-center"
                                >
                                <span className="whitespace-nowrap">Read more about us</span>
                                {{FrontArrow} && (
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

                <Service/>

            </div> 


        </>
    );

};

export default Mykonos;