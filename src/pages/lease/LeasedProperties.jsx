import React from "react";
import { Button, Form, Input, Select } from "antd";
import { FaSearch } from "react-icons/fa";
import {
  bottomStatusOptions,
  properties,
  topStatusOptions,
} from "@/constants/constants";
import { FilteredProperties } from "../buy/components/FilteredProperties";
import { Property } from "@/common/properties/Property";
import { WithSectionLayout } from "@/common/properties/WithSectionLayout";

export function LeasedProperties() {
  const [leasedFilterForm] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Data:", values);
  };
  return (
    <div className="container">
      <div className="w-full xl:w-[999px] mx-auto ">
        <WithSectionLayout
          title={"LEASED PROPERTIES"}
          midText={"Switch To Stalwart (Property Management)"}
        />

        <Form
          form={leasedFilterForm}
          onFinish={onFinish}
          layout="vertical"
          initialValues={{
            name: "",
            status: "BUY",
            status0: "MIN. PRICE",
            status1: "MAX. PRICE",
            status2: "BED",
            status3: "BATH",
            status4: "CAR",
          }}
        >
          {/* Top Row */}
          <div className="flex flex-col xl:flex-row items-stretch justify-between gap-1.5 md:gap-7.5 pb-16 md:pb-4 w-full">
            <Form.Item name="status" label={false} className="!mb-0 ">
              <Select className="w-full xl:!w-[180px] border-black border !rounded-none !text-black !h-[50px] !bg-white">
                {topStatusOptions.map((opt) => (
                  <Select.Option
                    key={opt}
                    value={opt}
                    className=" !text-black !rounded-none font-monument"
                  >
                    <div className="font-monument text-[10px]">{opt}</div>
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <div className="w-full flex bg-white border-black border">
              <Form.Item
                name="name"
                label={false}
                className="!mb-0 !w-full !rounded-xl"
              >
                <Input
                  placeholder="Search..."
                  className="!h-[50px] !border-none !rounded-none !outline-0"
                />
              </Form.Item>
              <Button
                htmlType="submit"
                className="!h-[50px] ml-2 flex items-center justify-center bg-white !border-none"
              >
                <FaSearch className="mr-2" />
              </Button>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="hidden xl:flex items-stretch justify-between gap-7.5 pb-4 w-full">
            {bottomStatusOptions.map((options, idx) => (
              <Form.Item
                key={idx}
                name={`status${idx}`}
                label={false}
                className="!mb-0 !w-full !h-[50px] text-[10px] font-normal font-monument !outline-0"
              >
                <Select
                  className={`!text-black !h-[50px] text-[10px] font-normal font-monument !border-0 !outline-none !rounded-none !bg-white ${
                    idx === 0 ? "!w-[180px]" : "!w-full"
                  }`}
                >
                  {options.map((opt) => (
                    <Select.Option
                      key={opt}
                      value={opt}
                      className=" !text-black !w-full !rounded-none font-monument text-[10px] font-normal bg-white"
                    >
                      <div className="font-monument text-[10px]">{opt}</div>
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            ))}
          </div>
        </Form>
      </div>

      <FilteredProperties />
      <div className="my-28">
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {properties.map((property, idx) => (
            <Property
              property={property}
              key={idx}
              soldTag={false}
              leaseTag={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
