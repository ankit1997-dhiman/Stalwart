import PropertySwiper from "@/common/properties/PropertySwiper";
import React from "react";

export default function LeaseTab({ tabdata }) {
  return <PropertySwiper delay={10000} tabdata={tabdata} leaseButtonTag={true} />;
}
