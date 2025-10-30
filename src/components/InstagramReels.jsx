import { useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const reels = [
  "https://www.instagram.com/p/DQWLMBSiQdh/",
  "https://www.instagram.com/p/DQWLMBSiQdh/",
  "https://www.instagram.com/p/DQWLMBSiQdh/",
  "https://www.instagram.com/p/DQWLMBSiQdh/",
  "https://www.instagram.com/p/DQWLMBSiQdh/",
];

export default function InstagramReelsGrid() {
  useEffect(() => {
    // Load Instagram embed script once
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Reprocess embeds after script loads
    script.onload = () => {
      if (window.instgrm) window.instgrm.Embeds.process();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={5}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      className="mySwiper h-full"
    >
      {reels.map((url, index) => (
        <SwiperSlide key={index} className="w-full">
          <div key={index} className="flex justify-center">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                margin: "0 auto",
                maxWidth: "540px",
                width: "100%",
                minWidth: "326px",
                padding: 0,
              }}
            ></blockquote>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
