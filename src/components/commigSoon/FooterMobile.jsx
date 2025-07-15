import { Link } from "react-router-dom";

const FooterMobile = ({ socials, contactLinks }) => (
  <footer className="lg:hidden">
    <div className="flex gap-2 justify-between mb-8">
      {socials.map(({ name, url }) => (
        <a
          key={name}
          href={url}
          className="text-white font-moderat text-[10px] md:text-xs font-medium border border-white px-6 py-2 w-full text-center"
        >
          {name}
        </a>
      ))}
    </div>

    <div className="flex justify-between items-center mb-4">
      <p className="text-white font-monument text-[10px] font-normal w-1/3">
        STALWART <br /> 2025
      </p>

      <div className="flex flex-col w-1/3">
        {contactLinks.map(({ label, url }) => (
          <Link
            key={label}
            to={url}
            className="text-white font-moderat text-xs font-medium"
          >
            {label}
          </Link>
        ))}
      </div>

      <p className="text-white font-moderat text-xs font-medium w-1/3 text-left">
        Design by <br /> Studio Corelands
      </p>
    </div>
  </footer>
);

export default FooterMobile;
