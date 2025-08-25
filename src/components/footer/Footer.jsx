import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { URLS } from "@/constants/Urls";
import logo from "@/assets/images/footer-logo.png";
import { contactInfo, footerLinks, legalLinks } from "@/constants/footerLinks";

export default function Footer() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  // Config for top links

  return (
    <footer className="bg-[#4A443E] text-white py-18 px-6">
      <div className="container">
        {/* Top Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-20 mb-10 text-sm">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-10">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sign-up Form */}
        <div>
          <h3 className="mb-4 text-lg font-medium py-12">
            Sign Up For Latest Property Results
          </h3>
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="grid grid-cols-1 gap-4"
          >
            <div className="flex justify-between gap-4">
              <Form.Item
                name="firstName"
                rules={[
                  { required: true, message: "Please enter your first name" },
                ]}
                className="w-full border-b border-white text-white"
              >
                <Input
                  placeholder="First Name*"
                  className="w-full !bg-transparent !text-white !placeholder-white !py-3 !border-0"
                />
              </Form.Item>

              <Form.Item
                name="lastName"
                rules={[
                  { required: true, message: "Please enter your last name" },
                ]}
                className="w-full border-b border-white text-white"
              >
                <Input
                  placeholder="Last Name*"
                  className="w-full !bg-transparent !text-white !placeholder-white !py-3 !border-0"
                />
              </Form.Item>
            </div>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
              className="w-full border-b border-white text-white"
            >
              <Input
                placeholder="Email*"
                className="w-full !bg-transparent !text-white !placeholder-white !py-3 !border-0"
              />
            </Form.Item>

            <div className="flex gap-20">
              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                ]}
                className="w-full border-b border-white text-white"
              >
                <Input
                  placeholder="Phone*"
                  className="w-full !bg-transparent !text-white !placeholder-white !py-3 !border-0"
                />
              </Form.Item>

              <Form.Item className="col-span-1 flex items-end">
                <Button
                  htmlType="submit"
                  className="!bg-transparent !text-white !px-10 !rounded-none !py-5 hover:bg-gray-300 transition font-medium w-full !border !border-white"
                >
                  Subscribe
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 pt-12">
          <div className="flex flex-col md:flex-row md:gap-18">
            <img src={logo} alt="Logo" className="h-6" />

            <ul>
              {contactInfo.map((item, i) => (
                <li key={i} className="font-moderat text-sm text-white/60">
                  {item.text}
                </li>
              ))}
            </ul>

            <ul>
              {legalLinks.map((link, i) => (
                <li key={i} className="font-moderat text-sm text-white/60">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-2xl">— The Fortis Immo</p>
        </div>

        {/* Acknowledgement */}
        <div className="flex justify-between items-center pt-7">
          <p className="font-moderat text-sm text-white/60">
            We respectfully acknowledge the Traditional Owners of the land on
            which we work and learn, and pay respect to the First Nations
            Peoples and their elders, past, present and future.
          </p>
          <p className="font-moderat text-sm text-white/60">
            Design By Studio Corelands
          </p>
        </div>
      </div>
    </footer>
  );
}
