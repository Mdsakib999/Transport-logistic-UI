import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: false });

  const menuItems = [
    {
      id: 1,
      count: 2000,
      suffix: "K",
      title: "Delivered Packages",
      image: "/assets/Services/truck.png",
    },
    {
      id: 2,
      count: 5000,
      suffix: "K",
      title: "KM Per Month",
      image: "/assets/Services/speed.png",
    },
    {
      id: 3,
      count: 20000,
      suffix: "K",
      title: "Tons of Goods",
      image: "/assets/Services/warehouse.png",
    },
    {
      id: 4,
      count: 1000,
      suffix: "K",
      title: "Satisfied Clients",
      image: "/assets/Services/users.png",
    },
  ];

  return (
    <div className="relative bg-primary py-16 my-20" ref={ref}>
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-3xl" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg py-10 px-6 flex flex-col items-center text-center text-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-14 h-14 mb-4"
              />
              <span className="text-3xl font-extrabold">
                {inView ? (
                  <CountUp end={item.count} duration={2} />
                ) : (
                  `0${item.suffix}`
                )}
              </span>
              <span className="text-sm mt-1">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
