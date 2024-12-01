"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

import AppImg1 from "./assets/app_img1.png";
import AppImg2 from "./assets/app_img2.png";
import WebAppImg1 from "./assets/webapp_img1.png";
import WebAppImg2 from "./assets/webapp_img2.png";
import WhatsappImg1 from "./assets/whatsapp_img1.png";
import PhoneImg1 from "./assets/phone_img1.png";
import PhoneImg2 from "./assets/app_img2.png";
import DownloadIcon from "./assets/icon1.png";
import Icon2 from "./assets/icon.png";
import WhatsAppIcon from "./assets/whatsappIcon.png";
import WhatsAppLogo from "./assets/whatsappIcon2.png";
import CallIcon from "./assets/phoneIcon.png";
import Arrow from "./assets/arrow.png";
import ArrowBlack from "./assets/arrow-black.png";



// Sample App section for the slider
const AppSlider = [
  {
    step: "Step 1",
    imgsrc: AppImg1, 
    description: "Download the Mykonos Taxi app from the App Store or Google Play.",
  },
  {
    step: "Step 2",
    imgsrc: AppImg2, 
    description: "Register with your details to create an account.",
  },
  {
    step: "Step 3",
    imgsrc: AppImg1, 
    description: "Choose a taxi category and book your ride.",
  },
  {
    step: "Step 4",
    imgsrc: AppImg2, 
    description: "Enjoy your ride and leave feedback.",
  },
];


// Sample Webapp Slider section for the slider
const WebAppSlider = [
    {
      step: "Step 1",
      imgsrc: WebAppImg1, 
      description: "Select your location from rhe initial list of islands screen.",
    },
    {
      step: "Step 2",
      imgsrc: WebAppImg2, 
      description: "Select your location from rhe initial list of islands screen.",
    },
    {
      step: "Step 3",
      imgsrc: WebAppImg1, 
      description: "Select your location from rhe initial list of islands screen.",
    },
    {
      step: "Step 4",
      imgsrc: WebAppImg2, 
      description: "Select your location from rhe initial list of islands screen.",
    },
  ];



// Sample Whatapp slider section for the slider
const WhatappSlider = [
    {
      step: "Step 1",
      imgsrc: WhatsappImg1, 
      description: "Click on any whatsapp link on our site or simply text us onn +30 6944 500 689 ",
    },
    {
      step: "Step 2",
      imgsrc: WebAppImg2, 
      description: "Select your location from rhe initial list of islands screen.",
    },
    {
      step: "Step 3",
      imgsrc: WhatsappImg1, 
      description: "Click on any whatsapp link on our site or simply text us onn +30 6944 500 689.",
    },
    {
      step: "Step 4",
      imgsrc: WebAppImg2, 
      description: "Select your location from rhe initial list of islands screen.",
    },
  ];



  
// Sample data for phone slider section for the slider
const PhoneSlider = [
    {
      step: "Step 1",
      imgsrc: PhoneImg1, 
      description: "Dial our 24/7 customer service line on +30 215 215 4000",
    },
    {
      step: "Step 2",
      imgsrc: PhoneImg2, 
      description: "Dial our 24/7 customer service line on +30 215 215 4000",
    },
    {
      step: "Step 3",
      imgsrc: PhoneImg1, 
      description: "Dial our 24/7 customer service line on +30 215 215 4000",
    },
    {
      step: "Step 4",
      imgsrc: PhoneImg2, 
      description: "Dial our 24/7 customer service line on +30 215 215 4000",
    },
  ];




