import React from "react";

export const WithSectionLayout = ({ title, leftText, rightText, midText }) => {
  return (
    <div className="lg:pt-40 ">
      {title && (
        <p className="uppercase text-black text-sm md:text-xl font-monument font-normal leading-10 text-center custom-select-field">
          {title}
        </p>
      )}
      {leftText || rightText || midText ? (
        <p className="font-moderat-bold text-base text-center pt-3">
          {leftText && <span>{leftText}</span>}
          {midText && (
            <span className="mx-1 font-moderat-regular text-base">
              {midText}
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
