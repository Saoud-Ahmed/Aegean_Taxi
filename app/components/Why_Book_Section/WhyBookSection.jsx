"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import TaxiImage from "./assets/img2.png";
import IconImg from "./assets/icon_img.png";
import Arrow from "./assets/blue_arrow.png"; 
import FrontArrow from "./assets/w-front-arrow.png"; 


export default function WhyBookSection() {
  const cards = [
    {
      imgsrc: IconImg,
      heading: "Low price guarantee",
      text: "We have the best mykonos rates. All fares include taxes fees and tolls.",
    },
    {
      imgsrc: IconImg,
      heading: "24/7 customer support",
      text: "Our Mykonos taxi team is available 24/7 to offer a more personalised service.",
    },
    {
      imgsrc: IconImg,
      heading: "Low price guarantee",
      text: "Our Mykonos taxi team is available 24/7 to offer a more personalised service.",
    },
    {
      imgsrc: IconImg,
      heading: "24/7 customer support",
      text: "Our Mykonos taxi team is available 24/7 to offer a more personalised service.",
    },
    {
      imgsrc: IconImg,
      heading: "Low price guarantee",
      text: "Our Mykonos taxi team is available 24/7 to offer a more personalised service.",
    },
    {
      imgsrc: IconImg,
      heading: "24/7 customer support",
      text: "Our Mykonos taxi team is available 24/7 to offer a more personalised service.",
    },
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle drag functionality for desktop
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
      // Calculate and update active index
      updateActiveIndex();
    };

    scrollRef.current.addEventListener("mousemove", handleMouseMove);
    scrollRef.current.addEventListener("mouseup", handleMouseUp);
  };

  // Handle touch functionality for mobile
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
      // Calculate and update active index
      updateActiveIndex();
    };

    scrollRef.current.addEventListener("touchmove", handleTouchMove);
    scrollRef.current.addEventListener("touchend", handleTouchEnd);
  };

  // Update active index based on scroll position
  const updateActiveIndex = () => {
    if (!scrollRef.current) return;

    const cardWidth = 240; // Approximate width of each card (w-60 is 240px)
    const scrollPosition = scrollRef.current.scrollLeft;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(Math.min(Math.max(newIndex, 0), cards.length - 1));
  };

  // Add scroll event listener to update active index
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

  return (
    <div className=" my-20 flex flex-col bg-white">
      <div className="px-8">
        {/* Heading Section */}
        <div className="text-left pb-4">
          <h1 className="text-3xl font-bold leading-[1.1] bg-gradient-to-r from-blue-800 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Why book your
          </h1>
          <h1 className="text-3xl font-bold leading-[1.1] bg-gradient-to-r from-blue-800 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Mykonos taxi with
          </h1>
          <h1 className="text-3xl font-bold leading-[1.1] bg-gradient-to-r from-blue-800 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Aegean Taxi
          </h1>
        </div>

        {/* Image Section */}
        <div className="flex justify-end">
          <div className="w-3/5">
            <Image
              src={TaxiImage}
              alt="Taxi"
              layout="responsive"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="mt-10">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto mt-0 cursor-grab scroll-smooth scrollbar-hide "
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-60 h-60 ml-6"
            >
              <div className="relative border border-black w-50 rounded-3xl bg-[#F5F5F7] shadow-lg p-4 pb-7 pl-5">
                <div className="flex justify-left">
                  <Image
                    src={card.imgsrc}
                    alt={card.heading}
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="text-lg pt-2 font-bold text-left">{card.heading}</h3>
                <h3 className="text-sm pt-2 font-light text-left">{card.text}</h3>    
              </div>
            </div>
          ))}
        </div>

        {/* Indicator Section */}
        <div className="flex justify-center mt-2 space-x-2">
          {cards.map((_, index) => (
            <div 
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
                activeIndex === index 
                  ? 'bg-black w-3 h-3' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>


                      {/* Links Section */}
              <div className="mt-10 flex flex-col items-center">
              <div className="flex justify-center mt-10">
                  <button className="flex items-center gap-4 px-10 py-3 text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-3xl">
                    {/* Button Text */}
                    Find out more about Mykonos
                    
                    {/* Image */}
                    <Image
                      src={FrontArrow} 
                      alt="Front Arrow Icon"
                      width={20} // Adjust the width as needed
                      height={20} // Adjust the height as needed
                      className="object-contain"
                    />
                  </button>
                </div>



                {/* Secondary Link with Icon */}
                <div className="flex items-center justify-center mt-4">
                  <a
                    href="#"
                    className="block text-center text-blue-500 underline"
                  >
                    Find us in Mykonos
                  </a>
                  <Image
                    src={Arrow} // Replace with your actual image path
                    alt="Find us icon"
                    className="ml-2"
                    width={20} // Adjust size as needed
                    height={20} // Adjust size as needed
                  />
                </div>
              </div>



      </div>
    </div>
  );
}