const BookingOptions = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 260; // Width of each card
  const [isDragging, setIsDragging] = useState(false);

  // Update active index based on scroll position
  const updateActiveIndex = () => {
    if (!scrollRef.current) return;
    const scrollPosition = scrollRef.current.scrollLeft;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), AppSlider.length - 1));
  };

  // Handle manual navigation to a specific index
  const navigateToIndex = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = index * cardWidth;
      setActiveIndex(index);
    }
  };

  // Drag functionality for desktop
  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    const startX = e.clientX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      if (!scrollRef.current || !isDragging) return;
      const x = e.clientX;
      const walk = (startX - x) * 2; // Adjust scroll speed
      scrollRef.current.scrollLeft = scrollLeft + walk;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      updateActiveIndex();
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Add event listener for touch and drag events
  useEffect(() => {
    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      const handleScroll = () => {
        if (!isDragging) updateActiveIndex();
      };

      currentScrollRef.addEventListener("scroll", handleScroll);
      return () => {
        currentScrollRef.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isDragging]);

  return (
    <div className="bg-[#121212] px-4 py-20 flex flex-col my-20">
      {/* Heading Section */}
      <div className="text-left pb-10 px-6 ">
        <h1
          className="text-3xl font-bold leading-[1.1] bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to right, #4C7F00 0%, #18C5AB 24%, #51B481 51%, #64429A 76%)",
          }}
        >
          Mykonos Taxi Booking Options
        </h1>
        <p className="text-[#87908F] mt-4">
          Follow these simple steps to download and register to book your Mykonos Taxi.
        </p>
      </div>




        {/*Taxi Application Section */}
      <div className='mb-20 flex flex-col bg-[#E3E3E3] p-8 rounded-3xl'>
        <h1 
          className="text-3xl font-bold leading-[1.1] bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0048FF 0%, #356FA5 24%, #001C79 51%, #0C2787 76%)",
          }}
        >
          Taxi Application
        </h1>

        <p className="text-[#5B5963] mt-4 mb-4">
          Our Mykonos Taxi app is available in the IOS and the Google play store. Follow these simple steps to download and register to book your Mykonos Taxi
        </p>

        {/* Slider Section */}
        <div className="mt-5">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto cursor-grab scroll-smooth scrollbar-hide"
            onMouseDown={handleMouseDown}
          >
            {AppSlider.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-[260px]">
                <p className="text-sm px-4 pb-2 font-bold text-black">{item.step}</p>
                <div
                  className="w-[238px] h-[316px] rounded-3xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.imgsrc.src})`,
                  }}
                >
                  <p
                    className={`p-4 ${
                      index % 2 === 0 ? "text-white" : "text-black"
                    }`} // Alternating text color based on index
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Improved Indicator Section */}
          <div className="flex justify-center mt-4 space-x-2">
            {AppSlider.map((_, index) => (
              <button
                key={index}
                onClick={() => navigateToIndex(index)}
                className={`
                  transition-all duration-300 ease-in-out 
                  ${activeIndex === index 
                    ? 'bg-black w-3 h-3 rounded-full' // Wider, animated active state
                    : 'bg-gray-500 hover:bg-gray-300 w-3 h-3 rounded-full'
                  }
                  transform hover:scale-110 // Add hover effect
                  focus:outline-none focus:ring-2 focus:ring-blue-500 // Accessibility improvements
                `}
                aria-label={`Go to ${_?.step || `slide ${index + 1}`}`}
              />
            ))}
          </div>

          <button className="bg-[#346DA4] mt-6 text-white rounded-3xl flex items-center w-full py-2 space-x-3 hover:opacity-90 transition">
                {/* Icon on the left */}
                <Image
                    src={DownloadIcon} 
                    alt="Download Icon"
                    className="ml-8"
                    width={24}
                    height={24}
                />
                {/* Button text */}
                <span className="text-lg text-sm font-bold">Download the Taxi App</span>
                {/* Arrow icon on the right */}
                <Image
                    src={Arrow}
                    alt="Arrow Icon"
                    width={24}
                    height={24}
                />
            </button>

        </div>
      </div>


             {/*Online Webapp Section */}
      <div className='mb-20 flex flex-col bg-[#C2D3E4] p-8 rounded-3xl'>
      <div className="flex items-center gap-6">
  {/* Gradient Heading */}
  <h1
    className="text-3xl font-bold leading-[1.1] bg-clip-text text-transparent"
    style={{
      backgroundImage:
        "linear-gradient(to right, #4C7F00 0%, #18C5AB 24%, #51B481 52%, #64429A 76%)",
    }}
  >
    Book Online / Webapp
  </h1>

  
