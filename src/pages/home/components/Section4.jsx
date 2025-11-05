import video1 from "@/assets/videos/Sequence1.mp4";
import video2 from "@/assets/videos/Sequence2.mp4";
import image1 from "@/assets/images/Image1.png";
import mobileImage1 from "@/assets/images/mobile-image-house.png";
import { HoverSection } from "./HoverSection.jsx";

export const Section4 = () => {
  return (
    <section className="w-full flex items-stretch justify-between gap-7.5 h-[400px] md:h-[1080px] md:py-9">
      <div
        className="xl:hidden block flex-1 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${mobileImage1})` }}
      ></div>

      <div
        className="xl:block hidden w-[30%] relative group overflow-hidden h-full bg-cover bg-center transition-opacity duration-700"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <HoverSection />
      </div>

      <div className=" xl:flex hidden w-[70%]  flex-col gap-y-9 h-full">
        <div className="flex-1 relative group overflow-hidden bg-black transition-all duration-700">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={video1}
            autoPlay
            muted
            loop
            playsInline
          />

          <HoverSection />
        </div>

        <div className="flex-1 relative group overflow-hidden bg-black transition-all duration-700">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={video2}
            autoPlay
            muted
            loop
            playsInline
          />

          <HoverSection />
        </div>
      </div>
    </section>
  );
};
