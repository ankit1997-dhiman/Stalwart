import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PropertyCard from "./PropertyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import dummyImage from "@/assets/images/dummy-image.jpg";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { useTruncateText } from "@/hooks/useTruncateText";
import { Skeleton } from "antd";

export const Tab1 = ({ tabdata = [] }) => {
  const [loading, setLoading] = useState(true);

  // ⏱️ Simulate image loading or wait for them to load
  useEffect(() => {
    if (!tabdata?.length) {
      setLoading(false);
      return;
    }

    let isMounted = true;
    const imagePromises = tabdata.map((item) => {
      const img = new Image();
      img.src =
        item?.images?.[0]?.url ||
        (typeof item.images === "string" ? item.images : dummyImage);
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve; // still resolve on error
      });
    });

    // Add a maximum timeout (3s fallback)
    Promise.allSettled([
      ...imagePromises,
      new Promise((resolve) => setTimeout(resolve, 3000)),
    ]).then(() => {
      if (isMounted) setLoading(false);
    });

    return () => {
      isMounted = false;
    };
  }, [tabdata]);

  // 🦴 Skeleton placeholder while loading
  const renderSkeleton = () => (
    <div className="relative border border-gray-300 rounded overflow-hidden h-[400px] lg:h-[480px] p-6 bg-white">
      <Skeleton.Image active className="!w-full !h-[240px] !rounded-lg" />
      <div className="pt-6">
        <Skeleton active paragraph={{ rows: 2 }} title={false} />
      </div>
      <div className="pt-4 flex justify-end">
        <Skeleton.Button active size="large" shape="default" />
      </div>
    </div>
  );

  if (loading) {
    // 🦴 Show skeleton swiper (maintains layout)
    return (
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <SwiperSlide key={i}>{renderSkeleton()}</SwiperSlide>
        ))}
      </Swiper>
    );
  }

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
                image={item?.images?.length > 0 ? item.images : dummyImage}
                address={item.formattedAddress}
                subtitle={useTruncateText(item.description, 35)}
                onClick={() => console.log("Clicked:", item.id)}
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
