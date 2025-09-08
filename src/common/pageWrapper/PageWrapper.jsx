import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Preloader } from "../preloader/Preloader";

export function PageWrapper({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader whenever route changes
    setLoading(true);

    const handleLoad = () => {
      // Add a little delay for smoother effect
      setTimeout(() => setLoading(false), 500);
    };

    // If images + background need to load fully
    window.addEventListener("load", handleLoad);

    // Fallback: hide loader after 1s even if no heavy assets
    const timeout = setTimeout(handleLoad, 1000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, [location.pathname]); // 👈 triggers on route change

  return (
    <>
      {loading && <Preloader />}
      <div
        className={`${
          loading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-700`}
      >
        {children}
      </div>
    </>
  );
}

// export default function App() {
//   return (
//     <BrowserRouter>
//       <PageWrapper>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </PageWrapper>
//     </BrowserRouter>
//   );
// }
