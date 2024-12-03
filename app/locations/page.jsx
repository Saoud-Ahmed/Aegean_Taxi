import Image from "next/image";
import HamgurgerIcon from "./assets/hambugerIcon.png";
import Logo from "./assets/logo.png";
import AppleStore from "./assets/apple.png";
import Call from "./assets/call.png";
import WhatsApp from "./assets/whatsapp.png";
import StandardCar from "./assets/standard-car.png";
import Van from "./assets/van-bus.png";
import MiniVan from "./assets/mini-bus.png";
import Background from "./assets/background.png";
import PickUpIcon from "./assets/pickup.png";
import DestinationIcon from "./assets/destination.png";
import PersonIcon from "./assets/personIcon.png";
import BagIcon from "./assets/bagIcon.png";
import ClockIcon from "./assets/clockIcon.png";



import WhyBookSection from "../components/Why_Book_Section/WhyBookSection";
import TaxiCategories from "../components/TaxiCategoriesSection/TaxiCategories";
import AdditionalServicesSection from "../components/AdditionalServicesSection/AdditionalServices";
import BookingOptionsSection from "../components/BookingOptionsSection/BookingOptions";
import FAQsSection from "../components/FAQsSection/faqs"
import BlogSection from "../components/BlogSection/blog";
import TicketSection from "../components/TicketsSection/tickets";

const cars = [
  {
    name: "Standard",
    imageSrc: StandardCar,
    personCapacity: 4,
    luggage: 3,
    time: "5 min",
    price: "€36",
  },
  {
    name: "Van",
    imageSrc: Van,
    personCapacity: 7,
    luggage: 5,
    time: "12 min",
    price: "€45",
  },
  {
    name: "Mini Bus",
    imageSrc: MiniVan,
    personCapacity: 12,
    luggage: 10,
    time: "18 min",
    price: "€60",
  },
];

const LocationPage = () => {
  return (
    <div className="relative">
      {/* Header and Text Section */}
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${Background.src})`,
          height: "367px",
        }}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-3 py-2">
          <button>
            <Image
              src={HamgurgerIcon}
              alt="Menu"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </button>
          <div>
            <Image
              src={Logo}
              alt="Aegean Taxi"
              width={150}
              height={25}
              className="h-8 ml-2"
            />
          </div>
          <button className="ml-6 h-10 bg-white px-4 py-2 rounded-xl flex items-center border border-black">
            <Image src={AppleStore} alt="App Store" className="w-full h-8" />
          </button>
        </header>

        {/* Text Section */}
        <div className="mx-4 my-10 text-[#174FCD]">
          <h1 className="text-4xl font-bold leading-[1.3]">Your</h1>
          <h1 className="text-4xl font-bold leading-[1.3]">Mykonos</h1>
          <h1 className="text-4xl font-bold leading-[1.3]">taxi app</h1>
        </div>
      

 {/* Parent div  Section */}
 <div className="rounded-t-3xl mt-20 rounded-b-3xl bg-[#F5F5F7]">
                  {/* Input Fields Section */}
                  <div className=" border-gray-300 mx-8 pt-6 rounded-xl">
                    <div className="flex flex-col gap-4">
                      {/* Pick-Up Input */}
                      <div className="relative">
                        <label htmlFor="pickup" className="sr-only">
                          Pick-up location
                        </label>
                        <input
                          id="pickup"
                          type="text"
                          placeholder="Enter pick-up location"
                          className="w-full p-4 border border-black rounded-lg pl-12"
                        />
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                          <Image src={PickUpIcon} alt="Location Icon" width={16} height={16} />
                        </div>
                      </div>

                      {/* Destination Input */}
                      <div className="relative ">
                        <label htmlFor="destination" className="sr-only">
                          Destination
                        </label>
                        <input
                          id="destination"
                          type="text"
                          placeholder="Enter destination"
                          className="w-full p-4 border border-black rounded-lg pl-12"
                        />
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                          <Image src={DestinationIcon} alt="Destination Icon" width={16} height={16} />
                        </div>
                      </div>
                    </div>
                  </div>

                      {/* Slider Section */}
                  <div className="flex mx-8 gap-4 overflow-x-auto mt-0 w-full">
                    {cars.map((car, index) => (
                      <div
                        key={index}
                        className="relative flex-shrink-0 w-40 h-60"
                      >
                      


                        {/* Smaller Div for Card Content */}
                        <div className="relative mt-8 border border-black rounded-3xl bg-[#E2E6E9] shadow-lg p-4 pl-10 z-0">
                        <div className="absolute w-full -top-5 left-6 lex justify-center">
                          <Image src={car.imageSrc} alt={car.name} width={120} height={70} />
                        </div>
                          <h3 className="text-lg pt-8  font-bold text-left">{car.name}</h3>

                          <div className="text-sm text-gray-600">
                            <div className="flex items-center  gap-5">
                              <div className="flex items-center gap-1">
                                <Image src={PersonIcon} alt="Person Icon" width={20} height={16} />
                                <span>{car.personCapacity} </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Image src={BagIcon} alt="Bag Icon" width={16} height={16} />
                                <span>{car.luggage} </span>
                              </div>
                            </div>

                            <div className="flex items-center justify-left gap-2 mt-1">
                              <Image src={ClockIcon} alt="Clock Icon" width={22} height={16} />
                              <span>{car.time}</span>
                            </div>
                          </div>


                          <div className="flex items-center justify-left gap-2 mt-1">
                          <span className="font-light text-sm ">from</span> 
                          <p className="font-bold text-lg  text-left"> {car.price}</p>  
                          </div>
                          
                      </div>
                      </div>
                    ))}
                  </div>


                  



                  {/* Buttons Section */}
                  <div className="flex flex-row justify-between mt-2 ">
                    <button className="flex flex-col items-center justify-center w-36 h-20 bg-transparent rounded-xl text-black hover:bg-gray-100">
                      <Image src={Call} alt="Phone" width={46} height={36} className="mb-1" />
                      <span className="font-medium text-[10px]">Call</span>
                    </button>
                    <button className="flex items-center mt-1 justify-center w-80 h-12 bg-[#174FCD] text-white rounded-xl font-bold hover:bg-blue-600">
                      <span className="text-md">See prices & book</span>
                    </button>
                    <button className="flex flex-col items-center justify-center w-36 h-20 bg-transparent rounded-xl text-black hover:bg-gray-100">
                      <Image src={WhatsApp} alt="WhatsApp" width={50} height={36} className="mb-1" />
                      <span className="font-medium text-[10px]">WhatsApp</span>
                    </button>
                  </div>

                    {/* Text Section */}
                    <div className=" text-[#696C74] text-center pb-4">
                      <h1 className="text-2xl font-bold leading-[1.1]">The fastest, cheapest</h1>
                      <h1 className="text-2xl font-bold leading-[1.1]">and easiest way to book</h1>
                      <h1 className="text-2xl font-bold leading-[1.1]">your taxi in Mykonos</h1>
                    </div>    
            </div>
            
            <WhyBookSection />
            <TaxiCategories />
            <AdditionalServicesSection/>
            <BookingOptionsSection/>
            <FAQsSection />
            <BlogSection />
            <TicketSection />
            <p>vvh</p>
        </div>
    </div>
  );
};

export default LocationPage;
