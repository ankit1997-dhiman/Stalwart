import { Checkbox, Form } from "antd";

export const AppointedStep = ({ form }) => (
  <>
    <Form.Item
      name="appointed_status"
      label={false}
      rules={[{ required: true, message: "Please select an option" }]}
    >
      <Checkbox.Group className="flex flex-col gap-7.5">
        <Checkbox value="now">Ready now</Checkbox>
        <Checkbox value="within-30-days">Within 30 days</Checkbox>
        <Checkbox value="two-to-six-months">2-6 Months</Checkbox>
        <Checkbox value="six-plus-months">6+ Months</Checkbox>
        <Checkbox value="on-market">Already on the market</Checkbox>
        <Checkbox value="still_deciding">Still deciding</Checkbox>
      </Checkbox.Group>
    </Form.Item>
  </>
);
