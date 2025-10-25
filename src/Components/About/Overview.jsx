import { useState } from "react";
import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import img1 from "/assets/About/truck.jpg";
import img2 from "/assets/About/deliveryBoy.jpg";
import { GradientButton } from "../SharedComponent/Button/GradientButton";

export const Overview = () => {
  const [activeTab, setActiveTab] = useState("approach");

  const tabContent = {
    approach:
      "We leverage our scale to create innovative and tailored solutions that help our customers optimize their supply chains to stay ahead of their competition in a market that changes every single day.",
    goal: "Our goal is to become the leading logistics partner by delivering exceptional value through cutting-edge technology, sustainable practices, and unmatched customer service excellence.",
    mission:
      "Our mission is to revolutionize global logistics by connecting businesses worldwide through reliable, efficient, and innovative transportation solutions that drive economic growth.",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 my-20">
      <HeadingInfo>Overview</HeadingInfo>
      <div className="grid lg:grid-cols-2 gap-28 lg:gap-12 items-center mt-20 relative">
        {/* Left: Images */}
        <div className="w-64 h-80 md:w-96 md:h-96 lg:w-4/5 lg:h-[28rem] rounded-xl overflow-hidden shadow-lg object-cover self-center">
          <img src={img1} alt="Shipping" className="w-full h-full object-fit" />
        </div>

        <div className="absolute top-30 right-0 md:bottom-[-6rem] md:left-1/4 lg:-bottom-10 lg:right-40 w-52 h-64 md:w-80 md:h-80 lg:w-64 lg:h-96 rounded-xl overflow-hidden shadow-md">
          <img src={img2} alt="Truck" className="w-full h-full object-cover" />
        </div>

        {/* Right Side Content */}
        <div className="space-y-8">
          {/* Main Heading */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our Company Overview
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed">
            Our global reach, deep industry knowledge, innovative technology,
            and extensive transportation network have allowed us to bring the
            latest learning to bear on our customers' unique challenges and
            desires.
          </p>

          {/* Tab Navigation */}
          <div className="">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab("approach")}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === "approach"
                    ? "bg-primary text-white px-4 py-2 rounded"
                    : "border-transparent bg-gray-200 px-4 py-2 rounded"
                }`}
              >
                Our Approach
              </button>
              <button
                onClick={() => setActiveTab("goal")}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === "goal"
                    ? "bg-primary text-white px-4 py-2 rounded"
                    : "border-transparent bg-gray-200 px-4 py-2 rounded"
                }`}
              >
                Our Goal
              </button>
              <button
                onClick={() => setActiveTab("mission")}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === "mission"
                    ? "bg-primary text-white px-4 py-2 rounded"
                    : "border-transparent bg-gray-200 px-4 py-2 rounded"
                }`}
              >
                Our Mission
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="pt-6">
            <p className="text-gray-600 leading-relaxed text-lg">
              {tabContent[activeTab]}
            </p>
          </div>

          {/* Learn More Button */}
          <div className="pt-4">
            <GradientButton>Learn More</GradientButton>
          </div>
        </div>
      </div>
    </div>
  );
};
