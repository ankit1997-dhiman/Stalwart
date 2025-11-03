import React, { useEffect, useState } from "react";
import { Property } from "@/common/properties/Property";
import { graphqlRequest } from "@/utils/graphqlRequest";
import { message, Skeleton } from "antd";
import { Link } from "react-router-dom";
import { GET_SALE_PROPERTIES } from "@/queries/propertyQueries";
import { URLS } from "@/constants/Urls";
import { LenisAnimatedLink } from "@/components/LenisAnimatedLink";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { useTruncateText } from "@/hooks/useTruncateText";
import { BlackArrow } from "@/assets/icons/BlackArrow";
import { magicText } from "@/constants/constants";

export const CurrentProperties = ({ title, desc, status, order }) => {
  const [propertiesData, setPropertiesData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(order);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const variables = {
          status: [status ? status : "ACTIVE"],
          orderBy: order == "SOLD_DATE_DESC" ? "SOLD_DATE_DESC" : null,
        };
        const res = await graphqlRequest(
          "/api/graphql",
          GET_SALE_PROPERTIES,
          variables
        );

        if (res?.data?.properties?.nodes?.length) {
          const allProperties = res.data.properties.nodes;
          setPropertiesData(allProperties.slice(0, 4));
        } else {
          setPropertiesData([]);
        }
      } catch (error) {
        console.error("GraphQL error:", error);
        message.error(error?.message || "Failed to load properties");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // 🦴 Skeleton Loader for Property Cards
  const renderSkeleton = () => (
    <div className="relative border border-gray-300 rounded overflow-hidden h-[300px] lg:h-[450px] p-5">
      <Skeleton.Image active className="!w-full !h-[200px]" />
      <div className="pt-5">
        <Skeleton active paragraph={{ rows: 2 }} title={false} />
      </div>
    </div>
  );

  return (
    <section className="container flex flex-col lg:flex-row justify-between gap-16 lg:gap-7.5 px-12.5 xl:px-0">
      {/* Left Section */}
      <div className="w-full lg:w-[553px]">
        <p className="text-base md:text-2xl font-medium font-moderat-medium">
          {title || "Current Properties"}
        </p>
        <p className="text-black text-xs md:text-sm font-moderat-regular pt-7">
          {desc ||
            "We specialise in Real Estate for Brisbane, Gold Coast, Logan, Ipswich, Redland City and Toowoomba."}
        </p>

        <LenisAnimatedLink
          to={URLS.BUY}
          iconPosition="right"
          icon={<BlackArrow />}
          className="mt-6 lg:mt-16 inline-flex items-center text-xs lg:text-sm border-none font-moderat-bold uppercase !text-black"
        >
          See All
        </LenisAnimatedLink>
      </div>

      <div className="md:hidden">
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
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
        >
          {propertiesData?.length > 0 ? (
            propertiesData.map((item) => (
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
                />
              </SwiperSlide>
            ))
          ) : (
            <PropertiesNotFound />
          )}
        </Swiper>
      </div>

      {/* Right Grid */}
      <div className="hidden w-full lg:w-[1136px] md:grid grid-cols-1 lg:grid-cols-2 gap-12.5 lg:gap-7.5">
        {loading ? (
          // 🦴 Show Skeletons
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i}>{renderSkeleton()}</div>
          ))
        ) : propertiesData.length > 0 ? (
          // 🏡 Render Properties
          propertiesData.map((property, idx) => (
            <Link
              key={property.id || idx}
              to={`/property/${property.id}`}
              className="w-full"
            >
              <Property
                id={property.id}
                address={property.formattedAddress}
                image={property.images?.length ? property.images : []}
                price={property.advertisedPrice}
                bed={property?.listingDetails?.bedrooms}
                bathrooms={property?.listingDetails?.bathrooms}
                carportSpaces={property?.listingDetails?.carportSpaces}
                garageSpaces={property?.listingDetails?.garageSpaces}
                openCarSpaces={property?.listingDetails?.openCarSpaces}
                soldTag={property.status === "SOLD"}
                leaseTag={property.status === "LEASED"}
              />
            </Link>
          ))
        ) : (
          // ❌ No Properties Found
          <div className="text-center text-gray-500 text-sm py-10 col-span-2">
            No properties available at the moment.
          </div>
        )}
      </div>
    </section>
  );
};
