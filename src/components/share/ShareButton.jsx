import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaLink,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { ButtonLayout } from "./ButtonLayout";

const ShareButtons = ({ propertyUrl }) => {
  const encodedUrl = encodeURIComponent(propertyUrl);

  //   const encodedUrl = encodeURIComponent(propertyUrl);

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(
      "Check out this property: " + propertyUrl
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      propertyUrl
    )}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      propertyUrl
    )}`,
    email: `mailto:?subject=Check out this property&body=${encodeURIComponent(
      "I thought you might be interested in this: " + propertyUrl
    )}`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(propertyUrl);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="pt-10">
      {/* WhatsApp */}
      <ButtonLayout
        shareLink={shareLinks.whatsapp}
        logo={<FaWhatsapp />}
        buttonText="Whatsapp"
      />
      <ButtonLayout
        shareLink={shareLinks.twitter}
        logo={<FaTwitter />}
        buttonText="Twitter"
      />
      <ButtonLayout
        shareLink={shareLinks.facebook}
        logo={<FaFacebookF />}
        buttonText="Facebook"
      />
      <ButtonLayout
        shareLink={shareLinks.email}
        logo={<FaEnvelope />}
        buttonText="Email"
      />
      <button
        onClick={copyToClipboard}
        className="border border-gray-400 block py-4 px-3 outline-0 w-full cursor-pointer"
      >
        <div className="flex justify-between items-center">
          <div className="text-black">Copy Link</div>
          <div>
            <FaLink className="text-black text-xl" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default ShareButtons;
