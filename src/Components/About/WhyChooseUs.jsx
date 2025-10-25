import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import img from "/assets/About/chooseUs.jpeg";
export const WhyChooseUs = () => {
  const menuItems = [
    {
      id: 1,
      title: "People",
      desc: "We understand that our people impact the success of our business, and we hire people who are smart",
      img: "/assets/About/SVG/people.png",
    },
    {
      id: 2,
      title: "Customer Service",
      desc: "We strive to provide superior customer service and ensure that every client is completely satisfied with our work",
      img: "/assets/About/SVG/service.png",
    },
    {
      id: 3,
      title: "Support",
      desc: "Tell us what you need and our specialist team will deliver it personally, taking care of all the procedures.",
      img: "/assets/About/SVG/support.png",
    },
    {
      id: 4,
      title: "Quality",
      desc: "We are committed to deliver outstanding, cutting edge IT solutions that add real value that goes beyond what is expected.",
      img: "/assets/About/SVG/quality.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 my-20">
      <HeadingInfo>Why Choose Us</HeadingInfo>
      <h2 className="text-2xl md:text-3xl font-bold my-10">
        Why Choose <span className="text-blue-500">Transit</span> Service?
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mx-auto">
        {/* Left Image */}
        <img
          src={img}
          alt="img"
          className="w-full h-auto lg:w-[45%] rounded-lg object-cover"
        />

        {/* Right Steps */}
        <p className="text-sm md:text-base text-gray-600 leading-loose tracking-wide text-justify max-w-2xl">
          Our mission statement is simplicity itself. To constantly exceed
          customer expectations by providing superior freight forwarding and
          global transportation solutions including air, ocean, and customs
          brokerage and logistics services. Our team of professionals is totally
          committed to provide you a service that far exceeds your expectations.
          We put forward a tremendous extra effort everyday to give this level
          and quality of service and we are always striving to deliver the most
          efficient and effective solutions in the industry by utilizing state
          of the art technologies, highly trained friendly and experience staff
          as well as a solid infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 my-20">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start gap-2 p-4 rounded-md"
          >
            {/* Icon */}
            <img src={item.img} alt={item.title} className="w-14 h-14" />

            {/* Title */}
            <h3 className="font-semibold text-base">{item.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
