import { Modal } from "antd";

const EnquiryModal = ({ isModalOpen, setIsModalOpen }) => {
  // const [form] = Form.useForm();

  // const handleSubmit = (values) => {
  //   console.log("Form Values:", values);
  //   message.success("Enquiry submitted successfully!");
  //   form.resetFields();
  //   setIsModalOpen(false);
  // };
  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };

  return (
    // <div>
    //   <Modal title="Enquiry" open={isModalOpen} onCancel={handleCancel}>
    //     <Form
    //       form={form}
    //       layout="vertical"
    //       //   onFinish={handleSubmit}
    //     >
    //       <Form.Item
    //         label="Name"
    //         name="name"
    //         rules={[{ required: true, message: "Please enter your name" }]}
    //       >
    //         <Input placeholder="Enter your name" />
    //       </Form.Item>

    //       <Form.Item
    //         label="Email"
    //         name="email"
    //         rules={[
    //           { required: true, message: "Please enter your email" },
    //           { type: "email", message: "Please enter a valid email" },
    //         ]}
    //       >
    //         <Input placeholder="Enter your email" />
    //       </Form.Item>

    //       <Form.Item
    //         label="Message"
    //         name="message"
    //         rules={[{ required: true, message: "Please enter your message" }]}
    //       >
    //         <Input.TextArea placeholder="Your message" rows={4} />
    //       </Form.Item>
    //     </Form>
    //   </Modal>
    // </div>
    <div className="container mx-auto">
      <Modal open={isModalOpen}>
        <div></div>
      </Modal>
    </div>
  );
};

export default EnquiryModal;
