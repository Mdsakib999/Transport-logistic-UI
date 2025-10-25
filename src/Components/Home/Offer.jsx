import { HeadingInfo } from "../SharedComponent/HeadingInfo";

export const Offer = () => {
  const menuItems = [
    {
      id: 1,
      title: "Multi-modal Operations",
      description:
        "Stay informed with real-time tracking, providing complete visibility of your shipments every step of the way for peace of mind and precise planning.",
      img: "assets/Offer/workflow.png",
    },
    {
      id: 2,
      title: "Supply Chain Management",
      description:
        "Streamline your supply chain with our multimodal logistics, combining land, air, and sea transport to ensure efficient, reliable delivery across every mile.",
      img: "assets/Offer/shuffle.png",
    },
    {
      id: 3,
      title: "Real-Time Tracking",
      description:
        "Adapt to your needs with our flexible scheduling solutions, offering tailored timelines and seamless to keep your operations running smoothly.",
      img: "assets/Offer/time-zone.png",
    },
    {
      id: 4,
      title: "Flexible Scheduling",
      description:
        "Ut quam metus, egestas nec interdum sed, aliquam mattis justo. In aliquam purus in ex posuere sapien egestas. Donec sed sollicitudin, id blandit erat.",
      img: "assets/Offer/calendar.png",
    },
    {
      id: 5,
      title: "Last-Mile Delivery",
      description:
        "Donec imperdiet elit nec erat semper, ut sodales elit rutrum. Ut congue in justo vitae blandit. Etiam faucibus magna. Aenean consectetur fringilla. ",
      img: "assets/Offer/direction.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-10 flex flex-col gap-5 px-4 md:px-8 lg:px-12">
      <HeadingInfo>What We Offer</HeadingInfo>

      <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-10">
        Optimize your <span className="font-bold">Supply chain</span> with
        expert <br className="hidden md:block" />
        solutions designed to deliver efficiency{" "}
        <br className="hidden md:block" />
        and flexibility
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-5 px-6 md:px-0">
        {menuItems.map((item) => {
          return (
            <div className="flex flex-col gap-3 ">
              <img
                src={item.img}
                alt={item.title}
                className="w-10 h-10 object-cover"
              />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm max-w-xs text-justify">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
