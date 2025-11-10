import React, { useState } from "react";
import { SellLandingStep } from "../sellWithStalwart/components/SellLandingStep";
import { Button, Form, Input, message } from "antd";
import useResponsiveMargin from "@/hooks/useResponsiveMargin";
import { topSpace } from "@/constants/constants";
import { ConfirmDetailsStep } from "../sellWithStalwart/components/ConfirmDetailsStep";
import { TenantedStep } from "../sellWithStalwart/components/TenantedStep";
import bgImage from "@/assets/images/contact-bg.png";
import image from "@/assets/images/right.png";
import { URLS } from "@/constants/Urls";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { FormWrapper } from "@/components/FormWrapper";

const SuburbInsight = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const topMargin = useResponsiveMargin(topSpace, 0);
  const navigate = useNavigate();

  const { setDark } = useTheme();

  const next = async () => {
    try {
      // Validate current step fields
      await form.validateFields(stepFields[current]);

      // Move to next step
      setCurrent((prev) => {
        const nextStep = prev + 1;

        // Set dark for first step, white for other steps
        if (nextStep === 0) {
          setDark(false);
        } else if (nextStep <= steps.length) {
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

  const stepFields = {
    1: ["first_name", "last_name", "email", "number", "privacy"], // fields for step 1
    2: ["tenancy_status"], // fields for step 2
  };

  const prev = () => setCurrent((prev) => prev - 1);

  const onFinish = async (values) => {
    setLoading(true);
    const updatedValues = {
      ...values,
      enquiry_for: `Suburb Market Insight Request For ${values.address}`,
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

  const steps = [
    {
      title: "Landing",
      content: <SellLandingStep form={form} active={"buy"} />,
    },
    {
      title: "Confirm your details",
      content: <ConfirmDetailsStep form={form} />,
    },
    {
      title: "WHAT IS YOUR RELATIONSHIP WITH THAT SUBURB?",
      content: <TenantedStep form={form} />,
    },
  ];

  const onFinishFailed = (errorInfo) => {
    message.error("Please fill all required fields");
  };
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item name="enquiry_for" hidden>
        <Input />
      </Form.Item>
      {current === 0 && (
        <>
          <section
            className="relative z-[10] h-screen flex flex-col items-center justify-center bg-cover bg-center bg-fixed px-6 xl:px-0"
            style={{
              backgroundImage: `url(${bgImage})`,
              marginTop: `-${topMargin}px`,
            }}
          >
            <p className="font-monument text-[15px] lg:text-xl font-medium text-white text-center pb-6 lg:pb-10 uppercase">
              Search Suburb
            </p>

            <div className="w-full lg:w-[1000px] flex flex-col lg:flex-row justify-between z-20">
              <SellLandingStep form={form} />

              <Button
                htmlType="button"
                onClick={next}
                className="!h-[50px] mt-2 lg:mt-0 lg:ml-2 flex items-center justify-center !bg-[#706C62] !border-none !rounded-none !text-white"
              >
                <span className="text-[13px] font-monument uppercase">
                  GET Suburb Insight
                </span>
              </Button>
            </div>
          </section>
        </>
      )}

      {/* Step 2+ */}
      {current !== 0 && (
        <FormWrapper>
          <div
            className="relative overflow-hidden"
            style={{ marginTop: `-${topMargin}px` }}
          >
            <div className="flex md:flex-row flex-col container justify-between items-center gap-20 px-12.5 lg:px-0">
              <div className="w-full">
                <p className="uppercase text-sm tracking-wide mb-5 font-moderat-regular pb-5">
                  Suburb Report
                </p>
                <p className="text-2xl mb-2 font-moderat-medium uppercase pb-1 w-full">
                  {steps[current].title}
                </p>
                <p className="font-normal font-moderat-regular text-base pb-20">
                  {current === 1
                    ? "Almost there, we just need to get a few details from you."
                    : "Help us to provide you with the very best service by telling us a bit more about your research."}
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
                  {current > 1 && (
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
                      <span className="font-moderat-regular text-base">
                        Submit
                      </span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </FormWrapper>
      )}
    </Form>
  );
};

export default SuburbInsight;
