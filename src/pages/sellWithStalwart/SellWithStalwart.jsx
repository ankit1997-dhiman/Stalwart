import React, { useState } from "react";
import { Form, Button, Collapse, message } from "antd";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import Plus from "@/assets/icons/plus-icon.svg";
import Minus from "@/assets/icons/minus.svg";
import image from "@/assets/images/right.png";
import bgImage from "@/assets/images/about-bg.png";
import sectionBgImage from "@/assets/images/tab-image.png";
import { CurrentProperties } from "../home/components/CurrentProperties";
import { collapseItems } from "@/constants/constants";
import RequestAnAppraisal from "../home/components/RequestAnAppraisal";
import { SellLandingStep } from "./components/SellLandingStep";
import { ConfirmDetailsStep } from "./components/ConfirmDetailsStep";
import { AppointedStep } from "./components/AppointedStep";
import { TenantedStep } from "./components/TenantedStep";

// --- Main Component ---
const SellWithStalwart = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);

  const next = async () => {
    try {
      // await form.validateFields();
      setCurrent((prev) => prev + 1);
    } catch (error) {
      throw error;
    }
  };

  const prev = () => setCurrent((prev) => prev - 1);

  const onFinish = (values) => {
    message.success("Form submitted successfully!");
  };

  const steps = [
    { title: "Landing", content: <SellLandingStep /> },
    { title: "Confirm your details", content: <ConfirmDetailsStep /> },
    {
      title: "WHAT IS YOUR RELATIONSHIP WITH THIS PROPERTY?",
      content: <TenantedStep />,
    },
    { title: "WHEN ARE YOU THINKING OF SELLING?", content: <AppointedStep /> },
  ];

  // Landing Page Step
  if (current === 0) {
    return (
      <>
        <section
          className="relative z-[10] h-screen flex flex-col items-center justify-center bg-cover bg-center bg-fixed px-6 xl:px-0 -mt-[86px]"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <p className="font-monument text-[15px] lg:text-xl font-medium text-white text-center pb-6 lg:pb-10 uppercase">
            SELL WITH STALWART
          </p>

          <Form
            form={form}
            onFinish={() => next()}
            preserve={true}
            className="w-full lg:w-[1000px] flex flex-col lg:flex-row justify-between z-20"
          >
            <SellLandingStep />

            <Button
              htmlType="submit"
              className="!h-[50px] mt-2 lg:mt-0 lg:ml-2 flex items-center justify-center !bg-[#706C62] !border-none !rounded-none !text-white"
            >
              <span className="text-[13px] font-monument">
                GET AGENT APPRAISAL
              </span>
            </Button>
          </Form>
        </section>

        {/* Experience Section */}
        <section className="px-12.5 lg:px-0">
          <div className="container lg:flex items-stretch gap-7.5 py-32">
            <div className="w-full lg:w-[553px]">
              <p className="font-monument text-sm lg:text-xl uppercase leading-6 lg:leading-10">
                Experience the stalwart difference
              </p>
              <p className="text-xs lg:text-base font-moderat-regular pt-10">
                At Stalwart, we define prestige property with unrivalled
                experience, comprehensive local market knowledge, and strategic
                approaches that consistently deliver exceptional results.
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
                <Link className="text-sm font-moderat-bold flex items-center">
                  SEE ALL SOLD PROPERTIES
                  <HiArrowLongRight className="pl-3 text-black text-4xl" />
                </Link>
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
          <CurrentProperties title="SEE OUR SOLD PROPERTIES" />
        </section>
      </>
    );
  }

  // Inner Steps
  return (
    <div className="relative -mt-[86px]">
      <div className="flex container justify-between items-center gap-20 h-screen">
        {/* Left Side */}
        <div className="w-full lg:w-[845px] pt-18 ">
          <p className="uppercase text-sm tracking-wide mb-5 font-moderat-regular pb-5">
            RENTAL APPRAISAL WITH STALWART
          </p>
          <p className="text-2xl mb-2 font-moderat-medium uppercase pb-1 lg:w-[700px] w-full">
            {steps[current].title}
          </p>
          <p className="font-normal font-moderat-regular text-base pb-20">
            {current === 1
              ? "Almost there, we just need to get a few details from you."
              : "Help us to provide you with the very best service by telling us a bit more about your property."}
          </p>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            preserve={true}
          >
            {/* Keep all steps mounted but only show active one */}
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
                  htmlType="submit"
                  className="!rounded-none !px-3 bg-white !border !border-black !py-3"
                >
                  <span className="font-moderat-regular text-base">Submit</span>
                </Button>
              )}
            </div>
          </Form>
        </div>

        <div className="w-[40%] h-screen absolute right-0 top-0">
          <img
            src={image}
            alt="Right side"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SellWithStalwart;
