import { Link } from "react-router-dom";
import { URLS } from "./Urls";

export const footerLinks = [
  {
    title: "BUY",
    links: [
      "Properties for Sale",
      "Upcoming Inspections & Auctions",
      "Sold Properties",
    ],
  },
  {
    title: "SELL",
    links: [
      "Selling With Stalwart",
      "Book A Property Appraisal",
      "Sold Properties",
      "Project Marketing"
    ],
  },
  {
    title: "LEASE",
    links: [
      "Properties for Lease",
      "Upcoming Inspections",
      "Owners Portal",
      "Tenant Portal",
    ],
  },
  {
    title: "ABOUT",
    links: [
      "Our Team",
      <Link key="careers" to={URLS.CAREERS}>
        Careers
      </Link>,
      "News/Blogs",
    ],
  },
  {
    title: "SOCIAL MEDIA",
    links: [
      <Link key="Instagram" to={URLS.INSTAGRAM} target="_blank">
        Instagram
      </Link>,
      <Link key="Facebook" to={URLS.FACEBOOK} target="_blank">
        Facebook
      </Link>,
      <Link key="Facebook" to={URLS.LINKED_IN} target="_blank">
        LinkedIn
      </Link>],
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
  { text: "+61 414 000 044" },
  { text: "info@stalwartrealstate.com.au" },
];

export const legalLinks = ["Terms & Conditions", "Privacy Policy"];
