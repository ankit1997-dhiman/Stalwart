import Label from "@/components/form/Label";
import { Checkbox, Form, Input, Radio } from "antd";
import { useState } from "react";

export const LastStep = ({ form }) => {
  const [value, setValue] = useState(null);
  console.log(value, "sadfasd");
  const handleCheckboxChange = (value) => {
    setValue(value[0]);
  };
  return (
    <>
      <Form.Item name="rentStatus" label={false} rules={[{ required: true }]}>
        <Checkbox.Group
          onChange={handleCheckboxChange}
          className="flex flex-col gap-3"
        >
          <Checkbox value="not_sure">
            I’m not sure — I’d like your expert opinion
          </Checkbox>
        </Checkbox.Group>
      </Form.Item>

      {value == null && (
        <Form.Item
          name="expectedRent"
          rules={[
            {
              required: value === null,
              message: "Please enter the expected rent",
            },
          ]}
        >
          <Input
            placeholder="e.g. $850 per week"
            className="!border-black !border !rounded-none !py-2"
          />
        </Form.Item>
      )}
    </>
  );
};
