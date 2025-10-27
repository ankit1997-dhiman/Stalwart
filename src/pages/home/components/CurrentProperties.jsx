import React, { useEffect, useState } from "react";
import { Property } from "@/common/properties/Property";
import { graphqlRequest } from "@/utils/graphqlRequest";
import { message, Skeleton } from "antd";
import { Link } from "react-router-dom";
import IconImage from "@/assets/icons/black-arrow-right.svg";
import ButtonWithIcon from "@/common/Button/ButtonWithIcon";
import { GET_SALE_PROPERTIES } from "@/queries/propertyQueries";
import { URLS } from "@/constants/Urls";
import { LenisAnimatedLink } from "@/components/LenisAnimatedLink";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { useTruncateText } from "@/hooks/useTruncateText";

export const CurrentProperties = ({ title }) => {
  const [propertiesData, setPropertiesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const variables = { status: ["ACTIVE"] };
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
          We specialise in Real Estate for Brisbane, Gold Coast, Logan, Ipswich,
          Redland City and Toowoomba.
        </p>

        <LenisAnimatedLink
          to={URLS.BUY}
          iconPosition="right"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="8"
              viewBox="0 0 29 8"
              fill="none"
            >
              <path
                d="M28.3536 4.03568C28.5488 3.84042 28.5488 3.52384 28.3536 3.32858L25.1716 0.146597C24.9763 -0.048665 24.6597 -0.048665 24.4645 0.146597C24.2692 0.341859 24.2692 0.658442 24.4645 0.853704L27.2929 3.68213L24.4645 6.51056C24.2692 6.70582 24.2692 7.0224 24.4645 7.21766C24.6597 7.41293 24.9763 7.41293 25.1716 7.21767L28.3536 4.03568ZM28 3.68213L28 3.18213L4.37114e-08 3.18213L0 3.68213L-4.37114e-08 4.18213L28 4.18213L28 3.68213Z"
                fill="black"
              />
            </svg>
          }
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
          pagination={{ clickable: true }}
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
                  buttonText={"Learn More"}
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
