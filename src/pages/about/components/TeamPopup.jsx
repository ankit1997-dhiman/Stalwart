import React from "react";
import { useTruncateText } from "@/hooks/useTruncateText";
import { Link } from "react-router-dom";
import { URLS } from "@/constants/Urls";
import { Button } from "antd";
import { LenisAnimatedLink } from "@/components/LenisAnimatedLink";
import { BlackArrow } from "@/assets/icons/BlackArrow";

export default function TeamPopup({ member }) {
  const { id, image, name, desc, inTitle, outTitle, position, email, p } =
    member;

  return (
    <div className="md:flex  justify-between items-stretch gap-6 bg-[#D9D9D9]">
      <div className="w-full xl:w-[700px] bg-[#787878] overflow-hidden">
        <img src={image} className="mx-auto " />
      </div>
      <div className="w-full xl:w-3/5 p-8 flex justify-between flex-col">
        <div>
          <p className="font-moderat-medium text-xl lg:text-2xl">
            {name ? name : null}
          </p>
          <p className="font-moderat-medium text-sm lg:text-base pt-2 md:pt-1">
            {position ? position : null}
          </p>

          <p className="font-moderat-regular text-sm lg:text-sm pt-5">
            {email ? (
              <Link className="!text-black" to={`mailto:${email}`}>
                {email}
              </Link>
            ) : null}{" "}
            {p ? (
              <>
                |
                <Link className="!text-black pl-1" to={`tel:${p}`}>
                  {p}
                </Link>
              </>
            ) : null}
          </p>

          <LenisAnimatedLink
            to={`${
              id !== 4 ? URLS.GET_PROPERTY_ESTIMATE : URLS.SWITCH_TO_STALWART
            }`}
            iconPosition="right"
            icon={<BlackArrow />}
            className="!mt-3 inline-flex items-center text-xs lg:text-sm border-none font-moderat-regular   !text-black"
          >
            Request an Appraisal
          </LenisAnimatedLink>
        </div>
        <div className="space-y-4">
          <div className="font-moderat-bold text-xs lg:text-base uppercase pt-6">
            {inTitle ? inTitle : null}
          </div>
          <div className="font-moderat-light text-xs lg:text-base">
            {useTruncateText(desc, 140)}
          </div>
          <div className="font-moderat-bold text-xs lg:text-base uppercase">
            {outTitle ? outTitle : null}
          </div>
        </div>
      </div>
    </div>
  );
}
