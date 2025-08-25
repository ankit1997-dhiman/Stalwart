import { Form, Input, Select, Button } from "antd";
import { FaSearch } from "react-icons/fa";
import bgImage from "../../../assets/images/home-hero.png";

const { Option } = Select;

export const Section1 = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Data:", values);
  };

  // Top row options
  const topStatusOptions = ["BUY", "SELL", "LEASE"];

  // Bottom row options (can be different for each select)
  const bottomStatusOptions = [
    ["Option 1A", "Option 1B", "Option 1C"],
    ["Option 2A", "Option 2B", "Option 2C"],
    ["Option 3A", "Option 3B", "Option 3C"],
    ["Option 4A", "Option 4B", "Option 4C"],
    ["Option 5A", "Option 5B", "Option 5C"],
  ];

  return (
    <section
      className="h-screen flex items-end justify-center bg-cover bg-center px-12.5 md:px-0"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-[999px]">
        <h4 className="uppercase text-white text-xl font-monument font-normal leading-10 text-center pb-2 md:pb-20">
          PORTA AD DOMUN
        </h4>

        <p className="block md:hidden text-white text-center text-[11px] pb-30 font-monument font-light uppercase">
          7 Jul 2025 | 11:13:35 AM
        </p>

        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          initialValues={{
            name: "",
            status: "BUY",
            status0: "Option 1A",
            status1: "Option 2A",
            status2: "Option 3A",
            status3: "Option 4A",
            status4: "Option 5A",
          }}
        >
          {/* Top Row */}
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-1.5 md:gap-7.5 pb-16 md:pb-4 w-full">
            <Form.Item
              name="status"
              label={false}
              className="!mb-0 !rounded-none"
            >
              <Select className="w-full md:!w-[180px] !bg-black !text-white !h-[50px] !rounded-none">
                {topStatusOptions.map((opt) => (
                  <Option
                    key={opt}
                    value={opt}
                    className="!bg-[#4F4C45] !text-white !rounded-none"
                  >
                    {opt}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <div className="w-full flex bg-white">
              <Form.Item
                name="name"
                label={false}
                className="!mb-0 !w-full !rounded-xl"
              >
                <Input
                  placeholder="Search..."
                  className="!h-[50px] !border-none !rounded-none !outline-0"
                />
              </Form.Item>
              <Button
                htmlType="submit"
                className="!h-[50px] ml-2 flex items-center justify-center bg-white !border-none"
              >
                <FaSearch className="mr-2" />
              </Button>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="hidden md:flex items-stretch justify-between gap-7.5 pb-4 w-full">
            {bottomStatusOptions.map((options, idx) => (
              <Form.Item
                key={idx}
                name={`status${idx}`}
                label={false}
                className="!mb-0 !w-full !h-[50px] text-[10px] font-normal font-monument"
              >
                <Select
                  className={`!bg-[#4F4C45] !text-white !h-[50px] text-[10px] font-normal font-monument ${
                    idx === 0 ? "!w-[180px]" : "!w-full"
                  }`}
                >
                  {options.map((opt) => (
                    <Option
                      key={opt}
                      value={opt}
                      className="!bg-[#4F4C45] !text-white !w-full !rounded-none font-monument text-[10px] font-normal"
                    >
                      {opt}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            ))}
          </div>
        </Form>

        <p className="hidden md:block text-white text-center text-[11px] pt-20 pb-40 font-monument font-light uppercase">
          7 Jul 2025 | 11:13:35 AM
        </p>
      </div>
    </section>
  );
};
