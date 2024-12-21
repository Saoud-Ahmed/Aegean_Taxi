"use client";
import React from "react";

import Image from "next/image";
import Head from "next/head";

import HamburgerIcon from "./assets/hamburgerIconw.svg";
import AppleStore from "./assets/applewhite.svg";
import Logo1 from "./assets/logo1white.svg";
import Logo2 from "./assets/logo2white.svg";
import bgbeach from "./assets/bgbeach.svg";
import herocover from "./assets/herocover.svg";
import bgImage from "./assets/tourbg.svg"
import clockIcon from "./assets/clock.svg"
import costIcon from "./assets/cost.svg"
import carIcon from "./assets/cartype.svg"
import FrontArrow from "./assets/w-front-arrow.png"
import bgCover from "./assets/finalimgbg.svg"

//import Sliderfilter from "../../components/filter/page"
import Tour from "../../components/TourDistance/tourdist";
import Blog from "../../components/MykonosBlog/blogsection";
import FAQsSection from "../../components/FAQsSection/faqs"
import Footer from "../../components/Footer/footer";

//const titles = ["Psarou", "Ornos", "Kalo Livadi"];

const Mykonos = () => {

    return (
        <>
            <Head>
                <title>Aegean Taxi - Your Mykonos Taxi App</title>
                <meta name="description" content="Book the fastest, cheapest, and easiest taxi in Mykonos. Choose from standard, van, and mini-bus options with transparent pricing." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen">
                <div
                    className="h-[50vh] flex flex-col justify-between pb-10 pt-[2%]"  // Set height to 50% of viewport height
                    style={{
                        backgroundImage: `url(${bgbeach.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                         backgroundPosition: 'center 200%'
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

                    <h1 className="text-4xl md:text-4xl text-4xl text-black font-bold text-left ml-8 mt-8 leading-[1.3]">
                        Mykonos<br></br>Beach guide
                    </h1>

                    <h3 className="text-lg font-bold mt-4 ml-8">Explore Mykonos best <br></br>beaches with Aegean Taxi</h3>
                    
                    <div className="bg-[#F1F3FB] rounded-2xl p-6 px-16 space-y-4 mt-20">
                        <p className="text-[14px] text-black ">
                            Mykonos features an extraordinary coastal landscape, offering a mesmerising array of shorelines that host some of the world’s best beaches.
                        </p>
                        <p className="text-[14px] text-black">
                            From pulsing party beaches that never sleep to tranquil hidden gems, Mykonos presents a beach experience as diverse as its visitors. The Aegean Taxi fleet has explored every single one of them, having transported thousands of tourists and received their feedback as well, so we offer you our own inside view of our top beaches in Mykonos.
                        </p>
                        <p className="text-[14px] text-black">
                            Your ultimate beach adventure in Mykonos starts here!
                        </p>       
                    </div>
                    <div className="w-full" style={{transform:"translateY(-70px)"}}>
                        <Image 
                            src={herocover} 
                            alt="cover" 
                            className="w-full"
                        />       
                    </div>

                </div>
                
                
            </div>
            
            <div className="min-h-screen mt-24">
                <div className="m-4 mb-4">
                    {/*}<Sliderfilter 
                                        titles={titles} 
                                        activeStyles="bg-black text-white" 
                                        inactiveStyles="text-gray-500" 
                                        backgroundColor="bg-gray-100"
                                        />*/}
                     
                </div>

                <div className="mx-1">
                    <Tour
                        title="Psarou Beach"
                        distance="5km"
                        bestfor="Luxury,  Couples, Groups"
                        restaurants="Nammos"
                        description="This upmarket sandy beach with its turquoise waters is very popular among celebrities. Many luxury hotels, apartments and restaurants are located here. The most notable one is Nammos, which is considered one of the best beach clubs in Mykonos. Psarou beach is easily accessible from Mykonos Town, just one stop before the last "
                        imageSrc={bgImage}
                        clockIcon={clockIcon}
                        costIcon={costIcon}
                        carIcon={carIcon}
                    />    
                    <Blog></Blog>   

                    <div className="flex justify-center mt-4">
                        <a href="/mykonos-taxi" aria-label="Go to Mykonos Taxi">
                            <button
                            className="flex items-center w-64 gap-2 px-6 py-2 bg-[#2B2B6E] hover:bg-blue-800 text-white font-semibold rounded-3xl transition-all duration-300 text-sm sm:text-base justify-center"
                            >
                            <span className="whitespace-nowrap">Go to Mykonos Taxi</span>
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
                    <Tour
                        title="Psarou Beach"
                        distance="5km"
                        bestfor="Luxury,  Couples, Groups"
                        restaurants="Nammos"
                        description="This upmarket sandy beach with its turquoise waters is very popular among celebrities. Many luxury hotels, apartments and restaurants are located here. The most notable one is Nammos, which is considered one of the best beach clubs in Mykonos. Psarou beach is easily accessible from Mykonos Town, just one stop before the last "
                        imageSrc={bgImage}
                        clockIcon={clockIcon}
                        costIcon={costIcon}
                        carIcon={carIcon}
                    />    
                    <Blog></Blog>   

                    <div className="flex justify-center mt-4">
                        <a href="/mykonos-taxi" aria-label="Go to Mykonos Taxi">
                            <button
                            className="flex items-center w-64 gap-2 px-6 py-2 bg-[#2B2B6E] hover:bg-blue-800 text-white font-semibold rounded-3xl transition-all duration-300 text-sm sm:text-base justify-center"
                            >
                            <span className="whitespace-nowrap">Go to Mykonos Taxi</span>
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
                    <Tour
                        title="Psarou Beach"
                        distance="5km"
                        bestfor="Luxury,  Couples, Groups"
                        restaurants="Nammos"
                        description="This upmarket sandy beach with its turquoise waters is very popular among celebrities. Many luxury hotels, apartments and restaurants are located here. The most notable one is Nammos, which is considered one of the best beach clubs in Mykonos. Psarou beach is easily accessible from Mykonos Town, just one stop before the last "
                        imageSrc={bgImage}
                        clockIcon={clockIcon}
                        costIcon={costIcon}
                        carIcon={carIcon}
                    />    
                    <Blog></Blog>   

                    <div className="flex justify-center mt-4">
                        <a href="/mykonos-taxi" aria-label="Go to Mykonos Taxi">
                            <button
                            className="flex items-center w-64 gap-2 px-6 py-2 bg-[#2B2B6E] hover:bg-blue-800 text-white font-semibold rounded-3xl transition-all duration-300 text-sm sm:text-base justify-center"
                            >
                            <span className="whitespace-nowrap">Go to Mykonos Taxi</span>
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
                    <Tour
                        title="Psarou Beach"
                        distance="5km"
                        bestfor="Luxury,  Couples, Groups"
                        restaurants="Nammos"
                        description="This upmarket sandy beach with its turquoise waters is very popular among celebrities. Many luxury hotels, apartments and restaurants are located here. The most notable one is Nammos, which is considered one of the best beach clubs in Mykonos. Psarou beach is easily accessible from Mykonos Town, just one stop before the last "
                        imageSrc={bgImage}
                        clockIcon={clockIcon}
                        costIcon={costIcon}
                        carIcon={carIcon}
                    />    
                    <Blog></Blog>   

                    <div className="flex justify-center mt-4">
                        <a href="/mykonos-taxi" aria-label="Go to Mykonos Taxi">
                            <button
                            className="flex items-center w-64 gap-2 px-6 py-2 bg-[#2B2B6E] hover:bg-blue-800 text-white font-semibold rounded-3xl transition-all duration-300 text-sm sm:text-base justify-center"
                            >
                            <span className="whitespace-nowrap">Go to Mykonos Taxi</span>
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
                    <Tour
                        title="Psarou Beach"
                        distance="5km"
                        bestfor="Luxury,  Couples, Groups"
                        restaurants="Nammos"
                        description="This upmarket sandy beach with its turquoise waters is very popular among celebrities. Many luxury hotels, apartments and restaurants are located here. The most notable one is Nammos, which is considered one of the best beach clubs in Mykonos. Psarou beach is easily accessible from Mykonos Town, just one stop before the last "
                        imageSrc={bgImage}
                        clockIcon={clockIcon}
                        costIcon={costIcon}
                        carIcon={carIcon}
                    />    
                    <Blog></Blog>   

                    <div className="flex justify-center mt-4">
                        <a href="/mykonos-taxi" aria-label="Go to Mykonos Taxi">
                            <button
                            className="flex items-center w-64 gap-2 px-6 py-2 bg-[#2B2B6E] hover:bg-blue-800 text-white font-semibold rounded-3xl transition-all duration-300 text-sm sm:text-base justify-center"
                            >
                            <span className="whitespace-nowrap">Go to Mykonos Taxi</span>
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
                    <Tour
                        title="Psarou Beach"
                        distance="5km"
                        bestfor="Luxury,  Couples, Groups"
                        restaurants="Nammos"
                        description="This upmarket sandy beach with its turquoise waters is very popular among celebrities. Many luxury hotels, apartments and restaurants are located here. The most notable one is Nammos, which is considered one of the best beach clubs in Mykonos. Psarou beach is easily accessible from Mykonos Town, just one stop before the last "
                        imageSrc={bgImage}
                        clockIcon={clockIcon}
                        costIcon={costIcon}
                        carIcon={carIcon}
                    />    
                    <Blog></Blog>   

                    <div className="flex justify-center mt-4">
                        <a href="/mykonos-taxi" aria-label="Go to Mykonos Taxi">
                            <button
                            className="flex items-center w-64 gap-2 px-6 py-2 bg-[#2B2B6E] hover:bg-blue-800 text-white font-semibold rounded-3xl transition-all duration-300 text-sm sm:text-base justify-center"
                            >
                            <span className="whitespace-nowrap">Go to Mykonos Taxi</span>
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
                <div className="mt-16">
                        <Image 
                            src={bgCover} 
                            alt="Aegean Taxi" 
                            width={120} 
                            height={20} 
                            className="w-full" 
                        />        
                    </div>
                    <FAQsSection />
                    <Footer /> 
            </div>
        </>
    );
};

export default Mykonos;
