import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const CommingSoon = () => {
  return (
    <div className="bg-[url('/assets/coming.png')] bg-cover bg-center h-screen w-full relative">
      <div className="container mx-auto">
        <div className="flex flex-col items-stretch justify-between h-screen pb-6">
          <div className="md:flex justify-between  items-stretch pt-6">
            <div className="md:block flex">
              <img src="/assets/logo.png" />
              <p className="text-white text-xs md:hidden block font-moderat">
                SIGN UP TO OUR NEWSLETTER FOR UPDATES:
              </p>
            </div>
            <div>
              <div className="flex md:gap-6">
                <Form
                  name="basic"
                  // onFinish={onFinish}
                  autoComplete="on"
                >
                  <div className="flex gap-6 items-end">
                    <p className="text-white text-xs md:block hidden font-moderat">
                      SIGN UP TO OUR NEWSLETTER FOR UPDATES:
                    </p>
                    <Form.Item
                      name="name"
                      rules={[
                        { required: true, message: "Please enter your name" },
                      ]}
                    >
                      <Input
                        placeholder="Full Name"
                        className="text-white bg-transparent border-b-1 border-white outline-0 text-sm placeholder:text-xs "
                      />
                    </Form.Item>

                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: "Please enter your email" },
                        { type: "email", message: "Enter a valid email" },
                      ]}
                    >
                      <Input
                        placeholder="Email"
                        autoComplete="email"
                        className="text-white bg-transparent border-b-1 border-white outline-0 text-sm placeholder:text-xs"
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        className="border-2 border-white px-9 py-1 text-white text-sm font-moderat font-normal"
                        htmlType="submit"
                      >
                        Subscribe
                      </Button>
                    </Form.Item>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-white font-moderat text-xs font-medium">
                STALWART 2025
              </p>
              <p className="text-white font-moderat text-xs font-medium">
                Design by Studio Corelands
              </p>
            </div>
            <div>
              <p>
                <Link className="text-white font-moderat text-xs font-medium">
                  Call Us
                </Link>
              </p>
              <p>
                <Link className="text-white font-moderat text-xs font-medium">
                  Email Us
                </Link>
              </p>
            </div>
            <div>
              <p>
                <Link className="text-white font-moderat text-xs font-medium">
                  Instagram
                </Link>
              </p>
              <p>
                <Link className="text-white font-moderat text-xs font-medium">
                  Facebook
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;
