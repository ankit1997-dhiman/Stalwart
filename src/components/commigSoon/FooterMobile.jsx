const FooterMobile = ({ socials, contactLinks }) => (
  <footer className="lg:hidden">
    <div className="flex gap-2 justify-between mb-8">
      {socials.map(({ name, url }) => (
        <a
          key={name}
          href={url}
          className="text-white font-moderat text-[10px] md:text-xs font-medium border border-white px-6 py-2 w-full text-center transition-colors duration-900 hover:bg-white hover:text-black"
        >
          {name}
        </a>
      ))}
    </div>

    <div className="flex justify-between items-center mb-4">
      <p className="text-white font-monument text-[10px] font-normal">
        STALWART <br /> 2025
      </p>

      <p className="text-white font-moderat text-xs font-medium  text-left">
        Design by <br /> Studio Corelands
      </p>
    </div>
  </footer>
);

export default FooterMobile;
