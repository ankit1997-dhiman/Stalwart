import { BiLogOut } from "react-icons/bi";
import image from "../../../assets/images/section-2-image.png";
import mobileImage from "../../../assets/images/mobile-philosophy.png";

const OurPhilosophy = () => {
  return (
    <section className="bg-white py-20 md:py-32 px-12.5 md:px-0">
      <div className="container mx-auto">
        {/* <MyIcon className="w-6 h-6 text-blue-500" /> */}
        <BiLogOut className="w-6 h-6 text-black  block" />
        <p className="text-xs md:text-base text-black mt-15">OUR PHILOSOPHY</p>
        <h4 className="text-base md:text-[32px] uppercase text-black mt-5 leading-7">
          Attention to detail combined with the finest craftsmanship and
          quality. 
        </h4>
        <div
          className="bg-cover h-[189px] my-12.5 bg-no-repeat bg-center md:hidden"
          style={{ backgroundImage: `url(${mobileImage})` }}
        ></div>

        <div
          className="hidden md:block bg-cover h-[338px] my-18 bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div className="flex items-end justify-end gap-4 mt-8">
          <div className="w-[553px]  ">
            <p className="text-[16px] font-light text-[#000000]">
              At Stalwart Real Estate, we help clients maximise the value of
              their property assets with minimal stress, delivering exceptional
              results through expert negotiation and thoughtful, strategic
              marketing. 
            </p>
            <p className="mt-5">LEARN MORE ABOUT US</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
