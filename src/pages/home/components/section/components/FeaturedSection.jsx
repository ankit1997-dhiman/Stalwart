import React from "react";
import image from "../../../../../assets/images/image-9.png";
const FeaturedSection = () => {
  return (
    <div className="flex flex-col md:flex-row  ">
      {/* Left: Image */}
      <div className="w-3/5 hidden md:block">
        <img
          src={image}
          alt="Featured"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Content */}
      <div className="flex flex-col gap-0 w-full md:w-2/5 justify-between border p-7.5 md:p-0 md:border-l-0 space-y-7">
        <div className="mt-9">Logo</div>
        <div className="md:p-9">
          <h2 className="text-base md:text-2xl font-medium mb-4">JOURNAL</h2>
          <p className="text-black text-sm font-normal mb-6">
            Mauris in est sed nibh tempor feugiat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <a href="#" className="text-black font-medium ">
            SEE ALL
          </a>
          <img
            src={image}
            alt="Featured"
            className="block md:hidden w-full h-full object-cover mt-7"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
