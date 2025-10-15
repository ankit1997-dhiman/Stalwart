import React from "react";
import { Form, Input, Button } from "antd";
import searchImage from "@/assets/icons/search.svg";
import { FilterSelectDropdown } from "../select/FilterSelectDropdown";

export const InquiryForm = ({
  form,
  status = "BUY",
  showStatus = true,
  onSubmit,
  namePlaceholder = "Start Typing To Find Your Address...",
  bedroomOptions = [],
  bathroomOptions = [],
  carOptions = [],
  className = "",
}) => {
  return (
    <Form
      form={form}
      onFinish={onSubmit}
      layout="vertical"
      className={`!pt-11 ${className}`}
    >
      {/* Top Row */}
      <div className="flex flex-col xl:flex-row items-stretch justify-between pb-0 md:pb-4 w-full">
        {showStatus && (
          <Form.Item
            name="status"
            label={false}
            className="!mb-0 inquiry-form w-full lg:!w-[260px] hidden lg:block"
          >
            <Input className="!h-[50px] px-3" value={status} disabled />
          </Form.Item>
        )}

        <div className="w-full flex items-center bg-white border-black border">
          <Form.Item
            name="address"
            label={false}
            className="!w-full !rounded-xl !my-auto outline-0"
          >
            <Input
              placeholder={namePlaceholder}
              className="!h-[45px] !border-none !rounded-none !outline-0 !border-0 !shadow-none !font-monument !text-[13px]"
            />
          </Form.Item>

          <Button
            htmlType="submit"
            className="ml-2 flex items-center justify-center bg-white !border-none"
          >
            <img src={searchImage} alt="Search" />
          </Button>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-7.5 pb-4 w-full inquiry-form mt-10 lg:mt-0">
        <FilterSelectDropdown
          name="bedrooms"
          placeholder="BED"
          options={bedroomOptions}
        />
        <FilterSelectDropdown
          name="bathrooms"
          placeholder="BATH"
          options={bathroomOptions}
        />
        <FilterSelectDropdown
          name="carSpaces"
          placeholder="CAR"
          options={carOptions}
        />
      </div>
    </Form>
  );
};
