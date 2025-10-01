import React, { useState } from "react";
import { Form, Button } from "antd";
import image from "@/assets/images/right.png";
import { steps } from "@/constants/constants";

const SwitchWithStalwart = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const onFinish = (values) => {};

  return (
    <div className="relative">
      <div className="flex container justify-between items-center gap-30 h-screen">
        {/* Left Side - Form */}
        <div className="w-2/3 pt-18">
          <p className="uppercase text-sm tracking-wide mb-5 font-normal font-moderat-regular">
            Rental Appraisal with Stalwart
          </p>
          <h2 className="text-2xl mb-2 font-moderat-medium uppercase w-full xl:w-[500px]">
            {steps[current].title}
          </h2>
          <p className="mb-20 font-normal font-moderat-regular text-base">
            {/* {steps[current].title} */}
            {steps[current].title == "Confirm your details"
              ? "Almost there, we just need to get a few details from you"
              : "Help us to provide you with the very best service by telling us a bit more about you and your property."}
          </p>
          <div className="pb-14.5">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              requiredMark={false}
            >
              {steps[current].content}
            </Form>
          </div>
          <div className="flex gap-4">
            {current > 0 && (
              <Button className="!rounded-none !px-3 " onClick={() => prev()}>
                Previous
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button
                type="primary"
                htmlType="submit"
                className="!rounded-none !px-3 "
                onClick={next}
              >
                Next Step
              </Button>
            )}

            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                Submit
              </Button>
            )}
          </div>
        </div>

        {/* Right Side - Image */}
      </div>
      <div className="w-2/6 h-screen absolute right-0 top-0 ">
        <img
          src={image} // replace with actual image
          alt="Nature"
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
};

export default SwitchWithStalwart;
