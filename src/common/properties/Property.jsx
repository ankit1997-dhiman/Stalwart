import React from "react";
import DummyImage from "@/assets/images/dummy-image.jpg";
import { Link } from "react-router-dom";
import { AnimatedButton } from "../Button/AnimatedButton";
import { SoldTag } from "@/assets/icons/SoldTag";
import { magicText } from "@/constants/constants";
import { ViewMoreButton } from "@/components/ViewMoreButton";

export function Property({
  id,
  address,
  soldTag,
  leaseTag,
  price,
  bathrooms,
  carportSpaces,
  garageSpaces,
  openCarSpaces,
  image = [],
  bed,
}) {
  const sortedImages =
    Array.isArray(image) && image.length
      ? [...image].sort((a, b) => (a.position || 0) - (b.position || 0))
      : [];
  const firstImage = sortedImages?.[0]?.url || DummyImage;

  return (
    <Link to={`/property/${id}`}>
      <div
        key={id}
        className="relative border border-gray-300 rounded overflow-hidden group h-[300px] lg:h-[450px] object-contain"
      >
        {/* 🏷️ Sold/Lease Tag */}
        {soldTag || leaseTag ? (
          <div className="text-xs  py-2 text-white font-moderat-bold uppercase absolute left-0 top-7 z-10 ">
            {soldTag ? <SoldTag /> : "Lease"}
          </div>
        ) : null}

        {/* 🖼️ Background image layer */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center transition-transform duration-500"
          style={{
            backgroundImage: `url(${firstImage})`,
          }}
        ></div>

        {/* 📍 Address (always visible) */}
        <div className="absolute bottom-0 left-0 w-full p-5 border-t text-xs font-medium text-gray-800 transition-opacity duration-300 group-hover:opacity-0 bg-white uppercase h-[60px] font-moderat-bold">
          {address || "Address not available"}
        </div>

        {/* 🧭 Hover content */}
        <div className="absolute bottom-0 left-0 w-full p-5 text-xs font-medium text-gray-800 bg-white/80 backdrop-blur-sm transform translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex justify-between items-center gap-6">
            <div>
              <div className="font-moderat-bold text-xs font-bold uppercase">
                {address || "Address not available"}
              </div>
              <div className="font-moderat-medium text-xs pt-2">
                {`${bed || 0} BED | ${bathrooms || 0} BATH | ${
                  (carportSpaces || 0) +
                  (openCarSpaces || 0) +
                  (garageSpaces || 0)
                } CAR `}
              </div>
            </div>
            <ViewMoreButton className="text-black px-6 py-3" />
          </div>

          {price && (
            <div className="py-3 text-xs font-moderat-medium uppercase">
              {price.toLocaleString("en-AU")}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
