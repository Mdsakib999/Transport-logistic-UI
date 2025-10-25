import { FaCheckCircle } from "react-icons/fa";
import img from "/assets/About/aboutHero.png";
export const Offer = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 px-4 md:px-8 lg:px-12">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-semibold mb-8 leading-snug">
            We offer a comprehensive range of <br className="hidden md:block" />
            shipping services to meet your <br className="hidden md:block" />
            needs, including:
          </h1>

          {/* Bullet List */}
          <ul className="space-y-4 mb-10">
            {[
              "Domestic and international freight forwarding",
              "Air and ocean cargo transportation",
              "Warehousing and distribution",
              "Customs clearance and brokerage",
              "Logistics consulting and supply chain management",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-800">
                <FaCheckCircle className="text-primary text-lg mt-1" />
                <span className="text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>

          <hr className="my-4" />

          {/* Info Box */}
          <div className="flex gap-5 items-stretch">
            <img
              src="/assets/Services/box.png"
              alt="box"
              className="w-14 h-14 object-contain"
            />
            <div className="w-px bg-gray-300" />
            <p className="text-sm text-gray-700 flex items-center max-w-md">
              No matter the size or scope of your shipping requirements, we have
              the resources and capabilities to get the job done right.
            </p>
          </div>
        </div>

        {/* Right Image (optional) */}
        <div className="flex-1 hidden md:block">
          <img
            src={img}
            alt="Shipping Service"
            className="w-full h-auto object-contain rounded-md"
          />
        </div>
      </div>
    </div>
  );
};
