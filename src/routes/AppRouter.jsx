import AppLayout from "@/common/layout/AppLayout";
import { URLS } from "@/constants/Urls";
import { About } from "@/pages/about/About.jsx";
import Buy from "@/pages/buy/Buy";
import Careers from "@/pages/carrer/Careers";
import { ComingSoon } from "@/pages/CommingSoon.jsx";
import Contact from "@/pages/contact/Contact";
import { Home } from "@/pages/home/Home.jsx";
import Lease from "@/pages/lease/Lease";
import { NotFound } from "@/pages/NotFound.jsx";
import Sell from "@/pages/sell/Sell";
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
              <Route path={URLS.CONTACT_US} element={<Contact />} />
              <Route path={URLS.BUY} element={<Buy />} />
              <Route path={URLS.SELL} element={<Sell />} />
              <Route path={URLS.LEASE} element={<Lease />} />
              {/* <Route path={URLS.BUY} element={<UpcomingAuction />} /> */}
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