</div>



        <p className="text-[#777777] mt-4 mb-4">
          We made it easier to book your taxi ride in Mykonos with 4 booking options available to we made is 
        </p>

        {/* Slider Section */}
        <div className="mt-5">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto cursor-grab scroll-smooth scrollbar-hide"
            onMouseDown={handleMouseDown}
          >
            {WebAppSlider.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-[260px]">
                <p className="text-sm px-4 pb-2 font-bold text-black">{item.step}</p>
                <div
                  className="w-[238px] h-[316px] rounded-3xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.imgsrc.src})`,
                  }}
                >
                  <p
                    className={`p-4 ${
                      index % 2 === 0 ? "text-white" : "text-black"
                    }`} // Alternating text color based on index
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Improved Indicator Section */}
          <div className="flex justify-center mt-4 space-x-2">
            {WebAppSlider.map((_, index) => (
              <button
                key={index}
                onClick={() => navigateToIndex(index)}
                className={`
                  transition-all duration-300 ease-in-out 
                  ${activeIndex === index 
                    ? 'bg-black w-3 h-3 rounded-full' // Wider, animated active state
                    : 'bg-gray-500 hover:bg-gray-300 w-3 h-3 rounded-full'
                  }
                  transform hover:scale-110 // Add hover effect
                  focus:outline-none focus:ring-2 focus:ring-blue-500 // Accessibility improvements
                `}
                aria-label={`Go to ${_?.step || `slide ${index + 1}`}`}
              />
            ))}
          </div>

          <button className="bg-[#FFAB01] mt-6 text-white rounded-3xl flex items-center w-full py-2 space-x-3 hover:opacity-90 transition">
                {/* Icon on the left */}
                <Image
                    src={Icon2} 
                    alt="Download Icon"
                    className="ml-8"
                    width={24}
                    height={24}
                />
                {/* Button text */}
                <span className=" text-sm font-bold text-black">Download the Taxi App</span>
                {/* Arrow icon on the right */}
                <Image
                    src={ArrowBlack}
                    alt="Arrow Icon"
                    width={24}
                    height={24}
                />
            </button>

        </div>
        </div>





        {/*Whatsapp  Section */}
      <div className='mb-10 flex flex-col bg-[#D8F6A5] p-8 rounded-3xl'>
      <div className="flex items-center gap-4">
  {/* Gradient Heading */}
  <h1
    className="text-3xl font-bold leading-[1.1] bg-clip-text text-transparent"
    style={{
      backgroundImage:
        "linear-gradient(to right, #4C7F00 0%, #18C5AB 24%, #51B481 52%, #64429A 76%)",
    }}
  >
    Whatapp
  </h1>

  {/* Image Section */}
  <div className="w-10 h-10 flex-shrink-0">
    <Image
      src={WhatsAppLogo}// Replace with your actual image path
      alt="Webapp Icon"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
