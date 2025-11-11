import { LenisAnimatedLink } from "@/components/LenisAnimatedLink";
import { S3_BASE_URL } from "@/config";
import { URLS } from "@/constants/Urls";

const OurPhilosophy = () => {
  return (
    <section className="bg-white py-20 md:py-32 px-12.5 xl:px-0">
      <div className="container mx-auto">
        {/* <MyIcon className="w-6 h-6 text-blue-500" /> */}
        <img src={`${S3_BASE_URL}/black-logo.png`} className="w-6 h-3 mb-15" />
        {/* <BiLogOut className="w-6 h-6 text-black  block" /> */}
        <p className="text-xs md:text-base text-black mt-15 font-moderat-medium pb-5">
          OUR PHILOSOPHY
        </p>
        <h4 className="text-base md:text-[32px] uppercase text-black mt-5 leading-6 sm:leading-10 w-full lg:w-[845px] font-moderat-medium font-medium">
          Attention to detail combined with the finest craftsmanship and
          quality. 
        </h4>
        <div
          className="bg-cover h-[189px] my-12.5 lg:my-18 bg-no-repeat bg-center sm:hidden"
          style={{
            backgroundImage: `url(${S3_BASE_URL}/mobile-philosophy.png)`,
          }}
        ></div>

        <div
          className="hidden sm:block bg-cover h-[338px] my-18 bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${S3_BASE_URL}/section-2-image.png)` }}
        ></div>

        <div className="flex items-end justify-end gap-4">
          <div className="w-full lg:w-[553px]  ">
            <p className="text-xs lg:text-[16px] font-moderat-regular text-[#000000] pb-5 leading-6">
              At Stalwart Real Estate, we help clients maximise the value of
              their property assets with minimal stress, delivering exceptional
              results through expert negotiation and thoughtful, strategic
              marketing. 
            </p>
            <LenisAnimatedLink
              to={URLS.ABOUT}
              className="font-moderat-medium md:text-base md:font-medium text-black origin-left scale-x-[100.5%] hover:scale-x-[103%] duration-500 text-xs will-change-transform [transform:translateZ(0)] [backface-visibility:hidden] [--webkit-font-smoothing:antialiased]"
            >
              LEARN MORE ABOUT US
            </LenisAnimatedLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
