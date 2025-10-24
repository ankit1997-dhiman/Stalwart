import React from "react";
import DummyImage from "@/assets/images/dummy-image.jpg";
import { Link } from "react-router-dom";
import { AnimatedButton } from "../Button/AnimatedButton";

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
    <div
      key={id}
      className="relative border border-gray-300 rounded overflow-hidden group h-[300px] lg:h-[450px] object-contain"
    >
      {/* 🏷️ Sold/Lease Tag */}
      {soldTag || leaseTag ? (
        <div className="bg-[#4F4C45] text-xs px-18 py-4 text-white font-moderat-bold uppercase absolute left-6 top-6 z-10">
          {soldTag ? "Sold" : "Lease"}
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
          <div>
            <AnimatedButton
              to={`/property/${id}`}
              buttonText="Learn More"
              className="text-black px-6 py-3"
            />
          </div>
        </div>

        {price && (
          <div className="py-3 text-xs font-moderat-medium uppercase">
            {price.toLocaleString("en-AU")}
          </div>
        )}
      </div>
    </div>
  );
}
