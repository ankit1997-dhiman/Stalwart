import { S3_BASE_URL } from "@/config";
import { useRef } from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const reels = [
  { type: "v", src: S3_BASE_URL + "/video_a.mp4" },
  { type: "i", src: S3_BASE_URL + "/image_a.jpg" },
  { type: "i", src: S3_BASE_URL + "/image_b.jpg" },
  { type: "i", src: S3_BASE_URL + "/image_c.jpg" },
  { type: "i", src: S3_BASE_URL + "/image_d.jpg" },
  { type: "v", src: S3_BASE_URL + "/video_b.mp4" },
  { type: "i", src: S3_BASE_URL + "/image_e.jpg" },
  { type: "i", src: S3_BASE_URL + "/image_f.jpg" },
  { type: "v", src: S3_BASE_URL + "/video_c.mp4" },
];

export default function InstagramReelsGrid() {
  const videoRef = useRef(null);

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        loop={true}
        preventClicks={false}
        preventClicksPropagation={false}
        simulateTouch={true}
        touchStartPreventDefault={false}
        allowTouchMove={true}
        breakpoints={{
          0: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
      >
        {reels.map((reel, i) => (
          <SwiperSlide key={i}>
            <div className="w-full aspect-[9/16] sm:aspect-[4/5] md:aspect-[3/4] lg:aspect-[8/9] overflow-hidden ">
              {reel.type === "v" ? (
                <video
                  src={reel.src}
                  ref={videoRef}
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={reel.src}
                  className="w-full h-full object-cover"
                  alt="reel"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
