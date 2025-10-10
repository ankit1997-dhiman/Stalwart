// JS example
import React from "react";
import DOMPurify from "dompurify";

export function RawHtml({ html }) {
  // sanitize first
  const clean = DOMPurify.sanitize(html);
  return <div dangerouslySetInnerHTML={{ __html: clean }} />;
}
