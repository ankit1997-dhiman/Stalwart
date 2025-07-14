import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const CommingSoon = () => {
  return (
    <div className="bg-[url('/assets/coming-soon.png')] md:bg-[url('/assets/coming.png')] bg-cover bg-center h-screen w-full relative px-7.5 md:px-15">
      <div className="container mx-auto">
        <div className="flex flex-col items-stretch justify-between h-screen pb-6">
          <div className="md:flex justify-between  items-stretch pt-6">
            <div className="md:block flex justify-between pb-18 md:pb-0">
              <img src="/assets/logo.png" className="w-10 md:w-full " />
              <p className="text-white text-[12px] md:hidden block font-moderat">
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
                        className="text-white bg-transparent border-b-1 border-white outline-0 text-sm placeholder:text-xs sm:w-24 w-[275px] "
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
                        className="text-white bg-transparent border-b-1 border-white outline-0 text-sm placeholder:text-xs sm:w-24 w-[130px]"
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button
                        className="border border-white px-4 md:px-9 py-1 text-white text-sm font-moderat font-normalhover:bg-white hover:text-black"
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
          <div>
            <div className="md:hidden flex gap-2 justify-between mb-8">
              <a className="text-white font-moderat text-[10px] md:text-xs font-medium border-white border px-6 py-2 w-full text-center ">
                Instagram
              </a>

              <a className="text-white font-moderat text-[10px] text-xs font-medium  border-white border px-6 py-2 w-full text-center ">
                Facebook
              </a>
            </div>
            <div className="md:hidden flex gap-2 justify-between  mb-4">
              <p className="text-white font-monument text-xs font-normal w-1/3">
                STALWART <br></br>2025
              </p>

              <p className="flex flex-col w-1/3">
                <Link className="text-white font-moderat text-xs font-medium">
                  Call Us
                </Link>

                <Link className="text-white font-moderat text-xs font-medium">
                  Email Us
                </Link>
              </p>

              <p className="text-white font-moderat text-xs font-medium w-1/3">
                Design by <br></br>Studio Corelands
              </p>
            </div>
            <div className="md:flex justify-between hidden items-end">
              <div className="w-1/3">
                <p className="text-white font-monument text-xs font-normal mb-1">
                  STALWART 2025
                </p>
                <p className="text-white font-moderat text-xs font-medium">
                  Design by Studio Corelands
                </p>
              </div>
              <div className="w-1/3 text-center">
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
              <div className="w-1/3 hidden md:flex gap-5 justify-end">
                <p className="mb-3">
                  <Link className="text-white font-moderat text-xs font-medium border-white border px-6 py-2 hover:bg-white hover:text-black">
                    Instagram
                  </Link>
                </p>
                <p>
                  <Link className="text-white font-moderat text-xs font-medium  border-white border px-6 py-2 hover:bg-white hover:text-black">
                    Facebook
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;
