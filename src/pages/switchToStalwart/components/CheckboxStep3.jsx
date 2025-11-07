import Label from "@/components/form/Label";
import { Form, Input, DatePicker, Radio } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

const CheckboxStep3 = ({ form }) => {
  const [value, setValue] = useState(null);

  const disablePastDates = (current) => {
    return current && current < dayjs().startOf("day");
  };

  return (
    <>
      <Form.Item name="leaseStatus">
        <Radio.Group
          onChange={(e) => setValue(e.target.value)}
          className="flex flex-col gap-3"
          rules={[{ required: true, message: "Please select Yes or No" }]}
        >
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </Radio.Group>
      </Form.Item>

      {/* Conditionally show fields if Yes is selected */}
      <div className={value === "yes" ? "block" : "hidden"}>
        <Form.Item
          name="agencyName"
          label={<Label label="Agency name" className="pb-4" />}
          rules={[
            { required: value === "yes", message: "Please enter agency name" },
          ]}
        >
          <Input
            placeholder="Enter agency name"
            className="!border-black !border !rounded-none !py-2"
            disabled={value !== "yes"}
          />
        </Form.Item>

        <Form.Item
          name="leaseExpiry"
          label={<Label label="Lease expiry" className="pb-4" />}
          rules={[
            {
              required: value === "yes",
              message: "Please select lease expiry",
            },
          ]}
        >
          <DatePicker
            style={{ width: "100%" }}
            disabledDate={disablePastDates}
            className="!border-black !border !rounded-none !py-2"
            disabled={value !== "yes"}
          />
        </Form.Item>

        <Form.Item
          name="currentRent"
          label={<Label label="Current rent" className="pb-4" />}
          rules={[
            { required: value === "yes", message: "Please enter current rent" },
          ]}
        >
          <Input
            placeholder="Enter current rent"
            className="!border-black !border !rounded-none !py-2"
            disabled={value !== "yes"}
          />
        </Form.Item>

        <Form.Item
          name="reasonSwitching"
          label={<Label label="Reason for switching" className="pb-4" />}
          rules={[
            { required: value === "yes", message: "Please enter a reason" },
          ]}
        >
          <Input.TextArea
            rows={3}
            placeholder="Why are you switching?"
            className="!border-black !border !rounded-none !py-2"
            disabled={value !== "yes"}
          />
        </Form.Item>
      </div>
    </>
  );
};

export default CheckboxStep3;
