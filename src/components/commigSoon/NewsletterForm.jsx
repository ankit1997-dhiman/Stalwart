import { Button, Form, Input } from "antd";

const NewsletterForm = () => {
  return (
    <Form name="newsletter" autoComplete="on">
      <div className="flex flex-row gap-6 items-end">
        <p className="text-white text-xs lg:block hidden font-moderat lg:basis-full pl-5">
          SIGN UP TO OUR NEWSLETTER FOR UPDATES:
        </p>

        <Form.Item
          className="basis-1/3"
          name="name"
          rules={[{ required: true }]}
        >
          <Input
            placeholder="Full Name"
            className="text-white bg-transparent border-b border-white outline-none text-sm placeholder:text-xs w-full lg:w-[275px]"
          />
        </Form.Item>

        <Form.Item
          className="basis-1/3"
          name="email"
          rules={[{ required: true }, { type: "email" }]}
        >
          <Input
            placeholder="Email"
            autoComplete="email"
            className="text-white bg-transparent border-b border-white outline-none text-sm placeholder:text-xs w-full lg:w-[130px]"
          />
        </Form.Item>

        <Form.Item className="basis-1/3">
          <Button
            htmlType="submit"
            className="w-full border border-white px-4 md:px-9 py-1 text-white text-sm font-moderat hover:bg-white hover:text-black"
          >
            Subscribe
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default NewsletterForm;
