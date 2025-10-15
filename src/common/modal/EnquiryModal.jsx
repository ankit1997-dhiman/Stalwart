import { Button, Form, Input, message, Modal } from "antd";
import Image from "@/assets/images/enquire-image.png";
import Label from "@/components/form/Label";
import { useEffect, useState } from "react";
import { graphqlRequest } from "@/utils/graphqlRequest";
import { useParams } from "react-router-dom";
import { GET_PROPERTY_BY_ID } from "@/queries/propertyById";
import { RawHtml } from "@/components/RawHtml";
import { useTruncateText } from "@/hooks/useTruncateText";

const EnquiryModal = ({ isModalOpen, setIsModalOpen, handleCancel }) => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const [data, setData] = useState([]);

  const handleSubmit = async (values) => {
    console.log(values);
    // setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();
      if (result.success) {
        // setLoading(false);
        message.success("Your inquiry has been sent", 4000);
        setIsModalOpen(false);
        form.resetFields();
      } else {
        message.error("Failed to send inquiry ❌");
      }
    } catch (error) {
      message.error("Something went wrong ❌");
    }
  };

  useEffect(() => {
    if (id) {
      const fetchProperties = async () => {
        const variables = { ids: [id] };

        try {
          const res = await graphqlRequest(GET_PROPERTY_BY_ID, variables);
          const property = res?.data?.properties?.nodes?.[0];
          setData(property || null);
        } catch (error) {
          message.error(error.message);
        }
      };

      fetchProperties();
    }
  }, [id]);

  const desc = useTruncateText(data.description, 80);

  return (
    <div className="container mx-auto">
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        className="custom-modal"
        footer={false}
        width={1400}
      >
        <div className="bg-[#F4F2F0]  lg:pl-24 relative h-full lg:h-[775px] ">
          <div className="flex bg-[#dad7d4] w-[160px] lg:w-[282px] h-[180px] lg:h-[304px] rounded-b-full items-end justify-center lg:absolute left-[100px]">
            <img
              src={Image}
              className="p-4 lg:p-8 w-[140px] h-[140px] lg:w-full lg:h-[280px]"
            />
          </div>
          <div className="flex gap-x-8 px-5 ">
            <div className=" w-full lg:w-[770px]">
              <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <div className="lg:pl-[300px] pt-10 lg:pt-[150px] grid lg:grid-cols-2 grid-cols-1 lg:gap-x-8 ">
                  <div>
                    <Form.Item
                      label={
                        <Label
                          className="uppercase text-xs"
                          label="First Name"
                        />
                      }
                      name="first_name"
                      rules={[
                        { required: true, message: "Please enter your name" },
                      ]}
                    >
                      <Input
                        placeholder="First Name"
                        className="!border-black !border !rounded-none !py-2 "
                      />
                    </Form.Item>
                    <Form.Item
                      label={
                        <Label className="uppercase text-xs" label="Email" />
                      }
                      name="email"
                      rules={[
                        { required: true, message: "Please enter your email" },
                        {
                          type: "email",
                          message: "Please enter a valid email",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Email"
                        className="!border-black !border !rounded-none !py-2 "
                      />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      label={
                        <Label
                          className="uppercase text-xs"
                          label="Last Name"
                        />
                      }
                      name="last_name"
                      rules={[
                        { required: true, message: "Please enter your name" },
                      ]}
                    >
                      <Input
                        placeholder="Last Name"
                        className="!border-black !border !rounded-none !py-2 "
                      />
                    </Form.Item>
                    <Form.Item
                      label={
                        <Label
                          className="uppercase text-xs"
                          label="Phone Number"
                        />
                      }
                      name="number"
                      rules={[
                        { required: true, message: "Please enter your number" },
                      ]}
                    >
                      <Input
                        placeholder="+61"
                        className="!border-black !border !rounded-none !py-2"
                      />
                    </Form.Item>
                  </div>
                </div>

                <Form.Item
                  label={
                    <Label className="uppercase text-xs" label="your Message" />
                  }
                  name="message"
                  rules={[
                    { required: true, message: "Please enter your message" },
                  ]}
                >
                  <Input.TextArea
                    placeholder="Your message"
                    rows={10}
                    className="!border-black !border !rounded-none !py-2 "
                  />
                </Form.Item>
                <div className="flex justify-end">
                  <Button
                    className="!rounded-none !px-3.5 bg-white !border !border-black !py-2 w-[127px] h-[41px]"
                    htmlType="submit"
                  >
                    <span className="font-moderat-regular text-xs lg:text-base">
                      Submit Inquiry
                    </span>
                  </Button>
                </div>
              </Form>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-[500px] hidden lg:block ml-10 ">
            {/* Top Section with Circle and Text */}
            <div className="relative ">
              <div className="absolute -top-[10px] w-[220px] h-[240px] bg-[#dad7d4] rounded-t-full z-0"></div>

              <div className="relative pt-16 pb-5  pl-10 overflow-auto w-[240px]">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-800">
                  Step In
                </p>
                <p className="text-xs text-gray-500 pt-2.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <p className="text-xs font-bold uppercase tracking-widest text-gray-800 pt-2.5">
                  Stand Out
                </p>
                <p className="text-xs text-gray-500 pt-2.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="p-10 bg-[#dad7d4] relative z-40">
                <p className="text-xl font-moderat-regular text-gray-800">
                  {data.formattedAddress ? data?.formattedAddress : null}
                </p>
                <p className="text-sm text-gray-600 pt-4">
                  <div className="font-moderat-medium text-sm pt-5">
                    {`${data.bedrooms ? data.bedrooms : 0} BED | ${
                      data.bathrooms ? data.bathrooms : 0
                    } BATH | ${
                      data.carportSpaces ? data.carportSpaces : 0
                    } CAR `}
                  </div>
                </p>

                <p className="text-sm text-gray-500 pt-10 leading-relaxed">
                  <RawHtml html={desc} />
                </p>
              </div>
            </div>
          </div>
          <div className="block lg:hidden">
            <div className="relative ">
              <div className="absolute -top-[10px] w-[180px] h-[240px] bg-[#dad7d4] rounded-t-full z-0"></div>

              <div className="relative pt-16 lg:pb-5 pl-10 overflow-auto w-[180px]">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-800">
                  Step In
                </p>
                <p className="text-[8px] text-gray-500 pt-2.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-800 pt-2.5">
                  Stand Out
                </p>
                <p className="text-[8px] text-gray-500 pt-2.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="p-10 bg-[#dad7d4] relative z-40">
                <p className="text-sm font-moderat-regular text-gray-800 uppercase">
                  {data.formattedAddress ? data?.formattedAddress : null}
                </p>
                <p className="text-sm text-gray-600 pt-4 font-moderat-regular">
                  <div className="font-moderat-medium text-sm pt-5">
                    {`${data.bedrooms ? data.bedrooms : 0} BED | ${
                      data.bathrooms ? data.bathrooms : 0
                    } BATH | ${
                      data.carportSpaces ? data.carportSpaces : 0
                    } CAR `}
                  </div>
                </p>

                <p className="text-xs text-gray-500 pt-10 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EnquiryModal;
