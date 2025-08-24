import React from "react";
import image from "../../../../../assets/images/image-9.png";
const FeaturedSection = () => {
  return (
    <div className="flex flex-col md:flex-row  ">
      {/* Left: Image */}
      <div className="w-3/5">
        <img
          src={image}
          alt="Featured"
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Right: Content */}
      <div className="flex flex-col gap-0 w-2/5 justify-between border border-l-0">
        <div className="mt-9">Logo</div>
        <div className="p-9">
          <h2 className="text-2xl font-semibold mb-4">JOURNAL</h2>
          <p className="text-gray-700 mb-6">
            Mauris in est sed nibh tempor feugiat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <a href="#" className="text-black font-medium hover:underline">
            SEE ALL 
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
