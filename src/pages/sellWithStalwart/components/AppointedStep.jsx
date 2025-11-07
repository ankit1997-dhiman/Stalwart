import { Radio, Form } from "antd";

export const AppointedStep = ({ form }) => (
  <>
    <Form.Item
      name="appointed_status"
      label={false}
      rules={[{ required: true, message: "Please select an option" }]}
    >
      <Radio.Group className="flex flex-col gap-7.5">
        <Radio value="now">Ready now</Radio>
        <Radio value="within-30-days">Within 30 days</Radio>
        <Radio value="two-to-six-months">2-6 Months</Radio>
        <Radio value="six-plus-months">6+ Months</Radio>
        <Radio value="on-market">Already on the market</Radio>
        <Radio value="still_deciding">Still deciding</Radio>
      </Radio.Group>
    </Form.Item>
  </>
);
