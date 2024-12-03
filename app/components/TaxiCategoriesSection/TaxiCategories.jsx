import React from 'react';
import Image from "next/image";

import StandardCar from "./assets/standard-car.png";
import MiniVan from "./assets/mini-bus.png";
import Van from "./assets/van-bus.png";
import PersonIcon from "./assets/personIcon.png";
import BagIcon from "./assets/bagIcon.png";
import OnlineIcon from "./assets/online-icon-removebg-preview.png";
import ArrowFront from "./assets/w-front-arrow.png";
import ArrowDown from "./assets/w-arrow-down.png";



const TaxiCategories = () => {
  const categories = [
    {
      name: 'Standard',
      imageSrc: StandardCar, // Replace with actual image paths
      imgDescription: 'Mercedes GLA, BMW X1 or similar',
      description: 'Budget friendly rides with our standard taxis',
      persons: 4,
      luggage: 3,
      price: 36,
    },
    {
      name: 'Van',
      imageSrc: Van,
      imgDescription: 'Mercedes V / Vito or similar',
      description: 'Our more spacious luxury vans for larger groups',
      persons: 7,
      luggage: 5,
      price: 45,
    },
    {
      name: 'Mini Bus',
      imageSrc: MiniVan,
      imgDescription: 'Even more space for groups',
      description: 'Perfect for bigger groups or families',
      persons: 16,
      luggage: 10,
      price: 80,
    },
  ];

  return (
    <div className="flex flex-col mx-6 my-20  p-4 rounded-lg">
      {/* Heading Section */}
      <div className="text-left pb-4">
        <h1 className="text-3xl font-bold leading-[1.1] bg-gradient-to-r from-blue-800 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Mykonos taxi categories and car types
        </h1>
      </div>

      {/* Description */}
      <p className="text-[#5E5E5E] mb-4">
        Enjoy your Mykonos holiday with one of the 4 categories of vehicles we offer. Contact us for disposal service and hourly rates.
      </p>

      {/* Slider Section */}
      <div className='p-2 pl-0   border border-black rounded-2xl'>
      <div className="w-full h-[400px] overflow-y-scroll scrollbar-visible scrollbar scrollbar-thumb-gray-300 p-4 pt-2 px-4 ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-[#F5F5F7] rounded-3xl shadow-md mb-4 h-[150px] "
          >
            {/* Left Side */}
            <div className="flex flex-col w-[60%]">
            

            <div className="flex justify-between items-center text-sm">
                    <h2 className="text-[15px] font-semibold text-blue-900 ">
                      {category.name}
                    </h2>

                    <div className='flex mx-3 '>
                    <div className="flex items-center mr-1">
                      <Image
                        src={PersonIcon} // Replace with an actual icon
                        alt="person"
                        className="w-3 h-3 mr-1"
                      />
                      {category.persons}
                    </div>
                    <div className="flex items-center">
                      <Image
                        src={BagIcon} // Replace with an actual icon
                        alt="luggage"
                        className="w-3 h-3 mr-1"
                      />
                      {category.luggage}
                    </div>
                    </div>
                  </div>


              <p className="text-sm text-gray-600 mr-1">{category.description}</p>
              
              <p className="text-md text-gray-500 mt-1">
                     <span className="font-light">From </span>
                    <span className="font-bold text-black">€{category.price}</span>
            </p>
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-center  w-[40%]">
              <Image
                src={category.imageSrc}
                alt={category.name}
                className="w-[100px] h-[70px] object-contain"
              />
              <p className="text-sm text-center text-gray-500  leading-[1]">{category.imgDescription}</p>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-6 space-x-1">
      <button className="bg-[#006FE1] mt-6 text-white rounded-3xl flex items-center w-full p-2 space-x-3 hover:opacity-90 transition">
                {/* Icon on the left */}
                <Image
                    src={OnlineIcon} 
                    alt="Online Icon"
                    className=""
                    width={24}
                    height={24}
                />
                {/* Button text */}
                <span className="text-lg text-sm font-bold text-white">Book Online</span>
                {/* Arrow icon on the right */}
                <Image
                    src={ArrowFront}
                    alt="Arrow Front"
                     className=""
                    width={24}
                    height={24}
                />
            </button>
            <button className="bg-[#343434] mt-6 text-white rounded-3xl flex items-center w-full p-2 px-3  space-x-1 hover:opacity-90 transition">
                {/* Button text */}
                <span className="text-lg text-sm font-bold text-white pr-1">Download the App</span>
                {/* Arrow icon on the right */}
                <Image
                    src={ArrowDown}
                    alt="Arrow Down"
                    className='pl-1'
                    width={20}
                    height={20}
                />
            </button>
      </div>
    </div>
  );
};

export default TaxiCategories;
