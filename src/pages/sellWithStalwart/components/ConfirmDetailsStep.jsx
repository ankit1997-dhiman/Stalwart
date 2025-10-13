import { ChexboxText } from "@/components/form/ChexboxText";
import Label from "@/components/form/Label";
import { Checkbox, Form, Input } from "antd";

export const ConfirmDetailsStep = () => (
  <>
    <div className="grid grid-cols-2 gap-x-7.5">
      <Form.Item
        name="confirm_firstName"
        label={<Label label="First Name" className="pb-4" />}
        rules={[{ required: true, message: "First name is required" }]}
      >
        <Input
          placeholder="First Name"
          className="!border-black !border !rounded-none !py-2"
        />
      </Form.Item>
      <Form.Item
        name="confirm_lastName"
        label={<Label label="Last Name" className="pb-4" />}
        rules={[{ required: true, message: "Last name is required" }]}
      >
        <Input
          placeholder="Last Name"
          className="!border-black !border !rounded-none !py-2"
        />
      </Form.Item>
      <Form.Item
        name="confirm_email"
        label={<Label label="Contact Email" className="pb-4" />}
        rules={[
          { required: true, message: "Email is required" },
          { type: "email", message: "Enter a valid email" },
        ]}
      >
        <Input
          placeholder="Contact Email"
          className="!border-black !border !rounded-none !py-2"
        />
      </Form.Item>
      <Form.Item
        name="confirm_number"
        label={<Label label="Contact Number" className="pb-4" />}
        rules={[{ required: true, message: "Contact number is required" }]}
      >
        <Input
          placeholder="Contact Number"
          className="!border-black !border !rounded-none !py-2"
        />
      </Form.Item>
    </div>

    <Form.Item
      name="confirm_privacy"
      valuePropName="checked"
      rules={[
        {
          validator: (_, value) =>
            value
              ? Promise.resolve()
              : Promise.reject("You must agree to continue"),
        },
      ]}
    >
      <Checkbox>
        <ChexboxText
          text="Don’t worry, we never pass your details onto any third parties. By
        continuing you agree to our Privacy Policy."
        />
      </Checkbox>
    </Form.Item>
  </>
);
