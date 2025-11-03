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
import { message, Skeleton } from "antd";
import { graphqlRequest } from "@/utils/graphqlRequest";
import { GET_SALE_PROPERTIES } from "@/queries/propertyQueries";

export const Tab1 = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const variables = {
        first: 50,
        status: ["ACTIVE", "UNDER_OFFER"],
      };
      const res = await graphqlRequest(
        "/api/graphql",
        GET_SALE_PROPERTIES,
        variables
      );
      let nodes = res?.data?.properties?.nodes || [];
      nodes = nodes.filter((p) => p.featured === true);

      setData(nodes);
      setLoading(false);
    } catch (error) {
      message.error(error.message || "Something went wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  if (loading) {
    // 🦴 Show skeleton swiper (maintains layout)
    return (
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
  }

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
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
        {data?.length > 0 ? (
          data.map((item) => (
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
