import React, { useEffect, useState } from "react";
import { Property } from "@/common/properties/Property";
import { graphqlRequest } from "@/utils/graphqlRequest";
import { message, Skeleton } from "antd";
import { Link } from "react-router-dom";
import IconImage from "@/assets/icons/black-arrow-right.svg";
import ButtonWithIcon from "@/common/Button/ButtonWithIcon";
import { GET_SALE_PROPERTIES } from "@/queries/propertyQueries";
import { URLS } from "@/constants/Urls";

export const CurrentProperties = ({ title }) => {
  const [propertiesData, setPropertiesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const variables = { status: ["ACTIVE"] };
        const res = await graphqlRequest(GET_SALE_PROPERTIES, variables);

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

        <Link
          to={URLS.BUY}
          className="mt-6 lg:mt-16 inline-flex items-center font-semibold text-sm text-black"
        >
          <ButtonWithIcon
            text="See All"
            iconPosition="right"
            iconImage={IconImage}
            className="border-none font-bold font-moderat uppercase"
          />
        </Link>
      </div>

      {/* Right Grid */}
      <div className="w-full lg:w-[1136px] grid grid-cols-1 lg:grid-cols-2 gap-12.5 lg:gap-7.5">
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
