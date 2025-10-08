import { Checkbox, Form } from "antd";

export const TenantedStep = () => (
  <>
    <Form.Item
      name="tenancy_status"
      label={false}
      rules={[{ required: true, message: "Please select an option" }]}
    >
      <Checkbox.Group className="flex flex-col gap-7.5">
        <Checkbox value="yes">Owner Occupier</Checkbox>
        <Checkbox value="no">Owner Investor</Checkbox>
      </Checkbox.Group>
    </Form.Item>
  </>
);