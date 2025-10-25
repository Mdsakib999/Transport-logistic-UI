import { logisticServicesData } from "../../FakeDb/Services";
import { HeadingInfo } from "../SharedComponent/HeadingInfo";

export const WhatWeDo = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 my-20">
      <HeadingInfo>What We Do</HeadingInfo>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold my-10">
        Our Logistic Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:my-20 gap-18">
        {logisticServicesData.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-start gap-3 max-w-72 mx-auto"
          >
            {/* Icon */}
            <img src={service.img} alt={service.title} className="w-14 h-14" />

            {/* Title */}
            <h3 className="font-semibold text-base">{service.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-snug">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
