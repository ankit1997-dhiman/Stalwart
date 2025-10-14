import { Dropdown } from "antd";
import { useEffect, useState } from "react";
import Logo from "@/assets/icons/translateLogo.svg";

const GoogleTranslate = () => {
  const [language, setLanguage] = useState("en");
  useEffect(() => {
    loadGoogleTranslate();
  }, [language]);

  // utils/googleTranslate.js
  const loadGoogleTranslate = () => {
    // Avoid loading multiple times
    if (document.getElementById("google-translate-script")) return;

    // Load Google Translate script
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en", // default page language
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  };

  // Function to change language dynamically
  const handleLanguageChange = (lang) => {
    const select = document.querySelector("select.goog-te-combo");
    if (select) {
      select.value = lang;
      console.log(select.value);
      // Trigger translation
      select.dispatchEvent(new Event("change"));

      // For dynamic React content: trigger mutation observer to update translation
      const observer = new MutationObserver(() => {
        const gtFrame = document.querySelector("iframe.goog-te-menu-frame");
        if (gtFrame) {
          // Re-apply translation
          select.dispatchEvent(new Event("change"));
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }
  };

  const SubMenuLabel = ({ label }) => {
    return <div className="text-xs font-monument">{label}</div>;
  };
  const items = [
    {
      key: "en",
      label: <SubMenuLabel label="English" />,
      onClick: () => handleLanguageChange("en"),
    },
    {
      key: "zh-CN",
      label: <SubMenuLabel label="中文" />,
      onClick: () => handleLanguageChange("zh-CN"),
    },
    {
      key: "fr",
      label: <SubMenuLabel label="Français" />,
      onClick: () => handleLanguageChange("fr"),
    },
    {
      key: "it",
      label: <SubMenuLabel label="Italiano" />,
      onClick: () => handleLanguageChange("it"),
    },
    {
      key: "es",
      label: <SubMenuLabel label="Español" />,
      onClick: () => handleLanguageChange("es"),
    },
  ];

  return (
    <>
      <Dropdown menu={{ items }} placement="bottomRight" trigger={["click"]}>
        <li className="text-xs font-monument hover:underline cursor-pointer flex items-center">
          <img src={Logo} alt="Translate" className="w-6 h-6" />
        </li>
      </Dropdown>

      <div id="google_translate_element" style={{ display: "none" }}></div>
    </>
  );
};

export default GoogleTranslate;
