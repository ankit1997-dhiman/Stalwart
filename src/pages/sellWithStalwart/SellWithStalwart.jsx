import bgImage from "@/assets/images/about-bg.png";
import { Button, Collapse, Form, Input } from "antd";
import React from "react";
import sectionBgImage from "@/assets/images/tab-image.png";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import { CurrentProperties } from "../home/components/CurrentProperties";

export default function SellWithStalwart() {
  const [form] = Form.useForm();

  const onFinish = (values) => {};

  const items = [
    {
      key: "1",
      label: (
        <div className="font-moderat-medium text-lg uppercase">
          This is panel header 1
        </div>
      ),
      children: <div>{"teasdfasdxt"}</div>,
      //   extra: genExtra(),
    },
    {
      key: "2",
      label: (
        <div className="font-moderat-medium text-lg uppercase ">
          This is panel header 1
        </div>
      ),
      children: <div>{"text"}</div>,
      //   extra: genExtra(),
    },
    {
      key: "3",
      label: (
        <div className="font-moderat-medium text-lg uppercase">
          This is panel header 1
        </div>
      ),
      children: <div>{"text"}</div>,
      //   extra: genExtra(),
    },
  ];

  const onChange = (key) => {};

  return (
    <div>
      <section
        className="h-screen flex items-center justify-center bg-cover bg-center bg-fixed px-12.5 xl:px-0"
        style={{
          backgroundImage: `url(${bgImage})`, // use imported image
        }}
      >
        <div className="container">
          <p className="font-monument text-xl font-medium text-white text-center pb-10 xl:pb-16">
            SELL WITH STALWART
          </p>

          <Form form={form} onFinish={onFinish}>
            <div className="w-full xl:w-[1000px] flex bg-white mx-auto">
              <Form.Item
                name="name"
                label={false}
                className="!mb-0 !w-full !rounded-xl"
              >
                <Input
                  placeholder="Start Typing To Find Your Address...."
                  className="!h-[50px] !border-none !rounded-none !outline-0"
                />
              </Form.Item>
              <Button
                htmlType="submit"
                className="!h-[50px] ml-2 flex items-center justify-center !bg-[#706C62] !border-none !rounded-none !text-white"
              >
                GET AGENT APPRAISAL
              </Button>
            </div>
          </Form>
        </div>
      </section>
      <section>
        <div className="container grid grid-cols-1 lg:grid-cols-4 gap-6 py-32">
          <div className="lg:col-span-1 ">
            <p className="pb-10 font-monument text-lg uppercase leading-10">
              Experience the stalwart difference
            </p>
            <p className="pb-16 text-base font-moderat-regular">
              At Stalwart, we define prestige property with unrivalled
              experience, comprehensive local market knowledge, and strategic
              approaches that consistently deliver exceptional results. Our
              uniquely tailored services ensure detailed attention and
              meticulous care in every real estate journey, turning your
              property aspirations into reality. 
            </p>
            <Collapse
              defaultActiveKey={["1"]}
              onChange={onChange}
              expandIconPosition="right"
              accordion
              expandIcon={({ isActive }) =>
                isActive ? <FaMinus /> : <FaPlus />
              }
              items={items}
              className="!border-none !bg-transparent pl-0"
            />
            <p className="pt-10 ">
              <Link className="text-sm font-moderat-bold flex items-center">
                SEE ALL SOLD PROPERTIES{" "}
                <span>
                  <HiArrowLongRight className="pl-3 text-black text-4xl" />
                </span>
              </Link>
            </p>
          </div>

          <div
            className="flex items-end justify-center bg-cover bg-center px-12.5 xl:px-0 lg:col-span-3"
            style={{ backgroundImage: `url(${sectionBgImage})` }}
          ></div>
        </div>
      </section>
      <section className="bg-[#F4F2F0] mb-32">
        <div className="container grid grid-cols-1 lg:grid-cols-4 gap-6 py-20">
          <div
            className="flex items-end justify-center bg-cover bg-center px-12.5 xl:px-0 lg:col-span-1"
            style={{ backgroundImage: `url(${sectionBgImage})` }}
          ></div>
          <div className="lg:col-span-3 ">
            <p className="pb-5 font-miller-light capitalize text-4xl font-light leading-10">
              Have any questions?
            </p>
            <p className="pb-16 text-base font-moderat-regular">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            <p className="pt-10 ">
              <Link className="text-sm font-moderat-bold flex items-center">
                CONTACT US NOW
                <span>
                  <HiArrowLongRight className="pl-3 text-black text-4xl" />
                </span>
              </Link>
            </p>
          </div>
        </div>
      </section>
      <CurrentProperties />
    </div>
  );
}
