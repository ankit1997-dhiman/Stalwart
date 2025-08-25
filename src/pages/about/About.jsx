import React from "react";
import OurPhilosophyAbout from "./components/OurPhilosophyAbout";
import MeetOurTeam from "./components/MeetOurTeam";
import WorkWithUs from "./components/WorkWithUs";
import InstagramPosts from "../home/components/InstagramPosts";
import bgImage from "@/assets/images/about-bg.png";
import HeroSection from "@/common/HeroSection";

export const About = () => {
  return (
    <div>
      <HeroSection title={"About Us"} bgImage={bgImage} />
      <OurPhilosophyAbout />
      <MeetOurTeam />
      <WorkWithUs />
      <InstagramPosts />
    </div>
  );
};
