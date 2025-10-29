import { Checkbox, Form } from "antd";

export const CheckboxStep = ({ questionYes, questionNo, form }) => (
  <>
    <Form.Item name={questionYes} valuePropName="checked">
      <Checkbox>Yes</Checkbox>
    </Form.Item>
    <Form.Item name={questionNo} valuePropName="checked">
      <Checkbox>No</Checkbox>
    </Form.Item>
  </>
);
