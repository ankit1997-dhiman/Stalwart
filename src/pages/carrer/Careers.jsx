import React from "react";
import CareerForm from "./components/CareerForm";
import bgImage from "@/assets/images/career-bg.png";
import HeroSection from "@/common/HeroSection";

export const Careers = () => {
  return (
    <div className="relative z-20 bg-white">
      <HeroSection title={"Careers"} bgImage={bgImage} />
      <CareerForm />
    </div>
  );
};
