"use client";
import React from "react";

import Image from "next/image";
import Head from "next/head";
import HamburgerIcon from "./assets/hamburgerIcon.svg"
import AppleStore from "./assets/applelogo.svg"
import Logo1 from "./assets/logo1.svg";
import Logo2 from "./assets/logo2.svg";
import bg from "./assets/bg.svg";

import whatsapp from "./assets/whatsapp.svg";
import suitcase from "./assets/suitcasehero.svg";
import camera from "./assets/camera.svg";
import maps from "./assets/maps.svg";
import slippers from "./assets/slippers.svg";
import bgcover from "./assets/bgcover.svg";
import cab from "./assets/cab.svg"
import FrontArrow from "./assets/w-front-arrow.png"
import PickUpIcon from "./assets/pickupicon.svg";
import DestinationIcon from "./assets/destination-icon.svg";
import CalenderIcon from "./assets/Calendar.svg";
import jeep from "./assets/jeep.svg"
import buss from "./assets/bus.svg"
import scooter from "./assets/scooter.svg"
import watertaxi from "./assets/boat.svg"
import foot from "./assets/foot.svg"
import bgImage from "./assets/tourbg.svg"
import clockIcon from "./assets/clock.svg"
import costIcon from "./assets/cost.svg"
import carIcon from "./assets/cartype.svg"


//import Sliderfilter from "../../components/filter/page"
import TransportDetails from "../../components/Transportdetails/trdeets";
import Blog from "../../components/MykonosBlog/blogsection";
import Tour from "../../components/Toursection/tour";
import FAQsSection from "../../components/FAQsSection/faqs"
import Footer from "../../components/Footer/footer";

//const titles = ["Taxi", "Car Rent", "Bus", "Scooter"];
const paragraphscab = [
    "Taxis are the best way to get around Mykonos, especially for travelers who want to avoid the hassle of navigating the island's difficult roads or parking challenges. However, the availability of traditional taxis is quite limited, with only a total of 32 taxis serving the island. This means they can be hard to find, especially during peak tourist season or late-night hours.",
    "Taxis are typically found at designated stands in hotspots like Mykonos Town, the airport, and the port, but waiting times can be long. Fares are generally fixed for popular routes, such as transfers from the airport to Mykonos Town or from Mykonos Town to Paradise Beach, and start from about €20 per ride.",
    "For a more reliable and easy alternative, Aegean Taxi offers the best Mykonos Taxi service, with more than 100 cars available in Mykonos, operating 24/7. The company offers seamless rides at cheap prices, and a number of booking options. Tourists can book their Mykonos Taxi using the Aegean Taxi Mykonos Taxi app, the Mykonos taxi Whatsapp booking service, the Mykonos taxi Phone booking, or the Online Mykonos Taxi booking option. Aegean Taxi provides instant booking and also a book later taxi booking option, fixed rates, professional drivers, and a great service, ensuring comfort and convenience throughout your journey.",
    "This service is particularly useful for travelers looking to avoid delays and secure transportation in advance, whether for a quick transfer or a longer journey to explore the island’s beaches and attractions. With limited traditional taxis on Mykonos, pre-booking your ride with Aegean Taxi ensures a stress-free way to get around.",
];

const paragraphsjeep = [
    "Renting a car in Mykonos is an excellent way to explore the island's picturesque beaches, and iconic landmarks at your own pace. Options range from compact cars for navigating the narrow streets of Mykonos, to SUVs and jeeps ideal for reaching more remote spots like Fokos Beach, Elia beach or Panormos.",
    "Prices range from as low as €50 per day in the low season for a standard car, up to €350 per day in the high season for an SUV. Rentals are available at many locations such as Mykonos Airport, Mykonos Port, and various spots in town, making it easy to pick up a car rental  when you arrive. During the busy summer season, booking your rental in advance is strongly recommended to secure the best rates and availability.",
    "Driving in Mykonos, comes with a few challenges. Roads are often narrow, winding, and busy, especially during peak times, so confidence in driving is important. Parking can be scarce and very expensive (about €25 per car) in popular areas like Mykonos Town or Psarou Beach. Fuel stations are limited and fuel is more expensive than the mainland, about 25% more. For visitors who prefer not to drive, a convenient alternative is Aegean Taxi, the best Mykonos Taxi service, which provides stress-free ways to get around. A rental car is ideal for those seeking freedom and flexibility, but understanding these nuances and actual costs will help make your experience enjoyable and hassle-free.",
    "Book your Mykonos Taxi with Aegean Taxi, instead of renting a car.",
];

