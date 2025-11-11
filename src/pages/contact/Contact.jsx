import React from "react";
import ContactForm from "./components/ContactForm";
import HeroSection from "@/common/HeroSection";
import { S3_BASE_URL } from "@/config";
export function Contact() {
  return (
    <>
      <HeroSection
        title={"CONTACT US"}
        bgImage={S3_BASE_URL + "/contact-bg.png"}
        bgImageMobile={S3_BASE_URL + "/contact-mobile.png"}
      />
      <ContactForm />
      <div className="pt-10"></div>
    </>
  );
}
