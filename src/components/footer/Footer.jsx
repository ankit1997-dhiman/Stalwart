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
      <footer className="lg:sticky bottom-0 bg-[#4A443E] text-white pt-16 pb-10 px-12.5 lg:px-0 z-10 ">
        <div className="container">
          {/* Top Links */}
          <div className="hidden lg:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-20 text-sm z-50">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <p className="font-semibold pb-8 text-[11px] font-monument">
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
            <p className="text-[25px] font-medium font-miller-light leading-10 pt-12.5">
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
            <div className="flex  flex-col md:flex-row justify-between items-start text-gray-300 pt-18 w-full gap-10">
              <div className="flex flex-col md:flex-row gap-10 md:gap-18 items-start w-[70%]">
                <div className="w-[20%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="a"
                    data-name="Layer 1"
                    width="262"
                    height="37.178"
                    viewBox="0 0 453.245 37.178"
                  >
                    <path
                      d="M45.515.845h-8.644v-.004h-17.675v16.958c0,2.387-1.935,4.322-4.322,4.322s-4.322-1.935-4.322-4.321v-3.649H0v22.164h43.983v-15.173c0-2.387,1.935-4.322,4.322-4.322s4.322,1.935,4.322,4.322v15.195h10.547V.845h-17.659Z"
                      fill="#fff"
                    />
                    <g>
                      <g>
                        <path
                          d="M125.417.94h40.724v5.676h-17.026v29.622h-6.621V6.616h-17.076V.94Z"
                          fill="#fff"
                        />
                        <g>
                          <path
                            d="M180.776.94h8.464l19.466,35.298h-7.119l-4.332-8.065h-24.544l-4.331,8.065h-7.169L180.776.94ZM194.567,23.194l-9.559-17.873-9.609,17.873h19.167Z"
                            fill="#fff"
                          />
                          <path
                            d="M214.181.94h6.671v29.622h26.535v5.676h-33.206V.94Z"
                            fill="#fff"
                          />
                          <path
                            d="M244.65.94h6.82l11.799,30.369,14.438-30.369h8.712l14.488,30.369,11.799-30.369h6.771l-13.79,35.298h-9.309l-14.288-30.269-14.288,30.269h-9.31L244.65.94Z"
                            fill="#fff"
                          />
                          <path
                            d="M333.614.94h8.464l19.466,35.298h-7.12l-4.331-8.065h-24.544l-4.331,8.065h-7.169L333.614.94ZM347.405,23.194l-9.559-17.873-9.609,17.873h19.167Z"
                            fill="#fff"
                          />
                          <path
                            d="M367.019.94h27.033c9.36,0,13.741,3.535,13.741,10.156,0,4.68-2.54,7.866-7.369,9.111,4.282.149,7.12,2.589,7.12,6.771v9.26h-6.621v-8.314c0-3.186-1.593-4.53-4.78-4.53h-22.453v12.845h-6.671V.94ZM392.659,17.917c5.377,0,8.264-1.643,8.264-5.924,0-4.232-2.887-5.626-8.264-5.626h-18.968v11.55h18.968Z"
                            fill="#fff"
                          />
                          <path
                            d="M412.521.94h40.724v5.676h-17.026v29.622h-6.621V6.616h-17.076V.94Z"
                            fill="#fff"
                          />
                        </g>
                      </g>
                      <path
                        d="M78.968,24.389h6.92c0,5.626,4.481,7.816,15.184,7.816,9.31,0,13.193-1.543,13.193-5.775,0-4.182-2.888-4.779-13.542-5.476l-1.991-.149c-13.84-.846-19.765-3.634-19.765-10.803C78.968,2.981,86.834-.006,99.23-.006c13.442,0,21.685,3.983,21.884,12.197h-6.87c0-5.526-6.401-7.219-15.561-7.219-8.563,0-12.845,1.394-12.845,5.028,0,4.132,4.033,5.028,13.79,5.725l2.091.149c12.496.896,19.416,1.892,19.416,10.355,0,8.364-7.567,10.953-20.063,10.953-14.338,0-21.856-3.186-22.105-12.795Z"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </div>

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
        {showButton && (
          <div className="flex items-center justify-center z-50">
            <StickyButton handleClick={showModal} />
          </div>
        )}
      </footer>
    </>
  );
}
