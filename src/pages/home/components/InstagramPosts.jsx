import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";

import InstagramReelsGrid from "@/components/InstagramReels";

const InstagramPosts = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    const updatedValues = {
      ...values,
      enquiry_for: `Subscribe Form`,
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
        form.resetFields();
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
  };
  return (
    <div className={` bg-white  py-16.5 px-12.5 xl:px-0 `}>
      <div className="container">
        <div className="lg:pt-18">
          <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between lg:gap-6">
            <p className="text-2xl md:text-[40px] font-light font-miller-light pb-12">
              Keep Up With Us On Instagram
            </p>

            {/* Mobile Carousel */}
            <div className="block xl:hidden mb-6 lg:mb-0">
              <InstagramReelsGrid />
            </div>

            {/* Form */}
            <div className="lg:w-1/2">
              <p className="pt-26 md:pt-0 font-moderat-regular leading-[20px] text-[#4F4C45] text-sm w-full md:w-[553px] ">
                Subscribe to get the latest insider tips, market updates and
                access to the hottest deals as they come on the market.
              </p>
              <Form
                className="justify-baseline pt-7.5 lg:pt-7.5"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item name="enquiry_for" hidden>
                  <Input />
                </Form.Item>
                <div className=" flex justify-between item-center flex-col md:flex-row gap-1 lg:gap-6 mt-4">
                  <div className="flex flex-row  justify-start items-center gap-5 md:gap-6 w-full">
                    <Form.Item
                      name="fullName"
                      label={false}
                      rules={[
                        { required: true, message: "Please enter your email" },
                        {
                          type: "name",
                          message: "Please enter a valid email",
                        },
                      ]}
                      className="!mb-0 lg:w-[35%]"
                    >
                      <Input
                        placeholder="Full Name"
                        className="!py-2.5 !outline-none !border-b-black !border-t-0 !border-r-0 !border-l-0 !bg-transparent !rounded-none !px-0"
                      />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      label={false}
                      rules={[
                        { required: true, message: "Please enter your email" },
                        {
                          type: "email",
                          message: "Please enter a valid email",
                        },
                      ]}
                      className="!mb-0 w-full"
                    >
                      <Input
                        placeholder="Email"
                        className="!py-2.5 !outline-none !border-b-black !border-t-0 !border-r-0 !border-l-0 !bg-transparent !rounded-none !px-0"
                      />
                    </Form.Item>
                  </div>
                  <div className="flex justify-end lg:pt-0 pt-5">
                    <Button
                      htmlType="submit"
                      loading={loading}
                      disabled={loading}
                      className="text-sm font-medium text-left lg:text-right !text-black w-full  origin-left hover:scale-x-[104%] duration-500 cursor-pointer !bg-transparent !border-0"
                    >
                      <span className="!text-black">
                        {loading ? "loading..." : "Submit"}
                      </span>
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden xl:block md:py-20">
          <InstagramReelsGrid />
        </div>
      </div>
    </div>
  );
};

export default InstagramPosts;
