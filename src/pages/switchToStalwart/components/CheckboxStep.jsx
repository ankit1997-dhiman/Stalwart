import { Form, Radio } from "antd";

export const CheckboxStep = ({ questionYes, form }) => (
  <>
    <Form.Item
      name={questionYes}
      rules={[{ required: true, message: " Required field" }]}
    >
      <Radio.Group className="flex flex-col gap-7.5">
        <p className="pt-3">
          <Radio value="owner_occupied">Owner Occupied</Radio>
        </p>
        <p className="pt-3">
          <Radio value="tenanted">Tenanted</Radio>
        </p>
        <p className="pt-3">
          <Radio value="vacant">Vacant</Radio>
        </p>
      </Radio.Group>
    </Form.Item>
  </>
);
