import { HeadingInfo } from "../SharedComponent/HeadingInfo";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { IoMailUnreadSharp } from "react-icons/io5";

export const ContactInfo = () => {
  const menuItems = [
    {
      id: 1,
      title: "Visit Our Office",
      description: `930 Hilgard Ave, 
      Los Angeles, 
      CA 90024, United States`,
      icon: <FaHome />,
    },
    {
      id: 2,
      title: "Give us a call",
      description: `(406) 555-0120
(407) 222-0456`,
      icon: <FaPhoneAlt />,
    },
    {
      id: 3,
      title: "Chat with us",
      description: `hello@yourdomain.com
contact@yourname.com`,
      icon: <IoMailUnreadSharp />,
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-12 py-20 max-w-7xl mx-auto relative flex flex-col gap-10">
      <HeadingInfo>Get in Touch With us</HeadingInfo>

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
        We take care about transportation <br className="hidden md:block" /> for
        your business
      </h2>

      <p className="text-gray-600 max-w-xl leading-relaxed">
        Transit has experience in handling the formalities and documentation
        required for your imports and exports. We work with all international
        station to guarantee that your load will safely reach without any
        delays.
      </p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mt-16">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center rounded bg-[#DADADA]/20 p-8 relative lg:w-72"
          >
            {/* Icon Circle */}
            <div className="absolute top-0 transform -translate-y-1/2 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl mb-6">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-black my-4">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 whitespace-pre-line leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
