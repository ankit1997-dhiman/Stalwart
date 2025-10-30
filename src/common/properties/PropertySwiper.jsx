import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { message } from "antd";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound.jsx";
import dummyImage from "@/assets/images/dummy-image.jpg";
import { useTruncateText } from "@/hooks/useTruncateText";
import { Property } from "./Property";
import { magicText } from "@/constants/constants";

const PropertySwiper = ({
  soldButtonTag,
  tabdata = [],
  slidesPerView = 1,
  delay = 10000,
  buttonText = magicText.view_more_text,
  onClick = (item) => message.info(`Clicked: ${item.id}`),
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={16}
      slidesPerView={slidesPerView}
      navigation
      // pagination={{ clickable: true }}
      autoplay={{ delay, disableOnInteraction: false }}
      loop={true}
      lazy={true}
      a11y={{ enabled: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 3 },
      }}
    >
      {tabdata?.length > 0 ? (
        tabdata.map((item) => (
          <SwiperSlide key={item.id}>
            <Property
              price={item.advertisedPrice}
              bed={item.listingDetails.bedrooms}
              bathrooms={item.listingDetails.bathrooms}
              carportSpaces={item.listingDetails.carportSpaces}
              garageSpaces={item.listingDetails.garageSpaces}
              openCarSpaces={item.listingDetails.openCarSpaces}
              id={item.id}
              image={item?.images?.length > 0 ? item.images : dummyImage}
              address={item.formattedAddress}
              subtitle={useTruncateText(item.description, 35)}
              buttonText={buttonText}
              onClick={() => onClick(item)}
              soldTag={soldButtonTag && true}
            />
          </SwiperSlide>
        ))
      ) : (
        <PropertiesNotFound />
      )}
    </Swiper>
  );
};

export default PropertySwiper;
