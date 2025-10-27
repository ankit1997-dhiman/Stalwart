import React from "react";
import { Carousel, Form, Input } from "antd";

// Import all images
import Insta1 from "../../../assets/images/insta-1.png";
import Insta2 from "../../../assets/images/image-2.png";
import Insta3 from "../../../assets/images/image-3.png";
import Insta4 from "../../../assets/images/image-4.png";
import Insta5 from "../../../assets/images/image-5.png";
import Insta6 from "../../../assets/images/image-6.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Label from "@/components/form/Label";
import { AnimatedButton } from "@/common/Button/AnimatedButton";

const images = [Insta1, Insta2, Insta3, Insta4, Insta5, Insta6];

const InstagramPosts = ({ backGroundWhite }) => {
  return (
    <div
      className={`${
        backGroundWhite ? "bg-white" : "bg-[#F4F2F0]"
      }  py-16.5 px-12.5 xl:px-0 `}
    >
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
              <Form className="justify-baseline pt-7.5 lg:pt-7.5">
                <div className=" flex justify-between item-center flex-col md:flex-row gap-1 lg:gap-6 mt-4">
                  <div className="flex flex-row  justify-start items-center gap-5 md:gap-6 w-full">
                    <Form.Item
                      name="email"
                      label={false}
                      rules={[
                        { required: true, message: "Please enter your email" },
                        {
                          type: "name",
                          message: "Please enter a valid email",
                        },
                      ]}
                      className="!mb-0 lg:w-[35%]"
                    >
                      <Input
                        placeholder="Full Name"
                        className="!py-2.5 !outline-none !border-b-black !border-t-0 !border-r-0 !border-l-0 !bg-transparent !rounded-none !px-0"
                      />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      label={false}
                      rules={[
                        { required: true, message: "Please enter your email" },
                        {
                          type: "email",
                          message: "Please enter a valid email",
                        },
                      ]}
                      className="!mb-0 w-full"
                    >
                      <Input
                        placeholder="Email"
                        className="!py-2.5 !outline-none !border-b-black !border-t-0 !border-r-0 !border-l-0 !bg-transparent !rounded-none !px-0"
                      />
                    </Form.Item>
                  </div>
                  <div className="flex justify-end lg:pt-0 pt-5">
                    <button
                      type="submit"
                      className="text-sm font-medium text-left lg:text-right text-black w-full  origin-left hover:scale-x-[104%] duration-500 cursor-pointer"
                    >
                      <span className="text-black">Submit</span>
                    </button>
                  </div>
                </div>
              </Form>
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
