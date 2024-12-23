"use client";
import React from "react";
import Image from "next/image";

import mark from "./assets/exclaimation.svg";
import park from "./assets/park.svg";

const practicalInfo = () => {
  return (
    <>
      <div>
        <div className="flex flex-col mx-8 pt-4 pb-8">
          <div className="flex flex-row items-center mb-4">
            <Image
              src={mark}
              alt="icon"
              width={50}
              height={50}
              className="w-[50px] h-[50px]"
            />
            <h1 className="text-[24px] ml-1 font-bold">
              Mykonos Airport (JMK) practical information
            </h1>
          </div>

          <div className="flex flex-col  mx-6 mb-12">
            <p className="mb-4">
              Terminal Operating Hours (31/03 until 30/04):07:00 – 22:30
              Terminal Operating Hours (01/05 until 26/10): 24/7
            </p>
            <p className="mb-4">
              Exceptions <br /> Fri 05/04 05:30 – 22:30 <br /> Fri 12/04 05:30 –
              22:30 <br />
              Fri 19/04 05:30 – 22:30 <br />
              Fri 26/04 05:30 – 23:45 <br />
              Sun 28/04 07:00 – 23:30 <br />
              Tue 30/04 07:00 – 23:59
            </p>
            <p className="mb-4">
              When visiting Mykonos, it’s helpful to know some practical
              information to make your trip smoother. The local currency is the
              Euro (€), and ATMs are widely available, although it’s a good idea
              to carry some cash for smaller establishments. Greek is the
              official language, but English is commonly spoken in tourist
              areas. Electrical outlets use the European standard (Type C or F),
              so bring an adapter if needed. The island’s tap water is not
              recommended for drinking, so opt for bottled water. Finally,
              public Wi-Fi is available in many areas, but having a local SIM
              card or roaming plan can be useful for staying connected
            </p>
          </div>

          <div className="flex flex-row items-center mt-4 mb-4">
            <Image
              src={park}
              alt="icon"
              width={50}
              height={50}
              className="w-[50px] h-[50px]"
            />
            <h1 className="text-[24px] ml-4 font-bold">
              Mykonos Airport (JMK) parking
            </h1>
          </div>

          <p className="mt-8">
            Mykonos Airport offers imited public parking spaces available for
            short stays free of charge. These are opposite the terminal at
            departure’s area.
            <br />
            <br />
            The airport also has paid parking for a fee.
          </p>
        </div>
      </div>
    </>
  );
};

export default practicalInfo;
