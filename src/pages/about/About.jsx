import React from "react";
import OurPhilosophyAbout from "./components/OurPhilosophyAbout";
import MeetOurTeam from "./components/MeetOurTeam";
import WorkWithUs from "./components/WorkWithUs";
import InstagramPosts from "../home/components/InstagramPosts";
import HeroSection from "@/common/HeroSection";
import bgImage from "@/assets/images/contact-bg.png";

export const About = () => {
  return (
    <div className="relative z-20 bg-white">
      <HeroSection title={"About Us"} bgImage={bgImage} />
      <OurPhilosophyAbout />
      <MeetOurTeam />
      <WorkWithUs />
      <InstagramPosts backGroundWhite={true} />
    </div>
  );
};
