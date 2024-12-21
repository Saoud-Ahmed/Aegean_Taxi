import Image from "next/image";
import Head from "next/head";
import "./style.css";
// Import all assets
import HamgurgerIcon from "./assets/hamburgerIcon.svg";
import Logo from "./assets/logo.svg";
import AppleStore from "./assets/apple.svg";
import Call from "./assets/call.svg";
import WhatsApp from "./assets/whatsapp.svg";
import Background from "./assets/back.png";
import PickUpIcon from "./assets/pickupicon.png";
import DestinationIcon from "./assets/destination-icon.png";
import mapline from './assets/mapline1.png'

// Import all sections
import FAQsSection from "../components/FAQsSection/faqs"
import BlogSection from "../components/BlogSection/blog";
import Footer from "../components/Footer/footer";
import TaxiCat from '../components/TaxiCat/TaxiCat'
import BookSection from '../components/BookSection/BookSection'
import BookingOp from "../components/BookingOp/BookingOp";
import Intelligence from "../components/Intelligence/Intelligence"
import Service from '../components/Service/Service'
import Number from '../components/Numbers/Number'
import WhyBook from '../components/WhyBook/WhyBook'
import Partner from '../components/Partner/Partner'
import GradientTestimonial from "../components/GradTestimonial/testimonial";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Aegean Taxi - Your Mykonos Taxi App</title>
        <meta name="description" content="Book the fastest, cheapest, and easiest taxi in Mykonos. Choose from standard, van, and mini-bus options with transparent pricing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="relative w-full overflow-x-hidden"> {/* Added overflow-x-hidden */}
        {/* Hero Section - Full Screen */}
        <div 
          className="relative bg-cover bg-center min-h-screen w-full flex flex-col overflow-hidden" 
          style={{
            backgroundImage: `url(${Background.src})`,
          }}
        >
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <Image
              src={mapline}
              alt=""
              aria-hidden="true"
              className="absolute w-[75px] h-[50px] transform right-0 top-[180px]"
              style={{
                rotate: "60deg",
                maxWidth: "100%", // Added maxWidth
              }}
            />
          </div>

          {/* Header */}
          <header className="flex items-center justify-between px-4 py-4 w-full">
            <button 
              aria-label="Menu"
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
            >
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
            
            <button 
              className="ml-auto h-10 bg-black border-1 border-white  py-2 rounded-xl flex items-center border border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Download on App Store"
            >
              <Image 
                src={AppleStore} 
                alt="App Store" 
                className="w-full h-8" 
                width={100} 
                height={32} 
              />
            </button>
          </header>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#004080] px-6 mt-6">
              Ride with<br />
              Aegean Taxi 
            </h1>
          {/* Text Section */}
          <div className="flex-grow flex flex-col justify-center px-6 relative bottom-10">
            <p className="text-2xl md:text-2xl font-bold text-[rgba(0,64,128,1)] max-w-xs mt-4 w-[50%]" >
              The best taxi <br></br> app for the <br></br> Greek islands
            </p>
          </div>

          {/* Booking Section */}
          <div className="relative w-full mt-auto overflow-hidden p-[2px] rounded-t-3xl shadow-xl bg-black max-w-full">
            <div className="rounded-t-3xl bg-[#F5F5F7] px-4 pt-4 w-full">
              {/* Booking Form */}
              <div className="w-full">
                <p className="text-lg mb-4 font-semibold text-[#001A61]">
                  Book a taxi ride in seconds
                </p>
                
                <form className="space-y-4">
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
                      aria-required="true"
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Image 
                        src={PickUpIcon} 
                        alt="" 
                        aria-hidden="true" 
                        width={16} 
                        height={16} 
                      />
                    </div>
                  </div>

                  {/* Connecting Line */}
                  <div
                    className="absolute left-[41px] top-[80px] h-[60px] w-[2px] bg-black z-20"
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
                      className="w-full p-4 border border-black rounded-lg pl-12"
                      aria-required="true"
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Image 
                        src={DestinationIcon} 
                        alt="" 
                        aria-hidden="true" 
                        width={16} 
                        height={16} 
                      />
                    </div>
                  </div>

                     
             {/* Buttons Section */}
<div className="flex flex-row w-full justify-between items-center">
  {/* Call Button */}
  <button 
    className="flex flex-col justify-center bg-transparent rounded-xl text-black hover:bg-gray-100"
    aria-label="Call Taxi"
  >
    <div>
      <Image 
        src={Call} 
        alt="Phone icon" 
        width={60} 
        height={36} 
        className="" 
      />
      <span className="font-medium text-[10px] text-black">Call</span>
    </div>
  </button>

  {/* Main Button */}
  <button 
    className="flex items-center mx-4 mb-auto justify-center w-full h-12 bg-[#004080] text-white rounded-xl font-bold hover:bg-gray-600"
    aria-label="See prices and book taxi"
  >
    <span className="text-md">See prices & book</span>
  </button>

  {/* WhatsApp Button */}
  <button 
    className="flex flex-col justify-center bg-transparent rounded-xl text-black hover:bg-gray-100"
    aria-label="Contact via WhatsApp"
  >
    <div className="">
      <Image 
        src={WhatsApp} 
        alt="WhatsApp contact icon" 
        width={65} 
        height={36} 
        className="" 
      />
      <span className="font-medium text-[10px] text-black">WhatsApp</span>
    </div>
  </button>
</div>

                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Remaining Sections */}
        <BookSection />
        <TaxiCat />
        <BookingOp />
        <Intelligence />
        <Service />
        <WhyBook />
        <GradientTestimonial />
        <Number />
        <Partner />
        <BlogSection />
        <FAQsSection />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;