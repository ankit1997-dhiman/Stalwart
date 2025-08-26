import React from "react";
import { Carousel } from "antd";

// Import all images
import Insta1 from "../../../assets/images/insta-1.png";
import Insta2 from "../../../assets/images/image-2.png";
import Insta3 from "../../../assets/images/image-3.png";
import Insta4 from "../../../assets/images/image-4.png";
import Insta5 from "../../../assets/images/image-5.png";
import Insta6 from "../../../assets/images/image-6.png";

const images = [Insta1, Insta2, Insta3, Insta4, Insta5, Insta6];

const InstagramPosts = () => {
  return (
    <div className="bg-[#F4F2F0] px-12.5 xl:px-0">
      <div className="container">
        <div className="pt-16 pb-12">
          <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
            <h2 className="text-2xl font-light uppercase">
              Keep Up With Us On Instagram
            </h2>

            {/* Mobile Carousel */}
            <div className="block xl:hidden py-4 md:py-18">
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
                {images.map((src, idx) => (
                  <div key={idx} className="w-full !mx-4">
                    <img
                      src={src}
                      alt={`Insta ${idx}`}
                      className="w-full object-cover"
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            {/* Form */}
            <div className="xl:w-1/2">
              <p className="pb-7.5">
                Subscribe to get the latest insider tips, market updates and
                access to the hottest deals as they come on the market.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 w-full">
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

        {/* Desktop Carousel */}
        <div className="hidden xl:block py-4 md:py-18">
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
            {images.map((src, idx) => (
              <div key={idx} className="w-full !mx-4">
                <img
                  src={src}
                  alt={`Insta ${idx}`}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default InstagramPosts;
