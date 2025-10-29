import { URLS } from "./Urls";

export const footerLinks = [
  {
    title: "BUY",
    links: [
      { label: "Properties for Sale", to: URLS.BUY, external: false },
      { label: "Upcoming Inspections", to: URLS.UPCOMING_INSPECTIONS },
      { label: "Upcoming Auctions", to: URLS.UPCOMING_AUCTIONS },
      { label: "Get A Property Estimate" },
      { label: "Suburb Insight" },
      { label: "Our Team", to: URLS.ABOUT },
    ],
  },
  {
    title: "SELL",
    links: [
      { label: "Sell with Stalwart", to: URLS.SELL_WITH_STALWART },
      { label: "Sold Properties", to: URLS.SOLD_PROPERTIES },
      { label: "Book a Property Appraisal", to: "#" },
      { label: "Suburb Insight", to: "#" },
      { label: "Our Team", to: URLS.ABOUT },
    ],
  },
  {
    title: "LEASE",
    links: [
      { label: "Leasing with Stalwart", to: URLS.SWITCH_TO_STALWART },
      { label: "Properties for Lease", to: URLS.LEASE_PROPERTIES },
      { label: "Upcoming Inspection", to: URLS.UPCOMING_INSPECTIONS },
      { label: "Owners Portal" },
      { label: "Tenant Portal" },
      { label: "Our Team", to: URLS.ABOUT },
    ],
  },
  {
    title: "ABOUT",
    links: [
      { label: "Our Team", to: URLS.ABOUT },
      { label: "Careers", to: URLS.CAREERS },
      { label: "News/Blogs" },
    ],
  },
  {
    title: "SOCIAL MEDIA",
    links: [
      { label: "Instagram", to: URLS.INSTAGRAM, external: true },
      { label: "Facebook", to: URLS.FACEBOOK, external: true },
      { label: "LinkedIn", to: URLS.LINKED_IN, external: true },
    ],
  },
  {
    title: "CONTACT",
    links: [
      { label: "Request an Appraisal" },
      { label: "Contact", to: URLS.CONTACT_US },
    ],
  },
];

export const contactInfo = [
  { text: "(07) 311 280 88", to: "tel:+ 07 311280088" },
  {
    text: "info@stalwartrealstate.com.au",
    to: "mailto:info@stalwartrealstate.com.au",
  },
];

export const legalLinks = [
  { text: "Terms & Conditions", to: URLS.TERM_AND_CONDITION },
  { text: "Privacy Policy", to: URLS.PRIVACY_POLICY },
];
