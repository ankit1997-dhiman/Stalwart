import React from "react";

const properties = [
  {
    id: 1,
    image: "https://source.unsplash.com/random/800x600?house1",
    address: "3 WAITARA STREET, LOGAN CENTRAL | QLD 4114",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/random/800x600?house2",
    address: "3 WAITARA STREET, LOGAN CENTRAL | QLD 4114",
  },
  {
    id: 3,
    image: "https://source.unsplash.com/random/800x600?house3",
    address: "3 WAITARA STREET, LOGAN CENTRAL | QLD 4114",
  },
  {
    id: 4,
    image: "https://source.unsplash.com/random/800x600?house4",
    address: "3 WAITARA STREET, LOGAN CENTRAL | QLD 4114",
  },
];

const Section6 = () => {
  return (
    <section className="container py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Left Section */}
      <div className="lg:col-span-1 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">OUR CURRENT PROPERTIES</h2>
          <p className="text-gray-600 text-sm">
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
            className="border border-gray-300 rounded overflow-hidden shadow-sm"
          >
            <img
              src={property.image}
              alt={property.address}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 border-t text-sm font-medium text-gray-800">
              {property.address}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section6;
