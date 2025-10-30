import { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import video1 from "@/assets/videos/video_a.mp4";
import video2 from "@/assets/videos/video_b.mp4";
import video3 from "@/assets/videos/video_c.mp4";
import Image1 from "@/assets/videos/image_a.jpg";
import Image2 from "@/assets/videos/image_b.jpg";
import Image3 from "@/assets/videos/image_c.jpg";
import Image4 from "@/assets/videos/image_d.jpg";
import Image5 from "@/assets/videos/image_e.jpg";
import Image6 from "@/assets/videos/image_f.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reels = [
  { type: "v", src: video1 },
  { type: "i", src: Image1 },
  { type: "i", src: Image2 },
  { type: "i", src: Image3 },
  { type: "i", src: Image4 },
  { type: "v", src: video2 },
  { type: "i", src: Image5 },
  { type: "i", src: Image6 },
  { type: "v", src: video3 },
];

export default function InstagramReelsGrid() {
  const videoRef = useRef(null);

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        // slidesPerView={1}
        loop={true}
        navigation
        preventClicks={false}
        preventClicksPropagation={false}
        simulateTouch={true}
        touchStartPreventDefault={false}
        allowTouchMove={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 6 },
        }}
      >
        {reels.map((reel) => (
          <SwiperSlide key={reel.id}>
            <div className="relative overflow-hidden   shadow-lg group my-6">
              {reel.type === "v" ? (
                <video
                  src={reel.src}
                  ref={videoRef}
                  controls
                  playsInline
                  className="w-full h-[330px] object-cover  group-hover:scale-105 transition-transform duration-300 z-50"
                />
              ) : (
                <img src={reel.src} className="h-[330px]" />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
