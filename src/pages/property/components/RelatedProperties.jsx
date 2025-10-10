import { Property } from "@/common/properties/Property";
import { graphqlRequest } from "@/utils/graphqlRequest";
import { message } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const RelatedProperties = () => {
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
      const variables = { first: 3, status: ["ACTIVE"] };
      try {
        const res = await graphqlRequest(query, variables);

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
  return (
    <section className="pb-20">
      <p className="text-2xl font-moderat-medium uppercase py-10">
        Related Listings
      </p>
      <hr className="pb-10" />
      <div className="lg:grid-cols-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* You can map related properties here later */}
        {propertiesData.map((property, idx) => (
          <Link to={`/property/${property.id}`}>
            <Property
              key={idx}
              address={property.formattedAddress}
              image={property.images?.[0]?.url}
              price={property.price}
              bed={property.listingDetails?.bedrooms}
              bathrooms={property.listingDetails?.bathrooms}
              carportSpaces={property.listingDetails?.carportSpaces}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
