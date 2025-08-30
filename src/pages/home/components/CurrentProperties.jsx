import React from "react";
import Property from "@/common/properties/Property";
import { properties } from "@/constants/constants";

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
          <Property property={property} />
        ))}
      </div>
    </section>
  );
};

export default CurrentProperties;
