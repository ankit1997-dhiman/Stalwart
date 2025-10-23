import React from "react";
import HeroSection from "@/common/HeroSection";
import bgImage from "@/assets/images/contact-bg.png";
import { Button, Checkbox, Col, DatePicker, Form, Input, Row } from "antd";

export const LetterOfOffers = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Values: ", values);
  };
  return (
    <>
      <HeroSection title={"LETTER OF OFFER"} bgImage={bgImage} />
      <div className="container mx-auto max-w-4xl py-10">
        <h2 className="text-2xl font-semibold mb-8 text-center uppercase">
          Letter of Offer Form
        </h2>
        <div className="flex gap-x-26">
          <div className="w-[30%]">
            <div className="text-base font-moderat-medium">
              START THE CONVERSATION
            </div>
            <div className="text-3xl font-moderat-medium !mt-5">
              LETTER OF OFFER FORM
            </div>
            <div className="font-moderat-regular text-base !mt-8">
              This form allows you to put forward your offer in writing,
              ensuring clarity and transparency for all parties. Once received,
              our property specialists will be in touch to discuss next steps
              and answer any questions you may have.
            </div>
          </div>
          <div className="w-[70%]">
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
                name="buyerAddress"
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
                    <Checkbox.Group>
                      <Row>
                        <Col span={24}>
                          <Checkbox value="subjectToFinance">yes</Checkbox>
                        </Col>
                        <Col span={24}>
                          <Checkbox value="subjectToBuildingInspection">
                            No (indicates cash contract)
                          </Checkbox>
                        </Col>
                      </Row>
                    </Checkbox.Group>
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
                    <Input placeholder="e.g. 30 days" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16} className="mt-10">
                <Col lg={12}>
                  <Form.Item label="Subject to a satisfactory building inspection and pest inspection report">
                    <Checkbox.Group>
                      <Row>
                        <Col span={24}>
                          <Checkbox value="subjectToFinance">Yes</Checkbox>
                        </Col>
                        <Col span={24}>
                          <Checkbox value="subjectToBuildingInspection">
                            No
                          </Checkbox>
                        </Col>
                      </Row>
                    </Checkbox.Group>
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
                    <Input placeholder="e.g. 30 days" />
                  </Form.Item>
                </Col>
              </Row>

              {/* Settlement */}
              <Form.Item name="specialConditions" label={false} className="">
                <Input
                  placeholder="Settlement Date (Days)"
                />
              </Form.Item>

              <Form.Item
                name="specialConditions"
                label={false}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Special Conditions"
                />
              </Form.Item>

              {/* Notes */}
              <Form.Item name="notes" label={false}>
                <Input
                  placeholder="How did you come across this property"
                />
              </Form.Item>

              {/* Submit */}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="!rounded-none !bg-white !text-black px-6 py-2 uppercase w-[268px] !border-black !border"
                  
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
