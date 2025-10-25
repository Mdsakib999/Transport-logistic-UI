import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import arrow from "/assets/WorkingProcess/arrow.png";

export const WorkingProcess = () => {
  const menuItems = [
    {
      id: 1,
      title: "Order Placement / Booking",
      description:
        "Customers place shipment orders through our platform or with our team. We collect all necessary information including cargo type, pickup location, and delivery timeline.",
      img: "assets/WorkingProcess/calendar.png",
    },
    {
      id: 2,
      title: "Pickup & Documentation",
      description:
        "We arrange pickup from the sender’s location and ensure all documentation (invoices, customs forms, etc.) is prepared accurately and legally.",
      img: "assets/WorkingProcess/pickup.png",
    },
    {
      id: 3,
      title: "Transportation & Tracking",
      description:
        "Goods are transported via the chosen mode (truck, air, sea). Clients receive real-time tracking updates throughout the journey.",
      img: "assets/WorkingProcess/icon-park.png",
    },
    {
      id: 4,
      title: ` Customs Clearance
                                                (if international)`,
      description:
        "We handle all customs clearance procedures efficiently to prevent delays, ensuring compliance with destination regulations.",
      img: "assets/WorkingProcess/customs.png",
    },
    {
      id: 5,
      title: " Final Delivery & POD",
      description:
        "The shipment is delivered to the final destination, and proof of delivery is provided to confirm successful handoff.",
      img: "assets/WorkingProcess/package-person.png",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto my-10 flex flex-col gap-5 px-4 md:px-8 lg:px-12">
      <HeadingInfo> Working Process </HeadingInfo>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">
        Our Working Proceess
      </h1>
      <p className="font-medium text-black/60">
        From inquiry to delivery, our streamlined process ensures efficient
        handling of <br className="hidden md:block" /> shipments, supported by
        our dedicated team every step.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-5">
        {menuItems.map((item, index) => {
          return (
            <div className="relative">
              <div className="flex flex-col gap-3 max-w-64 mx-auto">
                <div className="flex items-center justify-center">
                  <div className="rounded-full p-2 bg-primary w-18 h-18 flex items-center justify-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-10 h-10 object-cover"
                    />
                  </div>
                </div>

                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm max-w-xs text-black/60">
                  {item.description}
                </p>
              </div>
              {[1, 2, 4].includes(index) && (
                <div className="hidden lg:block absolute top-1/2 -left-15 transform -translate-x-1/2 -translate-y-1/2">
                  <img src={arrow} alt="" className="w-24 h-24" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