const paragraphsbus = [
    "Renting a car in Mykonos is an excellent way to explore the island's picturesque beaches, and iconic landmarks at your own pace. Options range from compact cars for navigating the narrow streets of Mykonos, to SUVs and jeeps ideal for reaching more remote spots like Fokos Beach, Elia beach or Panormos.",
    "Prices range from as low as €50 per day in the low season for a standard car, up to €350 per day in the high season for an SUV. Rentals are available at many locations such as Mykonos Airport, Mykonos Port, and various spots in town, making it easy to pick up a car rental  when you arrive. During the busy summer season, booking your rental in advance is strongly recommended to secure the best rates and availability.",
    "Driving in Mykonos, comes with a few challenges. Roads are often narrow, winding, and busy, especially during peak times, so confidence in driving is important. Parking can be scarce and very expensive (about €25 per car) in popular areas like Mykonos Town or Psarou Beach. Fuel stations are limited and fuel is more expensive than the mainland, about 25% more. For visitors who prefer not to drive, a convenient alternative is Aegean Taxi, the best Mykonos Taxi service, which provides stress-free ways to get around. A rental car is ideal for those seeking freedom and flexibility, but understanding these nuances and actual costs will help make your experience enjoyable and hassle-free.",
    "Book your Mykonos Taxi with Aegean Taxi, instead of renting a car.",
];

