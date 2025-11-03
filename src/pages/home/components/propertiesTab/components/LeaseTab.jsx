import React, { useEffect, useState } from "react";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { graphqlRequest } from "@/utils/graphqlRequest";
import { GET_SALE_PROPERTIES } from "@/queries/propertyQueries";
import { message, Skeleton } from "antd";
import { Property } from "@/common/properties/Property";
import { useTruncateText } from "@/hooks/useTruncateText";
import { magicText } from "@/constants/constants";
import { PropertySkeleton } from "@/common/PropertySkeleton";

export default function LeaseTab() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const variables = {
        first: 50,
        status: ["LEASED"],
      };
      const res = await graphqlRequest(
        "/api/graphql",
        GET_SALE_PROPERTIES,
        variables
      );
      let nodes = res?.data?.properties?.nodes || [];

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

  return loading ? (
    <PropertySkeleton />
  ) : (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={16}
      navigation
      autoplay={{ delay: 8000, disableOnInteraction: false }}
      loop={true}
      lazy={true}
      a11y={{ enabled: true }}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 3 },
      }}
    >
      {data?.length > 0 ? (
        data.map((item) => (
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
              buttonText={magicText.view_more_text}
              onClick={() => onClick(item)}
              soldTag={false}
            />
          </SwiperSlide>
        ))
      ) : (
        <PropertiesNotFound />
      )}
    </Swiper>
  );
}
