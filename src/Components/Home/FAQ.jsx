import { useState } from "react";
import { MdKeyboardArrowRight, MdAdd, MdRemove } from "react-icons/md";
import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import TruckImg from "/assets/Truck.png";
import { faqData } from "../../FakeDb/FAQData";
import { Link } from "react-router-dom";
import { GradientButton } from "../SharedComponent/Button/GradientButton";

export const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-16 max-w-7xl mx-auto">
      <HeadingInfo>FAQ</HeadingInfo>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-8">
        {/* Left side - Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
            Everything You Need to Know About Shipping
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
            Discover valuable information and insights about shipping logistics
            through our comprehensive FAQ section. We address common questions
            and provide expert guidance.
          </p>
          <GradientButton className="w-fit">
            <Link to={"/contact"} className="flex items-center gap-2">
              Contact Us
              <MdKeyboardArrowRight className="w-5 h-5" />
            </Link>
          </GradientButton>
          <div className="mt-6">
            <img
              src={TruckImg}
              alt="Truck"
              className="w-40 sm:w-52 h-auto object-contain"
            />
          </div>
        </div>

        {/* Right side - FAQ Items */}
        <div className="flex flex-col gap-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-800 text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                {openFAQ === faq.id ? (
                  <MdRemove className="w-5 h-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <MdAdd className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
              </button>

              {openFAQ === faq.id && (
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
