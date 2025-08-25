import React from "react";
import PropertyCard from "./PropertyCard.jsx";
import image from "../../../../../assets/images/tab-image.png";

export const Tab1 = () => {
  return (
    <PropertyCard
      image={image}
      title="3 Waitara Street, Logan Central | QLD 4114"
      subtitle="We specialise in Real Estate for Brisbane, Gold Coast, Logan, Ipswich, Redland City and Toowoomba."
      buttonText="Learn More"
      onClick
    />
  );
  //   return Array(5)
  //     .fill(0)
  //     .map((_, idx) => (
  //   <Carousel afterChange={onChange}>

  //   </Carousel>
  // ));
};
