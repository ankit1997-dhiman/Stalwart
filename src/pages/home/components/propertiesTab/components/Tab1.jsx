import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PropertyCard from "./PropertyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import dummyImage from "@/assets/images/dummy-image.jpg";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { useTruncateText } from "@/hooks/useTruncateText";

export const Tab1 = ({ tabdata }) => {
  return (
    <>
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
          640: 1,
          768: 1,
          1024: 1,
        }}
      >
        {tabdata?.length > 0 ? (
          tabdata.map((item) => (
            <SwiperSlide key={item.id}>
              <PropertyCard
                id={item.id}
                image={
                  item?.images?.length > 0 ? item.images[0].url : dummyImage
                }
                address={item.formattedAddress}
                subtitle={useTruncateText(item.description, 35)}
                buttonText={"Learn More"}
                onClick={() => onClick(item)}
              />
            </SwiperSlide>
          ))
        ) : (
          <PropertiesNotFound />
        )}
      </Swiper>
    </>
  );
};
