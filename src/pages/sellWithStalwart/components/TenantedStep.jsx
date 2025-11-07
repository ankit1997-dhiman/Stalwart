import { Checkbox, Form } from "antd";

export const TenantedStep = ({ form }) => (
  <>
    <Form.Item
      name="tenancy_status"
      label={false}
      rules={[{ required: true, message: "Please select an option" }]}
    >
      <Checkbox.Group className="flex flex-col gap-7.5">
        <Checkbox value="looking_for_sell">Preparing to sell</Checkbox>
        <Checkbox value="checking_the_current_value">
          Checking the current value
        </Checkbox>
      </Checkbox.Group>
    </Form.Item>
  </>
);
