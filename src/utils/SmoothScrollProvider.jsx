// SmoothScrollProvider.jsx
import { useEffect } from "react";
import Lenis from "lenis";

export const SmoothScrollProvider = ({ children }) => {
  useEffect(() => {
    // ✅ initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // keep it around 1–1.5 for natural feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false, // turn off unless needed (touch can feel laggy)
      lerp: 0.1, // smoothing intensity
    });

    // ✅ create RAF loop
    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // ✅ cleanup on unmount
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
