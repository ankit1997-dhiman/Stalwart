import React, { useEffect, useState } from "react";
// import Property from "@/common/properties/Property";
import { Property } from "@/common/properties/Property";
import { graphqlRequest } from "@/utils/graphqlRequest";
import { message } from "antd";
import { Link } from "react-router-dom";
import { URLS } from "@/constants/Urls";

export const CurrentProperties = () => {
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
    <section className="container pb-30 grid grid-cols-1 lg:grid-cols-4 gap-8 px-12.5 xl:px-0">
      {/* Left Section */}
      <div className="lg:col-span-1 flex flex-col justify-between">
        <div>
          <h2 className="text-base md:text-xl font-medium mb-7 md:mb-4 font-moderat-medium">
            OUR CURRENT PROPERTIES
          </h2>
          <p className="text-black text-xs md:text-sm">
            We specialise in Real Estate for Brisbane, Gold Coast, Logan,
            Ipswich, Redland City and Toowoomba.
          </p>
          <a
            href="#"
            className="mt-16 inline-flex items-center font-semibold text-sm text-black hover:underline"
          >
            SEE ALL <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      {/* Right Grid */}
      <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {propertiesData.map((property, idx) => (
          <Link to={`/property/${property.id}`}>
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
