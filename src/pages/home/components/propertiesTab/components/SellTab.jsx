import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PropertyCard from "./PropertyCard";
import dummyImage from "@/assets/images/dummy-image.jpg";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { message } from "antd";

export default function SellTab({ tabdata }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={16}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 8000, disableOnInteraction: false }}
      loop={true}
      lazy={true}
      a11y={{ enabled: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
      }}
      style={{ padding: "1rem 0" }}
    >
      {tabdata?.length > 0 ? (
        tabdata.map((item) => (
          <SwiperSlide key={item.id}>
            <PropertyCard
              image={item?.images?.length > 0 ? item.images[0].url : dummyImage}
              title={item.formattedAddress}
              subtitle="We specialise in Real Estate for Brisbane, Gold Coast, Logan, Ipswich, Redland City and Toowoomba."
              buttonText="Learn More"
              onClick={() => message.log("Clicked:", item.id)} // example handler
            />
          </SwiperSlide>
        ))
      ) : (
        <PropertiesNotFound />
      )}
    </Swiper>
  );
}
