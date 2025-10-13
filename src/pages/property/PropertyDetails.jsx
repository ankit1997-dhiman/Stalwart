import React, { useEffect, useState } from "react";
import image from "@/assets/images/tab-image.png";
import dummyImage from "@/assets/images/dummy-image.jpg";
import { CalendarOutlined, OpenAIFilled } from "@ant-design/icons";
import { message } from "antd";
import { graphqlRequest } from "@/utils/graphqlRequest";
import { AgentCard } from "./components/AgentCard";
import { PropertyInfo } from "./components/PropertyInfo";
import { PropertySection } from "./components/PropertySection";
import { Link, useParams } from "react-router-dom";
import { NotFound } from "../NotFound";
import { RawHtml } from "@/components/RawHtml";
import { MapCanvas } from "@/components/MapCanvas";
import { RelatedProperties } from "./components/RelatedProperties";
import moment from "moment";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import EnquiryModal from "@/common/modal/EnquiryModal";
import { ShareModal } from "@/components/share/ShareModal";

export const PropertyDetails = () => {
  const [propertyData, setPropertyData] = useState(null);
  const [open, setOpen] = useState(false);
  const [openShareModal, setOpenShareModal] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProperties = async () => {
      const query = `
        query GetSaleProperties($ids: [ID!], $first: Int, $status: [PropertyStatusEnum!]) {
          properties(
            first: $first
            status: $status
            orderBy: CREATED_AT_DESC
            ids: $ids
          ) {
            totalCount
            nodes {
              id
              price
              formattedAddress
              status
              saleOrLease
              advertisedPrice
              latitude
              longitude
              description
              featured
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

              agents {
                id
                name
                avatarUrl
                email
                phone
              }
                 inspections {
        nodes {
          id
          finish
          start
          
        }
      }
        floorplans {
        url
        id
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

      const variables = { ids: [id] };

      try {
        const res = await graphqlRequest(query, variables);
        const property = res?.data?.properties?.nodes?.[0];
        setPropertyData(property || null);
      } catch (error) {
        message.error(error.message);
      }
    };

    fetchProperties();
  }, [id]);

  if (!id || !propertyData) return <NotFound />;

  // ✅ Format the price (AUD)
  const formattedPrice = propertyData?.price
    ? new Intl.NumberFormat("en-AU", {
        style: "currency",
        currency: "AUD",
        minimumFractionDigits: 0,
      }).format(propertyData.price)
    : propertyData?.advertisedPrice || "Contact Agent";

  return (
    <div className="container pt-24">
      {/* 🏠 Property Banner Section */}
      <PropertySection
        image={propertyData?.images?.[0]?.url || image}
        address={propertyData?.formattedAddress}
        listingDetails={propertyData?.listingDetails}
        buttonText="TBD"
      />

      <div className="px-12.5 md:px-0">
        {/* 📝 Description Section */}
        <section className="flex flex-col md:flex-row justify-between gap-10 lg:gap-20 py-10 lg:py-25">
          <div className="w-full md:w-[35%] lg:w-[25%]">
            <p className="leading-5 font-moderat-bold text-base">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium
            </p>
          </div>

          <div className="w-full md:w-[65%] lg:w-[75%] space-y-4">
            <div className="leading-5 pb-2.5 md:pb-5 font-moderat-regular text-sm">
              <RawHtml html={propertyData?.description} />
            </div>
          </div>
        </section>

        {/* 🏘️ Property Info Section */}
        <section className="flex flex-col md:flex-row justify-between gap-10 lg:gap-20 pb-10 lg:pb-25">
          {/* Left Column */}
          <div className="w-full md:w-[35%] lg:w-[25%] space-y-5">
            <PropertyInfo
              label={`For ${propertyData.saleOrLease}`}
              value={formattedPrice}
            />
            {propertyData?.inspections.nodes.length > 0 && (
              <PropertyInfo
                label="Next Inspection/Auction"
                value={
                  propertyData?.inspections.nodes.length
                    ? moment(propertyData?.inspections.nodes[0].start).format(
                        "DD MMM YYYY, h:mm A"
                      )
                    : null
                }
                Icon={CalendarOutlined}
              />
            )}

            <p className="leading-5 font-moderat-bold uppercase pb-5 text-base">
              Gallery {propertyData?.images?.length || 0}
            </p>

            {propertyData?.floorplans[0]?.url && (
              <p className="pb-5">
                <Link
                  href={propertyData?.floorplans[0]?.url}
                  target="_blank"
                  className="leading-5 font-moderat-bold uppercase  text-base"
                >
                  Floorplan
                </Link>
              </p>
            )}
            <p className="leading-5 font-moderat-bold uppercase pb-15 text-base">
              Download Document
            </p>

            <div className="space-y-2 flex flex-col gap-5 pt-5 lg:pt-15">
              <button
                className="border-1 border-black py-5 px-8 w-full lg:w-64"
                onClick={() => setOpen(true)}
              >
                Enquire Now
              </button>
              <button
                className="border-1 border-black py-5 px-8 w-full lg:w-64"
                onClick={() => setOpenShareModal(true)}
              >
                Share
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-[65%] lg:w-[75%]">
            <div className="flex flex-col lg:flex-row gap-10 items-stretch">
              <div className="w-full lg:w-[703px]">
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
                    1024: { slidesPerView: 1 },
                  }}
                  className="property-slider"
                  // style={{ padding: "1rem 0" }}
                >
                  {propertyData?.images.length > 0 ? (
                    propertyData?.images?.map((item) => (
                      <SwiperSlide key={item.id}>
                        <img
                          src={item.url || dummyImage}
                          alt="Property"
                          className="lg:h-[612px] lg:w-[812px]"
                        />
                      </SwiperSlide>
                    ))
                  ) : (
                    <PropertiesNotFound description="No images Found" />
                  )}
                </Swiper>
              </div>

              <div className=" flex flex-col gap-10 lg:h-[612px] ">
                {/* 🧍 Agent Details */}
                {propertyData?.agents?.length > 0 ? (
                  propertyData.agents.map((agent) => (
                    <AgentCard
                      key={agent.id}
                      name={agent.name}
                      email={agent.email}
                      phone={agent.phone}
                      image={agent.avatarUrl}
                    />
                  ))
                ) : (
                  <p className="text-gray-500">
                    No agent information available.
                  </p>
                )}
              </div>
            </div>
            <div className="py-10">
              <MapCanvas
                latitude={propertyData.latitude}
                longitude={propertyData.longitude}
              />
            </div>
            {/* <img src={MapImage} className="w-full py-10" alt="Map" /> */}
          </div>
        </section>

        {/* 🏡 Related Listings Section */}
        <RelatedProperties />
        <EnquiryModal setIsModalOpen={setOpen} isModalOpen={open} />
        <ShareModal
          openShareModal={openShareModal}
          setOpenShareModal={setOpenShareModal}
        />
      </div>
    </div>
  );
};
