import { Form } from "antd";
import AddressAutocomplete from "@/pages/home/components/AddressAutocomplete";

export const SellLandingStep = ({ form }) => (
  <>
    <Form.Item
      name="address"
      label={false}
      className="!mb-0 !w-full !rounded-xl "
      rules={[{ required: true, message: "Please enter your address" }]}
    >
      <AddressAutocomplete />
    </Form.Item>
  </>
);
