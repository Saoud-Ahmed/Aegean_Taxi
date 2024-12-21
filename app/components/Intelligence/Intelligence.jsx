"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Import all images

import bgimg from './assets/bgimg.png'
import WhatsApp from "./assets/whats_btn.png";
import Apple from "./assets/app_btn.png";
import chat from './assets/chat.png'
import ai from './assets/ai.png'
import chatgpt from "./assets/chatgpt.svg";
import arrow from "./assets/Arrow 32.svg";
// Sample App section for the slider
const AppSlider = [
  {
    step: "1",
    imgsrc: chat, 
    title: "WhatsApp Bot",
    description: "Our revolutionary whatsapp taxi booking tool is a world first. An intelligent Ai bot capable of understanding all aspects of taxi booking and assigning a ride ",
    titlecolor: "black",
    descriptioncolor: "#000000",
    backgroundColor: "transparent",
    buttonImg: Apple,
    borderColor: '62FF00'
  },
  {
    step: "2",
    imgsrc: chat, 
    title: "WhatsApp Bot",
    description: "Our revolutionary whatsapp taxi booking tool is a world first. An intelligent Ai bot capable of understanding all aspects of taxi booking and assigning a ride ",
    titlecolor: "#000000",
    descriptioncolor: "#000000",
    backgroundColor: "transparent",
    buttonImg: WhatsApp,
    borderColor: '0037FF'
  },
  {
    step: "3",
    imgsrc: chat, 
    title: "WhatsApp Bot",
    description: "Our revolutionary whatsapp taxi booking tool is a world first. An intelligent Ai bot capable of understanding all aspects of taxi booking and assigning a ride ",
    titlecolor: "black",
    descriptioncolor: "#000000",
    backgroundColor: "transparent",
    buttonImg: Apple,
    borderColor: '62FF00'
  },
  {
    step: "4",
    imgsrc: chat, 
    title: "WhatsApp Bot",
    description: "Our revolutionary whatsapp taxi booking tool is a world first. An intelligent Ai bot capable of understanding all aspects of taxi booking and assigning a ride ",
    titlecolor: "#000000",
    descriptioncolor: "#000000",
    backgroundColor: "transparent",
    buttonImg: WhatsApp,
    borderColor: '0037FF'
  },
];

const AppSliderCard = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 350; // Approximate width of each card
  const [isDragging, setIsDragging] = useState(false);

  // Improved scroll and index tracking
  const updateActiveIndex = () => {
    if (!scrollRef.current) return;

    const scrollPosition = scrollRef.current.scrollLeft;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), AppSlider.length - 1));
  };

  // Handle drag functionality for desktop
  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;

    setIsDragging(true);
    const startX = e.clientX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      if (!scrollRef.current || !isDragging) return;
      const x = e.clientX;
      const walk = (startX - x) * 2; // 2 is the scroll speed multiplier
      scrollRef.current.scrollLeft = scrollLeft + walk;
    };

    const handleMouseUp = () => {
      if (!scrollRef.current) return;
      setIsDragging(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      updateActiveIndex();
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Handle touch functionality for mobile
  const handleTouchStart = (e) => {
    if (!scrollRef.current) return;

    setIsDragging(true);
    const startX = e.touches[0].clientX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleTouchMove = (e) => {
      if (!scrollRef.current || !isDragging) return;
      const x = e.touches[0].clientX;
      const walk = (startX - x) * 2; // 2 is the scroll speed multiplier
      scrollRef.current.scrollLeft = scrollLeft + walk;
    };

    const handleTouchEnd = () => {
      if (!scrollRef.current) return;
      setIsDragging(false);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      updateActiveIndex();
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  // Add scroll event listener to update active index
  useEffect(() => {
    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      const handleScroll = () => {
        if (!isDragging) {
          updateActiveIndex();
        }
      };

      currentScrollRef.addEventListener('scroll', handleScroll);
      return () => {
        currentScrollRef.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isDragging]);


  return (
    <div 
      className="relative py-12 "
      style={{
        backgroundImage: `url(${bgimg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Slider Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth scrollbar-hide cursor-grab  p-6 "
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {AppSlider.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[290px] h-[520px] "
          >
            <div
              className="flex flex-col p-5 relative w-full h-full rounded-3xl"
              style={{
                backgroundColor: item.backgroundColor,
              }}
            >
              {/* Step Icon */}
              {/* <div
                className="absolute w-10 h-10 rounded-full bg-[#62FF00] border-[#E1D016] border-2  text-lg text-black font-bold flex items-center justify-center"
                style={{
                  top: "-17px",
                  left: "-13px",
                  backgroundImage: `url(${OnlineIcon.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {item.step}
              </div> */}

              {/* Image */}
              <Image
                src={item.imgsrc}
                alt="App Image"
                className="w-full h-2/3 object-cover rounded-lg"
              />

              {/* Title */}
              <h2
                className="text-xl font-bold font-[50px] font-bold mt-4 ml-4"
                style={{
                  color: item.titlecolor,
                }}
              >
                {item.title}
              </h2>

              {/* Description */}
              <p
                className="text-md ml-4 mt-2"
                style={{
                  color: item.descriptioncolor,
                }}
              >
                {item.description}
              </p>

              {/* Button */}
              <div className="pt-5 text-left w-[150px] ">
                  <button className="bg-[#004080] h-[35px]  sm:h-[32px] text-white rounded-3xl flex items-center justify-center w-full px-2 sm:px-4 space-x-2 sm:space-x-3 hover:opacity-90 transition whitespace-nowrap">
                    
                    
                    {/* Button text */}
                    <span className="text-xs sm:text-sm lg:text-base font-bold text-white">
                      Book Online
                    </span>
                    {/* Arrow icon on the right */}
                    <Image
                      src={arrow}
                      alt="Arrow Front"
                      width={14}
                      height={14}
                      className="w-4 h-4 sm:w-6 sm:h-6"
                    />
                  </button>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Section */}
      <div className="flex justify-center mt-4 space-x-4">
        {/* Indicator Dots */}
        <div className="flex space-x-2">
          {AppSlider.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollLeft = index * cardWidth;
                  setActiveIndex(index);
                }
              }}
              className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out ${
                activeIndex === index 
                  ? 'bg-black scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Intellingence = () => {
  return (
    <div  
    className="pt-10 py-8 m-4 my-16 flex flex-col bg-white rounded-[30px] shadow-[0px_-4px_10px_rgba(0,0,0,0.1)]"
    >
      {/* Heading Section */}
      <div className="text-left  px-4">
  <h1 className="text-[23px] mb-4 font-bold leading-[1.3] bg-clip-text text-[#0D00FF]">
    Aegean Taxi <strong>Intelligence.</strong><br />
    <strong>Powered</strong> by <strong>Ai</strong>.<br />
    Run by Humans.
  </h1>
  <div className="flex items-center mt-4">
    <p className="text-black text-[18px] flex-1 font-bold">
    A number of World #1sts in the Taxi industry. From intelligent Whatsapp Taxi Booking bot to more advanced features designed to optimise.
    </p>
    <img 
      src={ai.src}
      alt="Booking made simple" 
      className="w-1/3 ml-4 rounded-lg -mt-12"
    />
  </div>
   <Image 
      src={chatgpt}
      alt="Booking made simple" 
      className="w-1/3  ml-[65%]"
    />
</div>

   
      <AppSliderCard/>
    </div>
  );
};

export default Intellingence;