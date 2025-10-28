import { useState, useEffect } from "react";

const useResponsiveMargin = (desktopMargin = 189, mobileMargin = 0) => {
  const [topMargin, setTopMargin] = useState(desktopMargin);

  useEffect(() => {
    const updateMargin = () => {
      if (window.innerWidth < 768) {
        setTopMargin(mobileMargin);
      } else {
        setTopMargin(desktopMargin);
      }
    };

    updateMargin();
    window.addEventListener("resize", updateMargin);
    return () => window.removeEventListener("resize", updateMargin);
  }, [desktopMargin, mobileMargin]);

  return topMargin;
};

export default useResponsiveMargin;
