import AppLayout from "@/common/layout/AppLayout";
import { URLS } from "@/constants/Urls";
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
            {/* 🔹 Landing Pages with MainLayout */}
            <Route element={<AppLayout />}>
              <Route path={URLS.HOME} element={<Home />} />
              <Route path={URLS.ABOUT} element={<About />} />
              <Route path={URLS.CAREERS} element={<Careers />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            {/* 🔹 Dashboard Pages with DashboardLayout */}
            {/* <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
            </Route> */}
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
