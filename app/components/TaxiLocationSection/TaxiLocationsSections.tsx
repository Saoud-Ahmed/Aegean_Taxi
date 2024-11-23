"use client";

import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import type { StaticImageData } from "next/image";
import React, { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import { gsap } from 'gsap';

interface ImageData {
  src: StaticImageData;
  location: string;
  id: number;
}

const TaxiInLocationSection = () => {
  const originalCarousel: ImageData[] = [
    { src: img1, location: 'Mykonos', id: 1 },
    { src: img2, location: 'Athens', id: 2 },
    { src: img3, location: 'Santorini', id: 3 }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState<ImageData[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Initialize visible images
    updateVisibleImages(currentIndex);
  }, []);

  const updateVisibleImages = (newIndex: number) => {
    const totalImages = originalCarousel.length;
    let images = [];
    
    // Add current image first
    images.push(originalCarousel[newIndex]);
    
    // Add remaining images in order
    for (let i = 1; i < totalImages; i++) {
      const nextIndex = (newIndex + i) % totalImages;
      images.push(originalCarousel[nextIndex]);
    }
    
    setVisibleImages(images);
  };

  const handleNext = () => {
    const imagesContainer = carouselRef.current;
    const locationText = locationRef.current;
    if (!imagesContainer || !locationText) return;

    const nextIndex = (currentIndex + 1) % originalCarousel.length;

    // Animate the location text
    gsap.to(locationText, {
      y: -20,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(locationText, { y: 20 });
        gsap.to(locationText, {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.inOut"
        });
      }
    });
    
    // Animate the first image out
    const firstImage = imagesContainer.children[0];
    if (firstImage) {
      gsap.to(firstImage, {
        x: -100,
        opacity: 0,
        rotation: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentIndex(nextIndex);
          updateVisibleImages(nextIndex);
        }
      });
    }

    // Animate remaining images to take their new positions
    Array.from(imagesContainer.children).slice(1).forEach((child, i) => {
      gsap.to(child, {
        x: i * -15,
        y: i * 20,
        rotation: i * -3,
        duration: 0.5,
        ease: "power2.inOut"
      });
    });
  };

  const handlePrev = () => {
    const imagesContainer = carouselRef.current;
    const locationText = locationRef.current;
    if (!imagesContainer || !locationText) return;

    const prevIndex = (currentIndex - 1 + originalCarousel.length) % originalCarousel.length;

    // Animate the location text
    gsap.to(locationText, {
      y: 20,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(locationText, { y: -20 });
        gsap.to(locationText, {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.inOut"
        });
      }
    });
    
    // Animate the last image
    const lastImage = imagesContainer.children[imagesContainer.children.length - 1];
    if (lastImage) {
      gsap.to(lastImage, {
        x: 100,
        opacity: 0,
        rotation: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentIndex(prevIndex);
          updateVisibleImages(prevIndex);
        }
      });
    }

    // Animate remaining images to take their new positions
    Array.from(imagesContainer.children).slice(0, -1).forEach((child, i) => {
      gsap.to(child, {
        x: (i + 1) * -15,
        y: (i + 1) * 20,
        rotation: (i + 1) * -3,
        duration: 0.5,
        ease: "power2.inOut"
      });
    });
  };

  useEffect(() => {
    const imagesContainer = carouselRef.current;
    if (!imagesContainer) return;

    // Set initial positions for the stacked images
    Array.from(imagesContainer.children).forEach((child, i) => {
      gsap.set(child, {
        opacity: 1,
        x: i * -15,
        y: i * 20,
        rotation: i * -3,
        zIndex: visibleImages.length - i
      });
    });
  }, [visibleImages]);

  return (
    <section className="h-screen flex flex-col items-center bg-black px-5 py-20">
      <div className="text-center mb-12">
        <h1 className="text-white text-3xl font-semibold font-inter text-center">
          Book a ride online with Aegean Taxi in the following locations
        </h1>
      </div>
      
      <div className="flex items-center justify-between w-full max-w-3xl mb-10">
        <button 
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border-2 border-black bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="relative mr-10 w-[250px] h-[260px] flex flex-col items-center">
          <h1 
            ref={locationRef}
            className="text-white ml-10 text-center text-2xl font-inter mb-4"
          >
            {visibleImages[0]?.location || ''}
          </h1>
          
          <div 
            ref={carouselRef}
            className="relative ml-10 w-[200px] h-[210px]"
          >
            {visibleImages.map((item, index) => (
              <div
                key={item.id}
                className="absolute w-[230px] h-[240px]"
              >
                <Image
                  src={item.src}
                  alt={`Location ${index + 1}`}
                  width={230}
                  height={240}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={handleNext}
          className="w-10 h-10 rounded-full border-2 border-black bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <button className="mt-20 bg-white text-black text-lg font-semibold font-inter px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
        Book Taxi
      </button>
    </section>
  );
};

export default TaxiInLocationSection;