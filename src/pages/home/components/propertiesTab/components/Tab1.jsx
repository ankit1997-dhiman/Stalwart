import React from "react";
import PropertySwiper from "@/common/properties/PropertySwiper.jsx";

export const Tab1 = ({ tabdata }) => {
  console.log(tabdata, "tab dat");
  return (
    <>
      <PropertySwiper delay={10000}  tabdata={tabdata} />
    </>
  );
};
