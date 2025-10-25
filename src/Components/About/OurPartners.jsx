import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import img from "/assets/About/companies.png";

export const OurPartners = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 my-20">
      <HeadingInfo>Our Partners</HeadingInfo>

      <h2 className="text-2xl md:text-3xl font-bold my-6 leading-snug">
        Trusted By Some Of The Fastest <br className="hidden md:block" />
        Growing Companies
      </h2>

      <div className="mt-10">
        <img
          src={img}
          alt="Companies"
          className="w-full h-auto max-w-5xl mx-auto"
        />
      </div>
    </div>
  );
};
