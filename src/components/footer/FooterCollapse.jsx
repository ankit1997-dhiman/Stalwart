import React from "react";
import { Collapse } from "antd";
import { footerLinks } from "@/constants/footerLinks";
import plus from "@/assets/icons/footer-plus.svg"
import minus from "@/assets/icons/footer-minus.svg"
const { Panel } = Collapse;

export const FooterCollapse = () => {
  return (
    <Collapse
      accordion
      expandIconPosition="right"
      className="footer-collapse"
       expandIcon={({ isActive }) =>
        isActive ? (
          <img src={minus} />
        ) : (
          <img src={plus} />
        )
      }
    >
      {footerLinks.map((section, index) => (
        <Panel header={<div className="font-monument text-white text-[11px]">{section.title}</div>} key={index}>
          <ul className="space-y-3 ">
            {section.links.map((link, i) => (
              <li key={i} className="text-white hover:text-black font-moderat-regular text-xs">
                {/* If the link is a string, render as plain text or <a> */}
                {typeof link === "string" ? (
                  <a href="#" className="no-underline text-white font-moderat-regular">
                    {link}
                  </a>
                ) : (
                  link
                )}
              </li>
            ))}
          </ul>
        </Panel>
      ))}
    </Collapse>
  );
};

 