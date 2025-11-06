import { Checkbox, Form } from "antd";

export const TenantedStep = ({ form }) => (
  <>
    <Form.Item
      name="tenancy_status"
      label={false}
      rules={[{ required: true, message: "Please select an option" }]}
    >
      <Checkbox.Group className="flex flex-col gap-7.5">
        <Checkbox value="looking_for_sell">Looking To Sell</Checkbox>
        <Checkbox value="no"> Investment Opportunity</Checkbox>
      </Checkbox.Group>
    </Form.Item>
  </>
);
