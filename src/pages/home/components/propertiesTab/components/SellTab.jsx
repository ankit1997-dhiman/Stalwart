import React from "react";
import PropertySwiper from "@/common/properties/PropertySwiper";

export default function SellTab({ tabdata }) {
  return (
       <PropertySwiper delay={10000}  tabdata={tabdata}  soldButtonTag={true}/>
  );
}
