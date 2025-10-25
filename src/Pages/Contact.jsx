import { ContactForm } from "../Components/Contact/ContactForm";
import { ContactInfo } from "../Components/Contact/ContactInfo";
import { PageBanner } from "../Components/SharedComponent/PageBanner";
import ContactBannerImg from "/assets/Banner/ContactBanner.jpg";

export const Contact = () => {
  return (
    <div>
      <PageBanner
        backgroundImage={ContactBannerImg}
        heading="Services"
        title="Our Logistic Services"
      />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};
