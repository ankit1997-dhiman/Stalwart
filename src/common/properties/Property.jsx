import { Button } from "antd";
import React from "react";

export default function Property({ property }) {
  return (
    <div
      key={property.id}
      className="relative border border-gray-300 rounded overflow-hidden group h-[417px]"
    >
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${property.image})` }}
      ></div>

      {/* Overlay content sits on top */}
      <div className="absolute bottom-0 left-0 w-full p-5 border-t text-xs font-medium text-gray-800 transition-opacity duration-300 group-hover:opacity-0 bg-white/80">
        {property.address}
      </div>

      {/* Hover content */}
      <div className="absolute bottom-0 left-0 w-full p-5 text-xs font-medium text-gray-800 bg-white/60 backdrop-blur-sm transform translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="flex justify-between items-start">
          <div>
            <div className="font-moderat text-xs font-bold">
              {property.address}
            </div>
            <div className="font-moderat text-[10px] font-medium pt-2">
              {property.hoverAddress}
            </div>
          </div>
          <div>
            <Button className="!bg-transparent !text-black !border !border-black !px-8 !py-6 !rounded-none">
              Learn More
            </Button>
          </div>
        </div>
        <div className="py-3">{property.price}</div>
      </div>
    </div>
  );
}
