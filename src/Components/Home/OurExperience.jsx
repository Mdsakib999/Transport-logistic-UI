import { SlEarphonesAlt } from "react-icons/sl";
import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import { LuArrowUpRight } from "react-icons/lu";
import { GradientButton } from "../SharedComponent/Button/GradientButton";

export const OurExperience = () => {
  const menuItems = [
    {
      id: 1,
      image: "/assets/Experience/domestic.png",
      title: "Domestic Shipping",
    },
    {
      id: 2,
      image: "/assets/Experience/international.png",
      title: "International Shipping",
    },
    {
      id: 3,
      image: "/assets/Experience/logistic.png",
      title: "Logistic Shipping",
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-12 py-20 max-w-7xl mx-auto relative flex flex-col gap-8">
      <HeadingInfo> Our Experience</HeadingInfo>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left Content */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
            We are a Leading one-stop Logistic Service provider helps to Reach
            Your <span className="text-blue-500">Delay and Damages.</span>
          </h2>

          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <SlEarphonesAlt className="w-10 h-10 text-[#172A5B]" />
              <div>
                <p className="text-md font-light text-gray-500">
                  Call Us anytime
                </p>
                <p className="text-md font-semibold">+1(212)255-511</p>
              </div>
            </div>

            <GradientButton>
              <button className="flex items-center gap-2">
                Know More <span>|</span> <LuArrowUpRight className="w-5 h-5" />
              </button>
            </GradientButton>
          </div>
        </div>

        {/* Right Content - Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl overflow-hidden group h-[300px] shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Background image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

              {/* Title & icon */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-white">
                <span className="font-medium text-sm">{item.title}</span>
                <div className="bg-primary transition-colors duration-300 rounded-full w-10 h-10 flex items-center justify-center">
                  <LuArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
