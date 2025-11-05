import video1 from "@/assets/videos/Sequence1.mp4";
import video2 from "@/assets/videos/Sequence2.mp4";
import image1 from "@/assets/images/Image1.png";
import mobileImage1 from "@/assets/images/mobile-image-house.png";
import { HoverSection } from "./HoverSection.jsx";

export const Section4 = () => {
  return (
    <section className="w-full flex lg:flex-row flex-col items-stretch justify-between lg:gap-7.5 h-[400px] md:h-[1080px] md:py-9">
      <div className="xl:hidden block flex-1 bg-cover bg-center transition-all duration-700">
        <img src={mobileImage1} />
      </div>

      <div
        className="xl:block hidden w-full lg:w-[30%] relative group overflow-hidden lg:h-full bg-cover bg-center transition-opacity duration-700 "
        style={{ backgroundImage: `url(${image1})` }}
      >
        <HoverSection />
      </div>

      <div className=" xl:flex w-full  lg:w-[70%]  flex-col gap-y-9 h-full">
        <div className="flex-1 relative group overflow-hidden bg-black transition-all duration-700">
          <video
            src={video1}
            className=" lg:absolute inset-0 w-full lg:h-full object-cover h-[300px]"
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            x5-playsinline="true"
            x-webkit-airplay="allow"
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