</div>



        <p className="text-[#00000] mt-4 mb-4">
        Mykonos taxi whatsapp booking, available 24/7. Use whatsapp to request and book a ride in Mykonos instantly. Online and always available. Book now or later.
        </p>

        {/* Slider Section */}
        <div className="mt-5">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto cursor-grab scroll-smooth scrollbar-hide"
            onMouseDown={handleMouseDown}
          >
            {WhatappSlider.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-[260px]">
                <p className="text-sm px-4 pb-2 font-bold text-black">{item.step}</p>
                <div
                  className="w-[238px] h-[316px] rounded-3xl bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url(${item.imgsrc.src})`,
                  }}
                >
                  <p
                    className={`absolute p-4 w-full ${
                      index % 2 === 0 
                        ? "text-white bottom-0 text-left" 
                        : "text-black top-0 "
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Improved Indicator Section */}
          <div className="flex justify-center mt-4 space-x-2">
            {WhatappSlider.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  navigateToIndex(index);
                  // Ensure the slider moves to the corresponding slide
                  scrollRef.current.scrollTo({
                    left: index * 270, // Adjust based on your slide width + gap
                    behavior: 'smooth'
                  });
                }}
                className={`
                  transition-all duration-300 ease-in-out 
                  ${activeIndex === index 
                    ? 'bg-black w-3 h-3 rounded-full' 
                    : 'bg-gray-500 hover:bg-gray-300 w-3 h-3 rounded-full'
                  }
                  transform hover:scale-110
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                `}
                aria-label={`Go to ${_?.step || `slide ${index + 1}`}`}
              />
            ))}
          </div>


          <button className="bg-[#21540F] mt-6 text-white rounded-3xl flex items-center w-full py-2 space-x-3 hover:opacity-90 transition">
                {/* Icon on the left */}
                <Image
                    src={WhatsAppIcon} 
                    alt="Whatsapp Icon"
                    className="ml-8"
                    width={24}
                    height={24}
                />
                {/* Button text */}
                <span className=" text-sm font-bold text-white">Download the Taxi App</span>
                {/* Arrow icon on the right */}
                <Image
                    src={Arrow}
                    alt="Arrow Icon"
                    width={24}
                    height={24}
                />
            </button>

        </div>
        </div>



        
        {/*Taxi Application Section */}
      <div className='mb-20 flex flex-col bg-[#9FF4E4] p-8 rounded-3xl'>
        <h1 
          className="text-3xl font-bold leading-[1.1] bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0048FF 0%, #356FA5 24%, #001C79 51%, #0C2787 76%)",
          }}
        >
          Phone booking 24/7
        </h1>

        <p className="text-[#00000] mt-4 mb-4">
          Our Mykonos Taxi app is available in the IOS and the Google play store. Follow these simple steps to download and register to book your Mykonos Taxi
        </p>

        {/* Slider Section */}
        <div className="mt-5">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto cursor-grab scroll-smooth scrollbar-hide"
            onMouseDown={handleMouseDown}
          >
            {PhoneSlider.map((item, index) => (
              <div key={index} className="flex-shrink-0 w-[260px]">
                <p className="text-sm px-4 pb-2 font-bold text-black">{item.step}</p>
                <div
                  className="w-[238px] h-[316px] rounded-3xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.imgsrc.src})`,
                  }}
                >
                  <p
                    className={`p-4 ${
                      index % 2 === 0 ? "text-black" : "text-black"
                    }`} // Alternating text color based on index
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Improved Indicator Section */}
          <div className="flex justify-center mt-4 space-x-2">
            {PhoneSlider.map((_, index) => (
              <button
                key={index}
                onClick={() => navigateToIndex(index)}
                className={`
                  transition-all duration-300 ease-in-out 
                  ${activeIndex === index 
                    ? 'bg-black w-3 h-3 rounded-full' // Wider, animated active state
                    : 'bg-gray-500 hover:bg-gray-300 w-3 h-3 rounded-full'
                  }
                  transform hover:scale-110 // Add hover effect
                  focus:outline-none focus:ring-2 focus:ring-blue-500 // Accessibility improvements
                `}
                aria-label={`Go to ${_?.step || `slide ${index + 1}`}`}
              />
            ))}
          </div>

          <button className="bg-white mt-6 text-white rounded-3xl flex items-center w-full py-2 space-x-3 hover:opacity-90 transition">
                {/* Icon on the left */}
                <Image
                    src={CallIcon} 
                    alt="Phone Icon"
                    className="ml-8"
                    width={24}
                    height={24}
                />
                {/* Button text */}
                <span className="text-lg text-sm font-bold text-black">Download the Taxi App</span>
                {/* Arrow icon on the right */}
                <Image
                    src={ArrowBlack}
                    alt="Arrow Icon"
                    width={24}
                    height={24}
                />
            </button>

        </div>
      </div>
    </div>
  );
};

export default BookingOptions;