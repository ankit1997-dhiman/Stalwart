import React from "react";
import CareerForm from "./components/CareerForm";
import Footer from "@/components/footer/Footer";
import bgImage from "@/assets/images/bg-image.png";
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
