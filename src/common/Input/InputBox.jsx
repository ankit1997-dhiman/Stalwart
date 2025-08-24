import React from "react";

const InputBox = React.forwardRef(
  (
    {
      name,
      label,
      value,
      onChange,
      placeholder,
      className,
      type = "text",
      required = false,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={`flex flex-col ${className || ""}`}>
        {label && (
          <label
            htmlFor={name}
            className="mb-2 tracking-[0.7px] text-sm text-black"
          >
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}

        <input
          ref={ref} // ✅ attach the forwarded ref
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="outline-none px-3"
          placeholder={placeholder || ""}
          {...rest}
        />
      </div>
    );
  }
);

InputBox.displayName = "InputBox"; // ✅ recommended for forwardRef components

export default InputBox;
