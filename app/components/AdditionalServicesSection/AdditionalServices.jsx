"use client";
import Image from "next/image";
import { useRef, useReducer } from "react";
import ChildSeatIcon from "./assets/childseat.png";
import SIMIcon from "./assets/localSIM.png";
import beach from './assets/beach.png';

export default function WhyBookSection() {
  const cards = [
    {
      imgsrc: ChildSeatIcon,
      heading: "Child seats",
      text: "We have the best Mykonos rates. All fares include taxes, fees, and tolls.",
    },
    {
      imgsrc: SIMIcon,
      heading: "Local SIM card",
      text: "Our Mykonos taxi team is available 24/7 to offer a more personalized service.",
    },
    {
      imgsrc: ChildSeatIcon,
      heading: "Child seats",
      text: "We have the best Mykonos rates. All fares include taxes, fees, and tolls.",
    },
    {
      imgsrc: SIMIcon,
      heading: "Local SIM card",
      text: "Our Mykonos taxi team is available 24/7 to offer a more personalized service.",
    },
    {
      imgsrc: ChildSeatIcon,
      heading: "Child seats",
      text: "We have the best Mykonos rates. All fares include taxes, fees, and tolls.",
    },
    {
      imgsrc: SIMIcon,
      heading: "Local SIM card",
      text: "Our Mykonos taxi team is available 24/7 to offer a more personalized service.",
    },
  ];

  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const activeIndexRef = useRef(0);
  const touchStartRef = useRef(null);
  const touchMoveRef = useRef(null);

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const CARD_WIDTH = 215;
  const SWIPE_THRESHOLD = 50;

  const scrollToIndex = (index) => {
    if (!scrollRef.current || !containerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const centerOffset = (containerWidth - CARD_WIDTH) / 2;

    const wrappedIndex = (index + cards.length) % cards.length;
    const scrollPosition = wrappedIndex * CARD_WIDTH - centerOffset;

    scrollRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    const previousIndex = activeIndexRef.current;
    activeIndexRef.current = wrappedIndex;

    const cardElements = Array.from(scrollRef.current.children);
    cardElements.forEach((card, cardIndex) => {
      if (cardIndex === activeIndexRef.current) {
        card.classList.add("opacity-100", "scale-105");
        card.classList.remove("opacity-50", "scale-100");
      } else {
        card.classList.add("opacity-50", "scale-100");
        card.classList.remove("opacity-100", "scale-105");
      }
    });

    if (previousIndex !== activeIndexRef.current) forceUpdate();
  };

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
    touchMoveRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchMoveRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchMoveRef.current) return;

    const diffX = touchStartRef.current - touchMoveRef.current;
    let newIndex = activeIndexRef.current;

    if (Math.abs(diffX) > SWIPE_THRESHOLD) {
      newIndex = diffX > 0 ? newIndex + 1 : newIndex - 1;

      if (newIndex < 0) newIndex = cards.length - 1;
      if (newIndex >= cards.length) newIndex = 0;
    }

    scrollToIndex(newIndex);

    touchStartRef.current = null;
    touchMoveRef.current = null;
  };

  const extendedCards = [
    ...cards,
    cards[0],
    cards[1],
    cards[2],
    cards[3],
    cards[4],
    cards[5],
  ];

  return (

    <section className="flex flex-col">
    <div >
        {/* Heading Section */}
        <div className="w-full mb-12">
          <Image src={beach} alt="Beach Image" />
        </div>
        <div className="px-8">
          <h1 className="text-3xl font-bold leading-[1.1] bg-gradient-to-r from-blue-800 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Additional Services in 
          </h1>
          <h2 className="text-3xl font-bold leading-[1.1] bg-gradient-to-r from-blue-800 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Mykonos Island by our taxis
          </h2>
        </div>

        {/* Description */}
        <p className="text-[#3F3F3F] mx-8 text-lg">
          Remove the stress of additional logistics and hassle when in Mykonos by offering essential services and extras
        </p>
        </div>
      <div ref={containerRef} className="overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden pt-10 pb-10 scroll-smooth no-scrollbar"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {extendedCards.map((card, index) => (
            <article
              key={index}
              className={`relative flex-shrink-0 w-[200px] h-60 ${
                index === 0 ? "ml-4" : ""
              } ${
                index === extendedCards.length - 1 ? "mr-4" : ""
              } transition-transform duration-300 ease-in-out`}
            >
              <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-blue-800 via-blue-500 to-purple-600">
                  <div className="relative rounded-3xl bg-white shadow-lg p-4 pb-7 pl-5">
                    <div className="flex justify-left">
                      <Image
                        src={card.imgsrc}
                        alt={card.heading}
                        width={50}
                        height={50}
                      />
                    </div>
                    <h3 className="text-lg pt-2 font-bold text-left">{card.heading}</h3>
                    <p className="text-sm pt-2 font-light text-left">{card.text}</p>
                  </div>
                </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-2 space-x-4">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out focus:outline-none ${
                activeIndexRef.current === index
                  ? "bg-black"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>

  );
}
