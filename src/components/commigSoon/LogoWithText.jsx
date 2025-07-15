const LogoWithText = ({ windowWidth }) => {
  const isMobile = windowWidth <= 425;

  return (
    <>
      <img
        src={isMobile ? "/assets/mobile-logo.png" : "/assets/logo.png"}
        alt="Logo"
        className={isMobile ? "h-[17px] w-[30px]" : "h-[25px] w-[45px]"}
      />
      <img
        src={isMobile ? "/assets/white.png" : "/assets/white.png"}
        alt="Logo"
        className={isMobile ? "h-[17px] w-[171px]" : "h-[25px] w-[251px]"}
      />
    </>
  );
};

export default LogoWithText;
