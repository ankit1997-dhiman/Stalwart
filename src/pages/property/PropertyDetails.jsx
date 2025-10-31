import React, { useEffect, useState } from "react";
import dummyImage from "@/assets/images/dummy-image.jpg";
import { CalendarOutlined } from "@ant-design/icons";
import { graphqlRequest } from "@/utils/graphqlRequest";
import { AgentCard } from "./components/AgentCard";
import { PropertyInfo } from "./components/PropertyInfo";
import { PropertySection } from "./components/PropertySection";
import { Link, useMatch, useParams } from "react-router-dom";
import { RawHtml } from "@/components/RawHtml";
import { MapCanvas } from "@/components/MapCanvas";
import { RelatedProperties } from "./components/RelatedProperties";
import moment from "moment";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { ShareModal } from "@/components/share/ShareModal";
import { GET_PROPERTY_BY_ID } from "@/queries/propertyById";
import { message } from "antd";
import { GalleryModal } from "@/components/modals/GalleryModal";
import StickyButton from "@/common/Button/StickyButton";
import CustomModal from "@/components/modals/CustomModal";
import EnquiryFrom from "@/components/modals/EnquiryFrom";
import { Preloader } from "@/common/preloader/Preloader";
import { FaRegCalendar } from "react-icons/fa";
import { addToGoogleCalendar } from "@/utils/addToCalendar";

