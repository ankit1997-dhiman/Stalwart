import React from "react";
import Image from "../../../assets/images/insta-1.png";
import { Carousel } from "antd";

const images = [
  {
    src: "/src/assets/images/insta-1.png",
  },
  {
    src: "/src/assets/images/image-2.png",
  },
  {
    src: "/src/assets/images/image-3.png",
  },
  {
    src: "/src/assets/images/image-4.png",
  },
  {
    src: "/src/assets/images/image-5.png",
  },
  {
    src: "/src/assets/images/image-6.png",
  },
];
const InstagramPosts = () => {
  return (
    <div className="bg-[#F4F2F0] px-12.5 md:px-0">
      <div className="container">
        <div className=" pt-16 pb-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <h2 className="text-2xl font-light uppercase">
              Keep Up With Us On Instagram
            </h2>

            <div className="block md:hidden py-4 md:py-18">
              <Carousel
                slidesToShow={5}
                autoplay
                dots={true}
                responsive={[
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 2,
                    },
                  },
                ]}
              >
                {images.map((item, idx) => (
                  <div key={idx} className="w-full !mx-4 ">
                    <img
                      src={item.src}
                      alt={`Insta ${idx}`}
                      className="w-full  object-cover"
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            {/* Form */}
            <div className="md:w-1/2">
              <p className="pb-7.5">
                Subscribe to get the latest insider tips, market updates and
                access to the hottest deals as they come on the market.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 w-full ">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="flex-1 border-b border-gray-400 bg-transparent focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 border-b border-gray-400 bg-transparent focus:outline-none"
                />
                <button
                  type="submit"
                  className="border-b border-black text-sm font-medium"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Fourth Row - Instagram Grid */}
        <div className="hidden md:block py-4 md:py-18">
          <Carousel
            slidesToShow={5}
            autoplay
            dots={true}
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                },
              },
            ]}
          >
            {images.map((item, idx) => (
              <div key={idx} className="w-full !mx-4 ">
                <img
                  src={item.src}
                  alt={`Insta ${idx}`}
                  className="w-full  object-cover"
                />
              </div>
            ))}
          </Carousel>
          {/* {Array(5)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="w-full ">
                <img
                  src={Image}
                  alt={`Insta ${i}`}
                  className="w-full h-[328] object-cover"
                />
              </div>
            ))} */}
        </div>
      </div>
    </div>
  );
};

export default InstagramPosts;
