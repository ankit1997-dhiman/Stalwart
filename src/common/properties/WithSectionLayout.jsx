import React from "react";

export const WithSectionLayout = ({ title, leftText, rightText, midText }) => {
  return (
    <div className="my-14 xl:pt-50 ">
      {title && (
        <h4 className="uppercase text-black text-sm md:text-xl font-monument font-normal leading-10 text-center  custom-select-field">
          {title}
        </h4>
      )}
      {leftText || rightText || midText ? (
        <p className="font-moderat-bold text-base text-center pb-5">
          {leftText && <span>{leftText}</span>}
          {midText && (
            <span className="mx-2 font-moderat-regular text-base">
              {midText}{" "}
            </span>
          )}
          {rightText && (
            <span className="font-normal font-moderat-regular">
              {rightText}
            </span>
          )}
        </p>
      ) : null}
    </div>
  );
};
