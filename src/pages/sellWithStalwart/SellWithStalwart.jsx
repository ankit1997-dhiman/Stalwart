import { BlackArrow } from "@/assets/icons/BlackArrow";
import Minus from "@/assets/icons/minus.svg";
import Plus from "@/assets/icons/plus-icon.svg";
import { LenisAnimatedLink } from "@/components/LenisAnimatedLink";
import { S3_BASE_URL } from "@/config";
import { collapseItems, topSpace } from "@/constants/constants";
import { URLS } from "@/constants/Urls";
import { useTheme } from "@/context/ThemeContext";
import useResponsiveMargin from "@/hooks/useResponsiveMargin";
import { Button, Collapse, Form, Input, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentProperties } from "../home/components/CurrentProperties";
import RequestAnAppraisal from "../home/components/RequestAnAppraisal";
import { AppointedStep } from "./components/AppointedStep";
import { ConfirmDetailsStep } from "./components/ConfirmDetailsStep";
import { SellLandingStep } from "./components/SellLandingStep";
import { TenantedStep } from "./components/TenantedStep";

const SellWithStalwart = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const topMargin = useResponsiveMargin(topSpace, 0);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { setDark } = useTheme();

  const steps = [
    {
      title: "Landing",
      content: (
        <SellLandingStep
          form={form}
          query={query}
          setQuery={setQuery}
          active={true}
        />
      ),
    },
    {
      title: "Confirm your details",
      sub_title: "Almost there, we just need to get a few details from you.",
      content: <ConfirmDetailsStep form={form} />,
    },
    {
      title: "What are you exploring today?",
      sub_title: "A quick detail so we guide you the right way.",
      content: <TenantedStep form={form} />,
    },
    {
      title: "When are you thinking of selling ?",
      sub_title: "Timing shapes your strategy. We’ll guide you from here.",
      content: <AppointedStep form={form} />,
    },
  ];

  const next = async () => {
    try {
      await form.validateFields(stepFields[current]);

      setCurrent((prev) => {
        const nextStep = prev + 1;

        if (nextStep === 0) {
          setDark(false);
        } else if (nextStep <= steps.length + 1) {
          setDark(true);
        } else {
          setDark(false);
        }

        return nextStep;
      });
    } catch (err) {
      console.log("Validation failed:", err);
    }
  };

  const stepFields = {
    0: ["address"],
    1: ["first_name", "last_name", "email", "number", "privacy"],
    2: ["tenancy_status"],
    3: ["appointed_status"],
  };

  const prev = () => setCurrent((prev) => prev - 1);

  const onFinish = async (values) => {
    setLoading(true);
    const updatedValues = {
      ...values,
      enquiry_for: `Sell With Stalwart Inquiry Received For ${values.address}`,
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
              backgroundImage: `url(${S3_BASE_URL + "/contact-bg.png"})`,
              marginTop: `-${topMargin}px`,
            }}
          >
            <p className="font-monument text-[15px] lg:text-xl font-medium text-white text-center pb-6 lg:pb-10 uppercase">
              SELL WITH STALWART
            </p>

            <div className="w-full lg:w-[1000px] flex flex-col lg:flex-row justify-between z-20">
              {steps[0].content}

              <Button
                htmlType="button"
                onClick={next}
                className="!h-[50px] mt-2 lg:mt-0 lg:ml-2 flex items-center justify-center !bg-[#706C62] !border-none !rounded-none !text-white"
              >
                <span className="text-[13px] font-monument">
                  GET AN AGENT APPRAISAL
                </span>
              </Button>
            </div>
          </section>

          <section className="px-12.5 lg:px-0">
            <div className="container lg:flex items-stretch gap-7.5 py-20 lg:py-32">
              <div className="w-full lg:w-[553px]">
                <p className="font-monument text-sm lg:text-xl uppercase leading-6 lg:leading-10">
                  Experience the stalwart difference
                </p>
                <p className="text-xs lg:text-base font-moderat-regular pt-10">
                  At Stalwart Real Estate, we bring unrivalled expertise, deep
                  local understanding and a disciplined strategy to every
                  property we represent — delivering results that consistently
                  exceed expectations.
                </p>

                <Collapse
                  defaultActiveKey={["1"]}
                  expandIconPosition="right"
                  accordion
                  expandIcon={({ isActive }) =>
                    !isActive ? <img src={Plus} /> : <img src={Minus} />
                  }
                  items={collapseItems.map((item) => ({
                    key: item.key,
                    label: (
                      <div className="font-moderat-medium text-xs lg:text-lg uppercase">
                        {item.label}
                      </div>
                    ),
                    children: (
                      <div className="font-moderat-regular text-xs lg:text-base !px-0">
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
                className="flex items-end justify-center bg-cover bg-center px-12.5 xl:px-0 w-full lg:w-[1136px] h-[300px] lg:h-[764px] mt-9 lg:mt-0"
                style={{
                  backgroundImage: `url(${S3_BASE_URL}/tab-image.png)`,
                }}
              />
            </div>
          </section>

          <section className="bg-[#F4F2F0] py-[79px] xl:px-0 px-12.5">
            <RequestAnAppraisal lightMode={true} />
          </section>
          <section className="py-16 lg:py-34">
            <CurrentProperties
              title="SEE OUR SOLD PROPERTIES"
              status="SOLD"
              desc="As a seller-exclusive agency, we are experts in South-East Queensland real estate, specialising in residential sales, acreage homes, investment properties and development projects across the Brisbane–Ipswich–Gold Coast corridor."
              order="SOLD_DATE_DESC"
              showButton={true}
            />
          </section>
        </>
      )}

      {current !== 0 && (
        <div
          className="relative overflow-hidden"
          style={{ marginTop: `-${topMargin}px` }}
        >
          <div className="flex md:flex-row flex-col container justify-between items-center gap-20 px-12.5 lg:px-0">
            <div className="w-full md:w-[65%] py-60">
              <p className="uppercase text-sm tracking-wide mb-5 font-moderat-regular pb-5">
                Property APPRAISAL
              </p>
              <p className="text-2xl mb-2 font-moderat-medium uppercase pb-1 w-full">
                {steps[current].title}
              </p>
              <p className="font-normal font-moderat-regular text-base pb-20">
                {steps[current].sub_title}
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

            <div className="hidden md:block md:w-[35%] h-full absolute right-0 top-0">
              <img
                src={`${S3_BASE_URL}/right.png`}
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

export default SellWithStalwart;