export const PropertyDetails = () => {
  const [propertyData, setPropertyData] = useState(null);

  const [openGalleryModal, setOpenGalleryModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openShareModal, setOpenShareModal] = useState(false);
  const { id } = useParams();

  const matchProperty = useMatch("/property/:id");
  const showButton = matchProperty;

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

  if (!id) return null;

  if (!propertyData) return null;

  const formattedPrice =
    propertyData?.advertisedPrice ||
    new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      minimumFractionDigits: 0,
    }).format(propertyData.advertisedPrice || 0);

  const handleShareCancel = () => {
    setOpenShareModal(false);
  };
  const handleGalleryCancel = () => {
    setOpenGalleryModal(false);
  };
  const handleEnquiryCancel = () => setOpen(false);

  const hasInspections = propertyData?.inspections;
  console.log(hasInspections);

  const hasFloorplan =
    propertyData?.floorplans &&
    propertyData.floorplans.length > 0 &&
    propertyData.floorplans[0]?.url;

  const images = propertyData?.images?.length ? propertyData.images : [];
  const sortedImages = images.sort((a, b) => a.position - b.position);
  const hasAgents = propertyData?.agents && propertyData.agents.length > 0;

  return loading ? (
    <Preloader />
  ) : (
    <div className="pt-10">
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
        <section className="container flex flex-col md:flex-row justify-between gap-10 lg:gap-10 py-10 lg:py-25">
          <div className="w-full lg:w-[300px]">
            <p className="leading-5 font-moderat-bold text-base uppercase">
              {propertyData.headline}
            </p>
          </div>

          <div className="w-full lg:w-[70%] space-y-4">
            <div className="leading-5 pb-2.5 md:pb-5 font-moderat-regular text-sm text-justify">
              {propertyData?.description ? (
                <RawHtml html={propertyData.description} />
              ) : (
                <p className="text-gray-500">No description available.</p>
              )}
            </div>
          </div>
        </section>

        <section className="container flex flex-col md:flex-row justify-between gap-10 lg:gap-10 pb-10 lg:pb-25">
          <div className="w-full md:w-[300px] space-y-10">
            <PropertyInfo
              label={`For ${propertyData?.saleOrLease || "Sale"}`}
              value={formattedPrice}
            />

            <>
              {hasInspections.nodes.length ? (
                <>
                  <p className="leading-5 font-bold font-moderat-bold uppercase text-sm lg:text-base pb-2 lg:pb-4 ">
                    Next Inspection/Auction
                  </p>
                  {hasInspections?.nodes
                    .filter((item) => {
                      const eventTime = moment.tz(
                        item.start,
                        "Australia/Brisbane"
                      );
                      const now = moment.tz("Australia/Brisbane");
                      return eventTime.isSameOrAfter(now); // ✅ show only future or current
                    })
                    .map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-start gap-2 font-moderat-medium text-sm lg:text-base  group-hover:text-white text-left"
                      >
                        <p>
                          {" "}
                          {moment
                            .tz(item.start, "Australia/Brisbane")
                            .format("DD MMM YYYY, h:mm A")}
                        </p>

                        <FaRegCalendar
                          className="cursor-pointer transition"
                          onClick={() =>
                            addToGoogleCalendar(item.start, item.finish)
                          }
                        />
                      </div>
                    ))}
                </>
              ) : null}

              {}
            </>

            <p
              className="leading-5 font-moderat-bold uppercase pb-5 text-base cursor-pointer"
              onClick={() => setOpenGalleryModal(true)}
            >
              Gallery {propertyData?.images?.length || 0}
            </p>

            {hasFloorplan && (
              <p className="pb-5">
                <Link
                  to={propertyData.floorplans[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-5 font-moderat-bold uppercase text-base"
                >
                  Floorplan
                </Link>
              </p>
            )}

            {propertyData?.documents?.length > 0 && (
              <>
                <button
                  className="leading-5 font-moderat-bold uppercase text-base cursor-pointer"
                  onClick={() => {
                    propertyData.documents.forEach((item, idx) => {
                      if (item?.url) {
                        setTimeout(() => {
                          const link = document.createElement("a");
                          link.href = item.url;
                          link.download =
                            item.filename || `document-${idx + 1}`;
                          link.target = "_blank";
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }, idx * 800);
                      }
                    });
                  }}
                >
                  <span className="leading-5 font-moderat-bold uppercase text-base">
                    Download Documents
                  </span>
                </button>
              </>
            )}

            <div className="space-y-2 flex flex-col gap-5 pt-5 lg:pt-15">
              <button
                className="border-1 border-black py-5 px-8 w-full lg:w-64 hover:bg-black hover:text-white group cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <span className="group-hover:text-white">Enquire Now</span>
              </button>
              <button
                className="border-1 border-black py-5 px-8 w-full lg:w-64 hover:bg-black hover:text-white group cursor-pointer"
                onClick={() => setOpenShareModal(true)}
              >
                <span className="group-hover:text-white">Share</span>
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-[70%]">
            <div className="flex flex-col 2xl:flex-row  gap-10 items-stretch">
              <div className="w-full 2xl:w-[60%] !z-10">
                {sortedImages && sortedImages.length > 0 ? (
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={16}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 8000, disableOnInteraction: false }}
                    loop
                    preloadImages={false}
                    lazy={{ loadPrevNext: true }}
                    a11y={{ enabled: true }}
                    className="property-swiper"
                  >
                    {sortedImages.map((item, index) => (
                      <SwiperSlide key={item.id || index}>
                        <img
                          src={item?.url ? item?.url : dummyImage}
                          alt={`Property image ${index + 1}`}
                          loading="lazy"
                          className="lg:h-[612px] lg:w-[812px] w-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <PropertiesNotFound description="No images found" />
                )}
              </div>

              <div className="w-full 2xl:w-[40%] flex flex-col justify-between gap-10">
                {hasAgents ? (
                  propertyData?.agents.map((agent) => (
                    <AgentCard
                      key={agent?.id}
                      name={agent?.name}
                      email={agent?.email}
                      phone={agent?.mobile}
                      image={agent?.avatarUrl}
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
                <div style={{ width: "" }}>
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
        <div className="container">
          <RelatedProperties />
        </div>

        <ShareModal
          openShareModal={openShareModal}
          setOpenShareModal={setOpenShareModal}
          handleShareCancel={handleShareCancel}
        />
        <GalleryModal
          openGalleryModal={openGalleryModal}
          setOpenGalleryModal={setOpenGalleryModal}
          sortedImages={sortedImages}
          handleGalleryCancel={handleGalleryCancel}
        />

        <CustomModal isOpen={open} onClose={handleEnquiryCancel}>
          <EnquiryFrom
            open={open}
            setOpen={setOpen}
            address={propertyData?.formattedAddress}
            listingDetails={propertyData?.listingDetails}
            street={propertyData?.street}
            headline={propertyData?.headline}
            description={propertyData.description}
          />
        </CustomModal>
      </div>
      {showButton && (
        <div className="flex items-center justify-center z-30">
          <StickyButton
            handleClick={() => setOpen(true)}
            isModalOpen={open}
            setIsModalOpen={setOpen}
          />
        </div>
      )}
    </div>
  );
};
