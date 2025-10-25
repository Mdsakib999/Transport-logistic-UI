import { GradientButton } from "../SharedComponent/Button/GradientButton";
import { HeadingInfo } from "../SharedComponent/HeadingInfo";

export const PricingSection = () => {
  const menuItems = [
    {
      id: 1,
      title: "Basic",
      Price: "$39",
      features: [
        "Single Truck",
        "Full Insurance",
        "500 Km",
        "Real-time rate shopping",
      ],
    },
    {
      id: 2,
      title: "Standard",
      Price: "$59",
      features: [
        "Double Truck",
        "Full Insurance",
        "1000 Km",
        "Real-time rate shopping",
      ],
    },
    {
      id: 3,
      title: "Premium",
      Price: "$89",
      features: [
        "Double Truck",
        "Full Insurance",
        "Unlimited",
        "Real-time rate shopping",
      ],
    },
    {
      id: 4,
      title: "Basic",
      Price: "$699",
      features:
        "Simplify your supply chain with seamless, hassle-free logistics that keep your operations running smoothly.",
    },
    {
      id: 5,
      title: "Complete",
      Price: "$1499",
      features:
        "Optimize your logistics with efficient, scalable shopping solutions designed to support your business growth",
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-12 py-20 max-w-7xl mx-auto relative">
      <HeadingInfo> Transportation Pricing</HeadingInfo>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold my-10">
        Our Best Pricing
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto">
        {menuItems.slice(0, 3).map((item) => {
          return (
            <div
              key={item.id}
              className="group  lg:w-72 rounded p-6 flex flex-col my-5 md:my-0 justify-between items-center text-center shadow-sm transition duration-300 bg-[#DADADA]/20  hover:bg-primary hover:text-white "
            >
              <div className="w-full space-y-4 mb-4">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <div className="text-3xl font-semibold">
                  {item.Price}
                  <span className="text-sm font-normal align-bottom ml-1">
                    /month
                  </span>
                </div>

                <div className="space-y-2 mt-6">
                  {item.features.map((feature, index) => (
                    <div
                      key={index}
                      className={`py-2 border-t ${
                        index === item.features.length - 1 ? "border-b" : ""
                      } border-gray-600 }`}
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <GradientButton>Choose Plan</GradientButton>
            </div>
          );
        })}
      </div>

      {/* more plans  */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-4xl mx-auto mt-16">
        {menuItems.slice(3).map((item) => {
          return (
            <div
              key={item.id}
              className={`group ${
                item.id === 5 ? "flex-1" : "w-full md:w-80"
              } rounded-2xl p-8 flex flex-col justify-between text-left shadow-lg transition duration-300 ${
                item.id === 4
                  ? "bg-[#BBD8FF] text-black"
                  : "bg-[#FFA629] text-white"
              }`}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className=" leading-relaxed">{item.features}</p>

                <div className="space-y-2">
                  <div className="flex items-baseline">
                    <span className="text-sm">$</span>
                    <span className="text-4xl font-bold">
                      {item.Price.replace("$", "")}
                    </span>
                    <span className="text-sm ml-1">/m</span>
                  </div>
                  <p className="text-sm">USD · Billed monthly</p>
                </div>
              </div>

              <button className="mt-8 w-full bg-white text-gray-800 py-3 px-6 rounded-full font-medium  transition duration-200 cursor-pointer hover:bg-primary hover:text-white">
                Choose Pricing Plan
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
