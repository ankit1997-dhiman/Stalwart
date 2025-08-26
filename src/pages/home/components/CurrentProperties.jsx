import React from "react";
import image from "../../../assets/images/tab-image.png";
import { Button } from "antd";

const properties = [
  {
    id: 1,
    image: image,
    address: "3 WAITARA STREET, LOGAN CENTRAL | QLD 4114",
    hoverAddress: "4 BED | 3 BATH | 2 CAR | xxx M2",
    price: "$000,000 - 000,000",
  },
  {
    id: 2,
    image: image,
    address: "3 WAITARA STREET, LOGAN CENTRAL | QLD 4114",
    hoverAddress: "4 BED | 3 BATH | 2 CAR | xxx M2",
    price: "$000,000 - 000,000",
  },
  {
    id: 3,
    image: image,
    address: "3 WAITARA STREET, LOGAN CENTRAL | QLD 4114",
    hoverAddress: "4 BED | 3 BATH | 2 CAR | xxx M2",
    price: "$000,000 - 000,000",
  },
  {
    id: 4,
    image: image,
    address: "3 WAITARA STREET, LOGAN CENTRAL | QLD 4114",
    hoverAddress: "4 BED | 3 BATH | 2 CAR | xxx M2",
    price: "$000,000 - 000,000",
  },
];

const CurrentProperties = () => {
  return (
    <section className="container pb-30 grid grid-cols-1 lg:grid-cols-4 gap-8 px-12.5 xl:px-0">
      {/* Left Section */}
      <div className="lg:col-span-1 flex flex-col justify-between">
        <div>
          <h2 className="text-base md:text-xl font-medium mb-7 md:mb-2 font-moderat-medium">
            OUR CURRENT PROPERTIES
          </h2>
          <p className="text-black text-xs md:text-sm">
            We specialise in Real Estate for Brisbane, Gold Coast, Logan,
            Ipswich, Redland City and Toowoomba.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center font-semibold text-sm text-black hover:underline"
          >
            SEE ALL <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      {/* Right Grid */}
      <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="relative border border-gray-300 rounded overflow-hidden group"
          >
            {/* Image */}
            <img
              src={property.image}
              alt={property.address}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Default address (visible by default, hidden on hover) */}
            <div className="p-5 border-t text-xs font-medium text-gray-800 transition-opacity duration-300 group-hover:opacity-0">
              {property.address}
            </div>

            {/* Hover content with white transparent overlay */}
            <div
              className="absolute bottom-0 left-0 w-full p-5 text-xs font-medium text-gray-800 
                  bg-white/80 backdrop-blur-sm
                  transform translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-moderat text-xs font-bold">
                    {property.address}
                  </div>
                  <div className="font-moderat text-[10px] font-medium pt-2">
                    {property.hoverAddress}
                  </div>
                </div>
                <div>
                  <Button className="!bg-transparent  !text-black !border !border-black !px-8 !py-6 !rounded-none">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="py-3">{property.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentProperties;
