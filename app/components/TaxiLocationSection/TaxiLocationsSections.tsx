"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

import PersonImg from "./assets/person-img.png";
import Star from "./assets/star.png";
import CalenderIcon from "./assets/calender.png";
import TrustPilot from "./assets/trustpilot.png";
import TripAdvisor from "./assets/tripadvisor.png";

// Feedback Data
const feedbacks = [
  {
    img: PersonImg,
    name: "Emily Johnson",
    bgColor: "#B1B0B0",
    stars: 5,
    feedback: "We have used the app several times, We have used the app several times We have used the app several times",
    date: "May 2024",
  },
  {
    img: PersonImg,
    name: "Emily Johnson",
    bgColor: "#7E7E7E",
    stars: 5,
    feedback: "We have used the app several times, We have used the app several times We have used the app several times",
    date: "May 2024",
  },
  {
    img: PersonImg,
    name: "Sophia Brown",
    bgColor: "#D9D9D9",
    stars: 4,
    feedback: "We have used the app several times, We have used the app several times We have used the app several times",
    date: "June 2024",
  },
  {
    img: PersonImg,
    name: "Matt Williams",
    bgColor: "#4DADE1",
    stars: 5,
    feedback: "We have used the app several times, We have used the app several times We have used the app several times",
    date: "July 2024",
  },
];

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const minSwipeDistance = 50;

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("next");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
      setIsAnimating(false);
    }, 300); // Animation duration
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("prev");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length);
      setIsAnimating(false);
    }, 300); // Animation duration
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchEndX.current - touchStartX.current;
    if (Math.abs(swipeDistance) >= minSwipeDistance) {
      if (swipeDistance > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + feedbacks.length) % feedbacks.length;
    return {
      transform: `translateX(${position * 110}%) scale(${position === 0 ? 1 : 0.8})`,
      opacity: position === 0 ? 1 : 0.5,
      zIndex: feedbacks.length - position,
      transition: "all 0.3s ease-in-out",
    };
  };

  return (
    <div
      className="flex flex-col items-center justify-center px-4 mx-8 my-20"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header Section */}
      <div className="text-left">
        <h2
          className="text-4xl font-bold text-transparent bg-clip-text mb-2"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0000FF 0%, #46AFE0 28%, #9898E7 55%, #64429A 83%)",
          }}
        >
          Testimonials
        </h2>
        <p className="text-gray-600 text-left">
          What travellers who booked an airport transfer in Mykonos say about our service
        </p>
      </div>

      {/* Swipeable Testimonials */}
      <div className="relative w-full max-w-4xl h-[400px] flex justify-center items-center">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="absolute p-4 w-[275px] h-[290px] text-center rounded-lg shadow-lg"
            style={{
              ...getCardStyle(index),
              backgroundColor: feedback.bgColor,
            }}
          >
            {/* User Info */}
            <div className="flex items-center justify-left mx-4 mb-2">
              <Image
                src={feedback.img}
                alt={`${feedback.name} profile`}
                width={50}
                height={50}
                className="rounded-full"
              />
              <h3 className="text-lg text-white font-semibold ml-4">{feedback.name}</h3>
            </div>

            {/* Stars */}
            <div className="flex justify-center mt-2 space-x-1">
              {Array.from({ length: feedback.stars }).map((_, starIndex) => (
                <Image
                  key={starIndex}
                  src={Star}
                  alt="Star"
                  width={25}
                  height={25}
                />
              ))}
            </div>

            {/* Feedback */}
            <p className="text-white text-left text-sm mt-6 px-6">{feedback.feedback}</p>

            {/* Date */}
            <div className="flex items-center justify-center mt-4 bg-black text-white px-4 py-2 rounded-full text-xs">
              <Image src={CalenderIcon} alt="Calendar" width={16} height={16} />
              <span className="ml-2">{feedback.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Trustpilot & TripAdvisor Section */}
      <div className="flex flex-col items-center w-full mt-8">
        <div className="flex w-full">
          {/* Trustpilot Section */}
          <div className="flex flex-col items-center w-1/2">
            <div className="h-[100px] flex items-center">
              <Image src={TrustPilot} alt="Trustpilot Logo" width={200} height={100} />
            </div>
            <a href="#" className="px-2 self-start text-blue-500 hover:underline text-sm mb-2 ">
              Go to Trustpilot →
            </a>
          </div>

          {/* TripAdvisor Section */}
          <div className="flex flex-col items-center w-1/2">
            <div className="h-[100px] flex items-center">
              <Image src={TripAdvisor} alt="TripAdvisor Logo Duplicate" width={200} height={100} />
            </div>
            <a href="#" className="text-blue-500 hover:underline text-sm mb-2">
              Go to Tripadvisor →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
