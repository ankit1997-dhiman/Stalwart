import { Form } from "antd";
import AddressAutocomplete from "@/pages/home/components/AddressAutocomplete";

export const SellLandingStep = ({ form, query, setQuery, active }) => {
  return (
    <>
      <Form.Item
        name="address"
        label={false}
        className="!mb-0 !w-full !rounded-xl "
        rules={[{ required: true, message: "Please enter your address" }]}
      >
        <AddressAutocomplete
          activeTab={active ? "SELL" : ""}
          value={query}
          onChange={(val) => setQuery(val)}
        />
      </Form.Item>
    </>
  );
};
