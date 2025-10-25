import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import img1 from "/assets/Services/factory.jpg";
import img2 from "/assets/Services/cargo-Truck.jpg";
export const Features = () => {
  const menuItems = [
    {
      id: 1,
      Title: "Warehousing Services",
      desc: "Leading expert helps in reporting & visibility of cargo. Paired up with professionals responsible for supply chain.",
      img: "/assets/Services/warehouse.png",
    },
    {
      id: 2,
      Title: "Safety & Quality",
      desc: "Modern packaging, computerized controlled storage solutions are available to ensure the success of your business.",
      img: "/assets/Services/safety.png",
    },
    {
      id: 3,
      Title: "Care for Environment",
      desc: "As the leading regional carrier for the wine shipping industry, we provide a level of service that is superior to national carriers.",
      img: "/assets/Services/care.png",
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-12 py-12 max-w-7xl mx-auto  flex flex-col gap-5">
      <HeadingInfo>Features</HeadingInfo>
      <div className="grid lg:grid-cols-2 gap-28 lg:gap-12 items-center mt-20 relative">
        {/* Left: Images and vertical text */}
        <div className="w-64 h-80 md:w-96 md:h-96 lg:w-80 lg:h-[28rem] rounded-xl overflow-hidden shadow-lg">
          <img
            src={img1}
            alt="Shipping"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute -top-10 right-3 md:bottom-[-8rem] md:left-1/4 lg:-top-30 lg:left-40 w-52 h-64 md:w-80 md:h-80 lg:w-64 lg:h-96 rounded-xl overflow-hidden shadow-md">
          <img src={img2} alt="Truck" className="w-full h-full object-cover" />
        </div>

        {/* Right Side Content */}
        <div className="space-y-5 lg:pl-6 text-left">
          {menuItems.map((item) => (
            <div key={item.id} className="flex items-start gap-5 mb-8">
              <img src={item.img} alt={item.Title} className="w-16 h-16" />
              <div className="flex gap-3 flex-col ">
                <h1 className="text-2xl font-semibold">{item.Title}</h1>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
