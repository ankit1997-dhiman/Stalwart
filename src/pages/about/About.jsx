import HeroSection from "@/common/HeroSection";
import { S3_BASE_URL } from "@/config";
import { aboutPageContent } from "@/constants/about/aboutPageContent";
import InstagramPosts from "../home/components/InstagramPosts";
import MeetOurTeam from "./components/MeetOurTeam";
import OurPhilosophyAbout from "./components/OurPhilosophyAbout";
import WorkWithUs from "./components/WorkWithUs";

export const About = () => {
  return (
    <div className="relative z-20 bg-white">
      <HeroSection
        title={aboutPageContent.PAGE_TITTLE}
        bgImage={`${S3_BASE_URL}/desk-image-about.png`}
        bgImageMobile={`${S3_BASE_URL}/bg-mobile-about.png`}
      />
      <OurPhilosophyAbout />
      <MeetOurTeam />
      <WorkWithUs />
      <InstagramPosts backGroundWhite={true} />
    </div>
  );
};
