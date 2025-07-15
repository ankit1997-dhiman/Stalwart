import { Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const socials = [
  { name: "Instagram", url: "#" },
  { name: "Facebook", url: "#" },
];

const contactLinks = [
  { label: "Call Us", url: "#" },
  { label: "Email Us", url: "#" },
];

const CommingSoon = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(windowSize, 99);

  return (
    <div className="bg-[url('/assets/coming-soon.png')] md:bg-[url('/assets/coming.png')] bg-cover bg-center h-screen w-full relative px-7.5 md:px-15">
      <div className="container mx-auto h-full flex flex-col justify-between py-6">
        {/* Header */}
        <header className="lg:flex justify-items-stretch justify-between pt-6">
          <div className="lg:block flex justify-between pb-18 lg:pb-0">
            <img
              src={`${
                windowSize.width > "425"
                  ? "/assets/logo.png"
                  : "/assets/mobile-logo.png"
              }`}
              alt="Logo"
            />
            <p className="text-white text-xs lg:hidden font-moderat text-right mt-2">
              SIGN UP TO OUR NEWSLETTER FOR UPDATES:
            </p>
          </div>

          <Form name="newsletter" autoComplete="on">
            <div className="flex flex-row  gap-6 items-end">
              <p className="text-white text-xs lg:block hidden font-moderat lg:basis-full pl-5">
                SIGN UP TO OUR NEWSLETTER FOR UPDATES:
              </p>

              <Form.Item
                className="basis-1/3"
                name="name"
                rules={[{ required: true, message: "" }]}
              >
                <Input
                  placeholder="Full Name"
                  className="text-white bg-transparent border-b border-white outline-none text-sm placeholder:text-xs w-full lg:w-[275px] basis-1/3 lg:basis-full"
                />
              </Form.Item>

              <Form.Item
                className="basis-1/3"
                name="email"
                rules={[
                  { required: true, message: "" },
                  { type: "email", message: "" },
                ]}
              >
                <Input
                  placeholder="Email"
                  autoComplete="email"
                  className="text-white bg-transparent border-b border-white outline-none text-sm placeholder:text-xs w-full lg:w-[130px] basis-1/3 lg:basis-full"
                />
              </Form.Item>

              <Form.Item className="basis-1/3">
                <Button
                  className="w-full border border-white px-4 md:px-9 py-1 text-white text-sm font-moderat hover:bg-white hover:text-black basis-1/3 lg:basis-full "
                  htmlType="submit"
                >
                  Subscribe
                </Button>
              </Form.Item>
            </div>
          </Form>
        </header>

        {/* Footer - Mobile */}
        <footer className="lg:hidden">
          <div className="flex gap-2 justify-between mb-8">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="text-white font-moderat text-[10px] md:text-xs font-medium border border-white px-6 py-2 w-full text-center"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex justify-between items-cneter mb-4">
            <p className="text-white font-monument text-[10px] font-normal w-1/3">
              STALWART <br /> 2025
            </p>

            <div className="flex flex-col w-1/3">
              {contactLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.url}
                  className="text-white font-moderat text-xs font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <p className="text-white font-moderat text-xs font-medium w-1/3 text-left">
              Design by <br /> Studio Corelands
            </p>
          </div>
        </footer>

        {/* Footer - Desktop */}
        <footer className="hidden lg:flex justify-between items-end">
          <div className="w-1/3">
            <p className="text-white font-monument text-xs font-normal mb-1">
              STALWART 2025
            </p>
            <p className="text-white font-moderat text-xs font-medium">
              Design by Studio Corelands
            </p>
          </div>

          <div className="w-1/3 text-center">
            {contactLinks.map((item) => (
              <p key={item.label}>
                <Link
                  to={item.url}
                  className="text-white font-moderat text-xs font-medium"
                >
                  {item.label}
                </Link>
              </p>
            ))}
          </div>

          <div className="w-1/3 hidden md:flex gap-5 justify-end">
            {socials.map((item) => (
              <p key={item.name}>
                <Link
                  to={item.url}
                  className="text-white font-moderat text-xs font-medium border border-white px-6 py-2 hover:bg-white hover:text-black"
                >
                  {item.name}
                </Link>
              </p>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CommingSoon;
