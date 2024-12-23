"use client";
import React from "react";
import Image from "next/image";

import safetyimg from "./assets/safety.svg";
import call from "./assets/call.svg";
import mark from "./assets/mark.svg";

const safety = () => {
  return (
    <>
      <div style={{ transform: "translateY(-210px)", zIndex: -100 }}>
        <div className="p-8 pb-4 py-12 pt-28">
          <div className="flex flex-row items-center justify-center space-x-6 mb-8">
            <Image
              src={safetyimg}
              alt="Icon"
              width={14}
              height={14}
              className="w-[30px] h-[30px] sm:w-6 sm:h-6"
            />
            <p className="text-[24px] text-[#2B2B6E]">
              Mykonos health and safety
            </p>
          </div>

          <p className="text-black text-[14px]">
            Mykonos is a safe and welcoming destination, but like any popular
            tourist hotspot, it’s important to take basic precautions to ensure
            a smooth trip. The island experiences a high volume of visitors
            during the summer, so be mindful of crowds, especially in Mykonos
            Town and at popular beaches. Stay hydrated, use sunscreen, and avoid
            excessive alcohol consumption during late-night outings. When
            exploring the narrow, cobblestone streets, wear comfortable shoes to
            prevent slips or falls. It’s also a good idea to secure valuables,
            as pickpocketing can occasionally occur in crowded areas
            <br></br>
            <br></br>
            For medical assistance, Mykonos offers several healthcare facilities
            to address both minor and emergency situations. The Mykonos Medical
            Center, located near Ano Mera, provides general medical services,
            while private clinics such as Mykonos Health in Mykonos Town cater
            to more specific needs, including travel-related illnesses.
            Pharmacies are conveniently located throughout the island and are
            well-stocked with over-the-counter medications. For emergencies,
            dial 112 (the European emergency number), and rest assured that
            ambulance services and medical professionals are readily available
            to assist.
            <br></br>
            <br></br>
            Pharmacies in Mykonos are conveniently located across the island,
            with several in Mykonos Town and others near popular areas such as
            Ano Mera and Ornos. They are well-stocked with essential
            medications, over-the-counter remedies, and first-aid supplies, as
            well as sunscreen and skincare products tailored for the
            Mediterranean climate. Many pharmacies also offer basic medical
            advice and assistance for minor ailments
            <br></br>
            <br></br>
            <span className="text-[#FF0000] text-[16px] font-bold leading-[1.1]">
              In case of an emergency please contact us to assist
            </span>
          </p>
          <div className="flex justify-center">
            <button
              className={` bg-[#FF0000] text-white py-2 my-8 px-6 rounded-3xl flex items-center justify-center space-x-2 sm:space-x-3 hover:opacity-90 transition`}
            >
              {/* Arrow image */}
              {call && (
                <Image
                  src={call}
                  alt="Arrow"
                  width={14}
                  height={14}
                  className="w-6 h-6 sm:w-6 sm:h-6"
                />
              )}
              <span className="text-[14px] sm:text-[14px] lg:text-[14px] font-bold">
                Call +30 215 215 4000
              </span>
            </button>
          </div>
        </div>

        <hr className="border-t border-gray-500 border-[0.5px] mb-12 mx-8" />

        <div className="p-8 pt-4 py-12 mt-4">
          <div className="flex flex-row items-center space-x-4 mb-8">
            <Image
              src={mark}
              alt="Icon"
              width={14}
              height={14}
              className="w-[30px] h-[30px] sm:w-6 sm:h-6"
            />
            <p className="text-[24px] text-[#2B2B6E]">
              Mykonos practical information
            </p>
          </div>

          <p className="text-[14px]">
            When visiting Mykonos, it’s helpful to know some practical
            information to make your trip smoother. The local currency is the
            Euro (€), and ATMs are widely available, although it’s a good idea
            to carry some cash for smaller establishments. Greek is the official
            language, but English is commonly spoken in tourist areas.
            Electrical outlets use the European standard (Type C or F), so bring
            an adapter if needed. The island’s tap water is not recommended for
            drinking, so opt for bottled water. Finally, public Wi-Fi is
            available in many areas, but having a local SIM card or roaming plan
            can be useful for staying connected
            <br></br>
            <br></br>
          </p>
        </div>
      </div>
    </>
  );
};

export default safety;
