import React from "react";
import { Collapse } from "antd";
import { footerLinks } from "@/constants/footerLinks";
import plus from "@/assets/icons/footer-plus.svg";
import minus from "@/assets/icons/footer-minus.svg";
import { Link } from "react-router-dom";
const { Panel } = Collapse;

export const FooterCollapse = () => {
  return (
    <Collapse
      accordion
      expandIconPosition="right"
      className="footer-collapse"
      expandIcon={({ isActive }) =>
        isActive ? <img src={minus} /> : <img src={plus} />
      }
    >
      {footerLinks.map((section, index) => (
        <Panel
          header={
            <div className="font-monument text-white text-[11px]">
              {section.title}
            </div>
          }
          key={index}
        >
          <ul className="space-y-3 ">
            {section.links.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                target={link.external ? "_blank" : "_self"}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </Panel>
      ))}
    </Collapse>
  );
};
