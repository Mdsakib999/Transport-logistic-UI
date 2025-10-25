import { PricingSection } from "../Components/Pricing/PricingSection";
import { PageBanner } from "../Components/SharedComponent/PageBanner";
import PricingBannerImg from "/assets/Banner/PricingBanner.jpg";

export const Pricing = () => {
  return (
    <div>
      <PageBanner
        backgroundImage={PricingBannerImg}
        heading="Services"
        title="Our Logistic Services"
      />
      <PricingSection />
    </div>
  );
};
