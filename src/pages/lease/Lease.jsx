import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { WithSectionLayout } from "@/common/properties/WithSectionLayout";
import { BottomSpace } from "@/components/BottomSpace";
import { InquiryForm } from "@/components/form/InquiryForm";
import PropertiesSkeleton from "@/components/PropertiesSkeleton";
import RenderProperties from "@/components/RenderProperties";
import { usePropertiesFetcher } from "@/hooks/usePropertiesFetcher";
import { Form } from "antd";
import { useCallback, useEffect } from "react";

export function Lease() {
  const [filterForm] = Form.useForm();

  const { properties, pageInfo, loading, fetchProperties, loadMore } =
    usePropertiesFetcher({
      listingType: ["RESIDENTIAL_RENTAL"],
      status: ["ACTIVE", "UNDER_OFFER"],
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
    <div className="container lg:px-0 px-12.5">
      <div className="w-full lg:w-[999px] mx-auto">
        <WithSectionLayout
          title="PROPERTIES FOR LEASE"
          leftText="Properties"
          midText="|"
          rightText="Inspections"
        />

        <InquiryForm
          form={filterForm}
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
        />
      ) : (
        <PropertiesNotFound />
      )}
      <BottomSpace />
    </div>
  );
}
