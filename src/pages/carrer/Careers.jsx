import React from "react";
import CareerForm from "./components/CareerForm";
import HeroSection from "@/common/HeroSection";
import { S3_BASE_URL } from "@/config";

export const Careers = () => {
  return (
    <div className="relative z-20 bg-white">
      <HeroSection title={"Careers"} bgImage={S3_BASE_URL + "/career-bg.png"} />
      <CareerForm />
    </div>
  );
};
