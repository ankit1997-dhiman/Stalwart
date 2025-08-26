import React from "react";
import { Form, Input, Checkbox, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function CareerForm() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <section className="py-12 px-12.5 xl:px-0">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col xl:flex-row justify-between items-start md:items-center mb-8">
          <div className="xl:w-1/2 w-full">
            <h4 className="text-xs md:text-sm uppercase tracking-wide mb-5 font-moderat-medium">
              STALWART CAREERS
            </h4>
            <h2 className="text-base md:text-2xl xl:text-4xl font-medium mb-4 font-moderat-medium">
              INTERESTED IN WORKING WITH US?
            </h2>
          </div>
          <p className="text-xs md:text-sm xl:w-1/2 w-full font-moderat-regular">
            Whether you’re a seasoned agent, a marketing specialist, or just
            starting your real estate journey, we’d love to hear from you. Fill
            out the form and tell us a bit about yourself.
            <br /> <br /> We’ll be in touch if there’s a role that suits your
            skills and aspirations.
          </p>
        </div>

        <hr className="mb-14.5 md:mb-20 border-gray-300 " />

        {/* Ant Design Form */}
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="space-t-7.5 md:space-t-10"
        >
          {/* Type of Role */}
          <div>
            <p className="font-moderat-bold mb-10 md:mb-3 text-base font-bold">
              Type Of Role
            </p>
            <Form.Item name="roles" className="!rounded-none !border-black">
              <Checkbox.Group className=" !rounded-none !border-black">
                <div className="flex flex-wrap gap-6">
                  <Checkbox
                    value="Sales Agent"
                    className="!font-moderat-regular !font-bold !rounded-none !border-black !text-base"
                  >
                    Sales Agent
                  </Checkbox>
                  <Checkbox
                    value="Property Manager"
                    className="!font-moderat-regular !font-bold !rounded-none !border-black !text-base"
                  >
                    Property Manager
                  </Checkbox>
                  <Checkbox
                    value="Admin/Office Support"
                    className="!font-moderat-regular !font-bold !rounded-none !border-black !text-base"
                  >
                    Admin/Office Support
                  </Checkbox>
                  <Checkbox
                    value="Marketing & Communications"
                    className="!font-moderat-regular !font-bold !rounded-none !border-black !text-base"
                  >
                    Marketing & Communications
                  </Checkbox>
                  <Checkbox
                    value="Other"
                    className="!font-moderat-regular !font-bold !rounded-none !border-black !text-base"
                  >
                    Other
                  </Checkbox>
                </div>
              </Checkbox.Group>
            </Form.Item>
          </div>

          {/* Name and Email */}
          <div className="grid grid-cols-1 xl:grid-cols-2 ">
            <Form.Item
              name="fullName"
              label={
                <div className="!font-moderat-bold text-base">Full Name</div>
              }
              className="font-moderat-bold"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input
                placeholder="Full Name"
                className="!py-2.5 !outline-none !border-black !border !rounded-none !mt-6"
              />
            </Form.Item>

            <Form.Item
              name="email"
              label={
                <div className="!font-moderat-bold text-base">
                  Contact Email
                </div>
              }
              className="font-bold"
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

          {/* Contact Number and City */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 ">
            <Form.Item
              name="contactNumber"
              label={
                <div className="!font-moderat-bold text-base">
                  Contact Number
                </div>
              }
              className="font-bold"
              rules={[
                { required: true, message: "Please enter your phone number" },
              ]}
            >
              <Input
                placeholder="Number"
                className="!py-2.5 !outline-none !border-black !border !rounded-none !mt-6"
              />
            </Form.Item>

            <Form.Item
              name="city"
              label={
                <div className="!font-moderat-bold text-base">
                  City / Suburb
                </div>
              }
              className="font-bold"
              rules={[
                { required: true, message: "Please enter your location" },
              ]}
            >
              <Input
                placeholder="Search For Your Location"
                className="!py-2.5 !outline-none !border-black !border !rounded-none !mt-6"
              />
            </Form.Item>
          </div>

          {/* Resume, LinkedIn, License */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <Form.Item
              name="resume"
              label={
                <div className="font-moderat-bold text-base">
                  Upload Resume / CV
                </div>
              }
              className="font-bold !py-2.5"
              valuePropName="fileList" // tell Form to use fileList as the value
              getValueFromEvent={(e) => e.fileList} // extract fileList from Upload event
              // rules={[{ required: true, message: "Please upload a file!" }]}
            >
              <Upload beforeUpload={() => false} className="!mt-6">
                <Button
                  icon={<UploadOutlined />}
                  className="!py-2.5 !outline-none !border-black !border"
                >
                  Upload File
                </Button>
              </Upload>
            </Form.Item>

            <Form.Item
              name="linkedin"
              label={
                <div className="font-moderat-bold text-base">LinkedIn</div>
              }
              className="font-bold"
            >
              <Input
                placeholder="http://"
                className="!py-2.5 !outline-none !border-black !border !rounded-none !mt-6"
              />
            </Form.Item>

            <Form.Item
              name="licenseNumber"
              className="font-bold"
              label={
                <div className="font-moderat-bold text-base">
                  Real Estate License Number{" "}
                  <span className="italic">(if applicable)</span>
                </div>
              }
            >
              <Input
                placeholder="Enter Number"
                className="!py-2.5 !outline-none !border-black !border !rounded-none !mt-6"
              />
            </Form.Item>
          </div>

          {/* Cover Letter */}
          <Form.Item
            name="message"
            label={
              <div className="font-moderat-bold text-base">
                Short Cover Letter / Message
              </div>
            }
            rules={[{ required: true, message: "Please enter your message" }]}
            className="font-bold"
          >
            <Input.TextArea
              placeholder="Message"
              rows={5}
              className="!py-2.5 !outline-none !border-black !border !rounded-none !mt-6"
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              htmlType="submit"
              type="default"
              className="!border !border-black !px-8 !py-2 !hover:bg-black !hover:text-white transition !rounded-none"
            >
              Submit Inquiry
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
