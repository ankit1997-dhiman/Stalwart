import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const content = document.documentElement; // or a wrapper div
    const speed = 0.08;

    let current = 0;
    let target = 0;

    function smoothScroll() {
      target = window.scrollY;
      current += (target - current) * speed;
      content.style.transform = `translateY(${-current}px)`;
      requestAnimationFrame(smoothScroll);
    }

    // Prevent native scroll
    content.style.position = "fixed";
    content.style.top = 0;
    content.style.left = 0;
    content.style.width = "100%";

    smoothScroll();
  }, []);

  return null;
}
