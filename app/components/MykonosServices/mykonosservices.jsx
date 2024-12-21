"use client";
import { useState } from "react";
import Image from "next/image";

import Arrow from "./assets/blue_arrow.png";  
import rightarrow from "./assets/rightarrow.svg"

import mykonoscar from "./assets/mykonoscar.svg"
import mykonoscat from "./assets/mykonoscategories.svg"
import mykonosop from "./assets/mykonosop.svg"

const Service = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  

  const faqs = [
    {
      question: "Mykonos Taxi",
      answer:
        "Choose our fastest pickup option when you need a quick taxi ride in Greece",
    },
    {
      question: "Mykonos Airport Transfers",
      answer:
        "Choose our fastest pickup option when you need a quick taxi ride in Greece",
    },
    {
      question: "Mykonos Port Transfers",
      answer:
        "Choose our fastest pickup option when you need a quick taxi ride in Greece",
    },
    {
      question: "Mykonos Tours",
      answer:
        "Choose our fastest pickup option when you need a quick taxi ride in Greece",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col py-16 px-8 bg-[#F5F5F7]">
      {/* FAQ Section */}
      <div className="pt-6">
        <h2 className="text-2xl font-bold bg-clip-text mb-2 text-[#2B2B6E]">
            Our Services in Mykonos island
        </h2>
        <p className="text-[15px] text-gray-700 mb-4">Operating since 2015, Aegean Taxi offers a comprehensive set of transportation<br></br> services for Mykonos </p>
        <div className="flex mb-1">
            <Image
                src={mykonoscar}
                alt="Toggle FAQ"
                className="w-8 mr-4"
            />    
            <p>100+ Cars</p>      
        </div>
        <div className="flex mb-1">
            <Image
                src={mykonoscat}
                alt="Toggle FAQ"
                className="w-8 h-6 mr-4"
            />    
            <p>4 car categories</p>      
        </div>
        <div className="flex mb-1">
            <Image
                src={mykonosop}
                alt="Toggle FAQ"
                className="w-8 h-6 mr-4"
            />    
            <p>24/7 operations</p>      
        </div>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b mt-4 border-gray-300">
              <button
                className="flex items-center w-full py-4 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-[20px] font-semibold text-gray-800">
                  {faq.question}
                </span>
                <Image
                  src={rightarrow}
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
        
      </div>
    </div>
  );
};

export default Service;
