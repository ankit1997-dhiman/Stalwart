import React, { useEffect, useCallback } from "react";
import { Form } from "antd";
import { WithSectionLayout } from "@/common/properties/WithSectionLayout";
import { InquiryForm } from "@/components/form/InquiryForm";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { BottomSpace } from "@/components/BottomSpace";
import { usePropertiesFetcher } from "@/hooks/usePropertiesFetcher";
import PropertiesSkeleton from "@/components/PropertiesSkeleton";
import RenderProperties from "@/components/RenderProperties";

export function LeasedProperties() {
  const [leasedFilterForm] = Form.useForm();

  const { properties, pageInfo, loading, fetchProperties, loadMore } =
    usePropertiesFetcher({
      listingType: ["RESIDENTIAL_RENTAL"],
      status: ["LEASED"],
      orderBy: "CREATED_AT_DESC",
      initialCount: 6,
    });

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleValuesChange = useCallback(
    (values) => fetchProperties(values),
    [fetchProperties]
  );

  return (
    <div className="container">
      <div className="w-full xl:w-[999px] mx-auto">
        <WithSectionLayout
          title="LEASED PROPERTIES"
          leftText=""
          midText="Switch To Stalwart (Property Management)"
          rightText=""
        />

        <InquiryForm
          form={leasedFilterForm}
          onSubmit={handleValuesChange}
          status="LEASE"
          showStatus={false}
        />
      </div>

      <div className="border-t border-b-black/30 my-16" />

      {loading ? (
        <PropertiesSkeleton length={properties.length} />
      ) : properties.length > 0 ? (
        <RenderProperties
          properties={properties}
          pageInfo={pageInfo}
          loadMore={loadMore}
          loading={loading}
          leaseTag={true}
        />
      ) : (
        <PropertiesNotFound />
      )}

      <BottomSpace />
    </div>
  );
}
