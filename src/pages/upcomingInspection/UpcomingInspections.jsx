import { WithSectionLayout } from "@/common/properties/WithSectionLayout";
import { bedrooms } from "@/constants/constants";
import { Button, Form, message } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import AuctionCard from "../upcomingAuction/components/AuctionCard";
import { InquiryForm } from "@/components/form/InquiryForm";
import { GET_UPCOMING_INSPECTION } from "@/queries/inspectionQueries";
import { graphqlRequest } from "@/utils/graphqlRequest";

export default function UpcomingInspections() {
  const [upcomingInspectionForm] = Form.useForm();
  const [upcomingInspecion, setUpcomingInspecion] = useState([]);

  const fetchInspectionProperties = useCallback(async () => {
    try {
      const variables = { status: ["ACTIVE"] };
      const res = await graphqlRequest("/api/graphql",GET_UPCOMING_INSPECTION, variables);
      const filteredProperties = [];
      res?.data?.properties?.nodes.forEach((property) => {
        const { nodes: inspections } = property.inspections;
        if (inspections.length > 0) {
          const lastInspection = inspections[inspections.length - 1];
          filteredProperties.push({
            ...property,
            lastInspection, // ✅ attach last inspection here
          });
        }
      });

      setUpcomingInspecion(filteredProperties);

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
            title="Upcoming Inspection"
            leftText="Propoerties"
            midText="|"
            rightText="Inspection"
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
      <div className="">
        {upcomingInspecion.map((item) => {
          return (
            <AuctionCard
              key={item.id}
              id={item?.id}
              images={item?.images}
              price={item?.advertisedPrice}
              hoverAddress={item?.formattedAddress}
              address={item?.formattedAddress}
              bed={item?.listingDetails?.bedrooms ?? 0}
              bathrooms={item?.listingDetails?.bathrooms ?? 0}
              carportSpaces={item?.listingDetails?.carportSpaces ?? 0}
              inspection={true}
              time={item?.lastInspection.start}
            />
          );
        })}
      </div>

      <div className="my-20 flex items-center justify-center">
        <Button className="border-2 !px-18.5 !py-6 text-center font-moderat-regular text-base !border-black !rounded-none">
          Load More
        </Button>
      </div>
    </div>
  );
}
