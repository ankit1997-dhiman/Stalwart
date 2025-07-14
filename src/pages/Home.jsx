import { Col, Input, Row, Select } from "antd";

export const Home = () => {
  return (
    <div className="bg-black h-screen flex items-end justify-center">
      <div className="">
        <h4 className="uppercase text-white text-xl font-monument font-normal leading-10 text-center pb-20">
          PORTA AD DOMUN
        </h4>
        <div>
          <div className="flex pb-4">
            <Select
              className="border-radius-custom font-monument text-[10px] py-4"
              defaultValue="BUY"
              dropdownStyle={{ backgroundColor: "black", color: "white" }}
              style={{ width: 220, fontSize: 10 }}
              size="large"
              options={[
                { value: "BUY", label: "BUY" },
                { value: "LEASE", label: "LEASE" },
                { value: "SOLD", label: "SOLD" },
              ]}
            />
            <Input className="w-full !rounded-none" size="small" />
          </div>
          <Row gutter={18}>
            <Col>
              <Select
                defaultValue="BUY"
                style={{ width: 180, borderRadius: 0 }}
                size="large"
                className="border-radius-custom"
                options={[
                  { value: "BUY", label: "BUY" },
                  { value: "LEASE", label: "LEASE" },
                  { value: "SOLD", label: "SOLD" },
                ]}
              />
            </Col>
            <Col>
              <Select
                defaultValue="BUY"
                className="border-radius-custom"
                style={{ width: 180 }}
                size="large"
                options={[
                  { value: "BUY", label: "BUY" },
                  { value: "LEASE", label: "LEASE" },
                  { value: "SOLD", label: "SOLD" },
                ]}
              />
            </Col>
            <Col>
              <Select
                defaultValue="BUY"
                style={{ width: 180 }}
                className="border-radius-custom"
                size="large"
                options={[
                  { value: "BUY", label: "BUY" },
                  { value: "LEASE", label: "LEASE" },
                  { value: "SOLD", label: "SOLD" },
                ]}
              />
            </Col>
            <Col>
              <Select
                defaultValue="BUY"
                className="border-radius-custom bg-black"
                style={{ width: 180 }}
                size="large"
                options={[
                  { value: "BUY", label: "BUY" },
                  { value: "LEASE", label: "LEASE" },
                  { value: "SOLD", label: "SOLD" },
                ]}
              />
            </Col>
          </Row>
        </div>
        <p className="text-white text-center text-[11px] pt-20 pb-40 font-monument font-light uppercase">
          7 Jul 2025 | 11:13:35 AM
        </p>
      </div>
    </div>
  );
};
