import { Form } from "antd";
import React, { useCallback, useEffect } from "react";
import { magicText } from "@/constants/constants";
import { WithSectionLayout } from "@/common/properties/WithSectionLayout";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { InquiryForm } from "@/components/form/InquiryForm";
import { BottomSpace } from "@/components/BottomSpace";
import { usePropertiesFetcher } from "@/hooks/usePropertiesFetcher";
import PropertiesSkeleton from "@/components/PropertiesSkeleton";
import RenderProperties from "@/components/RenderProperties";

export function Buy() {
  const [filterForm] = Form.useForm();

  const { properties, pageInfo, loading, fetchProperties, loadMore } =
    usePropertiesFetcher({
      status: ["ACTIVE", "UNDER_OFFER"],
      orderBy: "CREATED_AT_DESC",
      initialCount: magicText.PROPERTIES_PER_PAGE,
    });

  useEffect(() => {
    fetchProperties();
    filterForm.setFieldsValue({ status: "BUY" });
  }, []);

  const handleValuesChange = useCallback(
    (values) => fetchProperties(values),
    [fetchProperties]
  );

  return (
    <div className="bg-white">
      <div className="container lg:px-0 px-12.5">
        <div className="w-full lg:w-[999px] mx-auto">
          <WithSectionLayout
            title="PROPERTIES FOR SALE"
            leftText="Buy"
            midText="|"
            rightText="Auction"
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
    </div>
  );
}
