"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown, Phone, MessageSquare } from 'lucide-react';
import { gsap } from 'gsap';

import MinibusImage from "./assets/mini-bus.png";
import VanBusImage from "./assets/van-bus.png";
import StandardCarImage from "./assets/standard-car.png";
import TextLogoImage from "./assets/text-logo.png";
import LogoImage from "./assets/logo.png";
import MapImage from "./assets/map.png";
import WhatsAppImage from "./assets/whtasapp.png";

const LandingSection = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('standard');
  
  const vehicles = [
    {
      type: 'Standard',
      capacity: 4,
      pickupTime: 7,
      price: 36,
      image: StandardCarImage
    },
    {
      type: 'Van',
      capacity: 7,
      pickupTime: 12,
      price: 36,
      image: VanBusImage
    },
    {
      type: 'Minibus',
      capacity: 12,
      pickupTime: 12,
      price: 36,
      image: MinibusImage
    }
  ];

  // GSAP animation for elements
  useEffect(() => {
    // Map image animation
    gsap.from("#mapImage", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    
    // Input fields animation
    gsap.from(".input-field", { opacity: 0, y: 20, duration: 1, delay: 1 });

    // Buttons animation
    gsap.from("#ctaButtons", { opacity: 0, y: 30, duration: 1, delay: 1.5 });
    
    // Price book button and WhatsApp button animation
    gsap.from("#priceButton", { opacity: 0, y: 20, duration: 1, delay: 2 });
    gsap.from("#whatsAppButton", { opacity: 0, y: 20, duration: 1, delay: 2.2 });

  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black px-8 py-4 flex justify-between items-center">
        <Image
          src={TextLogoImage}
          alt="Logo"
          className="cursor-pointer w-[130px] h-[30px]"
        />
        <div className="flex items-center gap-4">
          <button className="bg-green-500 text-white px-6 py-2 rounded-md flex items-center gap-2">
            <Phone size={20} />
            Call
          </button>
          <Image
            src={LogoImage}
            alt="Logo"
            width={40}
            height={50}
            className="cursor-pointer " 
          />
        </div>
      </header>

      <main className="px-8 py-6 flex flex-col gap-6">
        <div id="mapImage" className="w-[346px] h-[271px] relative">
          <Image
            src={MapImage}
            alt="Mykonos Map"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter pick-up location"
              className="w-full p-4 border rounded-lg pl-12 input-field"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <div className="w-4 h-4 bg-black rounded-full" />
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Enter destination"
              className="w-full p-4 border rounded-lg pl-12 input-field"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <div className="w-4 h-4 border-2 border-black rounded-sm" />
            </div>
          </div>
        </div>

        <div className="h-[200px] overflow-y-auto relative">
          <motion.div 
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.type}
                className={`p-4 border rounded-lg flex items-center justify-between cursor-pointer ${
                  selectedVehicle === vehicle.type.toLowerCase() ? 'border-black' : 'border-gray-200'
                }`}
                onClick={() => setSelectedVehicle(vehicle.type.toLowerCase())}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.type}
                    width={80}
                    height={48}
                  />
                  <div>
                    <div className="text-gray-500 flex items-center gap-4">
                      <h3 className="font-bold">{vehicle.type}</h3>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4">👤</div>
                        <span>{vehicle.capacity}</span>
                      </div>
                    </div>
                    <div className="text-gray-500 flex items-center gap-2">
                      Pickup <span className="inline-block w-4">&rarr;</span> {vehicle.pickupTime} min
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-sm text-gray-500">From</div>
                    <div className="font-bold text-xl">€{vehicle.price}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1">
            {vehicles.map((_, index) => (
              <div
                key={index}
                className={`w-1 h-1 rounded-full ${
                  index === vehicles.findIndex(v => v.type.toLowerCase() === selectedVehicle)
                    ? 'bg-black'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div id="ctaButtons" className="flex gap-4">
          <button id="priceButton" className="flex-1 bg-black text-white py-4 rounded-lg font-bold">
            See prices & book
          </button>
          <button id="whatsAppButton" className="w-12  bg-green-500 rounded-lg flex items-center justify-center">
            <Image src={WhatsAppImage} alt="WhatsApp" width={34} height={34} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default LandingSection;
