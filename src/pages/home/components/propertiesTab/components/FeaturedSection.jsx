import React from "react";
import image from "../../../../../assets/images/image-9.png";
import logo from "@/assets/images/black-logo.png";
import { Button } from "antd";
import { CgArrowLongRight } from "react-icons/cg";
const FeaturedSection = () => {
  return (
    <div className="flex flex-col xl:flex-row">
      {/* Left: Image */}
      <div className="w-3/5 hidden xl:block">
        <img
          src={image}
          alt="Featured"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Content */}
      <div className="flex flex-col gap-0 w-full xl:w-2/5 justify-between border p-7.5 md:p-0 xl:border-l-0 space-y-7">
        <div className="m-9">
          <img src={logo} className="w-5" />
        </div>
        <div className="md:p-9">
          <h2 className="text-base md:text-2xl font-medium mb-4 font-moderat-medium">
            JOURNAL
          </h2>
          <p className="text-black text-sm font-normal mb-6 font-moderat-regular">
            Mauris in est sed nibh tempor feugiat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <Button className="text-black !font-medium !font-moderat-bold !text-sm !border-0 bg-white !shadow-none !pl-0">
            SEE ALL <CgArrowLongRight className="text-xl" />
          </Button>
          <img
            src={image}
            alt="Featured"
            className="block xl:hidden w-full h-full object-cover mt-7"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
