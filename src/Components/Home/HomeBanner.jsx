import { GradientButton } from "../SharedComponent/Button/GradientButton";
import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import HomeBannerImg from "/assets/Banner/HomeBanner.webp";

export const HomeBanner = () => {
  return (
    <div
      className="relative bg-no-repeat bg-cover bg-center h-[90vh] md:h-screen flex items-center"
      style={{ backgroundImage: `url(${HomeBannerImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent-0"></div>
      {/* Content */}
      <div className="relative z-10 px-4 md:px-8  w-full max-w-7xl mx-auto md:pt-24">
        <HeadingInfo>Logistic & Supply Chain Solutions</HeadingInfo>
        <div className="max-w-4xl my-7">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Safest Logistics Solutions Provider With Integrity
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-white/90 my-5">
            We’re leading provider of less-than-truckload freight transportation
            with the world-class network, technology and service our customers
            need at all the time.
          </p>
        </div>
        <GradientButton>Explore More</GradientButton>
      </div>
    </div>
  );
};
