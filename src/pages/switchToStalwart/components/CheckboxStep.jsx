import { Checkbox, Form } from "antd";

export const CheckboxStep = ({ questionYes, form }) => (
  <>
    <Form.Item name={questionYes} valuePropName="checked">
      <Checkbox.Group className="flex flex-col gap-7.5">
        <Checkbox value="yes">Owner Occupier</Checkbox>
        <Checkbox value="no"> Investment Property</Checkbox>
      </Checkbox.Group>
    </Form.Item>
  </>
);
