import React from "react";
import { S3_BASE_URL } from "@/config";

export const FormWrapper = ({ children }) => {
  return (
    <div className="relative px-12.5 lg:px-0">
      <div className="flex justify-between items-center container  h-[1200px] lg:h-[900px] py-10 lg:py-20 my-auto">
        <div className="lg:w-[65%] my-auto pr-0 lg:pr-20">{children}</div>
      </div>
      <div className="hidden lg:block ">
        <div
          className="absolute lg:w-[35%] h-full top-0 right-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${S3_BASE_URL}/right.png)`,
          }}
        ></div>
      </div>
    </div>
  );
};
