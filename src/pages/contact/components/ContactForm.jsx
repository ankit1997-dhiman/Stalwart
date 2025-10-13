import { Button, Checkbox, Form, Input, message, Spin } from "antd";
import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import Label from "@/components/form/Label";

export default function ContactForm() {
  const [contactForm] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();
      if (result.success) {
        setLoading(false);
        message.success("Your inquiry has been sent");
        contactForm.resetFields();
      } else {
        message.error("Failed to send inquiry ❌");
      }
    } catch (error) {
      message.error("Something went wrong ❌");
    }
  };

  return (
    <section className="px-12.5 xl:px-0">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col xl:flex-row justify-between items-start md:items-center pt-16 md:pt-30 pb-3 md:pb-16">
          <div className="xl:w-3/5 w-full">
            <p className="text-black text-xs md:text-4xl font-moderat-medium uppercase tracking-wide mb-5 pb-2.5 md:pb-5">
              HOW CAN WE HELP?
            </p>
          </div>
          <p className="text-black text-xs md:text-sm xl:w-2/5 w-full font-moderat-regular pb-2.5 md:pb-5">
            Whether you're looking to chat to a member of our team, enquire
            about working with us, or looking for an update on the market, we're
            here to help.
          </p>
        </div>

        <hr className="border-black" />

        {/* Ant Design Form */}
        <Form
          form={contactForm}
          layout="vertical"
          onFinish={onFinish}
          className="!my-16 !md:my-0"
        >
          {/* Type of Inquiry */}
          <div className="py-18 hidden xl:block">
            <Form.Item
              name="roles"
              className="!rounded-none !border-black !block w-full"
            >
              <Checkbox.Group className="!rounded-none !border-black !block">
                <div className=" md:flex-row flex-col flex justify-between items-center md:gap-34 w-full">
                  <Label
                    label="Type Of Inquiry"
                    className="!font-moderat-bold"
                  />

                  <Checkbox value="General">
                    <Label
                      label="General"
                      className="!font-moderat-bold pl-8"
                    />
                  </Checkbox>
                  <Checkbox value="Buy">
                    <Label label="Buy" className="!font-moderat-bold pl-8" />
                  </Checkbox>
                  <Checkbox value="Sell">
                    <Label label="Sell" className="!font-moderat-bold pl-8" />
                  </Checkbox>
                  <Checkbox value="Lease">
                    <Label label="Lease" className="!font-moderat-bold pl-8" />
                  </Checkbox>
                  <Checkbox value="Other">
                    <Label label="Other" className="!font-moderat-bold pl-8" />
                  </Checkbox>
                </div>
              </Checkbox.Group>
            </Form.Item>
          </div>

          {/* Name and Email */}
          <div className="flex xl:flex-row flex-col items-stretch justify-between gap-7">
            <div className="w-full xl:w-1/2 !space-y-6">
              {/* Full Name */}
              <Form.Item
                name="name"
                label={
                  <Label label="Full Name" className="!font-moderat-bold" />
                }
                rules={[
                  { required: true, message: "Please enter your full name" },
                ]}
              >
                <Input
                  placeholder="Full Name"
                  className="!py-2.5 !outline-none !border-black !border !rounded-none !mt-6"
                />
              </Form.Item>

              {/* Contact Number */}
              <Form.Item
                name="contact"
                label={
                  <Label
                    label="Contact Number"
                    className="!font-moderat-bold"
                  />
                }
                rules={[
                  {
                    required: true,
                    message: "Please enter your contact number",
                  },
                  {
                    pattern: /^[0-9]{7,15}$/,
                    message: "Please enter a valid phone number",
                  },
                ]}
              >
                <Input
                  placeholder="Number"
                  className="!py-2.5 !outline-none !border-black !border !rounded-none !mt-6"
                />
              </Form.Item>

              {/* Contact Email */}
              <Form.Item
                name="email"
                label={
                  <Label
                    label=" Contact Email"
                    className="!font-moderat-bold"
                  />
                }
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input
                  placeholder="Email"
                  className="!py-2.5 !outline-none !border-black !border !rounded-none !mt-6"
                />
              </Form.Item>
            </div>

            {/* Message */}
            <div className="w-full xl:w-1/2">
              <Form.Item
                name="message"
                label={
                  <div className="!text-base !font-moderat-bold">
                    Your Message
                  </div>
                }
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
              >
                <Input.TextArea
                  rows={12}
                  placeholder="Message"
                  className="!py-2.5 !outline-none !border-black !border !rounded-none !mt-6 !h-full"
                />
              </Form.Item>
            </div>
          </div>

          {/* Submit Button */}
          <Form.Item>
            <Button
              htmlType="submit"
              type="default"
              className="!border !border-black !px-10 !py-4 !hover:bg-black !hover:text-white transition !rounded-none mt-4 hover:!bg-black hover:!text-white"
            >
              Submit Inquiry
              {loading && (
                <Spin
                  indicator={
                    <LoadingOutlined className="text-sm text-black" spin />
                  }
                />
              )}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
