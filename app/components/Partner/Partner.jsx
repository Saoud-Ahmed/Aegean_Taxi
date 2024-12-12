"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import NavArrow from "./assets/arrow.svg";
import hotel from './assets/hotel.png'
import plane from './assets/plane.png'

export default function Partner() {
    const cards = new Array(10).fill(null).map((_, index) => ({
      imgsrc: index % 2 !== 0 ? hotel.src : plane.src,
      heading: index % 2 !== 0 ? "Hotels" : "Airlines",
      cars: "100+ cars",
      categories: "4 car categories",
      operation: "24/7 operations",
    }));
  
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handleMouseDown = (e) => {
      if (!scrollRef.current) return;
  
      const startX = e.clientX;
      const scrollLeft = scrollRef.current.scrollLeft;
  
      const handleMouseMove = (e) => {
        if (!scrollRef.current) return;
        const x = e.clientX;
        const walk = (startX - x) * 2; // 2 is the scroll speed multiplier
        scrollRef.current.scrollLeft = scrollLeft + walk;
      };
  
      const handleMouseUp = () => {
        if (!scrollRef.current) return;
        scrollRef.current.removeEventListener("mousemove", handleMouseMove);
        scrollRef.current.removeEventListener("mouseup", handleMouseUp);
        updateActiveIndex();
      };
  
      scrollRef.current.addEventListener("mousemove", handleMouseMove);
      scrollRef.current.addEventListener("mouseup", handleMouseUp);
    };
  
    const handleTouchStart = (e) => {
      if (!scrollRef.current) return;
  
      const startX = e.touches[0].clientX;
      const scrollLeft = scrollRef.current.scrollLeft;
  
      const handleTouchMove = (e) => {
        if (!scrollRef.current) return;
        const x = e.touches[0].clientX;
        const walk = (startX - x) * 2; // 2 is the scroll speed multiplier
        scrollRef.current.scrollLeft = scrollLeft + walk;
      };
  
      const handleTouchEnd = () => {
        if (!scrollRef.current) return;
        scrollRef.current.removeEventListener("touchmove", handleTouchMove);
        scrollRef.current.removeEventListener("touchend", handleTouchEnd);
        updateActiveIndex();
      };
  
      scrollRef.current.addEventListener("touchmove", handleTouchMove);
      scrollRef.current.addEventListener("touchend", handleTouchEnd);
    };
  
    const updateActiveIndex = () => {
      if (!scrollRef.current) return;
  
      const cardWidth = 240;
      const scrollPosition = scrollRef.current.scrollLeft;
      const newIndex = Math.floor(scrollPosition / cardWidth);
      setActiveIndex(Math.min(Math.max(newIndex, 0), cards.length - 1));
    };
  
    useEffect(() => {
      const currentScrollRef = scrollRef.current;
      if (currentScrollRef) {
        const handleScroll = () => {
          updateActiveIndex();
        };
  
        currentScrollRef.addEventListener('scroll', handleScroll);
        return () => {
          currentScrollRef.removeEventListener('scroll', handleScroll);
        };
      }
    }, []);
  
    const handleLeftClick = () => {
      if (scrollRef.current) {
        const newIndex = Math.max(activeIndex - 1, 0);
        scrollRef.current.scrollLeft = newIndex * 240;
        setActiveIndex(newIndex);
      }
    };
  
    const handleRightClick = () => {
      if (scrollRef.current) {
        const newIndex = Math.min(activeIndex + 1, cards.length - 1);
        scrollRef.current.scrollLeft = newIndex * 240;
        setActiveIndex(newIndex);
      }
    };


    const Slider = () => {
      const titles = ["Airlines", "Hotels", "Travel Agents", "Airlines", "Hotels"]; // Array of titles
      const sliderRef = useRef(null);
      const [isDragging, setIsDragging] = useState(false);
      const [startX, setStartX] = useState(0);
      const [scrollLeft, setScrollLeft] = useState(0);
      const [activeIndex, setActiveIndex] = useState(0); // Active title index
    
      const handlePointerDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX || e.touches[0].clientX); // For mouse or touch
        setScrollLeft(sliderRef.current.scrollLeft);
      };
    
      const handlePointerMove = (e) => {
        if (!isDragging) return;
    
        const x = e.clientX || e.touches[0].clientX;
        const walk = (startX - x) * 1.5; // Scroll amount (adjust sensitivity)
        sliderRef.current.scrollLeft = scrollLeft + walk;
      };
    
      const handlePointerUpOrLeave = () => {
        setIsDragging(false);
      };
    
      const handleTitleClick = (index) => {
        setActiveIndex(index); // Update active index
      };
    
      const scrollRight = () => {
        sliderRef.current.scrollLeft += 150; // Adjust the scroll distance as needed
      };
    
      return (
        <div className="bg-gray-100 rounded-full p-2 shadow-md">
          <div className="flex items-center justify-between">
            
            {/* Slider */}
            <div
              ref={sliderRef}
              className="flex items-center gap-4 overflow-hidden scrollbar-hide w-full cursor-grab"
              onMouseDown={handlePointerDown}
              onMouseMove={handlePointerMove}
              onMouseUp={handlePointerUpOrLeave}
              onMouseLeave={handlePointerUpOrLeave}
              onTouchStart={handlePointerDown}
              onTouchMove={handlePointerMove}
              onTouchEnd={handlePointerUpOrLeave}
            >
              {titles.map((title, index) => (
                <button
                  key={index}
                  onClick={() => handleTitleClick(index)} // Set active on click
                  className={`whitespace-nowrap px-4 py-2 rounded-full font-medium ${
                    activeIndex === index
                      ? "bg-[#004080]  text-white" // Active style with blurred bg
                      : "text-black hover:text-black"
                  }`}
                >
                  {title}
                </button>
              ))}
            </div>
    
            {/* Right Arrow Button */}
            <button
              className="px-4 py-2 bg-transparent rounded-full cursor-pointer"
              onClick={scrollRight} // Scroll right
            >
             <Image
                      src={NavArrow}
                      alt="Right arrow "
                      className="rounded-lg"
                    />
            </button>
          </div>
        </div>
      );
    };
    

    
    

    
    
    
    
    
    
  
    return (
      <div className="my-20 flex flex-col bg-white">
        <div className="px-8">
          <div className="text-center pb-4">
            <h1 className="text-3xl text-left font-bold leading-[1.1] text-[#0000FF]">
              Partner with us
            </h1>
          </div>
          <div>
            <p>
              Learn how you can partner with us to expand your business and earn extra revenue. Aegean Taxi partners with a broad range of businesses and offers custom solutions.
            </p>
          </div>
          <div className="my-8">
            <p className="text-[20px] font-bold">Who can partner with us</p>
          </div>
          <Slider/>
        </div>
       
        <div className="my-4">
          <div
            ref={scrollRef}
            className="flex gap-4 mb-4 overflow-x-auto mt-0 cursor-grab scroll-smooth scrollbar-hide"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-60 h-[350px] ml-6 border border-black rounded-3xl"
              >
                <div className="relative w-full h-full rounded-3xl p-4 pb-12 pl-5 flex flex-col justify-center items-center overflow-y-hidden">
                  <div className="flex justify-center">
                    <Image
                      src={card.imgsrc}
                      alt={card.heading}
                      width={200}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center text-center">
                    <h3 className="text-lg pt-2 font-bold">{card.heading}</h3>
                    <p className="text-sm px-4">We integrate with major airlines and offer a range of products like checking-out taxi booking integrations</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <div className="flex justify-end items-center mt-8 pr-8">
  <button
    onClick={handleLeftClick}
    className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center mr-4"
    aria-label="Previous card"
  >
    <Image src={NavArrow} alt="Left arrow" className="w-4 h-4 rotate-180" />
  </button>
  
  {/* Card Index Display */}
  <div className="text-lg font-bold text-gray-600">
    {activeIndex + 1}/{cards.length}
  </div>
  
  <button
    onClick={handleRightClick}
    className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center ml-4"
    aria-label="Next card"
  >
    <Image src={NavArrow} alt="Right arrow" className="w-4 h-4" />
  </button>
</div>
        <div className="flex justify-start mt-6 ml-4">
        <button className="flex justify-center items-center px-6 py-2 bg-[#004080] text-white text-lg font-semibold rounded-3xl hover:bg-gray-800">
            <span className="mr-2">Find out more about us</span>
        </button>
        </div>
        </div>
      </div>
    );
  }
  