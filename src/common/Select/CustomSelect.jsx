import { useState, useRef, useEffect, forwardRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const CustomSelect = forwardRef(
  ({ options, value, onChange, width }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    // ✅ Close on outside click
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <div
        ref={ref || wrapperRef} // ✅ forward external ref, fallback to internal one
        className="relative w-full"
        style={width ? { width } : {}}
      >
        <div
          className="bg-[#4F4C45] text-white py-3 px-4 cursor-pointer select-none rounded"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="flex items-center justify-between">
            {options.find((opt) => opt.value === value)?.label || "Select..."}
            {isOpen ? (
              <FaChevronUp className="text-xs" />
            ) : (
              <FaChevronDown className="text-xs" />
            )}
          </div>
        </div>

        {isOpen && (
          <ul
            className="absolute top-11 left-0 w-full bg-[#4F4C45] text-white shadow-lg z-10 rounded"
            style={{ maxHeight: "200px", overflowY: "auto" }}
          >
            {options.map((opt) => (
              <li
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`py-2 px-4 hover:bg-gray-600 cursor-pointer ${
                  value === opt.value ? "bg-gray-700" : ""
                }`}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

CustomSelect.displayName = "CustomSelect"; // ✅ for React DevTools
