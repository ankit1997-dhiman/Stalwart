import image from "@/assets/images/tab-image.png";

// "@/assets/images/right.png";

import { Form, Input, Checkbox } from "antd";
// Top row options
export const topStatusOptions = ["BUY", "SELL", "LEASE"];

// Bottom row options (can be different for each select)
export const bottomStatusOptions = [
  // ["MIN. PRICE", "Option 1B", "Option 1C"],
  // ["MAX. PRICE", "Option 2B", "Option 2C"],
  ["BED", "1+", "2+", "3+", "4+", "5+", "6+"],
  ["BATH", "1+", "2+", "3+", "4+", "5+", "6+"],
  ["CAR", "1+", "2+", "3+", "4+", "5+", "6+"],
];
export const bedrooms = [1, 2, 3, 4, 5, 6];

// Keys order if you want to keep the same layout as bottomStatusOptions
export const keysOrder = [
  "min. price",
  "max. price",
  "bedrooms",
  "bathrooms",
  "car",
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
// export const steps = [
//   {
//     content: (
//       <div>
//         <section
//           className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center bg-fixed px-6 xl:px-0"
//           style={{
//             backgroundImage: `url(${bgImage})`,
//             zIndex: -1,
//           }}
//         >
//           {/* Heading */}
//           <p className="font-monument text-[15px] lg:text-xl font-medium text-white text-center pb-6 lg:pb-10">
//             SELL WITH STALWART
//           </p>

//           {/* Form container */}
//           <Form
//             form={form}
//             onFinish={onFinish}
//             className="hidden w-full xl:w-auto lg:flex justify-center"
//           >
//             <div className="w-full xl:w-[1000px] flex flex-col lg:flex-row bg-white mx-auto ">
//               <Form.Item
//                 name="name"
//                 label={false}
//                 className="!mb-0 !w-full !rounded-xl"
//               >
//                 <Input
//                   placeholder="Start Typing To Find Your Address...."
//                   className="!h-[50px] !border-none !rounded-none !outline-0"
//                 />
//               </Form.Item>

//               <Button
//                 htmlType="submit"
//                 className="!h-[50px] ml-0 lg:ml-2 flex items-center justify-center !bg-[#706C62] !border-none !rounded-none !text-white"
//               >
//                 <span className="text-[13px] font-monument">
//                   GET AGENT APPRAISAL
//                 </span>
//               </Button>
//             </div>
//           </Form>

//           {/* 👇 This div only affects mobile positioning */}
//           <div className="absolute bottom-8 left-0 right-0 flex justify-center lg:hidden">
//             <Form
//               form={form}
//               onFinish={onFinish}
//               className="w-[90%] bg-white flex flex-col lg:flex-row"
//             >
//               <Form.Item
//                 name="name"
//                 label={false}
//                 className="!mb-0 !w-full !rounded-xl"
//               >
//                 <Input
//                   placeholder="Start Typing To Find Your Address...."
//                   className="!h-[50px] !border-none !rounded-none !outline-0"
//                 />
//               </Form.Item>
//               <Button
//                 htmlType="submit"
//                 className="!h-[50px] mt-2 flex items-center justify-center !bg-[#706C62] !border-none !rounded-none !text-white"
//               >
//                 <span className="text-[13px] font-monument">
//                   GET AGENT APPRAISAL
//                 </span>
//               </Button>
//             </Form>
//           </div>
//         </section>

//         <section className="px-12.5 lg:px-0">
//           <div className="container grid grid-cols-1 lg:grid-cols-4 gap-6 py-32">
//             <div className="lg:col-span-1 ">
//               <p className="pb-10 font-monument lg:text-lg text-sm uppercase leading-6 lg:leading-10">
//                 Experience the stalwart difference
//               </p>
//               <p className="pb-16 text-xs lg:text-base font-moderat-regular">
//                 At Stalwart, we define prestige property with unrivalled
//                 experience, comprehensive local market knowledge, and strategic
//                 approaches that consistently deliver exceptional results. Our
//                 uniquely tailored services ensure detailed attention and
//                 meticulous care in every real estate journey, turning your
//                 property aspirations into reality. 
//               </p>
//               <Collapse
//                 defaultActiveKey={["1"]}
//                 onChange={onChange}
//                 expandIconPosition="right"
//                 accordion
//                 expandIcon={({ isActive }) =>
//                   isActive ? <FaMinus /> : <FaPlus />
//                 }
//                 items={items}
//                 className="!border-none !bg-transparent pl-0"
//               />
//               <p className="pt-10 ">
//                 <Link className="text-sm font-moderat-bold flex items-center">
//                   SEE ALL SOLD PROPERTIES{" "}
//                   <span>
//                     <HiArrowLongRight className="pl-3 text-black text-4xl" />
//                   </span>
//                 </Link>
//               </p>
//             </div>

//             <div
//               className="flex items-end justify-center bg-cover bg-center px-12.5 xl:px-0 lg:col-span-3"
//               style={{ backgroundImage: `url(${sectionBgImage})` }}
//             ></div>
//           </div>
//         </section>
//         <section className="bg-[#F4F2F0] mb-32 px-12.5 lg:px-0">
//           <div className="container grid grid-cols-1 lg:grid-cols-4 gap-6 py-20">
//             <div
//               className="flex items-end justify-center bg-cover bg-center px-12.5 xl:px-0 lg:col-span-1"
//               style={{ backgroundImage: `url(${sectionBgImage})` }}
//             ></div>
//             <div className="lg:col-span-3 ">
//               <p className="pb-5 font-miller-light capitalize text-xl lg:text-4xl font-light leading-10">
//                 Have any questions?
//               </p>
//               <p className="pb-16 text-sm lg:text-base font-moderat-regular">
//                 Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//                 dolor in reprehenderit in voluptate velit esse cillum dolore eu
//                 fugiat nulla pariatur.
//               </p>

//               <p className="pt-10 ">
//                 <Link className="text-sm font-moderat-bold flex items-center">
//                   REQUEST NOW
//                   <span>
//                     <HiArrowLongRight className="pl-3 text-black text-4xl" />
//                   </span>
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </section>
//         <CurrentProperties title="SEE OUR SOLD PROPERTIES" />
//       </div>
//     ),
//   },
//   {
//     title: "Confirm your details",
//     content: (
//       <>
//         <div className="w-full">
//           <div className="grid grid-cols-2 gap-4">
//             <Form.Item
//               name="firstName"
//               label="First Name"
//               rules={[{ required: true, message: "Please enter first name" }]}
//             >
//               <Input placeholder="First Name" />
//             </Form.Item>

//             <Form.Item
//               name="lastName"
//               label="Last Name"
//               rules={[{ required: true, message: "Please enter last name" }]}
//             >
//               <Input placeholder="Last Name" />
//             </Form.Item>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <Form.Item
//               name="email"
//               label="Contact Email"
//               rules={[
//                 { required: true, message: "Please enter email" },
//                 { type: "email", message: "Enter a valid email" },
//               ]}
//             >
//               <Input placeholder="Contact Email" />
//             </Form.Item>

//             <Form.Item
//               name="contactNumber"
//               label="Contact Number"
//               rules={[
//                 { required: true, message: "Please enter contact number" },
//               ]}
//             >
//               <Input placeholder="Contact Number" />
//             </Form.Item>
//           </div>

//           <Form.Item
//             name="agree"
//             valuePropName="checked"
//             rules={[
//               {
//                 validator: (_, value) =>
//                   value
//                     ? Promise.resolve()
//                     : Promise.reject(
//                         new Error("You must agree before continuing")
//                       ),
//               },
//             ]}
//           >
//             <Checkbox>
//               Don’t worry, we never pass your details onto any third parties. By
//               continuing you agree to our{" "}
//               <a href="/privacy-policy" className="underline">
//                 Privacy Policy
//               </a>
//             </Checkbox>
//           </Form.Item>
//         </div>
//       </>
//     ),
//   },
//   {
//     title: "Is your property currently tenanted?",
//     content: (
//       <>
//         <div className="w-full">
//           <Form.Item
//             name="yes"
//             valuePropName="checked"
//             rules={[
//               {
//                 validator: (_, value) =>
//                   value
//                     ? Promise.resolve()
//                     : Promise.reject(
//                         new Error("You must agree before continuing")
//                       ),
//               },
//             ]}
//           >
//             <Checkbox>Yes, I Have Tenants Already</Checkbox>
//           </Form.Item>
//           <Form.Item
//             name="no"
//             valuePropName="checked"
//             rules={[
//               {
//                 validator: (_, value) =>
//                   value
//                     ? Promise.resolve()
//                     : Promise.reject(
//                         new Error("You must agree before continuing")
//                       ),
//               },
//             ]}
//           >
//             <Checkbox>No, I Need Tenants</Checkbox>
//           </Form.Item>
//         </div>
//       </>
//     ),
//   },
//   {
//     title: "Do you currently have a property manager appointed?",
//     content: (
//       <>
//         <div className="w-full">
//           {/* Heading */}

//           {/* Form */}

//           <Form.Item
//             name="yes"
//             valuePropName="checked"
//             rules={[
//               {
//                 validator: (_, value) =>
//                   value
//                     ? Promise.resolve()
//                     : Promise.reject(
//                         new Error("You must agree before continuing")
//                       ),
//               },
//             ]}
//           >
//             <Checkbox>Yes</Checkbox>
//           </Form.Item>
//           <Form.Item
//             name="no"
//             valuePropName="checked"
//             rules={[
//               {
//                 validator: (_, value) =>
//                   value
//                     ? Promise.resolve()
//                     : Promise.reject(
//                         new Error("You must agree before continuing")
//                       ),
//               },
//             ]}
//           >
//             <Checkbox>No</Checkbox>
//           </Form.Item>
//         </div>
//       </>
//     ),
//   },
//   {
//     title:
//       "How much rent do you think is achievable for your property in the current market?",
//     content: (
//       <>
//         <div className="w-full">
//           {/* Heading */}

//           {/* Form */}

//           <Form.Item
//             name="yes"
//             valuePropName="checked"
//             rules={[
//               {
//                 validator: (_, value) =>
//                   value
//                     ? Promise.resolve()
//                     : Promise.reject(
//                         new Error("You must agree before continuing")
//                       ),
//               },
//             ]}
//           >
//             <Checkbox>Yes</Checkbox>
//           </Form.Item>
//           <Form.Item
//             name="no"
//             valuePropName="checked"
//             rules={[
//               {
//                 validator: (_, value) =>
//                   value
//                     ? Promise.resolve()
//                     : Promise.reject(
//                         new Error("You must agree before continuing")
//                       ),
//               },
//             ]}
//           >
//             <Checkbox>No</Checkbox>
//           </Form.Item>
//         </div>
//       </>
//     ),
//   },
// ];
