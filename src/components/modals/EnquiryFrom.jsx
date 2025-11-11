import { useTruncateText } from "@/hooks/useTruncateText";
import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";
import { RawHtml } from "../RawHtml";
import Label from "../form/Label";
import { useNavigate } from "react-router-dom";
import { URLS } from "@/constants/Urls";
import { S3_BASE_URL } from "@/config";

const EnquiryFrom = ({
  listingDetails,
  street,
  headline,
  description,
  address,
  setOpen,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/send-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );

      const result = await response.json();

      if (result.success) {
        form.resetFields();
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

  const desc = useTruncateText(description, 30);
  return (
    <div className="bg-[#F4F2F0] lg:pl-10 relative h-full">
      <div className="flex bg-[#dad7d4] w-[160px] lg:w-[282px] h-[180px] lg:h-[304px] rounded-b-full items-end justify-center lg:absolute left-[60px]">
        <img
          src={S3_BASE_URL + "/enquire-image.png"}
          className="p-4 lg:p-8 w-[140px] h-[140px] lg:w-full lg:h-[280px]"
          alt="Enquiry"
        />
      </div>

      <div className="flex gap-x-8 px-5">
        <div className="w-full xl:w-[720px]">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              enquiry_for: `Property Information Request Received For ${address}`,
            }}
          >
            <div className="lg:pl-[300px] pt-10 lg:pt-[130px] grid lg:grid-cols-2 grid-cols-1 lg:gap-x-8">
              <div>
                <Form.Item name="enquiry_for" hidden>
                  <Input />
                </Form.Item>
                <Form.Item
                  label={
                    <Label className="uppercase text-xs" label="First Name" />
                  }
                  name="first_name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input
                    placeholder="First Name"
                    className="!border-black !border !rounded-none !py-2 !bg-transparent"
                  />
                </Form.Item>

                <Form.Item
                  label={<Label className="uppercase text-xs" label="Email" />}
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    {
                      type: "email",
                      message: "Please enter a valid email",
                    },
                  ]}
                >
                  <Input
                    placeholder="Email"
                    className="!border-black !border !rounded-none !py-2 !bg-transparent"
                  />
                </Form.Item>
              </div>

              <div>
                <Form.Item
                  label={
                    <Label className="uppercase text-xs" label="Last Name" />
                  }
                  name="last_name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input
                    placeholder="Last Name"
                    className="!border-black !border !rounded-none !py-2 !bg-transparent"
                  />
                </Form.Item>

                <Form.Item
                  label={
                    <Label className="uppercase text-xs" label="Phone Number" />
                  }
                  name="number"
                  rules={[
                    { required: true, message: "Please enter your number" },
                  ]}
                >
                  <Input
                    placeholder="+61"
                    className="!border-black !border !rounded-none !py-2 !bg-transparent"
                  />
                </Form.Item>
              </div>
            </div>

            <Form.Item
              label={
                <Label className="uppercase text-xs" label="Your Message" />
              }
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea
                placeholder="Your message"
                rows={10}
                className="!border-black !border !rounded-none !py-2 !bg-transparent"
              />
            </Form.Item>

            <div className="flex justify-end mb-8">
              <Button
                className="!rounded-none !px-3.5 !border !border-black !py-2 w-[209px] !h-[47px] !bg-transparent"
                htmlType="submit"
                loading={loading}
                disabled={loading}
              >
                <span className="font-moderat-regular text-xs lg:text-base">
                  {loading ? "Submitting..." : "Submit Inquiry"}
                </span>
              </Button>
            </div>
          </Form>
        </div>
      </div>

      {/* Right Side for XL screens */}
      <div className="absolute right-0 bottom-0 w-[450px] hidden xl:block ml-10">
        <div className="relative">
          <div className="absolute -top-[10px] w-[220px] h-[240px] bg-[#dad7d4] rounded-t-full z-0 overflow-hidden"></div>
          <div className="relative pt-16 pb-5 pl-10 overflow-auto w-[240px]">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-800">
              Step In
            </p>
            <p className="text-xs text-gray-500 pt-2.5">{street}</p>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-800 pt-2.5">
              Stand Out
            </p>
            <p className="text-xs text-gray-500 pt-2.5 pr-8">{headline}</p>
          </div>
          <div className="p-10 bg-[#dad7d4] relative z-40">
            <p className="text-xl font-moderat-regular text-gray-800">
              {address ? address : null}
            </p>
            <p className="font-moderat-medium text-sm pt-5">
              {`${listingDetails?.bedrooms || 0} BED | ${
                listingDetails?.bathrooms || 0
              } BATH | ${listingDetails?.carportSpaces || 0} CAR`}
            </p>
            <p className="text-sm text-gray-500 pt-10 leading-relaxed">
              <RawHtml html={desc} />
            </p>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="block xl:hidden">
        <div className="relative">
          <div className="absolute -top-[10px] w-[180px] h-[240px] bg-[#dad7d4] rounded-t-full z-0"></div>
          <div className="relative pt-16 lg:pb-5 pl-10 overflow-auto w-[180px]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-800">
              Step In
            </p>
            <p className="text-[8px] text-gray-500 pt-2.5">{street}</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-800 pt-2.5">
              Stand Out
            </p>
            <p className="text-[8px] text-gray-500 pt-2.5">{headline}</p>
          </div>
          <div className="p-10 bg-[#dad7d4] relative z-40">
            <p className="text-sm font-moderat-regular text-gray-800 uppercase">
              {address ? address : null}
            </p>
            <p className="font-moderat-medium text-sm pt-5">
              {`${listingDetails?.bedrooms || 0} BED | ${
                listingDetails?.bathrooms || 0
              } BATH | ${listingDetails?.carportSpaces || 0} CAR`}
            </p>
            <p className="text-xs text-gray-500 pt-10 leading-relaxed">
              <RawHtml html={desc} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryFrom;
