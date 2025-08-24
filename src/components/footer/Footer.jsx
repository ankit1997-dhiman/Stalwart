import React from "react";
import { Button, Form, Input } from "antd";

export default function Footer() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Values:", values);
  };
  return (
    <footer className="bg-[#4A443E] text-white py-18 px-6">
      <div className="container">
        {/* Top Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-20 mb-10 text-sm">
          <div>
            <h3 className="font-semibold mb-10">BUY</h3>
            <ul className="space-y-2">
              <li>Properties for Sale</li>
              <li>Upcoming Inspections</li>
              <li>Sales Properties</li>
              <li>Suburb Insights</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold  mb-10">SELL</h3>
            <ul className="space-y-2">
              <li>Selling With Stalwart</li>
              <li>Book A Property Appraisal</li>
              <li>Sold Properties</li>
              <li>Project Marketing</li>
              <li>Suburb Insights</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold  mb-10">LEASE</h3>
            <ul className="space-y-2">
              <li>Properties for Lease</li>
              <li>Upcoming Inspections</li>
              <li>Owners Portal</li>
              <li>Tenant Portal</li>
              <li>Suburb Insights</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold  mb-10">ABOUT</h3>
            <ul className="space-y-2">
              <li>Our Team</li>
              <li>Our Suburbs</li>
              <li>Careers</li>
              <li>News/Blogs</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold  mb-10">SOCIAL MEDIA</h3>
            <ul className="space-y-2">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold  mb-10">CONTACT</h3>
            <ul className="space-y-2">
              <li>Request an Appraisal</li>
              <li>Contact</li>
            </ul>
          </div>
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
            className="grid grid-cols-1 md:grid-cols-1 gap-4"
          >
            {/* Full Name */}
            <div className="flex justify-between gap-4">
              <Form.Item
                name="firstName"
                rules={[
                  { required: true, message: "Please enter your first name" },
                ]}
                className="w-full border-b border-white text-white"
              >
                <Input
                  placeholder="Full Name*"
                  className="w-full !bg-transparent !text-white !placeholder-white !py-3 !border-0 "
                />
              </Form.Item>

              {/* Last Name */}
              <Form.Item
                name="lastName"
                rules={[
                  { required: true, message: "Please enter your last name" },
                ]}
                className="w-full border-b border-white text-white"
              >
                <Input
                  placeholder="Last Name*"
                  className="w-full !bg-transparent !text-white !placeholder-white !py-3 !border-0 "
                />
              </Form.Item>
            </div>
            <div>
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
                  className="w-full !bg-transparent !text-white !placeholder-white !py-3 !border-0 "
                />
              </Form.Item>
            </div>

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
                  className="w-full !bg-transparent !text-white !placeholder-white !py-3 !border-0 "
                />
              </Form.Item>

              {/* Submit Button */}
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
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Logo" className="h-6" />
            <span>STALWART</span>
          </div>
          <div>
            <p>© 2025 Stalwart Real Estate</p>
          </div>
          <div className="flex space-x-4">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
