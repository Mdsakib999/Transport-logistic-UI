import { valueAddedServices } from "../../FakeDb/ValueAddedServices";
import { HeadingInfo } from "../SharedComponent/HeadingInfo";

export const ValueAddedService = () => {
  return (
    <div className="px-4 md:px-8  py-20 my-20 max-w-7xl mx-auto relative">
      {/* Heading */}
      <HeadingInfo>Our Services</HeadingInfo>
      <h1 className="text-2xl md:text-3xl lg:text-4xl mt-10 mb-5 font-semibold">
        Value added services
      </h1>
      <p className="text-sm sm:text-base text-black/70 leading-relaxed max-w-2xl">
        In combination to the order processing at our warehouses, you can
        benefit from our extensive distribution network for product deliveries
        to end customers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {valueAddedServices.map((service) => (
          <div
            key={service.id}
            className="rounded-xl overflow-hidden shadow-md bg-white flex flex-col"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-44 object-cover"
            />

            {/* Bottom section */}
            <div className="bg-[#0f2c5a] px-4 py-5 flex flex-col h-full">
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div className="bg-yellow-400 rounded-md p-2 h-9 w-9 flex items-center justify-center">
                  {service.icon && (
                    <service.icon className="text-white w-5 h-5" />
                  )}
                </div>
                {/* Texts */}
                <div className="text-white space-y-1">
                  <h3 className="text-base font-semibold leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-white/90">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
