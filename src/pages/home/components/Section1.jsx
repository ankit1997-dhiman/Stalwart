import { Form, Select, Button, message } from "antd";
import { FaSearch } from "react-icons/fa";
import bgImage from "../../../assets/images/home-hero.png";
import { bedrooms, topStatusOptions } from "@/constants/constants";
import { useState } from "react";
import AddressAutocomplete from "./AddressAutocomplete";
import { graphqlRequest } from "@/utils/graphqlRequest";

const { Option } = Select;

// Reusable Select component
 const FilterSelect = ({ name, placeholder, options }) => ( 
   <Form.Item name={name} label={false} className="!mb-0 !w-full !h-[50px]">
    <Select
      className="!bg-[#4F4C45] !text-white !h-[50px] text-[10px] font-normal font-monument w-full !placeholder:text-[10px]"
      placeholder={placeholder}
    >
      {options.map((item) => (
        <Option key={item} value={item} className="!bg-[#4F4C45] !text-white !rounded-none font-monument text-[10px]">
          <div className="font-monument text-[10px]">{item} +</div>
        </Option>
      ))}
    </Select>
  </Form.Item>
);

export const Section1 = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);

  const onFinish = async (values) => {
    const filters = [];

    const fieldMap = {
      bedrooms: { type: "BEDROOM", strategy: "IS_GREATER_THAN" },
      bathrooms: { type: "BATHROOM", strategy: "IS_GREATER_THAN" },
      car: { type: "CAR_SPACE", strategy: "IS_GREATER_THAN" },
    };

    Object.entries(fieldMap).forEach(([key, config]) => {
      const value = values[key];
      if (value) {
        filters.push({
          type: config.type,
          strategy: config.strategy,
          value: String(value).trim(),
          displayValue: null,
        });
      }
    });

    if (values.address?.trim()) {
      filters.push({
        type: "ADDRESS",
        strategy: "CONTAINS",
        value: values.address.trim(),
        displayValue: null,
      });
    }

    if (!filters.length) return;

    const filterSet = {
      filterGroups: [{ operand: "AND", filters }],
    };

    const variables = { first: 10, filterSet };

    const query = `
      query GetFilteredProperties($first: Int, $filterSet: FilterSetAttributes) {
        properties(first: $first, filterSet: $filterSet) {
          totalCount
          nodes {
            id
            address { street postcode }
            listingDetails {
              ... on ResidentialSale { bedrooms bathrooms }
              ... on ResidentialRental { bedrooms bathrooms }
            }
            price
            status
          }
        }
      }
    `;

    try {
      const res = await graphqlRequest(query, variables);
      if (res?.properties?.nodes) {
        setData(res.properties.nodes);
        message.success("Properties fetched successfully!");
      }
    } catch (error) {
      console.error(error);
      message.error("Failed to fetch properties.");
    }
  };

  return (
    <section
      className="h-screen flex items-end justify-center bg-cover bg-center px-12.5 xl:px-0 custom-field -mt-[86px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-[999px]">
        <h4 className="uppercase text-white text-sm md:text-xl font-monument font-normal leading-10 text-center pb-2 md:pb-20">
          PORTA AD DOMUN
        </h4>

        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          initialValues={{ status: "BUY", bedrooms: "BED", bathrooms: "BATH", car: "CAR" }}
          className="placeholder-white"
        >
          {/* Top Row */}
          <div className="flex flex-col xl:flex-row items-stretch justify-between gap-1.5 md:gap-7.5 pb-16 md:pb-4 w-full">
            <Form.Item name="status" label={false} className="!mb-0">
              <Select className="w-full xl:!w-[180px] !bg-black !text-white !h-[50px] !placeholder:text-white !placeholder:text-[10px] uppercase" placeholder="BUY">
                {topStatusOptions.map((opt) => (
                  <Option key={opt} value={opt} className="!bg-[#4F4C45] !text-white !rounded-none font-monument !text-[10px]">
                    {opt}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            {/* Search Box */}
            <div className="w-full flex bg-white relative">
              <Form.Item name="address" label={false} className="!mb-0 !w-full">
                <AddressAutocomplete />
              </Form.Item>

              <Button htmlType="submit" className="!h-[50px] ml-2 flex items-center justify-center bg-white !border-none">
                <FaSearch className="mr-2" />
              </Button>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="hidden xl:flex items-stretch justify-between gap-7.5 pb-4 w-full">
            <FilterSelect name="bedrooms" placeholder="BED" options={bedrooms} />
            <FilterSelect name="bathrooms" placeholder="BATH" options={bedrooms} />
            <FilterSelect name="car" placeholder="CAR" options={bedrooms} />
          </div>
        </Form>

        <p className="hidden md:block text-white text-center text-[11px] pt-20 pb-40 font-monument font-light uppercase">
          7 Jul 2025 | 11:13:35 AM
        </p>
      </div>
    </section>
  );
};
