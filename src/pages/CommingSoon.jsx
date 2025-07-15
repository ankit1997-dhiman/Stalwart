import { useEffect, useState } from "react";
import FooterDesktop from "../components/commigSoon/FooterDesktop.jsx";
import FooterMobile from "../components/commigSoon/FooterMobile.jsx";
import LogoWithText from "../components/commigSoon/LogoWithText.jsx";
import NewsletterForm from "../components/commigSoon/NewsletterForm.jsx";

const socials = [
  { name: "Instagram", url: "#" },
  { name: "Facebook", url: "#" },
];

const contactLinks = [
  { label: "Call Us", url: "#" },
  { label: "Email Us", url: "#" },
];

const CommingSoon = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[url('/assets/coming-soon.png')] md:bg-[url('/assets/coming.png')] bg-cover bg-center h-screen w-full relative px-7.5 md:px-15">
      <div className="container mx-auto h-full flex flex-col justify-between py-6">
        {/* Header */}
        <header className="lg:flex justify-items-stretch justify-between pt-6">
          <LogoWithText windowWidth={windowSize.width} />
          <NewsletterForm />
        </header>

        {/* Footers */}
        <FooterMobile socials={socials} contactLinks={contactLinks} />
        <FooterDesktop socials={socials} contactLinks={contactLinks} />
      </div>
    </div>
  );
};

export default CommingSoon;
