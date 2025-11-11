import { S3_BASE_URL } from "@/config.js";
import { HoverSection } from "./HoverSection.jsx";

export const Section4 = () => {
  return (
    <section className="w-full flex lg:flex-row flex-col items-stretch justify-between lg:gap-7.5 h-full lg:h-[1080px] md:py-9">
      <div
        className="lg:block hidden w-full lg:w-[30%] relative group overflow-hidden lg:h-full bg-cover bg-center transition-opacity duration-700 "
        style={{ backgroundImage: `url(${S3_BASE_URL}/Image1.png)` }}
      >
        <HoverSection />
      </div>

      <div className=" lg:flex w-full  lg:w-[70%]  flex-col gap-y-9 h-full">
        <div className="flex-1 relative group overflow-hidden bg-black transition-all duration-700">
          <video
            src={`${S3_BASE_URL}/Sequence1.mp4`}
            className=" lg:absolute inset-0 w-full lg:h-full object-cover "
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
            src={`${S3_BASE_URL}/Sequence2.mp4`}
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
