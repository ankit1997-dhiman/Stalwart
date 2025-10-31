import React, { useState } from "react";
import { Form, Button, Collapse, message, Input } from "antd";
import { useNavigate } from "react-router-dom";
import Plus from "@/assets/icons/plus-icon.svg";
import Minus from "@/assets/icons/minus.svg";
import image from "@/assets/images/right.png";
import bgImage from "@/assets/images/contact-bg.png";
import sectionBgImage from "@/assets/images/tab-image.png";
import { CurrentProperties } from "../home/components/CurrentProperties";
import { switchCollapseItems, topSpace } from "@/constants/constants";
import RequestAnAppraisal from "../home/components/RequestAnAppraisal";
import { SellLandingStep } from "../sellWithStalwart/components/SellLandingStep";
import ConfirmDetailsStepSwitch from "./components/ConfirmDetailsStepSwitch";
import { CheckboxStep } from "./components/CheckboxStep";
import { LastStep } from "./components/LastStep";
import { URLS } from "@/constants/Urls";
import { LenisAnimatedLink } from "@/components/LenisAnimatedLink";
import { BlackArrow } from "@/assets/icons/BlackArrow";
import useResponsiveMargin from "@/hooks/useResponsiveMargin";
import { useTheme } from "@/context/ThemeContext";

