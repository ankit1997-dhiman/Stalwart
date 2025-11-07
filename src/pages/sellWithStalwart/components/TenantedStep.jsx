import { Form, Radio } from "antd";

export const TenantedStep = ({ form }) => (
  <>
    <Form.Item
      name="tenancy_status"
      label={false}
      rules={[{ required: true, message: "Please select an option" }]}
    >
      <Radio.Group className="flex flex-col gap-7.5">
        <Radio value="looking_for_sell">Preparing to sell</Radio>
        <Radio value="checking_the_current_value">
          Checking the current value
        </Radio>
      </Radio.Group>
    </Form.Item>
  </>
);
