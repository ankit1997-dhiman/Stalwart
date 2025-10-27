import React from "react";
import deskImage from "@/assets/images/contact-bg.png";
import mobileImage from "@/assets/images/contact-mobile.png";
import ContactForm from "./components/ContactForm";
import HeroSection from "@/common/HeroSection";
export function Contact() {
  return (
    <>
      <HeroSection
        title={"CONTACT US"}
        bgImage={deskImage}
        bgImageMobile={mobileImage}
      />
      <ContactForm />
      <div className="pt-10"></div>
    </>
  );
}
