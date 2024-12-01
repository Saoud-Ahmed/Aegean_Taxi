import React from 'react';
import Image from "next/image";

import StandardCar from "./assets/standard-car.png";
import MiniVan from "./assets/mini-bus.png";
import Van from "./assets/van-bus.png";
import PersonIcon from "./assets/personIcon.png";
import BagIcon from "./assets/bagIcon.png";



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
      <div className="w-full h-[400px] overflow-y-scroll scrollbar-visible scrollbar scrollbar-thumb-gray-300 p-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-[#F5F5F7] rounded-3xl shadow-md mb-4 h-[150px]"
          >
            {/* Left Side */}
            <div className="flex flex-col w-[60%]">
              <h2 className="text-lg font-semibold text-blue-900">
                {category.name}
              </h2>
              <p className="text-sm text-gray-600">{category.description}</p>
              <div className="flex items-center text-sm mt-1">
                <div className="flex items-center mr-4">
                  <Image
                    src={PersonIcon} // Replace with an actual icon
                    alt="person"
                    className="w-4 h-4 mr-1"
                  />
                  {category.persons}
                </div>
                <div className="flex items-center">
                  <Image
                    src={BagIcon}// Replace with an actual icon
                    alt="luggage"
                    className="w-4 h-4 mr-1"
                  />
                  {category.luggage}
                </div>
              </div>
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
                className="w-[100px] h-[80px] object-contain"
              />
              <p className="text-sm text-center text-gray-500 ">{category.imgDescription}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-8">
        <button className="bg-blue-700 text-white text-sm font-bold py-2 px-6 rounded-3xl hover:bg-blue-800">
          Book Online →
        </button>
        <button className="bg-gray-800 text-white text-sm font-bold py-3 px-5 rounded-3xl hover:bg-gray-900">
          Download the App ↗
        </button>
      </div>
    </div>
  );
};

export default TaxiCategories;
