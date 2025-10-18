import { WithSectionLayout } from "@/common/properties/WithSectionLayout";
import { bedrooms } from "@/constants/constants";
import { Button, Form, message } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import AuctionCard from "../upcomingAuction/components/AuctionCard";
import { InquiryForm } from "@/components/form/InquiryForm";
import { GET_UPCOMING_INSPECTION } from "@/queries/inspectionQueries";
import { graphqlRequest } from "@/utils/graphqlRequest";
import { GET_AUCTION_PROPERTY } from "@/queries/getAuctionProperty";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { Link } from "react-router-dom";

import dummyImage from "@/assets/images/dummy-image.jpg";

export default function UpcomingAuction() {
  const [upcomingInspectionForm] = Form.useForm();
  const [upcomingAuction, setUpcomingAction] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchInspectionProperties = useCallback(async () => {
    try {
      const dynamicFilters = [];
      dynamicFilters.push({
        type: "AUTHORITY",
        strategy: "IS",
        value: "Auction",
      });

      const variables = {
        ...(dynamicFilters.length && {
          filterSet: {
            filterGroups: [{ operand: "AND", filters: dynamicFilters }],
            operand: "AND",
          },
        }),
        status: "ACTIVE", // always fetch sold properties
        page: 1,
        order: "UPDATED_AT_NEWEST",
      };

      const res = await graphqlRequest(GET_AUCTION_PROPERTY, variables);

      if (res.data) {
        const allProperties = res?.data?.properties?.nodes;
        setUpcomingAction(allProperties.slice(0, 4) || []);
      }
      // setUpcomingInspecion(res?.data?.properties?.nodes || []);
    } catch (error) {
      message.error("Failed to fetch inspection");
    }
  }, []);

  useEffect(() => {
    fetchInspectionProperties();
    upcomingInspectionForm.setFieldsValue({ status: "BUY" });
  }, [fetchInspectionProperties]);

  const handleSubmit = (values) => {};
  return (
    <div className="container">
      <div className="w-full lg:w-[999px] mx-auto">
        <div className="px-12.5 lg:px-0">
          <WithSectionLayout
            title="Upcoming Auction"
            leftText="Propoerties"
            midText="|"
            rightText="Auction"
          />
        </div>
        <div className="px-12.5 lg:px-0">
          <InquiryForm
            form={upcomingInspectionForm}
            onFinish={handleSubmit}
            status="BUY"
            bedroomOptions={bedrooms}
            bathroomOptions={bedrooms}
            carOptions={bedrooms}
          />
        </div>
      </div>

      <div className="border-t border-b-black/30 mt-16 "></div>
      {loading ? (
        <p className="text-center">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </p>
      ) : (
        <div className="">
          {upcomingAuction.length > 0 ? (
            <div className="grid grid-cols-1  gap-6">
              {upcomingAuction.map((item) => {
                const {
                  id,
                  formattedAddress,
                  images,
                  price,
                  listingDetails,
                  auctionDatetime,
                } = item;
                return (
                  <AuctionCard
                    key={id}
                    id={id}
                    image={images.length ? images?.[0]?.url : dummyImage}
                    price={price}
                    hoverAddress={formattedAddress}
                    address={formattedAddress}
                    bed={listingDetails?.bedrooms ?? 0}
                    bathrooms={listingDetails?.bathrooms ?? 0}
                    carportSpaces={listingDetails?.carportSpaces ?? 0}
                    inspection={false}
                    time={auctionDatetime ? auctionDatetime : null}
                  />
                );
              })}
            </div>
          ) : (
            <PropertiesNotFound />
          )}
        </div>
      )}

      <div className="my-20 flex items-center justify-center">
        <Button className="border-2 !px-18.5 !py-6 text-center font-moderat-regular text-base !border-black !rounded-none">
          Load More
        </Button>
      </div>
    </div>
  );
}
