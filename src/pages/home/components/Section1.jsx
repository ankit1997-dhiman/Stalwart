import { Form, Select, Button, message } from "antd";
import { FaSearch } from "react-icons/fa";
import bgImage from "../../../assets/images/home-hero.png";
import { bedrooms, topStatusOptions } from "@/constants/constants";
import { useState } from "react";
import AddressAutocomplete from "./AddressAutocomplete";
import { graphqlRequest } from "@/utils/graphqlRequest";

const { Option } = Select;

export const Section1 = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);

  const onFinish = async (values) => {
    console.log("Form values:", values); // Debug: check field names

    const filters = [];

    // Mapping of form keys to API filter types and strategies
    const fieldMap = {
      bedrooms: { type: "BEDROOM", strategy: "IS_GREATER_THAN" },
      bathrooms: { type: "BATHROOM", strategy: "IS_GREATER_THAN" },
      carspaces: { type: "CAR_SPACE", strategy: "IS_GREATER_THAN" },
      // Add more mappings here if needed
    };

    // Loop through fieldMap dynamically
    Object.keys(fieldMap).forEach((key) => {
      const value = values[key];

      // Only add filter if value exists and is numeric
      if (value !== undefined && value !== null && value !== "") {
        const strValue = String(value).trim();
        filters.push({
          type: fieldMap[key].type,
          strategy: fieldMap[key].strategy,
          value: strValue,
          displayValue: null,
        });
      }
    });

    // Add address filter separately if present
    if (values.address?.trim()) {
      filters.push({
        type: "ADDRESS",
        strategy: "CONTAINS",
        value: values.address.trim(),
        displayValue: null,
      });
    }

    // Skip creating filterSet if no filters exist
    if (filters.length === 0) {
      console.log("No filters to apply, skipping filterSet.");
      return;
    }

    // Create a single filterGroup with all filters
    const filterSet = {
      // operand: "AND",
      filterGroups: [
        {
          operand: "AND",
          filters,
        },
      ],
    };

    const variables = {
      first: 10, // number of results to fetch
      filterSet,
    };

    console.log("Variables payload:", JSON.stringify(variables, null, 2));

    const query = `
    query GetFilteredProperties($first: Int, $filterSet: FilterSetAttributes) {
      properties(first: $first, filterSet: $filterSet) {
        totalCount
        nodes {
          id
          address {
            street
            postcode
          }
          listingDetails {
            ... on ResidentialSale {
              bedrooms
              bathrooms
            }
            ... on ResidentialRental {
              bedrooms
              bathrooms
            }
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
        console.log("Filtered Properties:", res.properties.nodes);
        message.success("Properties fetched successfully!");
      }
    } catch (error) {
      console.error("GraphQL error:", error);
      message.error("Failed to fetch properties. Check console for details.");
    }
  };

  return (
    <section
      className="h-screen flex items-end justify-center bg-cover bg-center px-12.5 xl:px-0 custom-field"
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
          initialValues={{
            status: "BUY",
            status0: "MIN. PRICE",
            status1: "MAX. PRICE",
            bedrooms: "BED",
            status3: "BATH",
            status4: "CAR",
          }}
        >
          {/* Top Row */}
          <div className="flex flex-col xl:flex-row items-stretch justify-between gap-1.5 md:gap-7.5 pb-16 md:pb-4 w-full">
            <Form.Item name="status" label={false} className="!mb-0">
              <Select className="w-full xl:!w-[180px] !bg-black !text-white !h-[50px]">
                {topStatusOptions.map((opt, idx) => (
                  <Option
                    key={idx}
                    value={opt}
                    className="!bg-[#4F4C45] !text-white !rounded-none font-monument"
                  >
                    <div className="font-monument text-[10px]">{opt}</div>
                  </Option>
                ))}
              </Select>
            </Form.Item>

            {/* Search Box */}
            <div className="w-full flex bg-white relative">
              <Form.Item name="address" label={false} className="!mb-0 !w-full">
                <AddressAutocomplete />
              </Form.Item>

              <Button
                htmlType="submit"
                className="!h-[50px] ml-2 flex items-center justify-center bg-white !border-none"
              >
                <FaSearch className="mr-2" />
              </Button>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="hidden xl:flex items-stretch justify-between gap-7.5 pb-4 w-full">
            <Form.Item
              name={"bedrooms"}
              label={false}
              className="!mb-0 !w-full !h-[50px] text-[10px] font-normal font-monument"
            >
              <Select
                className={`!bg-[#4F4C45] !text-white !h-[50px] text-[10px] font-normal font-monument w-full`}
              >
                {bedrooms.map((item, idx) => {
                  console.log(item);
                  return (
                    <Select.Option
                      value={item}
                      className="!bg-[#4F4C45] !text-white !w-full !rounded-none font-monument text-[10px] font-normal"
                    >
                      <div className="font-monument text-[10px]">{item} +</div>
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item
              name={"bathrooms"}
              label={false}
              className="!mb-0 !w-full !h-[50px] text-[10px] font-normal font-monument"
            >
              <Select
                className={`!bg-[#4F4C45] !text-white !h-[50px] text-[10px] font-normal font-monument w-full`}
              >
                {bedrooms.map((item, idx) => {
                  console.log(item);
                  return (
                    <Select.Option
                      value={item}
                      className="!bg-[#4F4C45] !text-white !w-full !rounded-none font-monument text-[10px] font-normal"
                    >
                      <div className="font-monument text-[10px]">{item} +</div>
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item
              name={"bathrooms"}
              label={false}
              className="!mb-0 !w-full !h-[50px] text-[10px] font-normal font-monument"
            >
              <Select
                className={`!bg-[#4F4C45] !text-white !h-[50px] text-[10px] font-normal font-monument w-full`}
              >
                {bedrooms.map((item, idx) => {
                  console.log(item);
                  return (
                    <Select.Option
                      value={item}
                      className="!bg-[#4F4C45] !text-white !w-full !rounded-none font-monument text-[10px] font-normal"
                    >
                      <div className="font-monument text-[10px]">{item} +</div>
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
          </div>
        </Form>

        <p className="hidden md:block text-white text-center text-[11px] pt-20 pb-40 font-monument font-light uppercase">
          7 Jul 2025 | 11:13:35 AM
        </p>
      </div>
    </section>
  );
};
