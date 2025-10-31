import { AnimatedButton } from "@/common/Button/AnimatedButton";
import { ViewMoreButton } from "@/components/ViewMoreButton";
import { magicText } from "@/constants/constants";
import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ id, image, address, subtitle, soldTag, leaseTag }) => {
  const sortedImages =
    image.length &&
    image.slice().sort((a, b) => (a.position || 0) - (b.position || 0));

  return (
    <>
      <div className="mx-auto rounded overflow-hidden">
        {/* Image */}
        {image && (
          <div className="w-full h-[400px] lg:h-[900px]  overflow-hidden relative">
            <img
              src={sortedImages[0].url}
              alt={address}
              className="w-full h-full object-cover"
            />
            {soldTag || leaseTag ? (
              <div className="bg-[#4F4C45] text-xs lg:text-sm px-24 py-8 text-white font-moderat-bold uppercase absolute left-6 top-6 z-10">
                {soldTag ? "Sold" : "Lease"}
              </div>
            ) : null}
          </div>
        )}

        {/* Content */}

        <div className="flex lg:flex-row flex-col items-start justify-between w-full pt-12.5 lg:pt-[72px] px-12.5 lg:px-0 gap-9">
          <div className="w-full lg:w-4/5">
            {address && (
              <p className="text-base md:text-2xl font-medium font-moderat-medium uppercase">
                {address}
              </p>
            )}

            {subtitle && (
              <p className="w-full xl:w-3/5 text-black text-xs lg:text-sm font-normal font-moderat-regular pt-10">
                {subtitle}
              </p>
            )}
          </div>
          <AnimatedButton
            to={`/property/${id}`}
            buttonText={magicText.view_more_text}
            className=" lg:w-[262px] lg:py-3 border font-moderat-regular text-base px-6 py-3 lg:px-0 text-center !text-black"
          />
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
