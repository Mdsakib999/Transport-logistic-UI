import { Features } from "../Components/Service/Features";
import { Solution } from "../Components/Service/Solution";
import { Stats } from "../Components/Service/Stats";
import { SteamlinedProcess } from "../Components/Service/SteamlinedProcess";
import { SupplyChain } from "../Components/Service/SupplyChain";
import { ValueAddedService } from "../Components/Service/ValueAddedService";
import { PageBanner } from "../Components/SharedComponent/PageBanner";
import ServiceBannerImg from "/assets/Banner/ServiceBanner.jpg";

export const Services = () => {
  return (
    <div>
      <PageBanner
        backgroundImage={ServiceBannerImg}
        heading="Services"
        title="Our Logistic Services"
      />
      <Features />
      <Stats />
      <ValueAddedService />
      <Solution />
      <SupplyChain />
      <SteamlinedProcess />
    </div>
  );
};
