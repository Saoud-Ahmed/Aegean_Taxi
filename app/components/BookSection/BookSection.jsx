"use client"; 
import Image from "next/image"; 
import { useState, useRef, useEffect } from "react"; 
import map from './assets/map2.png'; 
import Arrow from "./assets/blue_arrow.png";  
import NavArrow from "./assets/arrow.svg";
import location from './assets/location.png' 
import img1 from './assets/img1.png'
import CarSVG from './assets/car.svg'; 
import CategorySVG from './assets/cat.svg'; 
import OperationSVG from './assets/sett.svg'; 
 
export default function BookSection() { 
  const cards = new Array(20).fill(null).map((_, index) => ({ 
    imgsrc: index % 2 !== 0 ? img1.src : location.src,
    heading: index % 2 !== 0 ? "Santorini" : "Mykonos", 
    cars: "100+ cars", 
    categories: "4 car categories", 
    operation: "24/7 operations", 
  }));

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Smooth scroll functionality
  const smoothScrollToIndex = (newIndex) => {
    if (scrollRef.current) {
      const cardWidth = 240; // Matches the exact width of each card
      scrollRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth' // This creates a smooth scrolling effect
      });
      setActiveIndex(newIndex);
    }
  };

  // Handle drag functionality for desktop
  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;

    const startX = e.clientX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      if (!scrollRef.current) return;
      const x = e.clientX;
      const walk = (startX - x) * 1.5; // Reduced multiplier for smoother scrolling
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

  // Handle touch functionality for mobile
  const handleTouchStart = (e) => {
    if (!scrollRef.current) return;

    const startX = e.touches[0].clientX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleTouchMove = (e) => {
      if (!scrollRef.current) return;
      const x = e.touches[0].clientX;
      const walk = (startX - x) * 1.5; // Reduced multiplier for smoother scrolling
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

  // Update active index based on scroll position
  const updateActiveIndex = () => {
    if (!scrollRef.current) return;
  
    const cardWidth = 240; // Ensure this matches the exact width of each card
    const scrollPosition = scrollRef.current.scrollLeft;
    const newIndex = Math.round(scrollPosition / cardWidth); // Using Math.round for more accurate index
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

  // Modified click handlers to use smooth scroll
  const handleLeftClick = () => {
    const newIndex = Math.max(activeIndex - 1, 0);
    smoothScrollToIndex(newIndex);
  };

  const handleRightClick = () => {
    const newIndex = Math.min(activeIndex + 1, cards.length - 1);
    smoothScrollToIndex(newIndex);
  };

  return (
    <div className="my-20 flex flex-col bg-white">
      <div className="px-8">
        {/* Heading Section */}
        <div className="text-left pb-4">
          <h1 className="text-[30px] font-bold leading-[1.1] text-[#0000FF]">
            Book a ride online with
          </h1>
          <h1 className="text-[30px] font-bold leading-[1.1] text-[#0000FF]">
            Aegean Taxi in any of
          </h1>
          <h1 className="text-[30px] font-bold leading-[1.1] text-[#0000FF]">
            following 20 locations
          </h1>
        </div>

        {/* Image Section */}
        <div className="flex justify-end">
          <div className="w-full my-4">
            <Image
              src={map}
              alt="Taxi"
              layout="responsive"
              className="object-contain"
            />
          </div>
        </div>
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
              className="relative flex-shrink-0 w-60 h-full ml-6"
            >
              <div className="relative w-full h-full rounded-3xl p-4 pb-7 pl-5">
                <div className="flex justify-left">
                  <Image
                    src={card.imgsrc}
                    alt={card.heading}
                    width={250}
                    height={250}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-lg pt-2 font-bold text-left ml-2">{card.heading}</h3>
                <div className="flex items-center mt-2">
                  <Image
                    src={CarSVG}
                    alt="Cars"
                    width={24}
                    height={24}
                    className="mr-2 text-blue-500"
                  />
                  <p className="text-sm font-light text-left">{card.cars}</p>
                </div>

                <div className="flex items-center mt-2">
                  <Image
                    src={CategorySVG}
                    alt="Categories"
                    width={24}
                    height={24}
                    className="mr-2 text-blue-500"
                  />
                  <p className="text-sm font-light text-left">{card.categories}</p>
                </div>

                <div className="flex items-center mt-2">
                  <Image
                    src={OperationSVG}
                    alt="Operation"
                    width={24}
                    height={24}
                    className="mr-2 text-blue-500"
                  />
                  <p className="text-sm font-light text-left">{card.operation}</p>
                </div>
                <button className="mt-4 px-6 py-2 bg-[#004080] text-white rounded-full">Book Mykonos Taxi</button>
                <div className="flex items-center justify-center mt-4">
                  <a
                    href="#"
                    className="block text-center text-[#004080] underline"
                  >
                    Find us in Mykonos
                  </a>
                  <Image
                    src={Arrow}
                    alt="Find us icon"
                    className="ml-2"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicator Section */}
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={handleLeftClick}
            className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center mr-4"
            aria-label="Previous card"
          >
            <Image src={NavArrow} alt="Left arrow" className="w-4 h-4 rotate-180" />
          </button>
          <div className="flex justify-center mt-2 space-x-2">
            {Array(9).fill().map((_, index) => (
              <div 
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
                  index === (activeIndex % 9)
                    ? 'bg-black w-3 h-3'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleRightClick}
            className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center ml-4"
            aria-label="Next card"
          >
            <Image src={NavArrow} alt="Right arrow" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}