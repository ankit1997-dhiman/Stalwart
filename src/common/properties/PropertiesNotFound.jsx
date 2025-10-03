import { Empty } from "antd";
import React from "react";

export default function PropertiesNotFound() {
  return (
    <p className="text-base md:text-xl font-medium mb-7 md:mb-4 font-moderat-mediu h-[300px] text-center flex items-center justify-center uppercase pb-5">
      <Empty description="No Properties Found" />
    </p>
  );
}
