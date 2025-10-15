import { Form, Select } from "antd";

export const FilterSelectDropdown = ({ name, placeholder, options }) => (
  <Form.Item name={name} label={false} className="!mb-0 !w-full !h-[50px]">
    <Select
      className=" !text-black !h-[50px] !text-[10px] font-normal font-monument w-full !z-10 !placeholder:text-[10px] border-1 lg:border-0"
      placeholder={placeholder}
      allowClear
    >
      {options.map((item) => (
        <Option
          key={item}
          value={item}
          className="!text-black !rounded-none font-monument text-[10px]"
        >
          <div className="font-monument text-[10px]">{item} +</div>
        </Option>
      ))}
    </Select>
  </Form.Item>
);
