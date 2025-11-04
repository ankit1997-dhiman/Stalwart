import React, { useEffect, useState } from "react";
import { Button, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import { URLS } from "@/constants/Urls";
import { contactInfo, footerLinks, legalLinks } from "@/constants/footerLinks";
import EnquiryModal from "@/common/modal/EnquiryModal";
import { FooterCollapse } from "./FooterCollapse";
import { FooterIcon } from "@/assets/icons/FooterIcon";

export default function Footer() {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    const updatedValues = {
      ...values,
      enquiry_for: `Sign Up For Latest Property Results`,
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

  // Config for top links

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // How much user scrolled
      const windowHeight = window.innerHeight; // Visible height of window
      const fullHeight = document.documentElement.scrollHeight; // Total page height

      // Check if user reached bottom (allow small margin for precision)
      if (scrollTop + windowHeight >= fullHeight - 1) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="xl:sticky bottom-0 bg-[#4A443E] text-white pt-16 pb-10 px-12.5 xl:px-0 z-10 ">
        <div className="container">
          {/* Top Links */}
          <div className="hidden xl:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-20 text-sm z-50">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <p className="font-semibold pb-8 text-[11px] font-monument">
                  {section.title}
                </p>
                <ul className="space-y-1 flex flex-col">
                  {section.links.map((link, i) => (
                    <Link
                      key={i}
                      to={link?.to}
                      target={link?.external ? link?.external : false}
                    >
                      {link.label}
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="xl:hidden">
            <FooterCollapse />
          </div>

          {/* Sign-up Form */}
          <div>
            <p className="text-[25px] font-medium font-miller-light leading-10 pt-12.5">
              Sign Up For Latest Property Results
            </p>
            <Form
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
            >
              <Form.Item name="enquiry_for" hidden>
                <Input />
              </Form.Item>
              <div className="flex flex-col md:flex-row justify-between lg:gap-7.5">
                <Form.Item
                  name="firstName"
                  rules={[
                    { required: true, message: "Please enter your first name" },
                  ]}
                  className="w-full border-b border-white text-white !m-0"
                >
                  <Input
                    placeholder="First Name*"
                    className="w-full !bg-transparent !text-white !placeholder-white !text-sm !placeholder:font-moderat-regular !font-moderat-regular !pb-3 !border-0 !px-0 !mt-8 lg:!mt-8"
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
                    className="w-full !bg-transparent !text-white !placeholder-white !text-sm !placeholder:font-moderat-regular !font-moderat-regular !pb-3 !border-0 !px-0 !mt-8 lg:!mt-8"
                  />
                </Form.Item>
              </div>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
                className="w-full border-b border-white text-white !m-0 "
              >
                <Input
                  placeholder="Email*"
                  className="w-full !bg-transparent !text-white !placeholder-white !text-sm !placeholder:font-moderat-regular !font-moderat-regular !pb-3 !border-0 !px-0 !mt-8 lg:!mt-8"
                />
              </Form.Item>

              <div className="flex flex-col md:flex-row items-end gap-6 md:gap-20 ">
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                  ]}
                  className="w-full border-b border-white text-white !m-0"
                >
                  <Input
                    placeholder="Phone*"
                    className="w-full !bg-transparent !text-white !placeholder-white !text-sm !placeholder:font-moderat-regular !font-moderat-regular !pb-3 !border-0 !px-0 !mt-8 lg:!mt-8"
                  />
                </Form.Item>

                <Button
                  htmlType="submit"
                  loading={loading}
                  disabled={loading}
                  className="!bg-transparent !text-white !px-10 !rounded-none hover:!bg-white hover:!text-black transition duration-500 font-medium !border !border-white !w-full lg:!w-[262px] !h-[45px] lg:!h-[48px] !mt-7 !lg:mt-0 "
                >
                  Subscribe
                </Button>
              </div>
            </Form>
          </div>
          <div className="lg:hidden">
            <div className="flex flex-wrap justify-between items-center pt-10 gap-0">
              <FooterIcon width={130} />

              <p className="text-lg font-miller-light text-right text-white/60">
                — The Fortis Immo
              </p>
            </div>
            <div className="flex flex-wrap justify-between items-start pt-4 gap-2.5">
              <ul className="!m-0 grid grid-col-1 ">
                {contactInfo.map((item, i) => (
                  <Link
                    to={item.to}
                    key={i}
                    className="font-moderat-regular text-xs text-white/60"
                  >
                    {item.text}
                  </Link>
                ))}
              </ul>
              <ul className="!m-0 grid grid-col-1">
                {legalLinks.map((link, i) => (
                  <Link
                    to={link.to}
                    key={i}
                    target="_blank"
                    className="font-moderat-regular text-white/60 text-xs"
                  >
                    {link.text}
                  </Link>
                ))}
              </ul>
            </div>
            <p className="font-moderat text-xs text-white/60 pt-8">
              We respectfully acknowledge the Traditional Owners of the land on
              which we work and learn, and pay respect to the First Nations
              Peoples and their elders, past, present and future.
            </p>
            <p className="font-moderat text-sm text-white/60 text-left pt-5">
              <Link
                key="Corelands"
                to={URLS.CORELANDS}
                target="_blank"
                className="text-xs"
              >
                Design By Studio Corelands
              </Link>
            </p>
          </div>

          <div className="hidden lg:block">
            {/* Bottom Section */}
            <div className="flex  flex-col md:flex-row justify-between items-start text-gray-300 pt-18 w-full gap-10">
              <div className="flex flex-col md:flex-row gap-10 md:gap-18 items-start lg:w-[70%] w-full">
                <div className="lg:w-[20%] w-full">
                  <FooterIcon />
                </div>

                <ul className="pb-6 xl:py-0 flex flex-col">
                  {contactInfo.map((item, i) => (
                    <Link
                      to={item.to}
                      key={i}
                      className="font-moderat text-sm text-white/60"
                    >
                      {item.text}
                    </Link>
                  ))}
                </ul>

                <ul className="m-0 flex flex-col">
                  {legalLinks.map((link, i) => (
                    <Link
                      to={link.to}
                      key={i}
                      className="font-moderat text-sm text-white/60"
                    >
                      {link.text}
                    </Link>
                  ))}
                </ul>
              </div>

              <p className="text-2xl font-miller-light  text-right">
                — The Fortis Immo
              </p>
            </div>

            {/* Acknowledgement */}
            <div className="flex md:flex-row flex-col justify-between item-start md:items-center gap-7 pt-8">
              <p className="font-moderat text-sm text-white/60">
                We respectfully acknowledge the Traditional Owners of the land
                on which we work and learn, and pay respect to the First Nations
                Peoples and their elders, past, present and future.
              </p>
              <p className="font-moderat text-sm text-white/60">
                <Link key="Corelands" to={URLS.CORELANDS} target="_blank">
                  Design By Studio Corelands
                </Link>
              </p>
            </div>
          </div>

          <EnquiryModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            handleCancel={handleCancel}
          />
        </div>
      </footer>
    </>
  );
}
