import React from "react";

const PropertyDescription = ({ text }) => {
  if (!text) return null;

  // Split text into non-empty lines
  const lines = text.split(/\r?\n/).filter((line) => line.trim() !== "");

  // Helper to bold distances/numbers (e.g., "6min drive" or "550m walk")
  const highlightNumbers = (line) => {
    return line
      .split(/(\d+\s?(?:m|min|km)\s?(?:walk|drive)?)/gi)
      .map((part, i) => {
        if (/\d+\s?(?:m|min|km)\s?(?:walk|drive)?/gi.test(part)) {
          return (
            <span key={i} className="font-semibold text-[#B18C56]">
              {part}
            </span>
          );
        }
        return part;
      });
  };

  return (
    <div className="space-y-4 text-[#333] leading-relaxed text-[15px] font-moderat">
      {lines.map((line, i) => {
        const trimmed = line.trim();

        // Headings (like "More details & Location:")
        if (trimmed.endsWith(":")) {
          return (
            <h3
              key={i}
              className="font-monument text-lg font-semibold mt-6 mb-2 text-[#1A1A1A]"
            >
              {trimmed}
            </h3>
          );
        }

        // Bullet points (lines starting with "-")
        if (trimmed.startsWith("-")) {
          return (
            <li
              key={i}
              className="ml-6 list-disc text-[#444] leading-snug marker:text-[#B18C56]"
            >
              {highlightNumbers(trimmed.replace(/^-/, "").trim())}
            </li>
          );
        }

        // Disclaimer section
        if (trimmed.toUpperCase().startsWith("DISCLAIMER")) {
          return (
            <p key={i} className="text-sm text-gray-500 italic mt-6">
              {trimmed}
            </p>
          );
        }

        // Default paragraph
        return <p key={i}>{highlightNumbers(trimmed)}</p>;
      })}
    </div>
  );
};

export default PropertyDescription;