const SwitchToStalwart = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { setDark } = useTheme();

  const topMargin = useResponsiveMargin(topSpace, 0);
  const steps = [
    { title: "Landing", content: <SellLandingStep form={form} /> },
    {
      title: "Confirm your details",
      content: <ConfirmDetailsStepSwitch form={form} />,
    },
    {
      title: "Is your property currently tenanted?",
      content: <CheckboxStep questionYes="tenanted_status" form={form} />,
    },
    {
      title: "Do you currently have a property manager appointed?",
      content: <CheckboxStep questionYes="appointed_status" form={form} />,
    },
    {
      title:
        "How much rent do you think is achievable for your property in the current market?",
      content: <LastStep form={form} />,
    },
  ];

  const next = async () => {
    try {
      // Validate current step fields
      await form.validateFields(stepFields[current]);

      // Move to next step
      setCurrent((prev) => {
        const nextStep = prev + 1;
        console.log(current, "current", nextStep, "nextStep", steps.length);

        // Set dark for first step, white for other steps
        if (nextStep === 0) {
          setDark(false);
        } else if (nextStep <= steps.length + 1) {
          console.log("laset step ");
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
    0: ["address"], // fields for step 1
    1: ["first_name", "last_name", "email", "number", "privacy"], // fields for step 1
    2: ["tenanted_status"], // fields for step 2
    3: ["appointed_status"], // fields for step 3
  };

  const prev = () => setCurrent((prev) => prev - 1);

  // ---- Form submission ----
  const onFinish = async (values) => {
    setLoading(true);
    const updatedValues = {
      ...values,
      enquiry_for: `Lease With Stalwart Inquiry Received For ${values.address}`,
    };

    console.log(updatedValues, "form values being sent");

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

  const onFinishFailed = (errorInfo) => {
    message.error("Please fill all required fields");
    console.warn("Validation Failed:", errorInfo);
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
      {current === 0 ? (
        <>
          {/* Landing Step */}
          <section
            className={`relative z-[10] h-screen flex flex-col items-center justify-center bg-cover bg-center bg-fixed px-6 xl:px-0  `}
            style={{
              backgroundImage: `url(${bgImage})`,
              marginTop: `-${topMargin}px`,
            }}
          >
            <p className="font-monument text-[15px] lg:text-xl font-medium text-white text-center pb-6 lg:pb-10 uppercase">
              Have a property you'd like us to manage?
            </p>

            <div className="w-full lg:w-[1000px] flex flex-col lg:flex-row justify-between z-20">
              <SellLandingStep />
              <Button
                onClick={next}
                className="!h-[50px] mt-2 lg:mt-0 lg:ml-2 flex items-center justify-center !bg-[#706C62] !border-none !rounded-none !text-white"
              >
                <span className="text-[13px] font-monument">
                  GET AGENT APPRAISAL
                </span>
              </Button>
            </div>
          </section>

          {/* Experience Section */}
          <section className="px-12.5 lg:px-0">
            <div className="container lg:flex items-stretch gap-7.5 py-32">
              <div className="w-full lg:w-[553px]">
                <p className="font-monument text-sm lg:text-xl uppercase leading-6 lg:leading-10">
                  Experience the Stalwart Leasing Difference
                </p>
                <p className="text-xs lg:text-base font-moderat-regular pt-10">
                  At Stalwart, we redefine property management with precision,
                  transparency, and care. We don’t just administer rentals — we
                  actively manage, protect, and optimise your investment.
                  Through refined systems, proactive communication, and
                  cutting-edge technology, we deliver certainty, control, and
                  performance for every property we manage.
                </p>

                <Collapse
                  defaultActiveKey={["1"]}
                  expandIconPosition="right"
                  accordion
                  expandIcon={({ isActive }) =>
                    !isActive ? <img src={Plus} /> : <img src={Minus} />
                  }
                  items={switchCollapseItems.map((item) => ({
                    key: item.key,
                    label: (
                      <div className="font-moderat-medium text-sm lg:text-lg uppercase">
                        {item.label}
                      </div>
                    ),
                    children: (
                      <div className="font-moderat-regular text-base !px-0">
                        {item.content}
                      </div>
                    ),
                  }))}
                  className="!border-none !bg-transparent pl-0 !pt-16 custom-accordion"
                />

                <p className="pt-10">
                  <LenisAnimatedLink
                    to={URLS.SOLD_PROPERTIES}
                    iconPosition="right"
                    icon={<BlackArrow />}
                    className="text-sm font-moderat-bold flex items-center !text-black"
                  >
                    SEE ALL SOLD PROPERTIES
                  </LenisAnimatedLink>
                </p>
              </div>

              <div
                className="flex items-end justify-center bg-cover bg-center px-12.5 xl:px-0 w-full lg:w-[1136px] h-[300px] lg:h-[764px] mt-3 lg:mt-0"
                style={{ backgroundImage: `url(${sectionBgImage})` }}
              />
            </div>
          </section>

          <section className="bg-[#F4F2F0] py-[79px] xl:px-0 px-12.5">
            <RequestAnAppraisal lightMode={true} />
          </section>

          <section className="py-34 px-12.5 lg:px-0">
            <CurrentProperties
              title="HEAR FROM OUR CLIENTS"
              desc="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </section>
        </>
      ) : (
        <div
          className={`relative  `}
          style={{
            marginTop: `-${topMargin}px`,
          }}
        >
          <div className="flex md:flex-row flex-col container justify-between items-center gap-20 px-12.5 md:px-0">
            {/* Left Side */}
            <div className="w-full md:w-[65%] py-60 ">
              <p className="uppercase text-sm tracking-wide mb-5 font-moderat-regular pb-5">
                RENTAL APPRAISAL WITH STALWART
              </p>
              <p className="text-2xl mb-2 font-moderat-medium uppercase pb-1  w-full">
                {steps[current].title}
              </p>
              <p className="font-normal font-moderat-regular text-base pb-20">
                {current === 1
                  ? "Almost there, we just need to get a few details from you."
                  : "Help us to provide you with the very best service by telling us a bit more about your property."}
              </p>

              {steps.map((step, index) => (
                <div
                  key={index}
                  style={{ display: current === index ? "block" : "none" }}
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
                    loading={loading}
                    disabled={loading}
                    htmlType="submit" // ✅ triggers Form submission correctly
                    className="!rounded-none !px-3 bg-white !border !border-black !py-3"
                  >
                    <span className="font-moderat-regular text-base">
                      Submit
                    </span>
                  </Button>
                )}
              </div>
            </div>

            <div className="hidden md:block md:w-[35%] h-full absolute right-0 top-0">
              <img
                src={image}
                alt="Right side"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </Form>
  );
};

export default SwitchToStalwart;
