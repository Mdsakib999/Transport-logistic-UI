import img from "/assets/Services/streamlinedProcess.jpg";
import { GoArrowRight } from "react-icons/go";
export const SteamlinedProcess = () => {
  const menuItems = [
    {
      id: 1,
      title: "Request a Quote",
      desc: "Start by requesting a quote—share your shipping details, and we’ll provide a tailored solution with transparent pricing and expert recommendations.",
    },
    {
      id: 2,
      title: "Schedule Transfer",
      desc: "Once you approve the quote, schedule your transfer at a time that works for you. We ensure a smooth, timely pickup and coordination.",
    },
    {
      id: 3,
      title: "In-Transit Tracking",
      desc: "Track your shipment in real-time with our advanced tracking system, ensuring transparency, security, and on-time delivery.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-10 flex flex-col gap-5 px-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl  mb-10">
        Our <span className="font-bold"> streamlined process </span> ensures
        <br className="hidden md:block" />
        efficient and hassle- free shipping
        <br className="hidden md:block" />
        from strat to finish.
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mx-auto">
        {/* Left Image */}
        <img
          src={img}
          alt="img"
          className="w-full h-auto lg:w-1/3 lg:min-h-[550px] rounded-xl shadow-md"
        />

        {/* Right Steps */}
        <div className="flex flex-col gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="space-y-4">
              <hr className="border-gray-300" />
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center gap-3">
                  <p className="uppercase font-light text-lg text-primary whitespace-nowrap">
                    Step {index + 1}:
                  </p>
                  <p className="text-lg font-light">{item.title}</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
          <button className="border border-primary text-black px-6 py-2 rounded-2xl flex items-center gap-2 text-sm cursor-pointer hover:bg-[#133FAE] hover:border-blue-500 hover:text-white max-w-fit mt-12">
            Get Free Quote
            <GoArrowRight className="w-5 h-5" />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};
