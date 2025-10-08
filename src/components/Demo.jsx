import React, { useState } from "react";
import image1 from "@/assets/images/Untitled.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const images = [image1,image1, image1, image1, image1, image1, image1]; // multiple images

export const Demo = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="flex flex-col items-center">
      {/* Main Slider */}
      <div className="w-full lg:w-[830px] mb-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Thumbs]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          className="mainSwiper rounded-2xl overflow-hidden"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Slide ${idx}`}
                className="w-full h-[500px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Slider */}
      <div className="w-full lg:w-[830px]">
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress
          className="thumbsSwiper cursor-pointer"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Thumb ${idx}`}
                className="w-full  object-cover rounded-md opacity-70 hover:opacity-100 transition"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
