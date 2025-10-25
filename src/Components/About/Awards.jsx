import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import img from "/assets/About/Awards.png";

export const Awards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 my-20">
      <HeadingInfo>Awards & Achivemnets </HeadingInfo>

      <h2 className="text-2xl md:text-3xl font-bold my-6 leading-snug">
        Our Achivements & Awards
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
