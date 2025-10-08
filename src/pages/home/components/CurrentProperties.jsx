import React, { useEffect, useState } from "react";
// import Property from "@/common/properties/Property";
import { Property } from "@/common/properties/Property";
import { graphqlRequest } from "@/utils/graphqlRequest";
import { message } from "antd";
import { Link } from "react-router-dom";
import IconImage from "@/assets/icons/black-arrow-right.svg"
import ButtonWithIcon from "@/common/Button/ButtonWithIcon";

export const CurrentProperties = ({ title }) => {
  const [propertiesData, setPropertiesData] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const query = `query GetProperties($first: Int, $status: [PropertyStatusEnum!]) {
  properties(first: $first, status: $status, orderBy: CREATED_AT_DESC) {
    totalCount
    nodes {
      id
      price
      formattedAddress
      status
      saleOrLease
      listingType
      advertisedPrice
      latitude
      longitude
      createdAt
      updatedAt

      listingDetails {
							  ... on ResidentialSale {
								bedrooms
								bathrooms
								carportSpaces
								garageSpaces
								openCarSpaces
								
							  }
							  ... on ResidentialRental {
								bedrooms
								bathrooms
								carportSpaces
								garageSpaces
								openCarSpaces
							  }
							} 

      vendors {
        contact {
          firstName
          lastName
        }
      }

      images {
        url
      }
    }
  }
}

      `;
      try {
        const res = await graphqlRequest(query);

        if (res.data) {
          const propertiesdummy = res.data.properties.nodes;
          const active = propertiesdummy.filter((p) => p.status === "ACTIVE");
          // const nonActive = propertiesdummy.filter(
          //   (p) => p.status !== "ACTIVE"
          // );
          const onlySaleProperties = res.data.properties.nodes;
          const onlySale = onlySaleProperties.filter(
            (property) => property.status === "SALE"
          );
          // const final = [...active, ...nonActive].slice(0, 4);

          setPropertiesData(active);
        }
      } catch (error) {
        message.error(error.message);
      }
    };
    fetchProperties();
  }, []);
  console.log(propertiesData, 88);

  return (
    <section className="container flex flex-col lg:flex-row justify-between gap-16 lg:gap-7.5 px-12.5 xl:px-0 ">
      {/* Left Section */}
      <div className="w-full lg:w-[553px]">
        <p className="text-base md:text-2xl font-medium font-moderat-medium">
          {title ? title : null}
        </p>
        <p className="text-black text-xs md:text-sm font-moderat-regular pt-7">
          We specialise in Real Estate for Brisbane, Gold Coast, Logan, Ipswich,
          Redland City and Toowoomba.
        </p>
       
         <Link to="#" className="mt-6 lg:mt-16 inline-flex items-center font-semibold text-sm text-black">
          <ButtonWithIcon
            text="See All"
            iconPosition="right"
            iconImage={IconImage}
            className="border-none font-bold font-moderat uppercase"
          />
        </Link>
        
      </div>

      {/* Right Grid */}
      <div className=" w-full lg:w-[1136px] grid grid-cols-1 lg:grid-cols-2 gap-12.5 lg:gap-7.5">
        {propertiesData.map((property, idx) => (
          <Link to={`/property/${property.id}`} className="w-full">
            <Property
              address={property.formattedAddress}
              // property={property}
              key={idx}
              image={property?.images[0]?.url}
              price={property.price}
              bed={property.listingDetails.bedrooms}
              bathrooms={property.listingDetails.bathrooms}
              carportSpaces={property.listingDetails.carportSpaces}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
