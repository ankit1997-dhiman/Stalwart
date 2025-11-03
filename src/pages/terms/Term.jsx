import React from "react";
import HeroSection from "@/common/HeroSection";
import { Typography } from "@/common/Typography";
import bgImage from "@/assets/images/contact-bg.png";
import { BottomSpace } from "@/components/BottomSpace";

export const Term = () => {
  const legalInfo = [
    "Stalwart Real Estate and its related entities (“we”, “our”, “us”) make no representation or warranty as to the accuracy, reliability or completeness of any information provided in relation to a property.",
    "Some information may have been obtained from third party sources and has not been independently verified.",
    " Accordingly, no warranty, representation or undertaking, whether express or implied, is made and no responsibility or liability is accepted by us for the accuracy or completeness of this information, or for any further information supplied by or on our behalf, whether in writing or verbally.",
    "No person or entity associated with Stalwart Real Estate guarantees the performance or return of any property. The information provided is general in nature and does not take into account your personal objectives, financial situation or individual needs.",
    "We recommend that you seek independent financial, legal and taxation advice before making any decision or commitment based on this information.",
    "Any reference to price or value is indicative only and based on available market evidence for comparable properties in the locality at the time of publication. Prices do not constitute a formal valuation and should not be relied upon as such. All prices and figures, unless stated otherwise, are exclusive of GST.",
  ];

  return (
    <>
      <HeroSection title={"Term & Conditions"} bgImage={bgImage} />
      <div className="px-12.5 xl:px-0">
        <div className="container pt-10">
          <Typography
            className="font-moderat-bold text-2xl py-10"
            text="Legal"
          />
          {legalInfo.map((item) => (
            <Typography
              className="text-base pb-2 font-moderat-medium"
              text={item}
            />
          ))}
          <BottomSpace />
        </div>
      </div>
    </>
  );
};
