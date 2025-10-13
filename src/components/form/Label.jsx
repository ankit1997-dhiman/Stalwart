import React from "react";

export default function Label({ label, className }) {
  return (
    <div className={`text-base font-moderat-regular  ${className}`}>
      {label}
    </div>
  );
}
