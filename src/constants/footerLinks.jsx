import { URLS } from "./Urls";

export const footerLinks = [
  {
    title: "BUY",
    links: [
      { label: "Properties for Sale", to: URLS.BUY, external: false },
      {
        label: "Upcoming Inspections",
        to: URLS.UPCOMING_INSPECTIONS,
        external: false,
      },
      {
        label: "Upcoming Auctions",
        to: URLS.UPCOMING_AUCTIONS,
        external: false,
      },
      {
        label: "Expression of Interest Form",
        to: URLS.LETTER_OF_OFFER,
        external: false,
      },
      { label: "Suburb Insight", to: URLS.SUBURB_INSIGHT, external: false },
      { label: "Our Team", to: URLS.ABOUT, external: false },
    ],
  },
  {
    title: "SELL",
    links: [
      {
        label: "Sell with Stalwart",
        to: URLS.SELL_WITH_STALWART,
        external: false,
      },
      { label: "Sold Properties", to: URLS.SOLD_PROPERTIES, external: false },
      {
        label: "Book a Property Appraisal",
        to: URLS.SELL_WITH_STALWART,
        external: false,
      },
      { label: "Suburb Insight", to: URLS.SUBURB_INSIGHT, external: false },
      { label: "Our Team", to: URLS.ABOUT, external: false },
      {
        label: "Get A Property Estimate",
        to: URLS.SELL_WITH_STALWART,
        external: false,
      },
    ],
  },
  {
    title: "LEASE",
    links: [
      {
        label: "Leasing with Stalwart",
        to: URLS.SWITCH_TO_STALWART,
        external: false,
      },
      {
        label: "Properties for Lease",
        to: URLS.LEASE_PROPERTIES,
        external: false,
      },
      {
        label: "Upcoming Inspection",
        to: URLS.UPCOMING_INSPECTIONS,
        external: false,
      },
      { label: "Owners Portal", to: URLS.OWNERS_PORTAL },
      { label: "Tenant Portal", to: URLS.OWNERS_PORTAL },
      { label: "Our Team", to: URLS.ABOUT, external: false },
    ],
  },
  {
    title: "ABOUT",
    links: [
      { label: "Our Team", to: URLS.ABOUT, external: false },
      { label: "Careers", to: URLS.CAREERS, external: false },
      { label: "News & Blogs", to: URLS.BLOGS },
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
      { label: "Request an Appraisal", to: URLS.GET_PROPERTY_ESTIMATE },
      { label: "Contact Us", to: URLS.CONTACT_US, external: false },
    ],
  },
];

export const contactInfo = [
  { text: "(07) 3112 8088", to: "tel:+61 07 311280088" },
  {
    text: "info@stalwartrealstate.com.au",
    to: "mailto:info@stalwartrealstate.com.au",
  },
];

export const legalLinks = [
  { text: "Terms & Conditions", to: URLS.TERM_AND_CONDITION },
  { text: "Privacy Policy", to: URLS.PRIVACY_POLICY },
];
