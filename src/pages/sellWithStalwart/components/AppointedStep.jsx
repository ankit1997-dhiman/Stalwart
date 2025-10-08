import { Checkbox, Form } from "antd";

export const AppointedStep = () => (
  <>
    <Form.Item
      name="appointed_status"
      label={false}
      rules={[{ required: true, message: "Please select an option" }]}
    >
      <Checkbox.Group className="flex flex-col gap-7.5">
        <Checkbox value="yes">Now</Checkbox>
        <Checkbox value="no">Within the next month</Checkbox>
        <Checkbox value="no">2-6 Months</Checkbox>
        <Checkbox value="no">6+ Months</Checkbox>
        <Checkbox value="no">Already on the market</Checkbox>
        <Checkbox value="no">Not sure</Checkbox>
      </Checkbox.Group>
    </Form.Item>
  </>
);