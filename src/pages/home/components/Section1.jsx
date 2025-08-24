import { Form, Input, Select, Button } from "antd";
import { FaSearch } from "react-icons/fa";

const { Option } = Select;

export const Section1 = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Data:", values);
  };

  const statusOptions = ["BUY", "SELL", "LEASE"];
  const selectWidth = "260px"; // same width for all selects

  return (
    <section
      className="h-screen flex items-end justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/src/assets/images/bg-image.png')",
      }}
    >
      <div className="w-[999px]">
        <h4 className="uppercase text-white text-xl font-monument font-normal leading-10 text-center pb-20">
          PORTA AD DOMUN
        </h4>

        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          initialValues={{
            name: "",
            status: "BUY",
            status0: "BUY",
            status1: "BUY",
            status2: "BUY",
            status3: "BUY",
            status4: "BUY",
          }}
        >
          {/* Top Row */}
          <div className="flex items-stretch justify-between gap-7.5 pb-4 w-full">
            {/* Status Select */}
            <Form.Item name="status" label={false} className="!mb-0">
              <Select
                className="!w-[180px] !bg-black !text-white !h-[50px] !rounded-none"
                
              >
                {statusOptions.map((opt) => (
                  <Option
                    key={opt}
                    value={opt}
                    className="!bg-[#4F4C45] !text-white"
                  >
                    {opt}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            {/* Name Input with Search Button */}
            <div className="w-full flex bg-white">
              <Form.Item name="name" label={false} className="!mb-0 !w-full !rounded-xl">
                <Input
                  placeholder="Search..."
                  
                  className="!h-[50px] !border-none !rounded-xl !outline-0"
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

          {/* Bottom Row: Multiple Status Selects */}
          <div className="flex items-stretch justify-between gap-7.5 pb-4 w-full">
            {Array(5)
              .fill(0)
              .map((_, idx) => (
                <Form.Item
                  key={idx}
                  name={`status${idx}`}
                  label={false}
                  className="!mb-0 !w-full !h-[50px]"
                >
                  <Select
                    className={`!bg-[#4F4C45] !text-white !h-[50px] ${
                      idx === 0 ? "!w-[180px]" : "!w-full"
                    }`}
                    
                  >
                    {statusOptions.map((opt) => (
                      <Option
                        key={opt}
                        value={opt}
                        className="!bg-[#4F4C45] !text-white !w-full !rounded-none"
                      >
                        {opt}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              ))}
          </div>
        </Form>

        <p className="text-white text-center text-[11px] pt-20 pb-40 font-monument font-light uppercase">
          7 Jul 2025 | 11:13:35 AM
        </p>
      </div>
    </section>
  );
};
