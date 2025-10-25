import { useState } from "react";
import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import deliveryBoy from "/assets/Services/deliveryBoy.png";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { companyHistory } from "../../FakeDb/CompanyHistory";

export const ShortBrief = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % companyHistory.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + companyHistory.length) % companyHistory.length
    );
  };

  const currentData = companyHistory[currentSlide];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 my-20 py-10 relative">
      <HeadingInfo>A Short Brief</HeadingInfo>

      <h2 className="text-2xl md:text-3xl font-bold my-6 leading-snug">
        Our Company History
      </h2>

      <div className="relative py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mx-auto">
          {/* Left Image */}
          <div className="relative w-full lg:w-[45%] h-64 md:h-80 lg:h-96">
            <img
              src={currentData.image}
              alt={`Company milestone ${currentData.year}`}
              className="w-full h-full rounded-lg object-cover transition-all duration-500 ease-in-out"
            />
          </div>

          {/* Right Steps */}
          <div className="tracking-wide max-w-2xl">
            <p className="font-semibold text-xl mb-3 transition-all duration-500 ease-in-out">
              <span className="text-blue-500">Transit </span>
              {currentData.title}
            </p>

            <p className="text-sm text-gray-600 leading-relaxed transition-all duration-500 ease-in-out">
              {currentData.description}
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="absolute left-0 top-[40%] md:top-[53%] lg:top-[80%]">
          <div className="flex justify-center mt-8">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-12 h-12 bg-gray-300 hover:bg-gray-400 text-gray-700 shadow-lg cursor-pointer transition-colors duration-200"
              aria-label="Previous milestone"
            >
              <GoArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 bg-primary hover:bg-blue-600 text-white shadow-lg cursor-pointer transition-colors duration-200"
              aria-label="Next milestone"
            >
              <GoArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative delivery boy image */}
      <div className="absolute transform translate-x-1/2 translate-y-1/2 bottom-0 lg:bottom-20 right-20 lg:right-40">
        <img
          src={deliveryBoy}
          alt="Delivery service illustration"
          className="w-20 h-auto opacity-80"
        />
      </div>
    </div>
  );
};
