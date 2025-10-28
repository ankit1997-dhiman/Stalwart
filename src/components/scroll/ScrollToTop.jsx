import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Always scroll to top when the route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // or "smooth" if you prefer
    });
  }, [pathname]);

  // Also scroll to top on initial page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
