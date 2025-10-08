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

export const collapseItems = [
  {
    key: "1",
    label: "Our specialist agents",
    content:
      "Our sales professionals are committed to providing outstanding customer service and going above and beyond for properties. We maximize attention from real buyers worldwide by utilizing creative marketing and a wide network. Our knowledgeable staff skillfully handles your real estate journey, guaranteeing the best possible result for your asset.",
  },
  {
    key: "2",
    label: "Top-notch real estate campaigns",
    content:
      "With custom, high-impact marketing on both traditional and digital platforms, our all-inclusive marketing campaigns increase the impact of your property. Marshall White is an expert at drawing in specific groups, maximizing offers, and eventually finding the right buyer for your house. ",
  },
  {
    key: "3",
    label: "A Greater Scope",
    content:
      "The exposure of your home is maximized by Marshall White's extensive network and nine strategically placed offices around Melbourne and the Mornington Peninsula. We attract a wide variety of potential customers by reaching out to local, national, and international markets. Strong real estate ties and well-informed marketing provide optimal exposure, boosting buyer interest for a successful sale. ",
  },
  { key: "4", label: "Assistance and Interaction", content: "As a reflection of our dedication to providing outstanding client service, our team places a high priority on open communication and frequent updates during the sale of your property, guaranteeing responsiveness and transparency for a smooth and knowledgeable transaction. " },
  { key: "5", label: "Digital Approach", content: "Marshall White's sophisticated digital approach focuses on interested purchasers, increasing the likelihood that your property will sell. We make sure your listing reaches the correct audience for the greatest results by fusing cutting-edge technology with market knowledge." },
];
