import { Property } from "@/common/properties/Property";
import React from "react";
import { LoadMoreBtn } from "./LoadMoreBtn";

export default function RenderProperties({
  properties,
  pageInfo,
  loadMore,
  loading,
  leaseTag,
}) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Property key={property.id} property={property} leaseTag={leaseTag} />
        ))}
      </div>

      {pageInfo?.hasNextPage && (
        <div className="flex justify-center">
          <LoadMoreBtn onClick={loadMore} loading={loading} />
        </div>
      )}
    </>
  );
}
