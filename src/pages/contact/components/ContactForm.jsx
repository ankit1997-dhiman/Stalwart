import { Button, Checkbox, Form, Input } from "antd";
import React from "react";

export default function ContactForm() {
  const [contactForm] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <section className="px-12.5 xl:px-0">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col xl:flex-row justify-between items-start md:items-center pt-16 md:pt-30 pb-3 md:pb-16">
          <div className="xl:w-3/5 w-full">
            <p className="text-black text-xs md:text-4xl font-moderat-medium uppercase tracking-wide mb-5 ">
              HOW CAN WE HELP?
            </p>
          </div>
          <p className="text-black text-xs md:text-sm xl:w-2/5 w-full font-moderat-regular">
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
          {/* Type of Role */}
          <div className="py-18 hidden xl:block">
            <Form.Item
              name="roles"
              className="!rounded-none !border-black w-full"
            >
              <Checkbox.Group className="!rounded-none !border-black ">
                <div className=" md:flex-row flex-col flex justify-between items-center md:gap-34 w-full">
                  <div className="font-bold font-moderat">Type Of Inquiry</div>
                  <Checkbox
                    value="Sales Agent"
                    className="font-bold !rounded-none !border-black "
                  >
                    <span className="!text-base font-moderat font-bold pl-6">
                      General
                    </span>
                  </Checkbox>
                  <Checkbox
                    value="Property Manager"
                    className="font-bold !rounded-none !border-black !text-base !font-moderat"
                  >
                    <span className="!text-base !font-moderat pl-6">Buy</span>
                  </Checkbox>
                  <Checkbox
                    value="Admin/Office Support"
                    className="font-bold !rounded-none !border-black !text-base !font-moderat"
                  >
                    <span className="!text-base !font-moderat pl-6">Sell</span>
                  </Checkbox>
                  <Checkbox
                    value="Marketing & Communications"
                    className="font-bold !rounded-none !border-black !text-base !font-moderat"
                  >
                    <span className="!text-base font-moderat pl-6">Lease</span>
                  </Checkbox>
                  <Checkbox
                    value="Other"
                    className="font-bold !rounded-none !border-black !text-base !font-moderat"
                  >
                    <span className="!text-base !font-moderat pl-6">Other</span>
                  </Checkbox>
                </div>
              </Checkbox.Group>
            </Form.Item>
          </div>

          {/* Name and Email */}
          <div className="flex xl:flex-row flex-col items-stretch justify-between gap-7">
            <div className="w-full xl:w-1/2 !space-y-6">
              <Form.Item
                name="fullName"
                label={
                  <div className="!text-base !font-moderat-bold ">
                    Full Name
                  </div>
                }
                className="font-bold"
                rules={[{ message: "Please enter your name" }]}
              >
                <Input
                  placeholder="Full Name"
                  className="!py-2.5 !outline-none !border-black !border !rounded-none !mt-6"
                />
              </Form.Item>
              <Form.Item
                name="fullName"
                label={
                  <div className="!text-base !font-moderat-bold ">
                    Contact Number
                  </div>
                }
                className="font-bold"
                rules={[
                  {
                    message: "Please enter your name",
                    type: "number",
                  },
                ]}
              >
                <Input
                  placeholder="Number"
                  className="!py-2.5 !outline-none !border-black !border !rounded-none !mt-6"
                />
              </Form.Item>
              <Form.Item
                name="fullName"
                label={
                  <div className="!text-base !font-moderat-bold">
                    Contact Email
                  </div>
                }
                className="font-bold"
                rules={[
                  {
                    required: true,
                    message: "Please enter your name",
                    type: "email",
                  },
                ]}
              >
                <Input
                  placeholder="Contact Number"
                  className="!py-2.5 !outline-none !border-black !border !rounded-none !mt-6"
                />
              </Form.Item>
            </div>
            <div className="w-full xl:w-1/2">
              <Form.Item
                name="email"
                label={
                  <div className="!text-base !font-moderat-bold">
                    Your Message
                  </div>
                }
                className="font-bold !h-full"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input.TextArea
                  rows={12}
                  placeholder="Email"
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
              className="!border !border-black !px-10 !py-4 !hover:bg-black !hover:text-white transition !rounded-none mt-4"
            >
              Submit Inquiry
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
