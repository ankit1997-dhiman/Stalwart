import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { URLS } from "@/constants/Urls";
import logo from "@/assets/icons/logo-footer.svg";
import { contactInfo, footerLinks, legalLinks } from "@/constants/footerLinks";
import StickyButton from "@/common/Button/StickyButton";
import EnquiryModal from "@/common/modal/EnquiryModal";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {};

  // Config for top links
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <footer className="bg-[#4A443E] text-white py-18 px-6 ">
      <div className="container">
        {/* Top Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-20 text-sm">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <p className="font-semibold pb-10 text-[11px] font-monument">{section.title}</p>
              <ul className="space-y-1">
                {section.links.map((link, i) => (
                  <li key={i} className="font-moderat-regular text-[14px]">{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sign-up Form */}
        <div>
          <p className="lg:text-[25px] font-medium font-miller-light leading-10 py-12.5">
            Sign Up For Latest Property Results
          </p>
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="grid grid-cols-1 gap-2 md:gap-x-4"
          >
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <Form.Item
                name="firstName"
                rules={[
                  { required: true, message: "Please enter your first name" },
                ]}
                className="w-full border-b border-white text-white !m-0 "
              >
                <Input
                  placeholder="First Name*"
                  className="w-full !bg-transparent !text-white !placeholder-white placeholder:font-moderat-regular !py-3 !border-0 !px-0"
                />
              </Form.Item>

              <Form.Item
                name="lastName"
                rules={[
                  { required: true, message: "Please enter your last name" },
                ]}
                className="w-full border-b border-white text-white !m-0"
              >
                <Input
                  placeholder="Last Name*"
                  className="w-full !bg-transparent !text-white !placeholder-white !py-3 !border-0 !px-0"
                />
              </Form.Item>
            </div>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
              className="w-full border-b border-white text-white !m-0 !pt-8"
            >
              <Input
                placeholder="Email*"
                className="w-full !bg-transparent !text-white !placeholder-white !py-3 !border-0 !px-0"
              />
            </Form.Item>

            <div className="flex flex-col md:flex-row gap-6 md:gap-20 pt-8">
              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                ]}
                className="w-full border-b border-white text-white !m-0"
              >
                <Input
                  placeholder="Phone*"
                  className="w-full !bg-transparent !text-white !placeholder-white !py-3 !border-0 !px-0"
                />
              </Form.Item>

              <Form.Item className="col-span-1 flex items-end !m-0">
                <Button
                  htmlType="submit"
                  className="!bg-transparent !text-white !px-10 !rounded-none hover:bg-gray-300 transition font-medium !border !border-white lg:w-[268px] !h-[48px]"
                >
                  Subscribe
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-wrap flex-col md:flex-row justify-between items-start md:items-center text-xs text-gray-300 pt-18 w-full">
          <div className="flex flex-col md:flex-row gao-3 md:gap-18">
            <img src={logo} alt="Logo" className="h-6" />

            <ul className="pb-6 xl:py-0">
              {contactInfo.map((item, i) => (
                <li key={i} className="font-moderat text-sm text-white/60">
                  {item.text}
                </li>
              ))}
            </ul>

            <ul className="pb-6">
              {legalLinks.map((link, i) => (
                <li key={i} className="font-moderat text-sm text-white/60">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-2xl font-miller-light">— The Fortis Immo</p>
        </div>

        {/* Acknowledgement */}
        <div className="flex md:flex-row flex-col justify-between item-start md:items-center gap-7 pt-11">
          <p className="font-moderat text-sm text-white/60">
            We respectfully acknowledge the Traditional Owners of the land on
            which we work and learn, and pay respect to the First Nations
            Peoples and their elders, past, present and future.
          </p>
          <p className="font-moderat text-sm text-white/60">
            <Link key="Corelands" to={URLS.CORELANDS} target="_blank">
              Design By Studio Corelands
            </Link>
          </p>
        </div>

        <EnquiryModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
      <div className="flex items-center justify-center">
        <StickyButton handleClick={showModal} />
      </div>
    </footer>
  );
}
