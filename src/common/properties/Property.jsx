import { Button, Empty } from "antd";
import React from "react";
import DummyImage from "@/assets/images/dummy-image.jpg";
export function Property({
  id,
  address,
  soldTag,
  leaseTag,
  price,
  bathrooms,
  carportSpaces,
  image,
  bed,
}) {
  return (
    <div
      key={id}
      className="relative border border-gray-300 rounded overflow-hidden group h-[300px] lg:h-[450px] object-contain"
    >
      {soldTag || leaseTag ? (
        <div className="bg-[#4F4C45] text-xs px-18 py-4 text-white font-moderat-bold uppercase absolute left-6 top-6 z-10">
          {soldTag ? "Sold" : "Lease"}
        </div>
      ) : null}

      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center transition-transform duration-500"
        style={{
          backgroundImage: `url(${image ? image : DummyImage})`,
        }}
      ></div>

      {/* Overlay content sits on top */}
      <div className="absolute bottom-0 left-0 w-full p-5 border-t text-xs font-medium text-gray-800 transition-opacity duration-300 group-hover:opacity-0 bg-white uppercase h-[60px] font-moderat-bold">
        {address ? address : null}
      </div>

      {/* Hover content */}
      <div className="absolute bottom-0 left-0 w-full p-5 text-xs font-medium text-gray-800 bg-white/80 backdrop-blur-sm transform translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="flex justify-between items-start gap-6">
          <div>
            <div className="font-moderat-bold text-xs font-bold uppercase">
              {address ? address : null}
            </div>
            <div className="font-moderat-medium text-xs pt-2">
              {`${bed ? bed : 0} BED | ${bathrooms ? bathrooms : 0} BATH | ${
                carportSpaces ? carportSpaces : 0
              } CAR `}
            </div>
          </div>
          <div>
            <Button className="!bg-transparent !text-black !border !border-black !px-8 !py-5 !rounded-none lg:!w-[122px] lg:!h-[44px]">
              <span className="font-moderat-regular text-xs">Learn More</span>
            </Button>
          </div>
        </div>
        <div className="py-3 text-xs font-moderat-medium">
          {price ? `$ ${price.toLocaleString("en-AU")}` : null}
        </div>
      </div>
    </div>
  );
}
