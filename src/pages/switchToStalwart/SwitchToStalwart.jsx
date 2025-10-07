import React, { useState } from "react";
import { Form, Button, Collapse, Input, Checkbox, message } from "antd";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaMinus, FaPlus } from "react-icons/fa";

import image from "@/assets/images/right.png";
import bgImage from "@/assets/images/about-bg.png";
import sectionBgImage from "@/assets/images/tab-image.png";
import { CurrentProperties } from "../home/components/CurrentProperties";

// --- Collapse Panel Items ---
const collapseItems = [
  { key: "1", label: "This is panel header 1", content: "text content 1" },
  { key: "2", label: "This is panel header 2", content: "text content 2" },
  { key: "3", label: "This is panel header 3", content: "text content 3" },
];

// --- Step Components ---
const LandingStep = ({ form, onFinish }) => (
  <>
    {/* Landing Section */}
    <section
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center bg-fixed px-6 xl:px-0"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <p className="font-monument text-[15px] lg:text-xl font-medium text-white text-center pb-6 lg:pb-10 uppercase">
        Have a property you'd like us to manage?
      </p>

      {/* Unified Form for Desktop & Mobile */}
      <Form
        form={form}
        onFinish={onFinish}
        className="w-full lg:w-[1000px] flex flex-col lg:flex-row justify-center bg-white"
      >
        <Form.Item name="name" noStyle>
          <Input
            placeholder="Start Typing To Find Your Address...."
            className="!h-[50px] !border-none !rounded-none !outline-0 flex-1"
          />
        </Form.Item>

        <Button
          htmlType="submit"
          className="!h-[50px] mt-2 lg:mt-0 lg:ml-2 flex items-center justify-center !bg-[#706C62] !border-none !rounded-none !text-white"
        >
          <span className="text-[13px] font-monument">GET AGENT APPRAISAL</span>
        </Button>
      </Form>
    </section>

    {/* Experience + Collapse Section */}
    <section className="px-12.5 lg:px-0">
      <div className="container grid grid-cols-1 lg:grid-cols-4 gap-6 py-32">
        <div className="lg:col-span-1">
          <p className="pb-10 font-monument lg:text-lg text-sm uppercase leading-6 lg:leading-10">
            Experience the stalwart difference
          </p>
          <p className="pb-16 text-xs lg:text-base font-moderat-regular">
            At Stalwart, we define prestige property with unrivalled experience,
            comprehensive local market knowledge, and strategic approaches that
            consistently deliver exceptional results.
          </p>

          <Collapse
            defaultActiveKey={["1"]}
            expandIconPosition="right"
            accordion
            expandIcon={({ isActive }) => (isActive ? <FaMinus /> : <FaPlus />)}
            items={collapseItems.map((item) => ({
              key: item.key,
              label: (
                <div className="font-moderat-medium text-sm lg:text-lg uppercase">
                  {item.label}
                </div>
              ),
              children: <div>{item.content}</div>,
            }))}
            className="!border-none !bg-transparent pl-0"
          />

          <p className="pt-10">
            <Link className="text-sm font-moderat-bold flex items-center">
              SEE ALL SOLD PROPERTIES
              <HiArrowLongRight className="pl-3 text-black text-4xl" />
            </Link>
          </p>
        </div>

        <div
          className="flex items-end justify-center bg-cover bg-center px-12.5 xl:px-0 lg:col-span-3"
          style={{ backgroundImage: `url(${sectionBgImage})` }}
        />
      </div>
    </section>

    {/* Have Questions Section */}
    <section className="bg-[#F4F2F0] mb-32 px-12.5 lg:px-0">
      <div className="container grid grid-cols-1 lg:grid-cols-4 gap-6 py-20">
        <div
          className="flex items-end justify-center bg-cover bg-center px-12.5 xl:px-0 lg:col-span-1"
          style={{ backgroundImage: `url(${sectionBgImage})` }}
        />
        <div className="lg:col-span-3">
          <p className="pb-5 font-miller-light capitalize text-xl lg:text-4xl font-light leading-10">
            Have any questions?
          </p>
          <p className="pb-16 text-sm lg:text-base font-moderat-regular">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>

          <p className="pt-10">
            <Link className="text-sm font-moderat-bold flex items-center">
              REQUEST NOW
              <HiArrowLongRight className="pl-3 text-black text-4xl" />
            </Link>
          </p>
        </div>
      </div>
    </section>

    <CurrentProperties title="SEE OUR SOLD PROPERTIES" />
  </>
);

