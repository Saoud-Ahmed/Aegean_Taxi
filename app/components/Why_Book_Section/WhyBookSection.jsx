"use client";
import Image from "next/image";
import { useRef, useReducer } from "react";
import TaxiImage from "./assets/img2.png";
import IconImg from "./assets/icon_img.png";
import Arrow from "./assets/blue_arrow.png";
import FrontArrow from "./assets/w-front-arrow.png";

export default function WhyBookSection() {
  const cards = [
    { imgsrc: IconImg, heading: "Low price guarantee", text: "Our Mykonos taxi team is available 24/7 to offer a more personalized service." },
    { imgsrc: IconImg, heading: "24/7 customer support", text: "Our Mykonos taxi team is available 24/7 to offer a more personalized service." },
    { imgsrc: IconImg, heading: "Low price guarantee", text: "Our Mykonos taxi team is available 24/7 to offer a more personalized service." },
    { imgsrc: IconImg, heading: "24/7 customer support", text: "Our Mykonos taxi team is available 24/7 to offer a more personalized service." },
    { imgsrc: IconImg, heading: "Low price guarantee", text: "Our Mykonos taxi team is available 24/7 to offer a more personalized service." },
    { imgsrc: IconImg, heading: "24/7 customer support", text: "Our Mykonos taxi team is available 24/7 to offer a more personalized service." },
  ];

  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const activeIndexRef = useRef(0);
  const touchStartRef = useRef(null);
  const touchMoveRef = useRef(null);

  // Use reducer for manual re-render triggering (rarely used)
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const CARD_WIDTH = 215;
  const SWIPE_THRESHOLD = 50;

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
  

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
    touchMoveRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchMoveRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchMoveRef.current) return;
  
    const diffX = touchStartRef.current - touchMoveRef.current;
    let newIndex = activeIndexRef.current;
  
    if (Math.abs(diffX) > SWIPE_THRESHOLD) {
      // Calculate new index for both left and right swipes
      newIndex = diffX > 0 
        ? newIndex + 1  // Swipe right (move to the next card)
        : newIndex - 1; // Swipe left (move to the previous card)
  
      // Wrap around if reaching the first or last card
      if (newIndex < 0) newIndex = cards.length - 1;  // Move to the last card if at the start
      if (newIndex >= cards.length) newIndex = 0;  // Move to the first card if at the end
    }
  
    scrollToIndex(newIndex);
  
    touchStartRef.current = null;
    touchMoveRef.current = null;
  };
  
  // Modify the extended cards to create a circular effect with actual card 6 visible
  const extendedCards = [
   
    ...cards,
    cards[0],  // Actual card 1 at the end
    cards[1],   // Next card for smooth transition
    cards[2],
    cards[3],
    cards[4],
    cards[5]
  ];

  return (
    <section className="py-20 flex flex-col bg-[#F1F3FB]" aria-labelledby="why-book-heading">
      <div className="px-8">
        <header className="text-left pb-4">
          <h1 id="why-book-heading" className="text-3xl font-bold leading-[1.1] text-[#0000FF]">
            Why book your Mykonos taxi with Aegean Taxi
          </h1>
        </header>

        <div className="flex justify-end">
          <div className="w-full">
            <Image
              src={TaxiImage}
              alt="Aegean Taxi showcasing premium service"
              layout="responsive"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div ref={containerRef} className="overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden pt-10 pb-10 scroll-smooth no-scrollbar"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          aria-label="Why choose us cards"
        >
          {extendedCards.map((card, index) => (
            <article
              key={index}
              className={`relative flex-shrink-0 w-[200px] h-60 ${index === 0 ? 'ml-4' : ''} ${index === extendedCards.length - 1 ? 'mr-4' : ''} transition-transform duration-300 ease-in-out`}
              aria-labelledby={`card-heading-${index}`}
            >
              <div className="relative border border-black w-full h-full rounded-3xl bg-[#F5F5F7] shadow-lg p-3 pb-5 pl-3">
                <div className="flex justify-left">
                  <Image
                    src={card.imgsrc}
                    alt={`Icon representing ${card.heading}`}
                    width={50}
                    height={50}
                  />
                </div>
                <h1 id={`card-heading-${index}`} className="text-lg pt-2 font-bold text-left">
                  {card.heading}
                </h1>
                <p className="text-sm pt-2 font-light text-left">{card.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-2 space-x-4">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out focus:outline-none ${
                activeIndexRef.current === index ? "bg-black" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={activeIndexRef.current === index}
            />
          ))}
        </div>
        <div className="flex flex-col items-center mx-10">
          <div className="flex justify-center mt-5">
            <button
              className="flex items-center gap-2 px-6 py-2 bg-[#004080] hover:bg-blue-800 text-white font-semibold rounded-3xl transition-all duration-300 text-sm sm:text-base"
              aria-label="Find out more about Mykonos"
            >
              <span className="whitespace-nowrap">Find out more about Mykonos</span>
              <Image
                src={FrontArrow}
                alt="Arrow Icon"
                width={16}
                height={16}
                className="object-contain"
              />
            </button>
          </div>

          <div className="flex items-center justify-center mt-4">
            <a
              href="#"
              className="block text-center text-blue-800 underline hover:text-blue-900"
              aria-label="Find us in Mykonos"
            >
              Find us in Mykonos
            </a>

            <Image
              src={Arrow}
              alt="Arrow pointing to the link"
              className="ml-2"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
