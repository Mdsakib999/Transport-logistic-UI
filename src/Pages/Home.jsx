import { AboutUs } from "../Components/Home/AboutUs";
import { Accomplishment } from "../Components/Home/Accomplishment";
import { FAQ } from "../Components/Home/FAQ";
import { GetInTouch } from "../Components/Home/GetInTouch";
import { HomeBanner } from "../Components/Home/HomeBanner";
import { Offer } from "../Components/Home/Offer";
import { OurBlog } from "../Components/Home/OurBlog";
import { OurExperience } from "../Components/Home/OurExperience";
import { OurServices } from "../Components/Home/OurServices";
import { WorkingProcess } from "../Components/Home/WorkingProcess";

export const Home = () => {
  return (
    <>
      <HomeBanner />
      <OurServices />
      <AboutUs />
      <Offer />
      <WorkingProcess />
      <OurExperience />
      <Accomplishment />
      <OurBlog />
      <FAQ />
      <GetInTouch />
    </>
  );
};
