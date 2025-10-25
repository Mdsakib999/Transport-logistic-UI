import { Awards } from "../Components/About/Awards";
import { Offer } from "../Components/About/Offer";
import { OurPartners } from "../Components/About/OurPartners";
import { Overview } from "../Components/About/Overview";
import { ShortBrief } from "../Components/About/ShortBrief";
import { Testimonials } from "../Components/About/Testimonials";
import { WhatWeDo } from "../Components/About/WhatWeDo";
import { WhyChooseUs } from "../Components/About/WhyChooseUs";
import { PageBanner } from "../Components/SharedComponent/PageBanner";
import AboutBannerImg from "/assets/Banner/AboutBanner.jpeg";

export const About = () => {
  return (
    <div>
      <PageBanner
        backgroundImage={AboutBannerImg}
        heading="Services"
        title="Our Logistic Services"
      />
      <Offer />
      <Overview />
      <ShortBrief />
      <WhatWeDo />
      <WhyChooseUs />
      <OurPartners />
      <Awards />
      <Testimonials />
    </div>
  );
};
