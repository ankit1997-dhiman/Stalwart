import { About } from "@/pages/about/About.jsx";
import Careers from "@/pages/carrer/Careers";
import { ComingSoon } from "@/pages/CommingSoon.jsx";
import { Home } from "@/pages/home/Home.jsx";
import { NotFound } from "@/pages/NotFound.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const IS_MAINTENANCE = false; // Toggle this flag

export default function AppRouter() {
  // Show only the maintenance page
  return (
    <BrowserRouter>
      <Routes>
        {IS_MAINTENANCE ? (
          <Route path="/" element={<ComingSoon />} />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="*" element={<NotFound />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
