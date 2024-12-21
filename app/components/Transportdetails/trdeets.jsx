"use client";
import Image from "next/image";

export default function TransportDetails({
  title,
  imageSrc,
  altText,
  descriptionParagraphs,
  buttonText,
  buttonLink,
  buttonIcon,
}) {
  return (
    <div className="bg-[#F0F0F0] mt-8 rounded-lg shadow-md">
      <div
        className="flex flex-col items-center justify-center"
        style={{ transform: "translateY(-60px)" }}
      >
        <Image
          src={imageSrc}
          alt={altText}
          width={240}
          height={240}
          className="h-[7.5rem]"
        />
        <h1 className="text-2xl mt-4 font-bold text-black">{title}</h1>
      </div>

      <div className="m-8 mt-0 text-[#000000] flex flex-col">
        {descriptionParagraphs.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}

        <div className="flex justify-center mt-4">
          <a href={buttonLink} aria-label={buttonText}>
            <button
              className="flex items-center w-64 gap-2 px-6 py-2 bg-[#2B2B6E] hover:bg-blue-800 text-white font-semibold rounded-3xl transition-all duration-300 text-sm sm:text-base justify-center"
            >
              <span className="whitespace-nowrap">{buttonText}</span>
              {buttonIcon && (
                <Image
                  src={buttonIcon}
                  alt="Button Icon"
                  width={16}
                  height={16}
                  className="object-contain"
                />
              )}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
