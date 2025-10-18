import { DrawerMenuLabel } from "@/components/header/DrawerMenuLabel";
import { DrawerSubmenuLabel } from "@/components/header/DrawerSubmenuLabel";
import { URLS } from "./Urls";

export const drawerMenuitems = [
  {
    key: "sub1",
    label: <DrawerMenuLabel label="BUY" />,
    children: [
      {
        key: "sub-1",
        label: (
          <DrawerSubmenuLabel label="Properties for Sale" link={URLS.BUY} />
        ),
      },
      {
        key: "sub-2",
        label: (
          <DrawerSubmenuLabel
            label="Upcoming Inspections"
            link={URLS.UPCOMING_INSPECTIONS}
          />
        ),
      },
      {
        key: "sub-3",
        label: (
          <DrawerSubmenuLabel
            label="Upcoming Auction"
            link={URLS.UPCOMING_AUCTIONS}
          />
        ),
      },
      {
        key: "sub-4",
        label: <DrawerSubmenuLabel label="Suburb Insights" link={"#"} />,
      },
    ],
  },
  {
    key: "sub2",
    label: <DrawerMenuLabel label="SELL" />,
    children: [
      {
        key: "g1",
        label: (
          <DrawerSubmenuLabel
            label="Sell with Stalwart"
            link={URLS.SELL_WITH_STALWART}
          />
        ),
      },
      {
        key: "g2",
        label: (
          <DrawerSubmenuLabel
            DrawerSubmenuLabel
            label="Sold Properties"
            link={URLS.SOLD_PROPERTIES}
          />
        ),
      },
      {
        key: "g3",
        label: (
          <DrawerSubmenuLabel label="Book a Property Appraisal" link={"#"} />
        ),
      },
      {
        key: "g4",
        label: <DrawerSubmenuLabel label="Suburb Insight" link={"#"} />,
      },
    ],
  },
  {
    key: "sub3",
    label: <DrawerMenuLabel label="LEASE" />,
    // icon: <MailOutlined />,
    children: [
      {
        key: "g11",
        label: <DrawerSubmenuLabel label="Leasing with Stalwart" link={"#"} />,
      },
      {
        key: "g12",
        label: (
          <DrawerSubmenuLabel label="Properties for Lease" link={URLS.LEASE} />
        ),
      },
      {
        key: "g13",
        label: (
          <DrawerSubmenuLabel
            label="Upcoming Inspections"
            link={URLS.UPCOMING_INSPECTIONS}
          />
        ),
      },
      {
        key: "g14",
        label: <DrawerSubmenuLabel label="Owner Portal" />,
      },
      {
        key: "g15",
        label: <DrawerSubmenuLabel label="Tenant Portal" />,
      },
    ],
  },
  {
    key: "sub4",
    label: <DrawerMenuLabel label="ABOUT" link={URLS.ABOUT} />,
  },
  {
    key: "sub5",
    label: <DrawerMenuLabel label="CONTACT" link={URLS.CONTACT_US} />,
  },
];
