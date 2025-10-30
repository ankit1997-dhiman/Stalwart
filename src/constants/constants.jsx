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
export const bedrooms = [
  { key: 1, value: 0 },
  { key: 2, value: 1 },
  { key: 3, value: 2 },
  { key: 4, value: 3 },
  { key: 5, value: 4 },
];

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

export const collapseItems = [
  {
    key: "1",
    label: "Our specialist agents",
    content:
      "Our sales professionals are driven by discipline, creativity and an unwavering focus on our sellers. Focused on sellers, driven by results. We expose your property’s hidden value to the market through strategy, precision and expert negotiation — delivering outcomes that set new benchmarks.",
  },
  {
    key: "2",
    label: "Top-notch real estate campaigns",
    content:
      "With tailored, high-impact marketing across both traditional and digital platforms, our campaigns are crafted to amplify your property’s presence in the market. Stalwart’s strategic approach draws in the right buyers, maximises competition, and transforms attention into exceptional offers — achieving the strongest possible result for your home.",
  },
  {
    key: "3",
    label: "A Greater Scope",
    content:
      "Stalwart’s extensive network across Brisbane and beyond connects your property with qualified buyers locally, nationally and internationally. Our strong industry ties and informed marketing create powerful exposure, maximising buyer interest and driving outstanding results.",
  },
  {
    key: "4",
    label: "Assistance and Interaction",
    content:
      "As part of our commitment to exceptional client service, we prioritise clear communication and consistent updates throughout the sale of your property. Our team ensures responsiveness, transparency and confidence at every stage — creating a seamless and informed selling experience.",
  },
  {
    key: "5",
    label: "Digital Approach",
    content:
      "Stalwart’s digital strategy is designed to engage serious buyers and amplify visibility across the right channels. By combining advanced technology with deep market insight, we ensure your property reaches the right audience - maximising attention, competition and results.",
  },
];

export const switchCollapseItems = [
  {
    key: "1",
    label: "Our Specialist Property Managers",
    content:
      "Our team combines experience with empathy — ensuring your investment is handled with professionalism and intent. From tenant selection to lease renewals and inspections, we stay proactive, compliant, and accountable, keeping you informed every step of the way.",
  },
  {
    key: "2",
    label: "Tailored Leasing Campaigns",
    content:
      "Our team combines experience with empathy — ensuring your investment is handled with professionalism and intent. From tenant selection to lease renewals and inspections, we stay proactive, compliant, and accountable, keeping you informed every step of the way.",
  },
  {
    key: "3",
    label: "A Greater Reach",
    content:
      "Stalwart’s network connects your investment to verified tenants across Brisbane and beyond. With intelligent targeting and local expertise, we maximise visibility and minimise vacancy — ensuring consistent returns and reliable occupancy.",
  },
  {
    key: "4",
    label: "Communication and Interaction",
    content:
      "We believe trust is built through clarity. That’s why our team provides regular updates, 360° inspection reports, and direct communication — no call centres, no delays, just seamless interaction and transparency.",
  },
  {
    key: "5",
    label: "Digital Advantage",
    content:
      "Our technology platform gives you 24/7 visibility of rent, maintenance, and inspection reports — all from your phone. With automated workflows, real-time alerts, and secure documentation, you stay informed while we handle every detail with precision.",
  },
];
export const topSpace = 139;

export const magicText = {
  view_more_text: "View More",
};
