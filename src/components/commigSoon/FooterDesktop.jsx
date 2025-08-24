import { Link } from "react-router-dom";

const FooterDesktop = ({ socials, contactLinks }) => (
  <footer className="hidden lg:flex justify-between items-end">
    <div className="w-1/3">
      <p className="text-white font-monument text-xs font-normal mb-1">
        STALWART 2025
      </p>
      <p className="text-white font-moderat text-xs font-medium">
        <a href="https://corelands.com.au/">Design by Studio Corelands</a>
      </p>
    </div>

    <div className="w-1/3 text-center">
      {contactLinks.map(({ label, url }) => (
        <p key={label}>
          <a
            href={url}
            className="text-white font-moderat text-xs font-medium"
            target="_blank"
          >
            {label}
          </a>
        </p>
      ))}
    </div>

    <div className="w-1/3 hidden md:flex gap-5 justify-end">
      {socials.map(({ name, url }) => (
        <p key={name}>
          <Link
            to={url}
            className="text-white font-moderat text-xs font-medium border border-white px-6 py-2 transition-colors duration-1300 hover:bg-white hover:text-black"
          >
            {name}
          </Link>
        </p>
      ))}
    </div>
  </footer>
);

export default FooterDesktop;
