import React, { useEffect, useState } from "react";
import PropertyCard from "../home/components/propertiesTab/components/PropertyCard";
import image from "@/assets/images/tab-image.png";
import MapImage from "@/assets/images/map.png";
import PropoertyImage from "@/assets/images/property.png";
import { CalendarOutlined } from "@ant-design/icons";
import { Property } from "@/common/properties/Property";
import { message } from "antd";
import { graphqlRequest } from "@/utils/graphqlRequest";
import { AgentCard } from "./components/AgentCard";
import { PropertyInfo } from "./components/PropertyInfo";
import { PropertySection } from "./components/PropertySection";

export const PropertyDetails = () => {
  const [propertiesData, setPropertiesData] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const query = `query GetProperties($first: Int, $status: [PropertyStatusEnum!]) {
        properties(first: $first, status: $status, orderBy: CREATED_AT_DESC) {
          nodes {
            id
            price
            formattedAddress
            status
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
            images { url }
          }
        }
      }`;

      try {
        const res = await graphqlRequest(query);
        const activeProperties =
          res?.data?.properties?.nodes?.filter((p) => p.status === "ACTIVE") ||
          [];
        setPropertiesData(activeProperties);
      } catch (error) {
        message.error(error.message);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="container pt-30 ">
      <PropertySection
        image={image}
        title="3 Waitara Street, Logan Central | QLD 4114"
        subtitle="We specialise in Real Estate for Brisbane, Gold Coast, Logan, Ipswich, Redland City and Toowoomba."
        buttonText="Learn More"
      />
      <div className="px-12.5 md:px-0">
        {/* Description Section */}
        <section className="flex flex-col md:flex-row justify-between gap-10 lg:gap-20 py-10 lg:py-25">
          <div className="w-full md:w-[35%] lg:w-[25%]">
            <p className="leading-5 font-moderat-bold text-base">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium
            </p>
          </div>
          <div className="w-full md:w-[65%] lg:w-[75%] space-y-4">
            <p className="leading-5 pb-2.5 md:pb-5 font-moderat-regular text-sm">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur.
            </p>
            <p className="leading-5 pb-2.5 md:pb-5 text-sm">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur.
            </p>
          </div>
        </section>

        {/* Property Details Section */}
        <section className="flex flex-col md:flex-row justify-between gap-10 lg:gap-20 py-10 lg:py-25">
          <div className="w-full md:w-[35%] lg:w-[25%]">
            <PropertyInfo
              label="For sale/lease"
              value="$000,000-0,000,000 / 000 p/w"
            />
            <PropertyInfo
              label="Next Inspection/Auction"
              value="08 Jul 2025 1:00 PM"
              Icon={CalendarOutlined}
            />

            <p className="leading-5 font-moderat-bold uppercase pb-5 text-base">
              Gallery (12)
            </p>
            <p className="leading-5 font-moderat-bold uppercase pb-5 text-base">
              Floorplan
            </p>
            <p className="leading-5 font-moderat-bold uppercase pb-15 text-base">
              Seller Disclosure Statement
            </p>

            <div className="space-y-2 flex flex-col gap-5">
              <button className="border-1 border-black py-5 px-8 w-full lg:w-64">
                Enquire Now
              </button>
              <button className="border-1 border-black py-5 px-8 w-full lg:w-64">
                Share
              </button>
            </div>
          </div>

          <div className="w-full  md:w-[65%] lg:w-[75%] ">
            <div className="flex flex-wrap gap-10">
              <img src={PropoertyImage} alt="Property" />
              <div className="flex flex-col gap-10">
                <AgentCard />
                <AgentCard />
              </div>
            </div>
            <img src={MapImage} className="w-full py-10" alt="Map" />
          </div>
        </section>

        {/* Related Listings Section */}
        <section className="pb-20">
          <p className="text-2xl font-moderat-medium uppercase py-10">
            Related Listings
          </p>
          <hr className="pb-10" />
          <div className="lg:grid-cols-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {propertiesData.map((property, idx) => (
              <Property
                key={idx}
                address={property.formattedAddress}
                image={property.images?.[0]?.url}
                price={property.price}
                bed={property.listingDetails?.bedrooms}
                bathrooms={property.listingDetails?.bathrooms}
                carportSpaces={property.listingDetails?.carportSpaces}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
