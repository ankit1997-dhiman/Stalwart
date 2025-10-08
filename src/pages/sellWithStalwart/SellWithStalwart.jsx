import React, { useState } from "react";
import { Form, Button, Input, Checkbox, Collapse, message } from "antd";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaMinus, FaPlus } from "react-icons/fa";

import image from "@/assets/images/right.png";
import bgImage from "@/assets/images/about-bg.png";
import sectionBgImage from "@/assets/images/tab-image.png";
import { CurrentProperties } from "../home/components/CurrentProperties";
import AddressAutocomplete from "../home/components/AddressAutocomplete";

// --- Collapse Panel Items ---
const collapseItems = [
  { key: "1", label: "This is panel header 1", content: "text content 1" },
  { key: "2", label: "This is panel header 2", content: "text content 2" },
  { key: "3", label: "This is panel header 3", content: "text content 3" },
];

// --- Step Components ---
const LandingStep = () => (
  <>
    <Form.Item
      name="address"
      label={false}
      className="!mb-0 !w-full !rounded-xl "
      rules={[{ required: true, message: "Please enter your address" }]}
    >
      <AddressAutocomplete />
    </Form.Item>
  </>
);

const ConfirmDetailsStep = () => (
  <>
    <div className="grid grid-cols-2 gap-7.5">
      <Form.Item
        name="confirm_firstName"
        label="First Name"
        rules={[{ required: true, message: "First name is required" }]}
      >
        <Input
          placeholder="First Name"
          className="!border-black !border !rounded-none !py-2"
        />
      </Form.Item>
      <Form.Item
        name="confirm_lastName"
        label="Last Name"
        rules={[{ required: true, message: "Last name is required" }]}
      >
        <Input
          placeholder="Last Name"
          className="!border-black !border !rounded-none !py-2"
        />
      </Form.Item>
      <Form.Item
        name="confirm_email"
        label="Contact Email"
        rules={[
          { required: true, message: "Email is required" },
          { type: "email", message: "Enter a valid email" },
        ]}
      >
        <Input
          placeholder="Contact Email"
          className="!border-black !border !rounded-none !py-2"
        />
      </Form.Item>
      <Form.Item
        name="confirm_number"
        label="Contact Number"
        rules={[{ required: true, message: "Contact number is required" }]}
      >
        <Input
          placeholder="Contact Number"
          className="!border-black !border !rounded-none !py-2"
        />
      </Form.Item>
    </div>

    <Form.Item
      name="confirm_privacy"
      valuePropName="checked"
      rules={[
        {
          validator: (_, value) =>
            value
              ? Promise.resolve()
              : Promise.reject("You must agree to continue"),
        },
      ]}
    >
      <Checkbox>
        Don’t worry, we never pass your details onto any third parties. By
        continuing you agree to our Privacy Policy.
      </Checkbox>
    </Form.Item>
  </>
);

const TenantedStep = () => (
  <>
    <Form.Item
      name="tenancy_status"
      label={false}
      rules={[{ required: true, message: "Please select an option" }]}
    >
      <Checkbox.Group className="flex flex-col gap-7.5">
        <Checkbox value="yes">Owner Occupier</Checkbox>
        <Checkbox value="no">Owner Investor</Checkbox>
      </Checkbox.Group>
    </Form.Item>
  </>
);

const AppointedStep = () => (
  <>
    <Form.Item
      name="appointed_status"
      label={false}
      rules={[{ required: true, message: "Please select an option" }]}
    >
      <Checkbox.Group className="flex flex-col gap-7.5">
        <Checkbox value="yes">Now</Checkbox>
        <Checkbox value="no">Within the next month</Checkbox>
        <Checkbox value="no">2-6 Months</Checkbox>
        <Checkbox value="no">6+ Months</Checkbox>
        <Checkbox value="no">Already on the market</Checkbox>
        <Checkbox value="no">Not sure</Checkbox>
      </Checkbox.Group>
    </Form.Item>
  </>
);

// --- Main Component ---
const SellWithStalwart = () => {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);

  const next = async () => {
    try {
      // await form.validateFields();
      setCurrent((prev) => prev + 1);
    } catch (error) {
      console.log("Validation failed:", error);
    }
  };

  const prev = () => setCurrent((prev) => prev - 1);

  const onFinish = (values) => {
    console.log("✅ Final Form Values:", values);
    message.success("Form submitted successfully!");
  };

  const steps = [
    { title: "Landing", content: <LandingStep /> },
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
            <LandingStep />

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
          <div className="container flex gap-10 py-32">
            <div className="w-full lg:w-[35%]">
              <p className="pb-10 font-monument lg:text-lg text-sm uppercase leading-6 lg:leading-10">
                Experience the stalwart difference
              </p>
              <p className="pb-16 text-xs lg:text-base font-moderat-regular">
                At Stalwart, we define prestige property with unrivalled
                experience, comprehensive local market knowledge, and strategic
                approaches that consistently deliver exceptional results.
              </p>

              <Collapse
                defaultActiveKey={["1"]}
                expandIconPosition="right"
                accordion
                expandIcon={({ isActive }) =>
                  isActive ? <FaMinus /> : <FaPlus />
                }
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
              className="flex items-end justify-center bg-cover bg-center px-12.5 xl:px-0 w-full lg:w-[65%]"
              style={{ backgroundImage: `url(${sectionBgImage})` }}
            />
          </div>
        </section>

        {/* Questions Section */}
        <section className="bg-[#F4F2F0] mb-32 px-12.5 lg:px-0">
          <div className="container flex gap-10 py-20">
            <div
              className="flex items-end justify-center bg-cover bg-center px-12.5 xl:px-0 w-full lg:w-[35%]"
              style={{ backgroundImage: `url(${sectionBgImage})` }}
            />
            <div className="w-full lg:w-[65%]">
              <p className="pb-5 font-miller-light capitalize text-xl lg:text-4xl font-light leading-10">
                Have any questions?
              </p>
              <p className="pb-16 text-sm lg:text-base font-moderat-regular">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
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
  }

  // Inner Steps
  return (
    <div className="relative -mt-[86px]">
      <div className="flex container justify-between items-center gap-50 h-screen">
        {/* Left Side */}
        <div className="w-[60%] pt-18 pr-60">
          <p className="uppercase text-sm tracking-wide mb-5 font-moderat-regular pb-5">
            RENTAL APPRAISAL WITH STALWART
          </p>
          <p className="text-2xl mb-2 font-moderat-medium uppercase pb-1 lg:w-[700px] w-full">
            {steps[current].title}
          </p>
          <p className="mb-10 font-normal font-moderat-regular text-base pb-20">
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
                  className="!rounded-none !px-3 bg-white !border !border-black !py-3"
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

export default SellWithStalwart;
