import { useLenis } from "lenis/react";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const LenisAnimatedLink = ({
  to,
  children,
  iconPosition,
  iconImage,
  className = "",
  offset = 0,
  scale = 1,
  lerp = 0.2,
}) => {
  const linkRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const progress = useRef(0);
  const lenis = useLenis();
  const frameRef = useRef(null);

  useEffect(() => {
    if (!lenis) return;

    const update = () => {
      const target = hovered ? 1 : 0;
      progress.current += (target - progress.current) * lerp;

      const y = -progress.current * offset;
      const s = 1 + (scale - 1) * progress.current;

      if (linkRef.current) {
        linkRef.current.style.transform = `translateY(${y}px) scale(${s})`;
      }

      // Continue the loop only if not fully at target
      if (Math.abs(progress.current - target) > 0.001) {
        frameRef.current = requestAnimationFrame(update);
      } else {
        progress.current = target; // snap exactly to target
        frameRef.current = null;
      }
    };

    frameRef.current = requestAnimationFrame(update);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [hovered, lenis, offset, scale, lerp]);

  return (
    <Link
      ref={linkRef}
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex items-center  cursor-pointer will-change-transform ${className}`}
    >
      {children} {iconPosition === "right" && <img src={iconImage} className="pl-5" />}
    </Link>
  );
};
 