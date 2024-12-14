"use client";
import { useState } from "react";
import Image from "next/image";
import ArrowDown from "./assets/arrow.png";
import ride from "./assets/ride.png";
import Arrow from "./assets/blue_arrow.png";  
import schedule from "./assets/schedule.png";
import easy from "./assets/easy.png";
import arrow from "./assets/Arrow 32.svg";
import bg from './assets/bg.png'

const Service = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      icon: ride,
      description: "Get a ride in minutes",
    },
    {
      icon: schedule,
      description: "Schedule a ride in advance",
    },
    {
      icon: easy,
      description: "With easy, choose an easy way to book",
    },
  ];

  const faqs = [
    {
      question: "Taxi Services",
      answer:
        "Choose our fastest pickup option when you need a quick taxi ride in Greece",
    },
    {
      question: "Airport Transfers",
      answer:
        "Choose our fastest pickup option when you need a quick taxi ride in Greece",
    },
    {
      question: "Port Transfers",
      answer:
        "Choose our fastest pickup option when you need a quick taxi ride in Greece",
    },
    {
      question: "Tours",
      answer:
        "Choose our fastest pickup option when you need a quick taxi ride in Greece",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col my-20 mx-8 bg-[#F5F5F7] rounded-3xl ">
      {/* FAQ Section */}
      <div className="px-4 pt-6 rounded-3xl shadow-md">
        <h2 className="text-3xl font-bold bg-clip-text mb-2 text-[#0000FF]">
          Quality Transport Services wherever you go in Greece
        </h2>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b mt-4 border-gray-300">
              <button
                className="flex justify-between items-center w-full py-4 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-[25px] font-semibold text-gray-800">
                  {faq.question}
                </span>
                <Image
                  src={ArrowDown}
                  alt="Toggle FAQ"
                  className={`w-6 h-5 ml-2 transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="text-[20px] text-black-900 py-2">{faq.answer}</p>
                {/* Display services dynamically */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  {services.map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-2"
                    >
                      <Image
                        src={service.icon}
                        alt="Service Icon"
                        className="w-10 h-10"
                      />
                      <p className="text-[17px] text-gray-700">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center my-4">
                        <a
                            href="#"
                            className="block text-center text-[20px] font-semibold text-[#1760A5]"
                        >
                            Go to Taxi Section
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
        {/* Button */}
        <div className="flex justify-start mt-6 mb-4">
        {/* Button */}
        <div className="pt-5 text-left w-[150px] ">
                  <button className="bg-[#004080] h-[35px]  sm:h-[32px] text-white rounded-3xl flex items-center justify-center w-full px-2 sm:px-4 space-x-2 sm:space-x-3 hover:opacity-90 transition whitespace-nowrap">
                    
                    
                    {/* Button text */}
                    <span className="text-sm sm:text-sm lg:text-base font-bold text-white">
                      About us
                    </span>
                    {/* Arrow icon on the right */}
                    <Image
                      src={arrow}
                      alt="Arrow Front"
                      width={14}
                      height={14}
                      className="w-4 h-4 sm:w-6 sm:h-6"
                    />
                  </button>
                </div>
        </div>
        <div>
        <Image
              src={bg} // Replace with the actual path to your arrow image
              alt="Arrow Icon"
              className=""
            />
        </div>
      </div>
    </div>
  );
};

export default Service;
