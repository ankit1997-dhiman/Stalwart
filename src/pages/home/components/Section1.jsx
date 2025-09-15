import { Form, Select, Button } from "antd";
import { FaSearch } from "react-icons/fa";
import bgImage from "../../../assets/images/home-hero.png";
import { bottomStatusOptions, topStatusOptions } from "@/constants/constants";
import { useEffect, useRef, useState } from "react";
import AddressAutocomplete from "./AddressAutocomplete";

const { Option } = Select;

export const Section1 = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Data:", values);
  };

  return (
    <section
      className="h-screen flex items-end justify-center bg-cover bg-center px-12.5 xl:px-0 custom-field"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-[999px]">
        <h4 className="uppercase text-white text-sm md:text-xl font-monument font-normal leading-10 text-center pb-2 md:pb-20">
          PORTA AD DOMUN
        </h4>

        <p className="block md:hidden text-white text-center text-[10px] pb-30 font-monument font-light uppercase">
          7 Jul 2025 | 11:13:35 AM
        </p>

        <Form
          form={form}
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
            <Form.Item name="status" label={false} className="!mb-0">
              <Select className="w-full xl:!w-[180px] !bg-black !text-white !h-[50px]">
                {topStatusOptions.map((opt, idx) => (
                  <Option
                    key={idx}
                    value={opt}
                    className="!bg-[#4F4C45] !text-white !rounded-none font-monument"
                  >
                    <div className="font-monument text-[10px]">{opt}</div>
                  </Option>
                ))}
              </Select>
            </Form.Item>

            {/* Search Box */}
            <div className="w-full flex bg-white relative">
              <Form.Item name="address" label={false} className="!mb-0 !w-full">
                <AddressAutocomplete />
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
                className="!mb-0 !w-full !h-[50px] text-[10px] font-normal font-monument"
              >
                <Select
                  className={`!bg-[#4F4C45] !text-white !h-[50px] text-[10px] font-normal font-monument ${
                    idx === 0 ? "!w-[180px]" : "!w-full"
                  }`}
                >
                  {options.map((opt, idx) => (
                    <Select.Option
                      key={idx}
                      value={opt}
                      className="!bg-[#4F4C45] !text-white !w-full !rounded-none font-monument text-[10px] font-normal"
                    >
                      <div className="font-monument text-[10px]">{opt}</div>
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            ))}
          </div>
        </Form>

        <p className="hidden md:block text-white text-center text-[11px] pt-20 pb-40 font-monument font-light uppercase">
          7 Jul 2025 | 11:13:35 AM
        </p>
      </div>
    </section>
  );
};
