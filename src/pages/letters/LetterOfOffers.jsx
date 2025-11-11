import React, { useState } from "react";
import HeroSection from "@/common/HeroSection";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  message,
  Radio,
  Row,
} from "antd";
import { useNavigate } from "react-router-dom";
import { URLS } from "@/constants/Urls";
import { S3_BASE_URL } from "@/config";
// import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export const LetterOfOffers = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    const updatedValues = {
      ...values,
      enquiry_for: `EOI Submission Received `,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/send-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedValues),
        }
      );

      const result = await response.json();

      if (result.success) {
        form.resetFields();
        navigate(URLS.THANK_YOU);
      } else {
        message.error("Failed to send inquiry ❌");
      }
    } catch (error) {
      message.error("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  // const onFinish = async (values) => {
  //   // const res = await fetch("/EOI_Forms.pdf");
  //   // console.log("Response:", res);
  //   // return;
  //   // Load the existing EOI PDF
  //   const existingPdfBytes = await fetch("/EOI_Forms.pdf").then((res) =>
  //     res.arrayBuffer()
  //   );
  //   console.log(existingPdfBytes, "");

  //   const pdfDoc = await PDFDocument.load(existingPdfBytes);
  //   const page = pdfDoc.getPages()[0];
  //   const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  //   // Example: draw user data onto specific coordinates (x, y)
  //   // You will adjust the coordinates to match where each field appears on your EOI PDF.
  //   const draw = (text, x, y) => {
  //     page.drawText(String(text || ""), {
  //       x,
  //       y,
  //       size: 8,
  //       font,
  //       color: rgb(0, 0, 0),
  //     });
  //   };

  //   // Fill property details
  //   draw(values.propertyAddress, 70, 580);
  //   draw(values.realPropertyDesc, 120, 635);
  //   draw(values.price, 480, 610);
  //   draw(values.deposit, 480, 595);
  //   draw(values.settlementDate?.format("DD/MM/YYYY"), 480, 580);

  //   // Fill buyer details
  //   draw(values.fullName, 120, 510);
  //   draw(values.currentAddress, 120, 495);
  //   draw(values.mobile, 120, 480);
  //   draw(values.email, 120, 465);

  //   // Save the updated PDF
  //   const pdfBytes = await pdfDoc.save();
  //   console.log(pdfBytes, "pdfbuyes");
  //   const blob = new Blob([pdfBytes], { type: "application/pdf" });
  //   const link = document.createElement("a");
  //   link.href = URL.createObjectURL(blob);
  //   link.download = "Filled_EOI_Form.pdf";
  //   link.click();
  // };
  return (
    <>
      <HeroSection
        title={"Expression of Interest Form"}
        bgImage={S3_BASE_URL + "/contact-bg.png"}
      />
      <div className="container mx-auto max-w-4xl py-10 px-12.5 lg:px-0">
        <div className="flex xl:flex-row flex-col gap-x-26">
          <div className="w-ull xl:w-[30%]">
            <div className="text-base font-moderat-medium">
              START THE CONVERSATION
            </div>
            <div className="text-3xl font-moderat-medium !mt-5">
              Expression of Interest Form
            </div>
            <div className="font-moderat-regular text-base !mt-8">
              This form allows you to put forward your offer in writing,
              ensuring clarity and transparency for all parties. Once received,
              our property specialists will be in touch to discuss next steps
              and answer any questions you may have.
            </div>
          </div>
          <div className="w-ull xl:w-[70%]">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              requiredMark={false}
            >
              {/* Buyer Information */}
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="date"
                    label="Date"
                    rules={[{ required: true }]}
                  >
                    <DatePicker style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="buyerName"
                    label="Buyer Name"
                    rules={[
                      { required: true, message: "Please enter buyer name" },
                    ]}
                  >
                    <Input placeholder="Enter buyer name" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="buyerEmail"
                    label="Buyer’s Email"
                    rules={[
                      {
                        type: "email",
                        required: true,
                        message: "Please enter valid email",
                      },
                    ]}
                  >
                    <Input placeholder="Enter email" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="buyerPhone"
                    label="Buyer Contact Number"
                    rules={[
                      { required: true, message: "Please enter phone number" },
                    ]}
                  >
                    <Input placeholder="Enter phone number" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="toBePurchased"
                label="Entity Property To Be Purchased In (If Different to Buyer Name)"
                rules={[
                  { required: true, message: "Please enter buyer address" },
                ]}
              >
                <Input placeholder="Enter buyer’s address" />
              </Form.Item>
              <Form.Item
                name="buyerAddress"
                label="Buyer’s Contact Address"
                rules={[
                  { required: true, message: "Please enter buyer address" },
                ]}
              >
                <Input placeholder="Enter buyer’s address" />
              </Form.Item>
              <p className="mt-10">
                This letter of offer is subject to the following conditions and
                the buyer signing a standard contract of Sale as approved by the
                Queensland Law Society. This offer serves as a negotiation tool
                and is not legally binding.
              </p>

              <div className="text-3xl font-moderat-medium !mt-18">
                Wish to make an offer to purchase:
              </div>
              <hr className="my-8"></hr>

              {/* Property Details */}
              <Form.Item
                name="propertyAddress"
                label="Property Address"
                rules={[
                  { required: true, message: "Please enter property address" },
                ]}
              >
                <Input placeholder="Enter property address" />
              </Form.Item>

              <Form.Item name="agentName" label="Agent Name">
                <Input placeholder="Enter agent name" />
              </Form.Item>

              <div className="text-3xl font-moderat-medium !mt-18">
                The offer to purchase is as follows:
              </div>
              <hr className="my-8"></hr>

              {/* Offer Details */}
              <Form.Item
                name="purchasePrice"
                label="Purchase Price (AUD)"
                rules={[
                  { required: true, message: "Please enter purchase price" },
                ]}
              >
                <Input prefix="$" placeholder="Enter offer amount" />
              </Form.Item>

              <div className="text-3xl font-moderat-medium !mt-18">
                DEPOSIT:
              </div>
              <hr className="my-8"></hr>

              {/* Deposit Section */}
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="initialDeposit"
                    label="Initial Deposit (AUD)"
                    rules={[
                      { required: true, message: "Enter initial deposit" },
                    ]}
                  >
                    <Input prefix="$" placeholder="Enter deposit amount" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="balanceDeposit"
                    label="Balance Deposit Due"
                    rules={[
                      { required: true, message: "Enter due date or terms" },
                    ]}
                  >
                    <Input placeholder="Enter balance deposit details" />
                  </Form.Item>
                </Col>
              </Row>

              <div className="text-3xl font-moderat-medium !mt-10">
                Condition:
              </div>
              <hr className="my-8"></hr>

              {/* Conditions */}
              <Row gutter={16} className="">
                <Col lg={12}>
                  <Form.Item label="Subject to finance approval">
                    <Radio.Group>
                      <Row>
                        <Col span={24}>
                          <Radio value="subjectToFinance">yes</Radio>
                        </Col>
                        <Col span={24}>
                          <Radio value="subjectToBuildingInspection">
                            No (indicates cash contract)
                          </Radio>
                        </Col>
                      </Row>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col lg={12}>
                  {" "}
                  <Form.Item
                    name="approvalDays"
                    label="How Many Days"
                    rules={[
                      {
                        required: true,
                        message: "Please specify settlement period",
                      },
                    ]}
                  >
                    <Input placeholder="e.g. 7 days" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16} className="mt-10">
                <Col lg={12}>
                  <Form.Item label="Subject to a satisfactory building inspection and pest inspection report">
                    <Radio.Group>
                      <Row>
                        <Col span={24}>
                          <Radio value="subjectToFinance">Yes</Radio>
                        </Col>
                        <Col span={24}>
                          <Radio value="subjectToBuildingInspection">No</Radio>
                        </Col>
                      </Row>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col lg={12}>
                  {" "}
                  <Form.Item
                    name="inspectionDays"
                    label="How Many Days"
                    rules={[
                      {
                        required: true,
                        message: "Please specify settlement period",
                      },
                    ]}
                  >
                    <Input placeholder="e.g. 7 days" />
                  </Form.Item>
                </Col>
              </Row>

              {/* Settlement */}
              <Form.Item name="settlementDays" label={false} className="">
                <Input placeholder="Settlement Date (Days)" />
              </Form.Item>

              <Form.Item name="specialConditions" label={false}>
                <Input.TextArea rows={4} placeholder="Special Conditions" />
              </Form.Item>

              {/* Notes */}
              <Form.Item name="notes" label={false}>
                <Input placeholder="How did you come across this property" />
              </Form.Item>

              {/* Submit */}
              <Form.Item>
                <Button
                  htmlType="submit"
                  loading={loading}
                  disabled={loading}
                  className="!rounded-none bg-white !text-black px-6 py-2 uppercase w-[268px] !border-black !border hover:!bg-black hover:!text-white"
                >
                  Submit Your Offer
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
