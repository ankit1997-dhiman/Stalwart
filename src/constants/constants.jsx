import image from "@/assets/images/tab-image.png";

import { Form, Input, Checkbox } from "antd";
// Top row options
export const topStatusOptions = ["BUY", "SELL", "LEASE"];

// Bottom row options (can be different for each select)
export const bottomStatusOptions = [
  ["MIN. PRICE", "Option 1B", "Option 1C"],
  ["MAX. PRICE", "Option 2B", "Option 2C"],
  ["BED", "1+", "2+", "3+", "4+", "5+", "6+"],
  ["BATH", "1+", "2+", "3+", "4+", "5+", "6+"],
  ["CAR", "1+", "2+", "3+", "4+", "5+", "6+"],
];

export const properties = [
  {
    id: 1,
    image: image,
    address: "3 WAITARA STREET, LOGAN CENTRAL | QLD 4114",
    hoverAddress: "4 BED | 3 BATH | 2 CAR | xxx M",
    price: "$000,000 - 000,000",
  },
  {
    id: 2,
    image: image,
    address: "3 WAITARA STREET, LOGAN CENTRAL | QLD 4114",
    hoverAddress: "4 BED | 3 BATH | 2 CAR | xxx M",
    price: "$000,000 - 000,000",
  },
  {
    id: 3,
    image: image,
    address: "3 WAITARA STREET, LOGAN CENTRAL | QLD 4114",
    hoverAddress: "4 BED | 3 BATH | 2 CAR | xxx M",
    price: "$000,000 - 000,000",
  },
  {
    id: 4,
    image: image,
    address: "3 WAITARA STREET, LOGAN CENTRAL | QLD 4114",
    hoverAddress: "4 BED | 3 BATH | 2 CAR | xxx M",
    price: "$000,000 - 000,000",
  },
];
export const steps = [
  {
    title: "Confirm your details",
    content: (
      <>
        <div className="w-full">
          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[{ required: true, message: "Please enter first name" }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>

            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[{ required: true, message: "Please enter last name" }]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              name="email"
              label="Contact Email"
              rules={[
                { required: true, message: "Please enter email" },
                { type: "email", message: "Enter a valid email" },
              ]}
            >
              <Input placeholder="Contact Email" />
            </Form.Item>

            <Form.Item
              name="contactNumber"
              label="Contact Number"
              rules={[
                { required: true, message: "Please enter contact number" },
              ]}
            >
              <Input placeholder="Contact Number" />
            </Form.Item>
          </div>

          <Form.Item
            name="agree"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("You must agree before continuing")
                      ),
              },
            ]}
          >
            <Checkbox>
              Don’t worry, we never pass your details onto any third parties. By
              continuing you agree to our{" "}
              <a href="/privacy-policy" className="underline">
                Privacy Policy
              </a>
            </Checkbox>
          </Form.Item>
        </div>
      </>
    ),
  },
  {
    title: "Is your property currently tenanted?",
    content: (
      <>
        <div className="w-full">
          <Form.Item
            name="yes"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("You must agree before continuing")
                      ),
              },
            ]}
          >
            <Checkbox>Yes, I Have Tenants Already</Checkbox>
          </Form.Item>
          <Form.Item
            name="no"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("You must agree before continuing")
                      ),
              },
            ]}
          >
            <Checkbox>No, I Need Tenants</Checkbox>
          </Form.Item>
        </div>
      </>
    ),
  },
  {
    title: "Do you currently have a property manager appointed?",
    content: (
      <>
        <div className="w-full">
          {/* Heading */}

          {/* Form */}

          <Form.Item
            name="yes"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("You must agree before continuing")
                      ),
              },
            ]}
          >
            <Checkbox>Yes</Checkbox>
          </Form.Item>
          <Form.Item
            name="no"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("You must agree before continuing")
                      ),
              },
            ]}
          >
            <Checkbox>No</Checkbox>
          </Form.Item>
        </div>
      </>
    ),
  },
  {
    title:
      "How much rent do you think is achievable for your property in the current market?",
    content: (
      <>
        <div className="w-full">
          {/* Heading */}

          {/* Form */}

          <Form.Item
            name="yes"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("You must agree before continuing")
                      ),
              },
            ]}
          >
            <Checkbox>Yes</Checkbox>
          </Form.Item>
          <Form.Item
            name="no"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("You must agree before continuing")
                      ),
              },
            ]}
          >
            <Checkbox>No</Checkbox>
          </Form.Item>
        </div>
      </>
    ),
  },
];
