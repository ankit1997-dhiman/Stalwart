import React, { use, useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { Link, useMatch } from "react-router-dom";
import { URLS } from "@/constants/Urls";
import logo from "@/assets/icons/footer-logo-bottom.svg";
import { contactInfo, footerLinks, legalLinks } from "@/constants/footerLinks";
import StickyButton from "@/common/Button/StickyButton";
import EnquiryModal from "@/common/modal/EnquiryModal";
import { FooterCollapse } from "./FooterCollapse";

export default function Footer() {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  console.log(isBottom, "<<<<<<<");

  const matchProperty = useMatch("/property/:id");
  const showButton = matchProperty;

  const onFinish = (values) => {};

  // Config for top links
  const showModal = () => {
    setIsModalOpen(true);
  };

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
      {/* <div className={`${isBottom ? "mt-0px" : "-mt-[880px]"}`}></div> */}
      <footer className="lg:sticky bottom-0 bg-[#4A443E] text-white py-18 px-12.5 lg:px-0 z-10 ">
        <div className="container">
          {/* Top Links */}
          <div className="hidden lg:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-20 text-sm z-50">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <p className="font-semibold pb-10 text-[11px] font-monument">
                  {section.title}
                </p>
                <ul className="space-y-1 flex flex-col">
                  {section.links.map((link, i) => (
                    <Link key="Instagram" to={link.to} target={link.external}>
                      {link.label}
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="lg:hidden">
            <FooterCollapse />
          </div>

          {/* Sign-up Form */}
          <div>
            <p className="text-[25px] font-medium font-miller-light leading-10 pt-17.5">
              Sign Up For Latest Property Results
            </p>
            <Form form={form} onFinish={onFinish} layout="vertical">
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
                    className="w-full !bg-transparent !text-white !placeholder-white !text-sm !placeholder:font-moderat-regular !font-moderat-regular !pb-3 !border-0 !px-0 !mt-8 lg:!mt-13"
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
                    className="w-full !bg-transparent !text-white !placeholder-white !text-sm !placeholder:font-moderat-regular !font-moderat-regular !pb-3 !border-0 !px-0 !mt-8 lg:!mt-13"
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
                  className="w-full !bg-transparent !text-white !placeholder-white !text-sm !placeholder:font-moderat-regular !font-moderat-regular !pb-3 !border-0 !px-0 !mt-8 lg:!mt-10"
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
                    className="w-full !bg-transparent !text-white !placeholder-white !text-sm !placeholder:font-moderat-regular !font-moderat-regular !pb-3 !border-0 !px-0 !mt-8 lg:!mt-10"
                  />
                </Form.Item>

                <Button
                  htmlType="submit"
                  className="!bg-transparent !text-white !px-10 !rounded-none hover:!bg-white hover:!text-black transition duration-500 font-medium !border !border-white !w-full lg:!w-[262px] !h-[45px] lg:!h-[48px] !mt-7 !lg:mt-0 "
                >
                  Subscribe
                </Button>
              </div>
            </Form>
          </div>
          <div className="lg:hidden">
            <div className="grid grid-cols-2 justify-between items-end pt-20 gap-7.5">
              <div>
                {" "}
                <img src={logo} alt="Logo" className="h-6 w-[160px]" />
              </div>
              <div>
                <p className="text-xl font-miller-light text-right text-white/60">
                  — The Fortis Immo
                </p>
              </div>
              <div>
                <ul className="!m-0">
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
              </div>
              <div>
                <p className="font-moderat text-sm text-white/60 text-right">
                  <Link key="Corelands" to={URLS.CORELANDS} target="_blank">
                    Design By Studio Corelands
                  </Link>
                </p>
              </div>
            </div>
            <p className="font-moderat text-[10px] text-white/60 pt-21">
              We respectfully acknowledge the Traditional Owners of the land on
              which we work and learn, and pay respect to the First Nations
              Peoples and their elders, past, present and future.
            </p>
          </div>

          <div className="hidden lg:block">
            {/* Bottom Section */}
            <div className="flex flex-wrap flex-col md:flex-row justify-between items-start text-gray-300 pt-18 w-full">
              <div className="flex flex-col md:flex-row gap-3 md:gap-18 items-start">
                <img src={logo} alt="Logo" className="w-[262px] h-[30px]" />

                <ul className="pb-6 xl:py-0 flex flex-col">
                  {contactInfo.map((item, i) => (
                    <Link
                      to={item.to}
                      key={i}
                      target="_blank"
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
                      target="_blank"
                      className="font-moderat text-sm text-white/60"
                    >
                      {link.text}
                    </Link>
                  ))}
                </ul>
              </div>

              <p className="text-2xl font-miller-light">— The Fortis Immo</p>
            </div>

            {/* Acknowledgement */}
            <div className="flex md:flex-row flex-col justify-between item-start md:items-center gap-7 pt-11">
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
        {showButton && (
          <div className="flex items-center justify-center z-50">
            <StickyButton handleClick={showModal} />
          </div>
        )}
      </footer>
    </>
  );
}
