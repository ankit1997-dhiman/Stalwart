import { Checkbox, Form } from "antd";

export const AppointedStep = ({ form }) => (
  <>
    <Form.Item
      name="appointed_status"
      label={false}
      rules={[{ required: true, message: "Please select an option" }]}
    >
      <Checkbox.Group className="flex flex-col gap-7.5">
        <Checkbox value="now">Now</Checkbox>
        <Checkbox value="next-month">Within the next month</Checkbox>
        <Checkbox value="two-to-six-month">2-6 Months</Checkbox>
        <Checkbox value="six-plus-month">6+ Months</Checkbox>
        <Checkbox value="on-market">Already on the market</Checkbox>
        <Checkbox value="not-sure">Not sure</Checkbox>
      </Checkbox.Group>
    </Form.Item>
  </>
);
