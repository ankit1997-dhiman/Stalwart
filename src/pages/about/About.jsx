import React from "react";
import OurPhilosophyAbout from "./components/OurPhilosophyAbout";
import MeetOurTeam from "./components/MeetOurTeam";
import WorkWithUs from "./components/WorkWithUs";
import InstagramPosts from "../home/components/InstagramPosts";
import HeroSection from "@/common/HeroSection";
import deskImage from "@/assets/images/desk-image-about.png";
import mobileImage from "@/assets/images/bg-mobile-about.png";
import { aboutPageContent } from "@/constants/about/aboutPageContent";

export const About = () => {
  return (
    <div className="relative z-20 bg-white">
      <HeroSection
        title={aboutPageContent.PAGE_TITTLE}
        bgImage={deskImage}
        bgImageMobile={mobileImage}
      />
      <OurPhilosophyAbout />
      <MeetOurTeam />
      <WorkWithUs />
      <InstagramPosts backGroundWhite={true} />
    </div>
  );
};