const ConfirmDetailsStep = () => (
  <>
    <div className="grid grid-cols-2 gap-4">
      <Form.Item
        name="firstName"
        label="First Name"
        rules={[{ required: true }]}
      >
        <Input
          placeholder="First Name"
          className="!border-black !border !rounded-none !py-2"
        />
      </Form.Item>
      <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
        <Input
          placeholder="Last Name"
          className="!border-black !border !rounded-none !py-2"
        />
      </Form.Item>
      <Form.Item
        name="email"
        label="Contact Email"
        rules={[{ required: true }]}
      >
        <Input
          placeholder="Contact Email"
          className="!border-black !border !rounded-none !py-2"
        />
      </Form.Item>
      <Form.Item
        name="number"
        label="Contact Number"
        rules={[{ required: true }]}
      >
        <Input
          placeholder="Contact Number"
          className="!border-black !border !rounded-none !py-2"
        />
      </Form.Item>
    </div>
    <Form.Item name="yes" rules={[{ required: true }]} className="pt-2">
      <Checkbox>
        Don't worry, we never pass your details onto any third parties. By
        continuing you agree to our Privacy Policy
      </Checkbox>
    </Form.Item>
  </>
);

const TenantedStep = () => (
  <>
    <Form.Item name="tenantedYes" valuePropName="checked">
      <Checkbox>Yes, I Have Tenants Already</Checkbox>
    </Form.Item>
    <Form.Item name="tenantedNo" valuePropName="checked">
      <Checkbox>No, I Need Tenants</Checkbox>
    </Form.Item>
  </>
);
const AppointedStep = () => (
  <>
    <Form.Item name="tenantedYes" valuePropName="checked">
      <Checkbox>Yes</Checkbox>
    </Form.Item>
    <Form.Item name="tenantedNo" valuePropName="checked">
      <Checkbox>No</Checkbox>
    </Form.Item>
  </>
);
const LastStep = () => (
  <>
    <div className="grid grid-cols-2 gap-4">
      <Form.Item
        name="firstName"
       
        rules={[{ required: true }]}
      >
        <Input
          placeholder="e.g. 500"
          className="!border-black !border !rounded-none !py-2"
        />
      </Form.Item>
    
    </div>
   
  </>
);

// --- Main Component ---
const SwitchWithStalwart = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => prev + 1);
  const prev = () => setCurrent((prev) => prev - 1);
  const onFinish = (values) => {
    console.log("Form Values:", values);
    next();
  };

  const steps = [
    {
      title: "Landing",
      content: <LandingStep form={form} onFinish={onFinish} />,
    },
    { title: "Confirm your details", content: <ConfirmDetailsStep /> },
    {
      title: "Is your property currently tenanted?",
      content: <TenantedStep />,
    },
    {
      title: "Do you currently have a property manager appointed?",
      content: <AppointedStep />,
    },
    {
      title: "How much rent do you think is achievable for your property in the current market?",
      content: <LastStep />,
    },
  ];

  if (current === 0) return steps[0].content;

  return (
    <div className="relative">
      <div className="flex container justify-between items-center gap-50 h-screen">
        {/* Left Side */}
        <div className="w-[60%] pt-18 pr-60">
          <p className="uppercase text-sm tracking-wide mb-5 font-moderat-regular pb-5">
            RENTAL APPRAISAL WITH stalwart
          </p>
          <p className="text-2xl mb-2 font-moderat-medium uppercase pb-1 lg:w-[600px] w-full">
            {steps[current].title}
          </p>
          <p className="mb-10 font-normal font-moderat-regular text-base pb-20">
            {current === 1
              ? "Almost there, we just need to get a few details from you"
              : "Help us to provide you with the very best service by telling us a bit more about your property."}
          </p>

          <Form form={form} layout="vertical" onFinish={onFinish}>
            {steps[current].content}
          </Form>

          <div className="flex gap-4 mt-10">
            {current > 1 && (
              <Button className="!rounded-none !px-3 bg-white !border !border-black !py-3" onClick={prev}>
                  <sapn className="font-moderat-regular text-base ">Go Back</sapn>
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button
                className="!rounded-none !px-3 bg-white !border !border-black !py-3"
                onClick={next}
              >
                <sapn className="font-moderat-regular text-base ">
                  Next Step
                </sapn>
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button onClick={() => message.success("Processing complete!")} className="!rounded-none !px-3 bg-white !border !border-black !py-3">
                    <sapn className="font-moderat-regular text-base ">Submit</sapn>
              </Button>
            )}
          </div>
        </div>

        {/* Right Side Image */}
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

export default SwitchWithStalwart;
