import { Form, Select } from "antd";
import React from "react";

export const FilteredProperties = () => {
  const [filterForm] = Form.useForm();
  const onFinish = (values) => {};

  const filterOptions = ["Day", "Week", "month"];

  return (
    <div className="contianer mt-10 xl:mt-20 border-b-2">
      <div className="flex justify-between items-center pb-4 gap-5 flex-wrap">
        <p className="text-sm font-moderat-regular">8 of 8 Results</p>
        <div className="">
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
              className="!mb-0 !w-full xl:!h-[50px] text-[10px] font-normal font-monument !outline-0"
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
    </div>
  );
};
