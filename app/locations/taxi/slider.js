"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import PersonIcon from "./assets/personIcon.svg";
import BagIcon from "./assets/bagIcon.svg";
import ClockIcon from "./assets/clockIcon.png";

const Slider = ({ cars, transitionDuration = "0.3s" }) => {
  const sliderWrapperRef = useRef(null);
  const sliderContentRef = useRef(null);
  const firstSlideRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslateX, setCurrentTranslateX] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [maxTranslateX, setMaxTranslateX] = useState(0);

  useEffect(() => {
    if (firstSlideRef.current && sliderWrapperRef.current && sliderContentRef.current) {
      const slideWidth = firstSlideRef.current.offsetWidth;
      setSlideWidth(slideWidth);
      setMaxTranslateX(-(sliderContentRef.current.scrollWidth - sliderWrapperRef.current.clientWidth));
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (firstSlideRef.current && sliderWrapperRef.current && sliderContentRef.current) {
        const slideWidth = firstSlideRef.current.offsetWidth;
        setSlideWidth(slideWidth);
        setMaxTranslateX(-(sliderContentRef.current.scrollWidth - sliderWrapperRef.current.clientWidth));
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDragStart = (e) => {
    const startClientX = e.touches ? e.touches[0].clientX : e.clientX;
    setStartX(startClientX);
    setIsDragging(true);
    setCurrentTranslateX(parseFloat(sliderContentRef.current.style.transform.replace("translateX(", "").replace("px)", "")) || 0);
  };

  const handleDrag = (e) => {
    if (!isDragging) return;
    const currentClientX = e.touches ? e.touches[0].clientX : e.clientX;
    const delta = currentClientX - startX;
    let newTranslateX = currentTranslateX + delta;
    newTranslateX = Math.max(Math.min(newTranslateX, 0), maxTranslateX);
    sliderContentRef.current.style.transform = `translateX(${newTranslateX}px)`;
    e.preventDefault();
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    const endClientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const delta = endClientX - startX;
    const finalTranslate = currentTranslateX + delta;
    const slideIndex = Math.round(-finalTranslate / slideWidth);
    let nearestTranslate = -slideIndex * slideWidth;
    nearestTranslate = Math.max(Math.min(nearestTranslate, 0), maxTranslateX);
    sliderContentRef.current.style.transition = `transform ${transitionDuration}`;
    sliderContentRef.current.style.transform = `translateX(${nearestTranslate}px)`;
  };

  return (
    <div ref={sliderWrapperRef} className="relative overflow-hidden ml-8 mt-2">
      <div
        ref={sliderContentRef}
        className="flex gap-4"
        style={{ transform: "translateX(0px)" }}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseMove={handleDrag}
        onTouchMove={handleDrag}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchEnd={handleDragEnd}
      >
        {cars.map((car, index) => (
          <div
            key={index}
            ref={index === 0 ? firstSlideRef : null}
            className="relative flex-shrink-0 w-[35%] h-60 car_height"
          >
            <div className="relative mt-8 border border-black border-[1px] rounded-3xl bg-[#E2E6E9] shadow-lg p-4 z-0 car_card">
              <div className="absolute w-full -top-5 left-0 flex justify-center">
                <Image
                  src={car.imageSrc}
                  alt={`${car.name} taxi`}
                  width={100}
                  height={70}
                  objectFit="cover"
                  priority
                  className="car_images"
                />
              </div>
              <h2 className="text-lg pt-8 font-bold text-left car_name">{car.name}</h2>
              <div className="text-sm text-gray-600">
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-1">
                    <Image
                      src={PersonIcon}
                      alt="Passenger capacity"
                      width={10}
                      height={10}
                    />
                    <span>{car.personCapacity}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src={BagIcon}
                      alt="Luggage capacity"
                      width={10}
                      height={10}
                    />
                    <span>{car.luggage}</span>
                  </div>
                </div>
                <div className="flex items-center justify-left gap-2 mt-1">
                  <Image
                    src={ClockIcon}
                    alt="Estimated pickup time"
                    width={10}
                    height={10}
                  />
                  <span>{car.time}</span>
                </div>
              </div>
              <div className="flex items-center justify-left gap-2 mt-1">
                <span className="font-light text-sm">from</span>
                <p className="font-bold text-lg text-left">{car.price}</p>
              </div>
            </div>
          </div>
        ))}
        {/* Spacer for margin at the end */}
        <div className="w-[3%] flex-shrink-0"></div>
      </div>
    </div>
  );
};

export default Slider;