const MykonosGettingAround = ()=>{

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
                className="min-h-screen flex flex-col bg-white justify-between pb-10 pt-[2%]"
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
                   
                    <div className="mt-8 mx-[5%]">
                        <h1 className=" md:text-3xl text-3xl text-black font-bold text-left">
                            Getting around 
                        </h1>
                        <h1 className=" md:text-3xl text-3xl text-black font-bold text-left">
                            Mykonos
                        </h1>
                        <h2 className=" md:text-lg text-lg font-bold text-black text-left mt-4">
                            Discover the best ways to <br />explore Mykonos
                        </h2>
                    </div>
                        
                    {/* Background Image Section */}
                    <div className="flex justify-center items-center w-full" style={{ transform: 'translateY(-40px)' }}>
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

                    <div style={{ transform: 'translateY(-40px)' }}>
                        <Image 
                            src={suitcase} 
                            alt="Whatsapp" 
                            width={240} 
                            height={240} 
                            className="h-48 absolute " 
                            style={{ transform: 'translateY(-140px) translateX(-40px)' }}

                        />   
                        <div className="flex justify-end">
                            <button>
                                <Image 
                                    src={whatsapp} 
                                    alt="Whatsapp" 
                                    width={240} 
                                    height={240} 
                                    className="h-[2.5rem]" 
                                    style={{ transform: 'translateX(20px)' }}
                                />                    
                            </button> 
                        </div>  
                    </div>      
                      
                    <main className="mx-[5%] flex flex-col my-auto mt-4 space-y-[5%]" >
                        <div className="flex flex-row">
                            <p className="text-[#000000] mb-4 text-justify leading-tight mr-[1%] text-[14px]">
                                Navigating the island of Mykonos is an adventure in itself. Mykonos offers visitors many transportation options that blend in convenience, charm, and local flavour.
                            </p>

                            <Image 
                                src={maps} 
                                alt="Whatsapp" 
                                width={240} 
                                height={240} 
                                className="h-[7.5rem] ml-4"
                                style={{ transform: 'translateY(20px)' }}
                            /> 
                        </div>
                        <div className="flex flex-row-reverse">
                            <p className="text-[#000000] mb-4 text-justify leading-tight ml-[1%] text-[14px]">
                            Whether you are looking to explore Mykonos Town, reach its world-famous beaches, or discover the hidden gems it has to offer, understanding Mykonos island transportation landscape and how to best move around, is the key to maximising your experience. 
                            </p>

                            <Image 
                                src={camera} 
                                alt="camera" 
                                width={240} 
                                height={240} 
                                className="h-[10rem] mr-6 ml-0"
                                style={{ transform: 'translateY(-5px) translateX(-1.2rem)' }}
                            /> 
                        </div>
                        <div className="flex flex-row">
                            <p className="text-[#000000] mb-4 text-justify leading-tight mr-[1%] text-[14px]">
                             From Mykonos buses and convenient Mykonos taxi services to adventurous scooter rentals and scenic boat trips, Mykonos offers many ways to explore. In this guide, we will break down everything you need to know about getting around Mykonos.
                            </p>

                            <Image 
                                src={slippers} 
                                alt="Whatsapp" 
                                width={240} 
                                height={240} 
                                className="h-[7.5rem] ml-12 mr-8"
                                style={{ transform: 'translateY(20px)' }}
                            /> 
                        </div>
                    </main>
                    
                    <div className="w-full my-4">
                    <Image
                        src={bgcover}
                        alt="Taxi"
                        layout="responsive"
                        className="object-contain"
                    />
                    </div>

                    <div className="m-4 mb-8">
                        {/*}<Sliderfilter 
                                        titles={titles} 
                                        activeStyles="bg-black text-white" 
                                        inactiveStyles="text-gray-500" 
                                        backgroundColor="bg-gray-100"
                                        />*/}
                    </div>
                    <TransportDetails
                        title="Mykonos Taxi"
                        imageSrc={cab}
                        altText="Mykonos Taxi"
                        descriptionParagraphs={paragraphscab}
                        buttonText="Go to Mykonos Taxi"
                        buttonLink="/mykonos-taxi"
                        buttonIcon={FrontArrow}
                    />

                    <div className="bg-[#F0F0F0]">
                                        {/* Input Fields Section */}
                        <div className="mx-3 mb-8 bg-[#F0F0F0]">
                        <div className="rounded-t-3xl rounded-b-3xl bg-[#000000]">
                            <div className="mx-5 py-4 rounded-xl">
                            <div className="relative flex flex-col gap-4">
                                {/* Pick-Up Input */}
                                <div className="relative">
                                <label htmlFor="pickup" className="sr-only">
                                    Pick-up location
                                </label>
                                <input
                                    id="pickup"
                                    type="text"
                                    placeholder="Enter pick-up location"
                                    className="w-full py-3 border border-black rounded-lg pl-12"
                                    aria-required="true"
                                />
                                <div className="absolute left-4 top-1/2 -translate-y-1/2">
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
                                className="absolute left-[23px] top-[35px] h-[60px] w-[2px] bg-black z-20"
                                aria-hidden="true"
                                ></div>

                                {/* Destination Input */}
                                <div className="relative">
                                <label htmlFor="destination" className="sr-only">
                                    Destination
                                </label>
                                <input
                                    id="destination"
                                    type="text"
                                    placeholder="Enter destination"
                                    className="w-full py-3 border border-black rounded-lg pl-12"
                                    aria-required="true"
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

                                    {/* Button Section */}
                                    <div className="flex gap-4 w-full items-center">
                                    <button className="bg-white text-black px-4 py-4 pb-8 pt-2 rounded-xl text-2xl font-bold hover:bg-blue-700 flex-1 h-12">
                                        See prices & book
                                    </button>
                                    <button
                                        className="bg-white text-black flex items-center justify-center rounded-xl hover:bg-blue-700 w-1/4 " 
                                        aria-label="Open Calendar"
                                        style={{ height: "48px", width: "48px" }}
                                    >
                                        <Image
                                        src={CalenderIcon}
                                        alt="Calendar icon"
                                        className="h-8 w-8"
                                        />
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <Blog></Blog>
                    <TransportDetails
                        title="Mykonos Car Rental"
                        imageSrc={jeep}
                        altText="Mykonos Car Rental"
                        descriptionParagraphs={paragraphsjeep}
                        buttonText="Go to Mykonos Taxi"
                        buttonLink="/mykonos-taxi"
                        buttonIcon={FrontArrow}
                    />

                    <Blog></Blog>
                    <TransportDetails
                        title="Mykonos Buses"
                        imageSrc={buss}
                        altText="Mykonos Buses"
                        descriptionParagraphs={paragraphsbus}
                        buttonText="Go to Mykonos Taxi"
                        buttonLink="/mykonos-taxi"
                        buttonIcon={FrontArrow}
                    />

                    <Blog></Blog>
                    <TransportDetails
                        title="Mykonos Scooter Rental"
                        imageSrc={scooter}
                        altText="Mykonos Scooter Rental"
                        descriptionParagraphs={paragraphsbus}
                        buttonText="Go to Mykonos Taxi"
                        buttonLink="/mykonos-taxi"
                        buttonIcon={FrontArrow}
                    />

                    <Blog></Blog>
                    <TransportDetails
                        title="Mykonos Water Taxi"
                        imageSrc={watertaxi}
                        altText="Mykonos Water Taxi"
                        descriptionParagraphs={paragraphsbus}
                        buttonText="Go to Mykonos Taxi"
                        buttonLink="/mykonos-taxi"
                        buttonIcon={FrontArrow}
                    />

                    <Blog></Blog>
                    <TransportDetails
                        title="Mykonos by Foot"
                        imageSrc={foot}
                        altText="Mykonos by Foot"
                        descriptionParagraphs={paragraphsbus}
                        buttonText="Go to Mykonos Taxi"
                        buttonLink="/mykonos-taxi"
                        buttonIcon={FrontArrow}
                    />

                        <Tour
                            title="Mykonos Sightseeing Tour"
                            duration="4 hours"
                            cost="$50"
                            carType="Sedan"
                            description="This upmarket sandy beach with its turquoise waters is very popular among celebrities. Many luxury hotels, apartments and restaurants are located here. The most notable one is Nammos, which is considered one of the best beach clubs in Mykonos. Psaro"
                            imageSrc={bgImage}
                            clockIcon={clockIcon}
                            costIcon={costIcon}
                            carIcon={carIcon}
                        />

                    <FAQsSection />
                    <Footer />
                </div>
            </div>
        </>
    );

};

export default MykonosGettingAround;