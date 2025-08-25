import { Link } from "react-router-dom";
import { URLS } from "./Urls";

export const footerLinks = [
  {
    title: "BUY",
    links: [
      "Properties for Sale",
      "Upcoming Inspections",
      "Sales Properties",
      "Suburb Insights",
    ],
  },
  {
    title: "SELL",
    links: [
      "Selling With Stalwart",
      "Book A Property Appraisal",
      "Sold Properties",
      "Project Marketing",
      "Suburb Insights",
    ],
  },
  {
    title: "LEASE",
    links: [
      "Properties for Lease",
      "Upcoming Inspections",
      "Owners Portal",
      "Tenant Portal",
      "Suburb Insights",
    ],
  },
  {
    title: "ABOUT",
    links: [
      "Our Team",
      "Our Suburbs",
      <Link key="careers" to={URLS.CAREERS}>
        Careers
      </Link>,
      "News/Blogs",
    ],
  },
  {
    title: "SOCIAL MEDIA",
    links: ["Instagram", "Facebook", "LinkedIn"],
  },
  {
    title: "CONTACT",
    links: [
      "Request an Appraisal",
      <Link key="contact" to={URLS.CONTACT_US}>
        Contact
      </Link>,
    ],
  },
];

export const contactInfo = [
  { text: "0000 000 000" },
  { text: "contactus@stalwart.com.au" },
];

export const legalLinks = ["Terms & Conditions", "Privacy Policy"];
