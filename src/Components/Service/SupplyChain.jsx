export const SupplyChain = () => {
  const menuItems = [
    {
      id: 1,
      title: "Standard Shipping",
      feature: [
        "Shipping option for non-urgent deliveries",
        "Faster delivery enhances trust and loyalty",
        "Minimizing warehousing expenses",
      ],
      img: "/assets/Services/dropbox.png",
    },
    {
      id: 2,
      title: "Express Delivery",
      feature: [
        "Get your package by the next day",
        "Guaranteed on-time delivery",
        "Ideal for time-sensitive packages",
      ],
      img: "/assets/Services/location.png",
    },
    {
      id: 3,
      title: "Same-Day Delivery",
      feature: [
        "Get packages delivered within hours",
        "Faster delivery enhances trust and loyalty",
        "Minimizing warehousing expenses",
      ],
      img: "/assets/Services/24hours.png",
    },
    {
      id: 4,
      title: "Overnight Shipping",
      feature: [
        "Package delivered by the next morning",
        "Quicker delivery without the premium cost",
        "More affordable than express shipping",
      ],
      img: "/assets/Services/moon.png",
    },
    {
      id: 5,
      title: "Business Solution",
      feature: [
        "Bulk discounts on high-volume shipments",
        "Dedicated account managers",
        "Automated shipping tools",
      ],
      img: "/assets/Services/globe.png",
    },
    {
      id: 6,
      title: "Warehouse & Fulfillment",
      feature: [
        "Get packages delivered within hours",
        "Faster delivery enhances trust and loyalty",
        "Minimizing warehousing expenses",
      ],
      img: "/assets/Services/warehouse2.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-10 flex flex-col gap-5 px-4 md:px-8 lg:px-12">
      <h1 className="text-2xl md:text-3xl lg:text-4xl  mb-10">
        Optimize your Supply chain with
        <br className="hidden md:block" />
        <span className="font-bold">expert solutions</span> designed to deliver
        <br className="hidden md:block" /> logistic efficiency
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-primary text-white p-6 rounded-lg flex flex-col justify-between gap-6 py-12 group"
          >
            <div className="bg-yellow-400 rounded h-14 w-18 flex items-center justify-center ">
              <img src={item.img} alt={item.title} className="" />
            </div>
            <div className="py-5">
              <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                {item.feature.map((feat, index) => (
                  <li key={index}>{feat}</li>
                ))}
              </ul>
            </div>
            <button className="mt-6 bg-white group-hover:bg-yellow-400 text-blue-900 group-hover:text-white font-semibold py-2 px-4 rounded-full">
              Get Free Quote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
