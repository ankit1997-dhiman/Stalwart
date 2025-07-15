const LogoWithText = ({ windowWidth }) => {
  const isMobile = windowWidth <= 425;

  return (
    <div className="lg:block flex justify-between pb-18 lg:pb-0">
      <img
        src={isMobile ? "/assets/mobile-logo.png" : "/assets/logo.png"}
        alt="Logo"
        className={isMobile ? "h-[17px] w-[30px]" : "h-[25px] w-[45px]"}
      />
      {isMobile && (
        <p className="text-white text-xs font-moderat text-right mt-2">
          SIGN UP TO OUR NEWSLETTER FOR UPDATES:
        </p>
      )}
    </div>
  );
};

export default LogoWithText;
