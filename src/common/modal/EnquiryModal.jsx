import { Button, Form, Input, Modal } from "antd";
import Image from "@/assets/images/enquire-image.png";
import Label from "@/components/form/Label";

const EnquiryModal = ({ isModalOpen, setIsModalOpen }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    message.success("Enquiry submitted successfully!");
    form.resetFields();
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto">
      <Modal
        open={isModalOpen}
        className="custom-modal"
        footer={false}
        width={1400}
      >
        <div className="bg-[#F4F2F0] pl-24 relative h-[775px] ">
          <div className="flex bg-[#dad7d4] w-[282px] h-[304px] rounded-b-full items-end justify-center absolute left-[100px]">
            <img src={Image} className="pb-8" />
          </div>
          <div className="flex gap-8 ">
            <div className="w-[770px]">
              <Form
                form={form}
                layout="vertical"
                //   onFinish={handleSubmit}
              >
                <div className="pl-[300px] pt-[150px] grid grid-cols-2 gap-8 ">
                  <div>
                    <Form.Item
                      label={<Label className="uppercase" label="First Name" />}
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
                      label={<Label className="uppercase" label="Email" />}
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
                      label={<Label className="uppercase" label="Last Name" />}
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
                        <Label className="uppercase" label="Phone Number" />
                      }
                      name="number"
                      rules={[
                        { required: true, message: "Please enter your email" },
                        {
                          type: "number",
                          message: "Please enter a valid email",
                        },
                      ]}
                    >
                      <Input
                        placeholder="+61"
                        className="!border-black !border !rounded-none !py-2 "
                      />
                    </Form.Item>
                  </div>
                </div>

                <Form.Item
                  label={<Label className="uppercase" label="your Message" />}
                  name="message"
                  rules={[
                    { required: true, message: "Please enter your message" },
                  ]}
                >
                  <Input.TextArea placeholder="Your message" rows={10} />
                </Form.Item>
                <div className="flex justify-end">
                  <Button>Submit</Button>
                </div>
              </Form>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-[500px] hidden xl:block ml-10">
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
                  3 Waitara Street, Logan Central QLD 4114
                </p>
                <p className="text-sm text-gray-600 pt-4">
                  4 BED | 3 BATH | 2 CAR | XXM²
                </p>

                <p className="text-sm text-gray-500 pt-10 leading-relaxed">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
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
