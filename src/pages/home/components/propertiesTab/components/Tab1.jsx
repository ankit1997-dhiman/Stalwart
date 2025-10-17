import React from "react";
import PropertySwiper from "@/common/properties/PropertySwiper.jsx";

export const Tab1 = ({ tabdata }) => {
  console.log(tabdata|"asdafalsdkjf")
  return (
    <>
      <PropertySwiper delay={10000} tabdata={tabdata} />
    </>
  );
};
