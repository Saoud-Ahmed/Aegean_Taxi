import Image from "next/image";
import TickIcon from "./assets/tick-icon.png"; // Replace with the actual path to your tick icon

export default function Blogs() {
  return (
    <section className="py-10  bg-black">
      {/* Title and Description */}
      <div className="text-white mb-6 mx-8 my-5" >
        <h2 className="text-3xl font-bold text-[#067DF9]">Blog</h2>
        <p className="mt-2 text-lg">
          Read our Mykonos Taxi blog, your ultimate resource for insider tips, local insights, and guides about understanding Taxis in Mykonos.
        </p>
      </div>

                {/* Pinterest-style Grid */}
            <div className="flex flex-col gap-4">
            {/* First row */}
            <div className="flex flex-row overflow-x-auto space-x-4">
                <div className="w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[170px] lg:h-[170px] bg-[#D9D9D9] rounded-r-3xl"></div>
                <div className="w-[170px] h-[110px] sm:w-[180px] sm:h-[120px] md:w-[200px] md:h-[130px] lg:w-[220px] lg:h-[150px] bg-[#D9D9D9] rounded-3xl"></div>
                <div className="w-[120px] h-[110px] sm:w-[130px] sm:h-[120px] md:w-[150px] md:h-[130px] lg:w-[170px] lg:h-[140px] bg-[#D9D9D9] rounded-l-3xl"></div>
            </div>

            {/* Second row */}
            <div className="flex flex-row overflow-x-auto space-x-4">
                <div className="w-[136px] h-[110px] sm:w-[150px] sm:h-[120px] md:w-[170px] md:h-[130px] lg:w-[200px] lg:h-[150px] bg-[#D9D9D9] rounded-r-3xl"></div>
                <div className="w-[170px] h-[110px] sm:w-[180px] sm:h-[120px] md:w-[200px] md:h-[130px] lg:w-[220px] lg:h-[150px] bg-[#D9D9D9] rounded-3xl"></div>
                <div className="w-[90px] h-[110px] sm:w-[100px] sm:h-[120px] md:w-[120px] md:h-[130px] lg:w-[150px] lg:h-[140px] bg-[#D9D9D9] rounded-l-3xl"></div>
            </div>
            </div>



      {/* Features List */}
      <div className="mt-8 space-y-4 mx-8 text-white">
        <div className="flex items-center">
          <Image src={TickIcon} alt="Tick Icon" width={24} height={24} className="mr-2" />
          <p>Written by local Mykonos experts</p>
        </div>
        <div className="flex items-center">
          <Image src={TickIcon} alt="Tick Icon" width={24} height={24} className="mr-2" />
          <p>Fact-checked information</p>
        </div>
        <div className="flex items-center">
          <Image src={TickIcon} alt="Tick Icon" width={24} height={24} className="mr-2" />
          <p>Practical, actionable advice</p>
        </div>
        <div className="flex items-center">
          <Image src={TickIcon} alt="Tick Icon" width={24} height={24} className="mr-2" />
          <p>Updated regularly</p>
        </div>
      </div>

      {/* CTA Button */}
     {/* CTA Button */}
            <div className="flex justify-center mt-6 mb-4">
            <button className="flex justify-center items-center py-3 w-full mx-8 bg-[#067DF9] text-white text-lg font-semibold rounded-2xl hover:bg-gray-800">
                <span className="">Go to Blog</span>
            </button>
            </div>

    </section>
  );
}
