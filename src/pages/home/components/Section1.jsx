import { Form, Button } from "antd";
import searchImage from "@/assets/icons/search.svg";
import { useEffect, useState } from "react";
import AddressAutocomplete from "./AddressAutocomplete";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import bgVideo from "@/assets/images/bg.mp4";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useResponsiveMargin from "@/hooks/useResponsiveMargin";
import { topSpace } from "@/constants/constants";
import { useTheme } from "@/context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

export const Section1 = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("SELL");
  const [currentTime, setCurrentTime] = useState(moment());

  const { setDark } = useTheme();

  const topMargin = useResponsiveMargin(topSpace, 0);

  // Handle form submission
  const handleSubmit = () => {
    if (!query || !activeTab) return;

    if (activeTab === "SELL") {
      navigate("/get-property-estimate", { state: { activeTab, query } });
      setDark(true);
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
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment());
    }, 1000); // update every second

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  return (
    <section
      className={`relative h-screen flex items-end justify-center px-12.5 xl:px-0 custom-field  overflow-hidden`}
      style={{
        marginTop: `-${topMargin}px`,
      }}
    >
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-screen object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Dark overlay (optional, for readability) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Foreground content */}
      <div className="container relative z-10 w-[999px]">
        <p className="uppercase text-white text-sm md:text-xl font-monument font-normal leading-10 text-center pb-20 md:pb-20">
          PORTA AD DOMUM
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
          <div className="flex items-end justify-end">
            <div className="flex bg-[#4F4C45] h-[50px]">
              {["SELL", "BUY", "LEASE"].map((tab) => (
                <div
                  key={tab}
                  onClick={() => handleClick(tab)}
                  className={`px-5 lg:px-10 cursor-pointer font-normal font-monument text-[10px] my-auto py-5 transition-colors duration-200 ${
                    activeTab === tab
                      ? "text-black bg-white"
                      : "text-white bg-[#4F4C45]"
                  }`}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-stretch justify-between pb-16 md:pb-4 w-full">
            <div className="bg-[#4F4C45] text-white rounded-none h-[50px] font-monument text-[10px] w-full lg:w-[300px] px-3 uppercase flex item-center justify-center">
              <p className="py-4.5 mx-auto">{`${
                activeTab === "SELL"
                  ? "Get Property Estimate"
                  : `Properties FOR ${activeTab === "BUY" ? "SALE" : activeTab}`
              }`}</p>
            </div>

            {/* Search Box */}
            <div className="w-full flex flex-row">
              <Form.Item
                name="address"
                label={false}
                className="!mb-0 !w-full !my-auto "
              >
                <AddressAutocomplete
                  activeTab={activeTab}
                  value={query}
                  onChange={(val) => setQuery(val)}
                />
              </Form.Item>

              <Button
                htmlType="submit"
                className="ml-2 flex items-center justify-center bg-white !border-none !h-[50px] !rounded-none cursor-pointer"
              >
                <img src={searchImage} alt="Search" className="my-auto" />
              </Button>
            </div>
          </div>
        </Form>

        <p className="text-white text-center text-[11px] pt-0 pb-20 lg:pt-20 lg:pb-40 font-monument font-light uppercase">
          {currentTime.format("DD MMM YYYY | hh : mm : ss A")}
        </p>
      </div>
    </section>
  );
};
