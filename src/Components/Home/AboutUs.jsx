import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import img1 from "/assets/About/ship.png";
import img2 from "/assets/About/Truck.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import miniCar from "/assets/About/miniCar.png";
import { FaPersonChalkboard } from "react-icons/fa6";
import { PrimaryButton } from "../SharedComponent/Button/PrimaryButton";
import { GradientButton } from "../SharedComponent/Button/GradientButton";
export const AboutUs = () => {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <div className="px-4 md:px-8 lg:px-12 py-20 max-w-7xl mx-auto relative ">
      <HeadingInfo> About Us</HeadingInfo>
      <div className="grid lg:grid-cols-2 gap-28 lg:gap-12 items-center mt-20 relative ">
        {/* Left: Images and vertical text */}
        <div className="w-64 h-80 md:w-96 md:h-96 lg:w-80 lg:h-[28rem] rounded-xl overflow-hidden shadow-lg ">
          <img
            src={img1}
            alt="Shipping"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute -top-10 right-3 md:bottom-[-8rem] md:left-1/4 lg:-top-15 lg:left-40 w-52 h-64 md:w-80 md:h-80 lg:w-64 lg:h-96 rounded-xl overflow-hidden shadow-md">
          <img src={img2} alt="Truck" className="w-full h-full object-cover" />
        </div>

        <div className=" hidden md:block absolute top-90 -right-[0%] md:top-[37%] md:left-1/2 lg:top-[92%] lg:left-1/3 md:w-1/3 lg:w-1/4 transform -translate-y-1/2 -translate-x-1/2 ">
          <div className="rounded-xl bg-gradient-to-r from-gray-600 via-white to-white shadow-md px-6 py-3">
            <div className="flex justify-between items-center gap-5">
              <div className="rounded-full bg-primary w-12 h-12 p-2 ">
                <FaPersonChalkboard className="w-full h-full text-white" />
              </div>
              <div className="flex flex-col items-center justify-center text-lg font-semibold text-center ">
                <p className="text-primary font-bold">1250+</p>
                <p className="">Trained People</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="space-y-5 lg:pl-6 text-center lg:text-left ">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            Discover Transit: Your Logistics Partner
          </h2>

          <p className="text-sm sm:text-base text-black/70 leading-relaxed text-justify px-3 md:px-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem laudantium quis, voluptatibus sint deserunt quam
            dolores quibusdam iste, porro, aliquam id autem quaerat quae! Rem,
            nesciunt id corrupti fugiat, cum, sunt consectetur assumenda dolorem
            quia recusandae soluta! Perspiciatis nesciunt ut est hic nostrum
            porro laudantium eaque, quis voluptates, minima ipsum!
          </p>

          {/* Stats */}
          <div ref={ref} className="grid md:grid-cols-2 gap-5 pt-2">
            {[
              "Merchants Nationwide",
              "Industries Nationwide",
              "Retailers Nationwide",
              "Outlets Nationwide",
            ].map((label, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center p-1">
                  <FaCheck className="text-white" />
                </div>
                <div className="text-md text-start">
                  <p className="font-semibold">
                    {inView ? (
                      <CountUp start={0} end={400} duration={2.5} />
                    ) : (
                      "0"
                    )}
                    +
                  </p>

                  <p>{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row px-5 md:px-0 gap-6 pt-6 justify-center lg:justify-start">
            <GradientButton>
              <div className="flex items-center gap-2">
                Contact Us
                <MdKeyboardArrowRight className="w-5 h-5" />
              </div>
            </GradientButton>

            <GradientButton>
              <div className=" flex items-center">
                Request a Quote
                <MdKeyboardArrowRight className="w-5 h-5" />
              </div>
            </GradientButton>
          </div>
        </div>
      </div>

      {/* Bottom Mini Vehicle */}
      <div className="absolute -bottom-4 md:bottom-0 lg:bottom-0 right-0 ">
        <img src={miniCar} alt="Mini Car" className="w-24 md:w-36 h-auto" />
      </div>
    </div>
  );
};
