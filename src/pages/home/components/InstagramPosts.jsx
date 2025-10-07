import React from "react";
import { Carousel } from "antd";

// Import all images
import Insta1 from "../../../assets/images/insta-1.png";
import Insta2 from "../../../assets/images/image-2.png";
import Insta3 from "../../../assets/images/image-3.png";
import Insta4 from "../../../assets/images/image-4.png";
import Insta5 from "../../../assets/images/image-5.png";
import Insta6 from "../../../assets/images/image-6.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const images = [Insta1, Insta2, Insta3, Insta4, Insta5, Insta6];

const InstagramPosts = () => {
  return (
    <div className="bg-[#F4F2F0] py-16.5 px-12.5 xl:px-0">
      <div className="container">
        <div className="lg:pt-18">
          <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between lg:gap-6">
            <p className="text-2xl md:text-[40px] font-light font-miller-light pb-12">
              Keep Up With Us On Instagram
            </p>

            {/* Mobile Carousel */}
            <div className="block xl:hidden">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={3}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
                className="mySwiper h-full"
              >
                {images.map((src, idx) => (
                  <SwiperSlide key={idx} className="w-full">
                    <img
                      src={src}
                      alt={`Insta ${idx}`}
                      className="w-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Form */}
            <div className="lg:w-1/2">
              <p className="pt-26 md:pt-0 font-moderat-regular leading-[20px] text-[#4F4C45] text-sm w-full md:w-[553px]">
                Subscribe to get the latest insider tips, market updates and
                access to the hottest deals as they come on the market.
              </p>
              <form className="justify-baseline pt-7.5 lg:pt-7.5">
                <div className="border-b border-gray-400 bg-transparent focus:outline-none flex justify-between flex-col md:flex-row gap-10 lg:gap-0">
                  <div className="flex flex-row flex-wrap justify-evenly gap-5 md:gap-0">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="flex-1 placeholder:text-[#4F4C45]/60 pb-3 border-b border-[#4F4C45] md:border-0 w-1/2 lg:w-full"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="flex-1 placeholder:text-[#4F4C45]/60 pb-3 border-b border-[#4F4C45] md:border-0 w-1/2 lg:w-full"
                    />
                  </div>

                  <button
                    type="submit"
                    className="text-sm font-medium text-left lg:text-right text-[#4F4C45]/60 pb-3"
                  >
                    <span className="text-[#4F4C45]/60">Submit</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden xl:block md:py-20">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            // pagination={{ clickable: true }}
            // navigation
            className="mySwiper h-full"
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx} className="w-full">
                <img
                  src={src}
                  alt={`Insta ${idx}`}
                  className="w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default InstagramPosts;
