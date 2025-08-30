import Property from "@/common/properties/Property";
import { properties } from "@/constants/constants";
import { Form, Select } from "antd";
import React from "react";

function FilteredProperties() {
  const [filterForm] = Form.useForm();
  const onFinish = (values) => {
    console.log("Form Data:", values);
  };

  const filterOptions = ["Day", "Week", "month"];

  return (
    <div className="contianer">
      <div className="flex justify-between items-center mt-20 pb-4">
        <p className="text-sm font-moderat-regular">8 of 8 Results</p>
        <div>
          <Form
            form={filterForm}
            onFinish={onFinish}
            layout="vertical"
            initialValues={{
              filter: "Filters",
            }}
          >
            <Form.Item
              name="filter"
              label={false}
              className="!mb-0 !w-full !h-[50px] text-[10px] font-normal font-monument !outline-0"
              p
            >
              <Select
                onChange={() => {
                  filterForm.submit();
                }}
                className={`!text-black !h-[35px] text-[10px] font-normal font-monument !border-0 !outline-none !rounded-none !bg-white !w-[230px] select-field-font `}
              >
                {filterOptions.map((opt) => (
                  <Select.Option
                    key={opt}
                    value={opt}
                    className=" !text-black !w-full !rounded-none font-monument text-[10px] font-normal bg-white uppercase"
                  >
                    <div className="font-monument text-[10px]">{opt}</div>
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
        </div>
      </div>
      <hr className="text-black "></hr>
      <div className="my-28">
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {properties.map((property, idx) => (
            <Property property={property} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilteredProperties;
