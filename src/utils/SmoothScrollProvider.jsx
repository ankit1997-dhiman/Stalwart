import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;
    const ease = 0.5;

    function smoothScroll() {
      currentScroll += (targetScroll - currentScroll) * ease;
      window.scrollTo(0, currentScroll);
      requestAnimationFrame(smoothScroll);
    }

    function handleScroll() {
      targetScroll = window.scrollY;
    }

    window.addEventListener("scroll", handleScroll);
    requestAnimationFrame(smoothScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
