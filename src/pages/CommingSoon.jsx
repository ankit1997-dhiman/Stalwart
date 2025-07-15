import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FooterDesktop from "../components/commigSoon/FooterDesktop.jsx";
import FooterMobile from "../components/commigSoon/FooterMobile.jsx";
import LogoWithText from "../components/commigSoon/LogoWithText.jsx";

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
        <header>
          <div className="flex  justify-between pt-6">
            <LogoWithText windowWidth={windowSize.width} />
          </div>
          {windowSize.width < "1024" && (
            <div className="flex gap-2 justify-between pt-16">
              {contactLinks.map(({ label, url }) => (
                <Link
                  key={label}
                  to={url}
                  className="w-full text-white text-center font-moderat text-[10px] md:text-xs font-medium border border-white px-6 py-2 transition-colors duration-1300 hover:bg-white hover:text-black"
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </header>

        {/* Footers */}
        <FooterMobile socials={socials} contactLinks={contactLinks} />
        <FooterDesktop socials={socials} contactLinks={contactLinks} />
      </div>
    </div>
  );
};

export default CommingSoon;
