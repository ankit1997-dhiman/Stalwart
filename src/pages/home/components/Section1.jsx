import { Form,  Button } from "antd";
import searchImage from "@/assets/icons/search.svg";
import bgImage from "../../../assets/images/home-hero.png";
import { useState } from "react";
import AddressAutocomplete from "./AddressAutocomplete";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export const Section1 = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("BUY");

  // Handle form submission
  const handleSubmit = () => {
    if (!query || !activeTab) return;

    if (activeTab === "SELL") {
      navigate("/get-property-estimate", { state: { activeTab, query } });
    } else {
      navigate("/search-results", { state: { activeTab, query } });
    }

    setQuery(""); // Clear input after submit
  };

  // Handle tab click
  const handleClick = (value) => {
    setActiveTab(value);
    setQuery(""); // Reset input when switching tabs
  };

  return (
    <section
      className="h-screen flex items-end justify-center bg-cover bg-center px-12.5 xl:px-0 custom-field -mt-[86px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-[999px]">
        <p className="uppercase text-white text-sm md:text-xl font-monument font-normal leading-10 text-center pb-2 md:pb-20">
          PORTA AD DOMUN
        </p>

        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          initialValues={{
            status: "BUY",
            bedrooms: "BED",
            bathrooms: "BATH",
            car: "CAR",
          }}
          className="placeholder-white"
        >
          {/* Top Row */}
          <div className="flex flex-col xl:flex-row items-stretch justify-between pb-16 md:pb-4 w-full">
            <div className="bg-[#4F4C45] text-white rounded-none h-[50px] font-monument text-[10px] w-full lg:w-[300px] px-3 uppercase flex item-center justify-center">
              <p className="py-4.5 mx-auto">Get Property Estimate</p>
            </div>

            {/* Search Box */}
            <div className="w-full flex  relative">
              <div className="flex bg-[#4F4C45] absolute -top-12 right-0  h-[50px]">
                <div
                  className={`${
                    activeTab === "SELL" ? " text-black" : "text-white"
                  }  px-5 lg:px-10 cursor-pointer font-normal font-monument text-[10px] my-auto`}
                  onClick={() => handleClick("SELL")}
                >
                  SELL
                </div>
                <div
                  className={`${
                    activeTab === "BUY" ? " text-black " : "text-white"
                  }  px-5 lg:px-10 cursor-pointer font-normal font-monument text-[10px] my-auto`}
                  onClick={() => handleClick("BUY")}
                >
                  BUY
                </div>
                <div
                  className={`${
                    activeTab === "LEASE" ? "text-black" : "text-white"
                  }  px-5 lg:px-10 cursor-pointer font-normal font-monument text-[10px] my-auto`}
                  onClick={() => handleClick("LEASE")}
                >
                  LEASE
                </div>
              </div>

              <Form.Item
                name="address"
                label={false}
                className="!mb-0 !w-full !my-auto"
                rules={[
                  { required: true, message: "Please enter your full name" },
                ]}
              >
                <AddressAutocomplete
                  activeTab={activeTab}
                  value={query}
                  onChange={(val) => setQuery(val)} // update parent state
                />
              </Form.Item>

              <Button
                htmlType="submit"
                className="ml-2 flex items-center justify-center bg-white !border-none !h-[50px] !rounded-none"
              >
                <img src={searchImage} alt="Search" className="my-auto" />
              </Button>
            </div>
          </div>

         
         
        </Form>

        <p className="hidden md:block text-white text-center text-[11px] pt-20 pb-40 font-monument font-light uppercase">
          {moment().format("DD MMM YYYY | hh:mm:ss A")}
        </p>
      </div>
    </section>
  );
};
