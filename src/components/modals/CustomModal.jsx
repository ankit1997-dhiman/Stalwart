// src/components/common/CustomModal.jsx
import { CloseBlackCross } from "@/assets/icons/CloseBlackCross";
import { useEffect } from "react";

const CustomModal = ({ isOpen, onClose, children, className = "" }) => {
  useEffect(() => {
    // Disable background scroll when modal is open
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center px-12.5 lg:px-0 "
      onClick={onClose}
    >
      {/* ✅ Background Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 opacity-100"
        onClick={onClose}
      ></div>

      {/* ✅ Modal Content */}
      <div
        className={`relative bg-[#F4F2F0] w-full max-w-[1400px] h-full md:h- xl:h-[690px] overflow-y-auto shadow-xl transform transition-all duration-300 scale-100 ${className} mt-20`}
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-black text-4xl z-50 cursor-pointer hover:bg-gray-200/70"
          onClick={onClose}
        >
          <CloseBlackCross />
        </button>

        {children}
      </div>
    </div>
  );
};

export default CustomModal;
