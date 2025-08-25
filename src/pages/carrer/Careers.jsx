import React from "react";
import CareerForm from "./components/CareerForm";
import bgImage from "@/assets/images/career-bg.png";
import HeroSection from "@/common/HeroSection";

const Careers = () => {
  return (
    <>
      <HeroSection title={"Careers"} bgImage={bgImage} />
      <CareerForm />
    </>
  );
};

export default Careers;
