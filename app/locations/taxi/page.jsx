import Image from "next/image";
import Head from "next/head";
import "../../styles/style.css"
import HamgurgerIcon from "./assets/hamburgerIcon.svg";
import Logo from "./assets/logo.svg";
import AppleStore from "./assets/apple.svg";
import Call from "./assets/call.svg";
import WhatsApp from "./assets/whatsapp.svg";
import StandardCar from "./assets/standard-car.svg";
import Van from "./assets/van-bus.png";
import MiniVan from "./assets/mini-bus.svg";
import Background from "./assets/background.png";
import PickUpIcon from "./assets/pickupicon.svg";
import DestinationIcon from "./assets/destination-icon.svg";


import WhyBookSection from "../../components/Why_Book_Section/WhyBookSection";
import TaxiCategories from "../../components/TaxiCategoriesSection/TaxiCategories";
import AdditionalServicesSection from "../../components/AdditionalServicesSection/AdditionalServices";
import BookingOptionsSection from "../../components/BookingOptionsSection/BookingOptions";
import FAQsSection from "../../components/FAQsSection/faqs"
import BlogSection from "../../components/BlogSection/blog";
import TicketSection from "../../components/TicketsSection/tickets";
import TestimonialSection from "../../components/TestimonialSection/testimonial";
import DriverSection from "../../components/Driver Section/drivers";
import FindUsSection from "../../components/FindUsSsection/findus";
import Footer from "../../components/Footer/footer";
import Slider from './slider'; 
const cars = [
  {
    name: "Standard",
    imageSrc: StandardCar,
    personCapacity: 4,
    luggage: 3,
    time: "5 min",
    price: "€36",
    description: "Budget friendly rides with our standard taxis",
    carModel: "Mercedes GLA, BMW X1 or similar"
  },
  {
    name: "Van",
    imageSrc: Van,
    personCapacity: 7,
    luggage: 5,
    time: "12 min",
    price: "€45",
    description: "Our more spacious luxury vans for larger groups",
    carModel: "Mercedes V / Vito or similar"
  },
  {
    name: "Mini Bus",
    imageSrc: MiniVan,
    personCapacity: 12,
    luggage: 10,
    time: "18 min",
    price: "€60",
    description: "Perfect for bigger groups or families",
    carModel: "Even more space for groups"
  },
];

const LocationPage = () => {
  return (
    

    <>

    <Head>
        <title>Aegean Taxi - Your Mykonos Taxi App</title>
        <meta name="description" content="Book the fastest, cheapest, and easiest taxi in Mykonos. Choose from standard, van, and mini-bus options with transparent pricing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <html lang="en" />
      </Head>
   
    

    <div className="relative">
     
      {/* Header and Text Section */}
      <div
        className="relative bg-cover bg-center  "
        style={{
          backgroundImage: `url(${Background.src})`,
          height: "50vh",
        }}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-3 py-2">
          <button aria-label="Open Menu">
            <Image
              src={HamgurgerIcon}
              alt="Menu icon"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </button>
          <div>
            <Image
              src={Logo}
              alt="Aegean Taxi Logo"
              width={150}
              height={25}
              className="h-8 ml-2"
            />
          </div>
          <button 
            className="ml-auto h-10 bg-white  py-2 rounded-xl flex items-center border border-black"
            aria-label="Download on App Store"
          >
            <Image 
              src={AppleStore} 
              alt="Download on App Store" 
              className="w-full h-8" 
              width={100} 
              height={32} 
            />
          </button>
        </header>

        {/* Text Section */}
        <div className="mx-4 my-10 text-[#174FCD] car_text_mykonos">
          <h1 className="text-4xl font-bold leading-[1.3] ">Your</h1>
          <h1 className="text-4xl font-bold leading-[1.3]">Mykonos</h1>
          <h1 className="text-4xl font-bold leading-[1.3]">taxi app</h1>
        </div>

        <div className="relative mt-10 overflow-hidden p-[2px] rounded-t-3xl rounded-b-3xl bg-gradient-to-r from-[#49F352] via-blue-500 to-[#3C00FF] mask-image-[linear-gradient(to top, black, transparent),  linear-gradient(to bottom, black, transparent)] mask-repeat-no-repeat mask-size-[100%_20px, 100%_20px] car_overlay">
          <div className="rounded-t-3xl rounded-b-3xl bg-[#F5F5F7]">
            {/* Input Fields Section */}
            <div className="mx-8 pt-6 rounded-xl field_inputs">
              <div className="relative flex flex-col gap-4">
                {/* Pick-Up Input */}
                <div className="relative">
                  <label htmlFor="pickup" className="sr-only">
                    Pick-up location
                  </label>
                  <input
                    id="pickup"
                    type="text"
                    placeholder="Enter pick-up location"
                    className="w-full p-3 border border-black rounded-lg pl-12 car_input"
                    aria-required="true"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Image src={PickUpIcon} alt="Pick-up location icon" width={16} height={16} />
                  </div>
                </div>

                {/* Connecting Line */}
                <div
                  className="absolute left-[23px] top-[35px] h-[60px] w-[2px] bg-black  z-20 rod"
                  aria-hidden="true"
                ></div>

                {/* Destination Input */}
                <div className="relative">
                  <label htmlFor="destination" className="sr-only">
                    Destination
                  </label>
                  <input
                    id="destination"
                    type="text"
                    placeholder="Enter destination"
                    className="w-full p-3 border border-black rounded-lg pl-12 car_input"
                    aria-required="true"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Image src={DestinationIcon} alt="Destination location icon" width={16} height={16} />
                  </div>
                </div>
              </div>
            </div>

            <Slider cars={cars} />


            {/* Buttons Section */}
            <div className="flex flex-row justify-between ">
              <button 
                className="flex flex-col items-center justify-center w-36 h-20 bg-transparent rounded-xl text-black hover:bg-gray-100 call_mykonos"
                aria-label="Call Taxi"
              >
                <Image 
                  src={Call} 
                  alt="Phone icon" 
                  width={46} 
                  height={36} 
                  className="mb-1 car_call" 
                />
                <span className="font-medium text-[10px]">Call</span>
              </button>
              <button 
                className="flex items-center mt-1 justify-center w-80 h-12 bg-[#174FCD] text-white rounded-xl font-bold hover:bg-blue-600 car_seeprices"
                aria-label="See prices and book taxi"
              >
                <span className="text-md">See prices & book</span>
              </button>
              <button 
                className="flex flex-col items-center justify-center w-36 h-20 bg-transparent rounded-xl text-black hover:bg-gray-100 call_mykonos"
                aria-label="Contact via WhatsApp"
              >
                <Image 
                  src={WhatsApp} 
                  alt="WhatsApp contact icon" 
                  width={50} 
                  height={36} 
                  className="mb-1 car_whatsapp" 
                />
                <span className="font-medium text-[10px]">WhatsApp</span>
              </button>
            </div>

             
          </div>
        </div>
        
        <WhyBookSection />
        <TaxiCategories />
        <BookingOptionsSection/>
        <TicketSection />
        <AdditionalServicesSection/>
        <TestimonialSection />
        <FAQsSection />
        <BlogSection />
        <DriverSection />
        <FindUsSection />
        <Footer />
      </div>
    </div>
    </>
  );
};

export default LocationPage;