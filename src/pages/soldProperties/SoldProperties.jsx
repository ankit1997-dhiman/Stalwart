import React, { useCallback, useEffect, useState } from "react";
import { Form, message } from "antd";
import { Property } from "@/common/properties/Property";
import { WithSectionLayout } from "@/common/properties/WithSectionLayout";
import { InquiryForm } from "@/components/form/InquiryForm";
import { bedrooms, magicText } from "@/constants/constants";
import { graphqlRequest } from "@/utils/graphqlRequest";
import PropertiesNotFound from "@/common/properties/PropertiesNotFound";
import { Preloader } from "@/common/preloader/Preloader";
import { BottomSpace } from "@/components/BottomSpace";
import { LoadMoreBtn } from "@/components/LoadMoreBtn";
import { GET_FILTERED_PROPERTIES } from "@/queries/filterProperties";
import { usePropertiesFetcher } from "@/hooks/usePropertiesFetcher";
import RenderProperties from "@/components/RenderProperties";
import PropertiesSkeleton from "@/components/PropertiesSkeleton";

export function SoldProperties() {
  const [soldFilterForm] = Form.useForm();
  const [soldProperties, setSoldProperties] = useState([]);

  const [loadingMore, setLoadingMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(
    magicText.PROPERTIES_PER_PAGE
  );

  const { properties, pageInfo, loading, fetchProperties, loadMore } =
    usePropertiesFetcher({
      status: ["SOLD"],
      orderBy: "SOLD_DATE_DESC",
      initialCount: magicText.PROPERTIES_PER_PAGE,
    });

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleValuesChange = useCallback(
    (values) => fetchProperties(values),
    [fetchProperties]
  );

  return (
    <div className="container px-12.5 lg:px-0">
      <div className="w-full lg:w-[999px] mx-auto">
        <WithSectionLayout
          title="SOLD PROPERTIES"
          leftText=""
          midText=""
          rightText="Sell With Stalwart"
        />

        <InquiryForm
          form={soldFilterForm}
          onSubmit={handleValuesChange}
          status="BUY"
          bedroomOptions={bedrooms}
          bathroomOptions={bedrooms}
          carOptions={bedrooms}
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

      <BottomSpace />
    </div>
  );
}
