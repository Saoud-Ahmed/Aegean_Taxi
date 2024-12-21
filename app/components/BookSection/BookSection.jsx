"use client";
import Image from "next/image";
import { useReducer , useRef} from "react";
import map from './assets/map2.png';
import Arrow from "./assets/blue_arrow.png";
import NavArrow from "./assets/arrow.svg";
import location from './assets/location.png';
import img1 from './assets/img1.png';
import CarSVG from './assets/car.svg';
import CategorySVG from './assets/cat.svg';
import OperationSVG from './assets/sett.svg';

export default function BookSection() {
  const cards = new Array(20).fill(null).map((_, index) => ({
    imgsrc: index % 2 !== 0 ? img1.src : location.src,
    heading: index % 2 !== 0 ? "Santorini" : "Mykonos",
    cars: "100+ cars",
    categories: "4 car categories",
    operation: "24/7 operations",
  }));

  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const activeIndexRef = useRef(0);
  const touchStartRef = useRef(null);
  const touchMoveRef = useRef(null);

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const CARD_WIDTH = 240; // Width of each card
  //const SWIPE_THRESHOLD = 50;

  // Scroll to a specific index
  const scrollToIndex = (index) => {
    if (!scrollRef.current || !containerRef.current) return;
  
    const containerWidth = containerRef.current.clientWidth;
    const centerOffset = (containerWidth - CARD_WIDTH) / 2;
  
    // Wrap around the index if it goes out of bounds
    const wrappedIndex = (index + cards.length) % cards.length;
  
    // Scroll position considering wrapping behavior
    const scrollPosition = wrappedIndex * CARD_WIDTH - centerOffset;
  
    scrollRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  
    // Update active index without React state
    const previousIndex = activeIndexRef.current;
    activeIndexRef.current = wrappedIndex;
  
    // Update class for animation
    const cardElements = Array.from(scrollRef.current.children);
    cardElements.forEach((card, cardIndex) => {
      if (cardIndex === activeIndexRef.current) {
        card.classList.add("opacity-100", "scale-105");
        card.classList.remove("opacity-50", "scale-100");
      } else {
        card.classList.add("opacity-50", "scale-100");
        card.classList.remove("opacity-100", "scale-105");
      }
    });
  
    // Force re-render for dots/buttons if necessary
    if (previousIndex !== activeIndexRef.current) forceUpdate();
  };

  // Handle touch start
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
    touchMoveRef.current = e.touches[0].clientX;
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    touchMoveRef.current = e.touches[0].clientX;
  };

  // Handle touch end
  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchMoveRef.current) return;
  
    const diffX = touchStartRef.current - touchMoveRef.current;
  
    // Move only by one card, based on the swipe direction
    let newIndex = activeIndexRef.current;
  
    if (Math.abs(diffX) > 0) {
      if (diffX > 0) {
        newIndex = newIndex + 1; // Swipe right (move to the next card)
      } else {
        newIndex = newIndex - 1; // Swipe left (move to the previous card)
      }
  
      // Wrap around if reaching the first or last card
      if (newIndex < 0) newIndex = cards.length - 1; // Move to the last card if at the start
      if (newIndex >= cards.length) newIndex = 0; // Move to the first card if at the end
  
      scrollToIndex(newIndex);
    }
  
    touchStartRef.current = null;
    touchMoveRef.current = null;
  };
  



  return (
    <div className="my-20 flex flex-col bg-white">
      <div className="px-8">
        {/* Heading Section */}
        <div className="text-left pb-4">
          <h1 className="text-[30px] font-bold leading-[1.1] text-[#0000FF]">
            Book a ride online with
          </h1>
          <h1 className="text-[30px] font-bold leading-[1.1] text-[#0000FF]">
            Aegean Taxi in any of
          </h1>
          <h1 className="text-[30px] font-bold leading-[1.1] text-[#0000FF]">
            following 20 locations
          </h1>
        </div>

        {/* Image Section */}
        <div className="flex justify-end">
          <div className="w-full my-4">
            <Image
              src={map}
              alt="Taxi"
              layout="responsive"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="my-4">
        <div
          ref={containerRef}
          className="overflow-hidden"
        >
          <div
            ref={scrollRef}
            className="flex gap-0 mb-4 overflow-x-auto mt-0 cursor-grab scroll-smooth scrollbar-hide"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className={`relative flex-shrink-0 w-60 h-full ${index === cards.length - 1 ? 'mr-6' : ''}`}
              >
                <div className="relative w-full h-full rounded-3xl p-4 pb-7 pl-5">
                  <div className="flex justify-left">
                    <Image
                      src={card.imgsrc}
                      alt={card.heading}
                      width={250}
                      height={250}
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg pt-2 font-bold text-left ml-2">{card.heading}</h3>
                  <div className="flex items-center mt-2">
                    <Image
                      src={CarSVG}
                      alt="Cars"
                      width={24}
                      height={24}
                      className="mr-2 text-blue-500"
                    />
                    <p className="text-sm font-light text-left">{card.cars}</p>
                  </div>

                  <div className="flex items-center mt-2">
                    <Image
                      src={CategorySVG}
                      alt="Categories"
                      width={24}
                      height={24}
                      className="mr-2 text-blue-500"
                    />
                    <p className="text-sm font-light text-left">{card.categories}</p>
                  </div>

                  <div className="flex items-center mt-2">
                    <Image
                      src={OperationSVG}
                      alt="Operation"
                      width={24}
                      height={24}
                      className="mr-2 text-blue-500"
                    />
                    <p className="text-sm font-light text-left">{card.operation}</p>
                  </div>
                  <button className="mt-4 px-6 py-2 bg-[#004080] text-white rounded-full">Book Mykonos Taxi</button>
                  <div className="flex items-center justify-center mt-4">
                    <a
                      href="#"
                      className="block text-center text-[#004080] underline"
                    >
                      Find us in Mykonos
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

        {/* Indicator Section */}
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={() => scrollToIndex(activeIndexRef.current - 1)}
            className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center mr-4"
            aria-label="Previous card"
          >
            <Image src={NavArrow} alt="Left arrow" className="w-4 h-4 rotate-180" />
          </button>
          <div className="flex justify-center mt-2 space-x-2">
            {Array(9).fill().map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
                  index === (activeIndexRef.current % 9)
                    ? 'bg-black w-3 h-3'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => scrollToIndex(activeIndexRef.current + 1)}
            className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center ml-4"
            aria-label="Next card"
          >
            <Image src={NavArrow} alt="Right arrow" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}