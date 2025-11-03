import { Skeleton } from "antd";
import React from "react";

export const PropertySkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <div className="relative border border-gray-300 rounded overflow-hidden h-[300px] lg:h-[450px] p-5">
          <Skeleton.Image active className="!w-full !h-[200px]" />
          <div className="pt-5">
            <Skeleton active paragraph={{ rows: 2 }} title={false} />
          </div>
        </div>
      ))}
    </div>
  );
};
