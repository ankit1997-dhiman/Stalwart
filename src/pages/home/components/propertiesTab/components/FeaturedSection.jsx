import React from "react";
import image from "@/assets/images/image-9.png";
import logo from "@/assets/images/black-logo.png";
import { LenisAnimatedLink } from "@/components/LenisAnimatedLink";
import { BlackArrow } from "@/assets/icons/BlackArrow";
import { URLS } from "@/constants/Urls";
const FeaturedSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-0">
      {/* Left: Image */}
      <div className="hidden lg:block">
        <img
          src={image}
          alt="Featured"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Content */}
      <div className="flex flex-col gap-0 lg:w-[583px] justify-between border p-12.5 md:p-0 xl:border-l-0 space-y-7">
        <div className="lg:m-9">
          <img src={logo} className="w-5" />
        </div>
        <div className="md:p-9">
          <p className="text-base md:text-2xl font-medium mb-4 font-moderat-medium">
            NEWS & BLOGS
          </p>
          <p className="text-black text-sm lg:text-base font-normal pt-6 font-moderat-regular">
            Stay informed with market updates, suburb insights, and smart
            real-estate tips. Subscribe Today!
          </p>
          <LenisAnimatedLink
            to={URLS.BLOGS}
            iconPosition="right"
            icon={<BlackArrow />}
            className="mt-11 inline-flex items-center font-semibold text-sm text-black uppercase"
          >
            See All
          </LenisAnimatedLink>

          <img
            src={image}
            alt="Featured"
            className="block lg:hidden w-full h-[203px] lg:h-full object-cover mt-7"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
