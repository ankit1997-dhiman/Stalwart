import { Form, Input } from "antd";

export const LastStep = () => (
  <Form.Item name="expectedRent" rules={[{ required: true }]}>
    <Input
      placeholder="e.g. 500"
      className="!border-black !border !rounded-none !py-2"
    />
  </Form.Item>
);