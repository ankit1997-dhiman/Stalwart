import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { Modal } from "antd";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const GalleryModal = ({ openGalleryModal, sortedImages }) => {
  return (
    <Modal
      open={openGalleryModal}
      footer={false}
      className="custom-modal"
      width={800}
      //   onCancel={handleShareCancel}
    >
      {sortedImages && sortedImages.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          loop
          preloadImages={false}
          lazy={{ loadPrevNext: true }}
          a11y={{ enabled: true }}
          className="property-swiper"
        >
          {sortedImages.map((item, index) => (
            <SwiperSlide key={item.id || index}>
              <img
                src={item.url || dummyImage}
                alt={`Property image ${index + 1}`}
                loading="lazy"
                className="lg:h-[612px] lg:w-[812px] w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <PropertiesNotFound description="No images found" />
      )}
    </Modal>
  );
};
