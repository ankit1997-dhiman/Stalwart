import React from "react";
import { S3_BASE_URL } from "@/config";

export const HoverSection = () => {
  return (
    <>
      <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <img src={S3_BASE_URL + "/top.png"} />
      </div>
      <div className="absolute bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 bottom-0 right-18">
        <img src={S3_BASE_URL + "/bottom.png"} />
      </div>
    </>
  );
};
