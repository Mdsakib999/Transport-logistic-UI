import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { TestomonialData } from "../../FakeDb/Testimonial";
import { HeadingInfo } from "../SharedComponent/HeadingInfo";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(1);
      } else if (width < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const maxIndex = Math.max(0, TestomonialData.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < parseInt(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % TestomonialData.length;
      visible.push(TestomonialData[index]);
    }
    return visible;
  };

  const getCardStyle = (index) => {
    if (index === 1) {
      return "bg-primary text-white";
    }
    return "bg-[#BABABA]/10 text-gray-800";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 my-20">
      <HeadingInfo>Testimonials</HeadingInfo>

      <h2 className="text-2xl md:text-3xl font-bold my-6 leading-snug">
        What Our Customer Say
      </h2>

      <div className="relative mt-4">
        {/* Testimonial Cards */}
        <div className="flex justify-center items-stretch flex-wrap">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${currentIndex}-${index}`}
              className={`
                relative p-6 transition-all duration-500 ease-in-out
                flex-1 min-w-[250px] max-w-sm
                ${getCardStyle(index)}
              `}
            >
              {/* Quote Icon */}
              <div
                className={`absolute top-4 right-4 ${
                  index === 1 ? "text-yellow-400" : "text-yellow-500"
                }`}
              >
                <Quote className="w-8 h-8 fill-current" />
              </div>

              {/* Profile Section */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.Name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h3
                    className={`font-semibold text-lg ${
                      index === 1 ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {testimonial.Name}
                  </h3>
                  <p
                    className={`text-sm ${
                      index === 1 ? "text-gray-200" : "text-gray-600"
                    }`}
                  >
                    {testimonial.Company}
                  </p>
                </div>
              </div>

              {/* Review Text */}
              <p
                className={`text-sm leading-relaxed mb-4 min-h-[120px] ${
                  index === 1 ? "text-gray-100" : "text-gray-700"
                }`}
              >
                {testimonial.review}
              </p>

              {/* Star Rating */}
              <div className="flex gap-1">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
