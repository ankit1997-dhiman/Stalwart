import { Button } from "antd";
import React from "react";

export const LoadMoreBtn = ({ onClick, loading }) => {
  return (
    <div className="mt-10 flex items-center justify-center">
      <Button
        onClick={onClick}
        disabled={loading}
        loading={loading}
        className="group border-2 !px-18.5 !py-6 text-center font-moderat-regular text-base !border-black !rounded-none hover:!bg-black hover:!text-white cursor-pointer"
      >
        <span className="group-hover:text-white">
          {loading ? "Loading..." : "Load More"}
        </span>
      </Button>
    </div>
  );
};
