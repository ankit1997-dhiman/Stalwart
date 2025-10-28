import React, { useEffect, useState } from "react";
import dummyImage from "@/assets/images/dummy-image.jpg";
import { CalendarOutlined } from "@ant-design/icons";
import { graphqlRequest } from "@/utils/graphqlRequest";
import { AgentCard } from "./components/AgentCard";
import { PropertyInfo } from "./components/PropertyInfo";
import { PropertySection } from "./components/PropertySection";
import { useParams } from "react-router-dom";
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
import { GET_PROPERTY_BY_ID } from "@/queries/propertyById";
import { message, Skeleton } from "antd";

export const PropertyDetails = () => {
  const [propertyData, setPropertyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [openShareModal, setOpenShareModal] = useState(false);
  const { id } = useParams();

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const variables = { ids: [id] };
      const res = await graphqlRequest(
        "/api/graphql",
        GET_PROPERTY_BY_ID,
        variables
      );
      const property = res?.data?.properties?.nodes?.[0] || null;
      setPropertyData(property);
    } catch (error) {
      message.error(error.message || "Failed to fetch property details");
      setPropertyData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchProperties();
  }, [id]);

  if (!id) return <NotFound />;

  // 🦴 Skeleton Loader Layout

  if (!propertyData) return <NotFound />;

  const formattedPrice =
    propertyData?.advertisedPrice ||
    new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      minimumFractionDigits: 0,
    }).format(propertyData.advertisedPrice || 0);

  const handleShareCancel = () => setOpenShareModal(false);
  const handleEnquiryCancel = () => setOpen(false);

  const hasInspections =
    propertyData?.inspections?.nodes &&
    propertyData.inspections.nodes.length > 0;

  const hasFloorplan =
    propertyData?.floorplans &&
    propertyData.floorplans.length > 0 &&
    propertyData.floorplans[0]?.url;

  const images = propertyData?.images?.length ? propertyData.images : [];
  const sortedImages = images.sort((a, b) => a.position - b.position);
  const hasAgents = propertyData?.agents && propertyData.agents.length > 0;

  return (
    <div className="container pt-24">
      {/* 🏠 Property Banner Section */}
      <PropertySection
        image={propertyData?.images}
        address={propertyData?.formattedAddress}
        listingDetails={propertyData?.listingDetails}
        buttonText={`${
          propertyData.status === "SOLD" ? "SOLD" : "Enquire Now"
        }`}
        onClick={() =>
          `${propertyData.status === "SOLD" ? null : setOpen(true)}`
        }
      />

      <div className="px-12.5 md:px-0">
        {/* 📝 Description Section */}
        <section className="flex flex-col md:flex-row justify-between gap-10 lg:gap-20 py-10 lg:py-25">
          <div className="w-full md:w-[35%] lg:w-[25%]">
            <p className="leading-5 font-moderat-bold text-base uppercase">
              Description
            </p>
          </div>

          <div className="w-full md:w-[65%] lg:w-[75%] space-y-4">
            <div className="leading-5 pb-2.5 md:pb-5 font-moderat-regular text-sm">
              {propertyData?.description ? (
                <RawHtml html={propertyData.description} />
              ) : (
                <p className="text-gray-500">No description available.</p>
              )}
            </div>
          </div>
        </section>

        {/* 🏘️ Property Info Section */}
        <section className="flex flex-col md:flex-row justify-between gap-10 lg:gap-20 pb-10 lg:pb-25">
          {/* Left Column */}
          <div className="w-full md:w-[35%] lg:w-[25%] space-y-5">
            <PropertyInfo
              label={`For ${propertyData?.saleOrLease || "Sale"}`}
              value={formattedPrice}
            />

            {hasInspections && (
              <PropertyInfo
                label="Next Inspection/Auction"
                value={moment(propertyData.inspections.nodes[0].start).format(
                  "DD MMM YYYY, h:mm A"
                )}
                Icon={CalendarOutlined}
              />
            )}

            <p className="leading-5 font-moderat-bold uppercase pb-5 text-base">
              Gallery {propertyData?.images?.length || 0}
            </p>

            {hasFloorplan && (
              <p className="pb-5">
                <a
                  href={propertyData.floorplans[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-5 font-moderat-bold uppercase text-base"
                >
                  Floorplan
                </a>
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
            <div className="flex flex-col xl:flex-row gap-10 items-stretch">
              <div className="w-full lg:w-[703px] !z-10">
                {sortedImages.length > 0 ? (
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
                  >
                    {sortedImages.map((item) => (
                      <SwiperSlide key={item.id}>
                        <img
                          src={item.url || dummyImage}
                          alt="Property"
                          className="lg:h-[612px] lg:w-[812px] object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <PropertiesNotFound description="No images Found" />
                )}
              </div>

              <div className="flex flex-col justify-between gap-10  ">
                {hasAgents ? (
                  propertyData.agents.map((agent) => (
                    <AgentCard
                      key={agent.id}
                      name={agent.name}
                      email={agent.email}
                      phone={agent.mobile}
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
              {propertyData?.latitude && propertyData?.longitude ? (
                <div style={{ height: "300px", width: "100%" }}>
                  <MapCanvas
                    latitude={propertyData.latitude}
                    longitude={propertyData.longitude}
                  />
                </div>
              ) : (
                <p className="text-gray-500 text-sm">
                  Map coordinates not available.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* 🏡 Related Listings Section */}
        <RelatedProperties />

        <EnquiryModal
          setIsModalOpen={setOpen}
          isModalOpen={open}
          propertyTitle={propertyData?.formattedAddress}
          listingDetails={propertyData?.listingDetails}
          handleCancel={handleEnquiryCancel}
        />

        <ShareModal
          openShareModal={openShareModal}
          setOpenShareModal={setOpenShareModal}
          handleShareCancel={handleShareCancel}
        />
      </div>
    </div>
  );
};
