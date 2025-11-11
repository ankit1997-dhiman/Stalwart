import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { ConfirmDetailsStep } from "../sellWithStalwart/components/ConfirmDetailsStep";
import { TenantedStep } from "../sellWithStalwart/components/TenantedStep";
import { topSpace } from "@/constants/constants";
import useResponsiveMargin from "@/hooks/useResponsiveMargin";
import { useLocation, useNavigate } from "react-router-dom";
import { URLS } from "@/constants/Urls";
import { AppointedStep } from "../sellWithStalwart/components/AppointedStep";
import { useTheme } from "@/context/ThemeContext";
import { FormWrapper } from "@/components/FormWrapper";

const PropertyEstimate = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const topMargin = useResponsiveMargin(topSpace, 0);
  const location = useLocation();
  const navigate = useNavigate();
  const enquiry = location.state?.query;

  const { setDark } = useTheme();

  const steps = [
    {
      title: "Confirm your details",
      sub: "Almost there, we just need to get a few details from you.",
      content: <ConfirmDetailsStep form={form} />,
    },
    {
      title: "What are you exploring today?",
      sub: "A quick detail so we guide you the right way.",
      content: <TenantedStep form={form} />,
    },
    {
      title: "WHEN ARE YOU THINKING OF SELLING?",
      sub: "Help us to provide you with the very best service by telling us a bit more about your property.",
      content: <AppointedStep form={form} />,
    },
  ];

  const stepFields = {
    0: ["first_name", "last_name", "email", "number", "privacy"], // fields for step 1
    1: ["tenancy_status"], // fields for step 2
    3: ["appointed_status"], // fields for step 3
  };

  const next = async () => {
    try {
      // Validate current step fields
      await form.validateFields(stepFields[current]);

      // Move to next step
      setCurrent((prev) => {
        const nextStep = prev + 1;

        // Set dark for first step, white for other steps
        if (nextStep === 0) {
          setDark(true);
        } else if (nextStep <= steps.length + 1) {
          setDark(true);
        } else {
          // If nextStep exceeds steps, reset to first step
          setDark(false);
        }

        return nextStep;
      });
    } catch (err) {
      console.log("Validation failed:", err);
    }
  };

  const prev = () => setCurrent((prev) => prev - 1);

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

  const onFinishFailed = (errorInfo) => {
    message.error("Please fill all required fields");
  };

  return (
    <FormWrapper>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          enquiry_for: `Property Evaluation Request For ${enquiry}`,
        }}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item name="enquiry_for" hidden>
          <Input />
        </Form.Item>
        <div className="overflow-hidden h-full">
          <div className="w-full  flex flex-col">
            <p className="uppercase text-sm tracking-wide mb-5 font-moderat-regular pb-5">
              Property APPRAISAL
            </p>
            <p className="text-2xl mb-2 font-moderat-medium uppercase pb-1 w-full ">
              {steps[current].title}
            </p>
            <p className="font-normal font-moderat-regular text-base pb-20">
              {steps[current].sub}
            </p>

            {steps.map((step, index) => (
              <div
                key={index}
                style={{ display: current === index ? "" : "none" }}
              >
                {step.content}
              </div>
            ))}

            <div className="flex gap-4 mt-10">
              {current > 0 && (
                <Button
                  className="!rounded-none !px-3 bg-white !border !border-black !py-3"
                  onClick={prev}
                >
                  <span className="font-moderat-regular text-base">
                    Go Back
                  </span>
                </Button>
              )}
              {current < steps.length - 1 && (
                <Button
                  className="!rounded-none !px-3.5 bg-white !border !border-black !py-2 w-[127px] h-[41px]"
                  onClick={next}
                >
                  <span className="font-moderat-regular text-base">
                    Next Step
                  </span>
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  htmlType="submit"
                  loading={loading}
                  disabled={loading}
                  className="!rounded-none !px-3 bg-white !border !border-black !py-3"
                >
                  <span className="font-moderat-regular text-base">Submit</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Form>
    </FormWrapper>
  );
};

export default PropertyEstimate;
