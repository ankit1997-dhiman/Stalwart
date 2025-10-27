// // HeroIntro.jsx
// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// // import "./HeroIntro.css"; // styles below

// /**
//  * Props:
//  *  - onDone: function called when intro finishes or is skipped
//  *  - logoSvg: optional React node or SVG string to animate
//  *  - title: main text
//  *  - subtitle: optional
//  *  - duration: total intro duration fallback (ms)
//  */
// export default function HeroIntro({
//   onDone = () => {},
//   logoSvg = null,
//   title = "Your Brand",
//   subtitle = "Welcome",
//   duration = 28000,
// }) {
//   const containerRef = useRef(null);
//   const bgRef = useRef(null);
//   const titleRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const logoPathRef = useRef(null);
//   const tlRef = useRef(null);
//   const [skipped, setSkipped] = useState(false);

//   useEffect(() => {
//     // Respect user preference for reduced motion
//     const prefersReduced =
//       window.matchMedia &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//     if (prefersReduced) {
//       // Immediately finish
//       onDone();
//       return;
//     }

//     // Build timeline
//     const tl = gsap.timeline({
//       defaults: { ease: "power3.out" },
//       onComplete: () => {
//         // short delay to allow final fade then call onDone
//         setTimeout(() => {
//           onDone();
//         }, 120);
//       },
//     });
//     tlRef.current = tl;

//     // Background: fade in + slight scale (parallax feel)
//     tl.fromTo(
//       bgRef.current,
//       { autoAlpha: 0, scale: 1.6 },
//       { autoAlpha: 1, scale: 1, duration: 1.4 }
//     );

//     // If there's an SVG path to animate (logo), draw it
//     if (logoPathRef.current) {
//       const path = logoPathRef.current;
//       const length = path.getTotalLength ? path.getTotalLength() : 300;
//       // ensure strokeDasharray applied
//       gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
//       tl.to(path, { strokeDashoffset: 0, duration: 1.1 }, "-=0.6");
//       tl.to(path, { autoAlpha: 1, duration: 0.2 }, "-=0.6");
//     }

//     // Title / subtitle animation
//     tl.fromTo(
//       titleRef.current,
//       { y: 30, autoAlpha: 0 },
//       { y: 0, autoAlpha: 1, duration: 0.8 },
//       "-=0.6"
//     );
//     tl.fromTo(
//       subtitleRef.current,
//       { y: 20, autoAlpha: 0 },
//       { y: 0, autoAlpha: 1, duration: 0.6 },
//       "-=0.4"
//     );

//     // Hold briefly, then fade out the intro container
//     tl.to(containerRef.current, {
//       autoAlpha: 0,
//       pointerEvents: "none",
//       duration: 0.6,
//       delay: 0.4,
//     });

//     // Safety fallback: if library hung, ensure it completes
//     const fallback = setTimeout(() => {
//       if (!tl.isActive()) return;
//       tl.progress(1);
//     }, Math.max(duration + 2000, 5000));

//     return () => {
//       clearTimeout(fallback);
//       if (tl) tl.kill();
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const handleSkip = () => {
//     setSkipped(true);
//     // Kill timeline and instantly hide intro
//     if (tlRef.current) tlRef.current.kill();
//     // quick fade out
//     gsap.to(containerRef.current, {
//       autoAlpha: 0,
//       duration: 0.2,
//       onComplete: () => onDone(),
//     });
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="hero-intro"
//       aria-hidden={skipped ? "true" : "false"}
//       role="presentation"
//     >
//       <div className="hero-bg" ref={bgRef} />
//       <div className="hero-content">
//         {/* Example SVG logo: if you want to animate, provide an <svg><path ... ref={logoPathRef}></path></svg> as logoSvg prop */}
//         {logoSvg ? (
//           <div className="hero-logo" aria-hidden="true">
//             {/* If the user passed an SVG, try to attach ref to its path */}
//             {React.cloneElement(logoSvg, {
//               // attempt to find a path inside and attach ref via ref callback
//               ref: (el) => {
//                 // try to find path element to animate
//                 try {
//                   const path =
//                     el && (el.querySelector ? el.querySelector("path") : null);
//                   if (path) logoPathRef.current = path;
//                 } catch (e) {}
//               },
//             })}
//           </div>
//         ) : null}

//         <h1 ref={titleRef} className="hero-title">
//           {title}
//         </h1>
//         {subtitle ? (
//           <p ref={subtitleRef} className="hero-subtitle">
//             {subtitle}
//           </p>
//         ) : null}
//       </div>

//       <button
//         className="hero-skip"
//         onClick={handleSkip}
//         aria-label="Skip intro"
//       >
//         Skip
//       </button>
//     </div>
//   );
// }

// -------------------------------------------------------------------------------------------------------------------
// HeroIntro.jsx
// HeroIntro.jsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "@/css/HeroIntro.css"; // styles below

/**
 * Props:
 *  - onDone: function called when intro finishes or is skipped
 *  - logoSvg: optional React node or SVG string to animate
 *  - title: main text
 *  - subtitle: optional
 *  - duration: total intro duration fallback (ms)
 */
export default function HeroIntro({ logo, onComplete }) {
  const containerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    // Fade + scale in
    tl.fromTo(
      logoRef.current,
      { scale: 0.8, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 1 }
    );

    // Hold for a moment
    tl.to({}, { duration: 0.8 });

    // Zoom out + fade
    tl.to(logoRef.current, {
      scale: 5,
      autoAlpha: 0,
      duration: 1.2,
      ease: "power4.inOut",
    });

    // Fade out container (transparent)
    tl.to(containerRef.current, {
      autoAlpha: 0,
      pointerEvents: "none",
      duration: 1.5,
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="intro-container">
      <div ref={logoRef} className="intro-logo">
        {logo}
      </div>
    </div>
  );
}
