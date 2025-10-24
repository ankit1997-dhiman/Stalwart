import { useLenis } from "lenis/react";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const LenisAnimatedLink = ({
  to,
  children,
  iconPosition = "right",
  iconImage,
  className = "",
  offset = 0, // link vertical offset
  scale = 1, // link scale effect
  lerp = 0.2, // easing
  iconOffset = 20, // icon move distance (px)
}) => {
  const linkRef = useRef(null);
  const iconRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const linkProgress = useRef(0);
  const iconProgress = useRef(0);
  const lenis = useLenis();
  const frameRef = useRef(null);

  useEffect(() => {
    // if (!lenis) return;

    const update = () => {
      const target = hovered ? 1 : 0;
      linkProgress.current += (target - linkProgress.current) * lerp;
      iconProgress.current += (target - iconProgress.current) * lerp;

      // link animation (translate + scale)
      const y = -linkProgress.current * offset;
      const s = 1 + (scale - 1) * linkProgress.current;

      if (linkRef.current) {
        linkRef.current.style.transform = `translateY(${y}px) scale(${s})`;
      }

      // icon animation (slide left→right)
      if (iconRef.current) {
        const x = iconProgress.current * iconOffset;
        iconRef.current.style.transform = `translateX(${x}px)`;
      }

      if (Math.abs(linkProgress.current - target) > 0.001) {
        frameRef.current = requestAnimationFrame(update);
      } else {
        frameRef.current = null;
      }
    };

    frameRef.current = requestAnimationFrame(update);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [hovered, lenis, offset, scale, lerp, iconOffset]);

  return (
    <Link
      ref={linkRef}
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex items-center cursor-pointer will-change-transform ${className}`}
    >
      {children}
      {iconPosition === "right" && (
        <img
          ref={iconRef}
          src={iconImage}
          alt=""
          className="pl-3 will-change-transform"
        />
      )}
    </Link>
  );
};
