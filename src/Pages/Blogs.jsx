import { AllBlog } from "../Components/Blogs/AllBlog";
import { PageBanner } from "../Components/SharedComponent/PageBanner";
import BlogsBannerImg from "/assets/Banner/BlogsBanner.jpg";

export const Blogs = () => {
  return (
    <div>
      <PageBanner
        backgroundImage={BlogsBannerImg}
        heading="Services"
        title="Our Logistic Services"
      />{" "}
      <AllBlog />
    </div>
  );
};
