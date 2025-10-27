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
        <div className="text-xs  py-2 text-white font-moderat-bold uppercase absolute left-0 top-2 z-10">
          {soldTag ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="a"
              data-name="Layer 1"
              width="177"
              height="48"
              viewBox="0 0 177 48"
            >
              <rect
                x="115.015"
                y="11.097"
                width="53.784"
                height="25.806"
                fill="#4f4c45"
              />
              <g>
                <g>
                  <path
                    d="M153,0H0S0,48,0,48h153c13.254,0,24-10.745,24-24h0C177,10.745,166.254,0,153,0ZM164.236,25.818c0,4.284-5.331,8.691-9.615,8.691h-37.537V12.936h38.276c4.284,0,8.876,5.023,8.876,9.307v3.575Z"
                    fill="#4f4c45"
                  />
                  <path
                    d="M154.013,11.466c3.82,0,6.828,1.117,9.025,3.349,2.196,2.233,3.295,5.282,3.295,9.15,0,3.821-1.087,6.871-3.259,9.15-2.173,2.28-5.193,3.42-9.06,3.42h-38.998V11.466h38.998ZM153.834,32.953c2.817,0,4.93-.829,6.339-2.489,1.408-1.659,2.113-3.849,2.113-6.571,0-2.745-.716-4.906-2.149-6.482-1.432-1.575-3.534-2.363-6.303-2.363h-34.88s0,17.906,0,17.906h34.88Z"
                    fill="#fff"
                  />
                </g>
                <path
                  d="M47.931,23.948c0-8.034,6.504-13.223,16.705-13.223s16.667,5.225,16.667,13.223c0,8.067-6.504,13.328-16.667,13.328s-16.705-5.261-16.705-13.328ZM64.637,33.222c7.284,0,11.762-3.802,11.762-9.274,0-5.439-4.443-9.205-11.762-9.205s-11.765,3.767-11.765,9.205c0,5.508,4.443,9.274,11.765,9.274Z"
                  fill="#fff"
                />
                <path
                  d="M85.877,11.365h4.763v21.148h18.942v4.051h-23.705V11.365Z"
                  fill="#fff"
                />
                <path
                  d="M13.853,28.138h4.94c0,4.016,3.198,5.58,10.839,5.58,6.646,0,9.418-1.102,9.418-4.123,0-2.985-2.061-3.412-9.667-3.909l-1.421-.106c-9.88-.604-14.109-2.594-14.109-7.712,0-5.011,5.615-7.143,14.464-7.143,9.595,0,15.479,2.843,15.622,8.707h-4.904c0-3.945-4.569-5.153-11.108-5.153-6.113,0-9.169.995-9.169,3.589,0,2.95,2.879,3.589,9.844,4.087l1.493.106c8.92.64,13.86,1.35,13.86,7.392,0,5.97-5.402,7.818-14.322,7.818-10.235,0-15.601-2.274-15.779-9.133Z"
                  fill="#fff"
                />
              </g>
            </svg>
          ) : (
            "Lease"
          )}
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
              className="!text-black px-6 py-3"
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
