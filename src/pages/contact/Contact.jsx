import React from "react";
import bgImage from "@/assets/images/contact-bg.png";
import ContactForm from "./components/ContactForm";
import HeroSection from "@/common/HeroSection";
export default function Contact() {
  return (
    <>
      <HeroSection title={"CONTACT US"} bgImage={bgImage} />
      <ContactForm />
    </>
  );
}
