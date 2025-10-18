import { BiLogOut } from "react-icons/bi";
import image from "../../../assets/images/section-2-image.png";
import mobileImage from "../../../assets/images/mobile-philosophy.png";
import blackLogo from "@/assets/images/black-logo.png";
import { Link } from "react-router-dom";
import { URLS } from "@/constants/Urls";

const OurPhilosophy = () => {
  return (
    <section className="bg-white py-20 md:py-32 px-12.5 xl:px-0">
      <div className="container mx-auto">
        {/* <MyIcon className="w-6 h-6 text-blue-500" /> */}
        <img src={blackLogo} className="w-6 h-3 mb-15" />
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
          style={{ backgroundImage: `url(${mobileImage})` }}
        ></div>

        <div
          className="hidden sm:block bg-cover h-[338px] my-18 bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div className="flex items-end justify-end gap-4">
          <div className="w-full lg:w-[553px]  ">
            <p className="text-[16px] font-moderat-regular text-[#000000] pb-5 leading-6">
              At Stalwart Real Estate, we help clients maximise the value of
              their property assets with minimal stress, delivering exceptional
              results through expert negotiation and thoughtful, strategic
              marketing. 
            </p>
            <Link
              to={URLS.ABOUT}
              className="mt-5 font-moderat-medium md:text-base md:font-medium"
            >
              LEARN MORE ABOUT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
