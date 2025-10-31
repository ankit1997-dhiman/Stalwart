import React from "react";
import { Form, Input, Checkbox, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Label from "@/components/form/Label";
import { useNavigate } from "react-router-dom";
import { URLS } from "@/constants/Urls";

export default function CareerForm() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    const updatedValues = {
      ...values,
      enquiry_for: `New Candidate Application`,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/send-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedValues),
        }
      );

      const result = await response.json();

      if (result.success) {
        contactForm.resetFields();
        navigate(URLS.THANK_YOU);
      } else {
        message.error("Failed to send inquiry ❌");
      }
    } catch (error) {
      message.error("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    message.error("Please fill all required fields");
    console.warn("Validation Failed:", errorInfo);
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

        <hr className="mb-0 md:mb-20 border-gray-300 " />

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="space-t-7.5 md:space-t-10"
        >
          <div className="pt-18 pb-11">
            <Form.Item
              name="roles"
              className="!rounded-none !border-black !block w-full"
            >
              <Checkbox.Group className="!rounded-none !border-black !block">
                <div className=" md:flex-row flex-col flex justify-between items-start md:items-center gap-4 md:gap-10 w-full">
                  <Label label="Type Of Role" className="!font-moderat-bold" />

                  <Checkbox value="sales_agent">
                    <Label
                      label="Sales Agent"
                      className="!font-moderat-bold pl-8"
                    />
                  </Checkbox>
                  <Checkbox value="property_manager">
                    <Label
                      label="Property Manager"
                      className="!font-moderat-bold pl-8"
                    />
                  </Checkbox>
                  <Checkbox value="admin">
                    <Label
                      label="Admin/Office Support"
                      className="!font-moderat-bold pl-8"
                    />
                  </Checkbox>
                  <Checkbox value="marketing">
                    <Label
                      label="Marketing & Communications"
                      className="!font-moderat-bold pl-8"
                    />
                  </Checkbox>
                  <Checkbox value="Other">
                    <Label label="Other" className="!font-moderat-bold pl-8" />
                  </Checkbox>
                </div>
              </Checkbox.Group>
            </Form.Item>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 ">
            <Form.Item
              name="fullName"
              label={<Label label="Full Name" className="!font-moderat-bold" />}
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
                <Label label="Contact Email" className="!font-moderat-bold" />
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

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 ">
            <Form.Item
              name="contactNumber"
              label={
                <Label label="Contact Number" className="!font-moderat-bold" />
              }
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
                <Label label=" City / Suburb" className="!font-moderat-bold" />
              }
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <Form.Item
                name="resume"
                label={
                  <Label
                    label=" Upload Resume / CV"
                    className="!font-moderat-bold "
                  />
                }
                className="!w-full custom-upload"
                valuePropName="fileList"
                getValueFromEvent={(e) => e.fileList}
              >
                <Upload beforeUpload={() => false} className="!mt-6 !w-full">
                  <Button
                    icon={<UploadOutlined />}
                    className="!py-2.5 !outline-none !border-black !border !w-full !mt-6 !rounded-none !h-full"
                  >
                    Upload File
                  </Button>
                </Upload>
              </Form.Item>
            </div>
            <div className="grid grid-col-1 md:grid-cols-2 gap-6">
              <Form.Item
                name="linkedin"
                label={
                  <div className="font-moderat-bold text-base">LinkedIn</div>
                }
              >
                <Input
                  placeholder="http://"
                  className="!py-2.5 !outline-none !border-black !border !rounded-none !mt-6"
                />
              </Form.Item>

              <Form.Item
                name="licenseNumber"
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
              loading={loading}
              disabled={loading}
              className="group !border !border-black !px-8 !py-2 hover:bg-black hover:text-white transition !rounded-none "
            >
              <span className="group-hover:text-white">Submit Inquiry</span>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
