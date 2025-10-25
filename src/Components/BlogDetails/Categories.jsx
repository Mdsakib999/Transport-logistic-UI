export const Categories = () => {
  const menuItems = [
    "Shipping",
    "Warehouse",
    "Transport",
    "Transport Industries",
    "Services",
  ];

  return (
    <div className="bg-[#DADADA]/10 shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul className="space-y-2 text-sm text-gray-700">
        {menuItems.map((item) => (
          <li
            key={item}
            className="border-b border-gray-300 pb-1 cursor-pointer transition-all duration-200 hover:text-blue-700 hover:pl-2"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
