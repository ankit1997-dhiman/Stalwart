import AppLayout from "@/common/layout/AppLayout";
import { PageWrapper } from "@/common/pageWrapper/PageWrapper";
import ThankyouPage from "@/common/ThankyouPage";
import ScrollToTop from "@/components/scroll/ScrollToTop";
import { URLS } from "@/constants/Urls";
import { About } from "@/pages/about/About.jsx";
import { Buy } from "@/pages/buy/Buy";
import { Careers } from "@/pages/carrer/Careers";
import { ComingSoon } from "@/pages/CommingSoon.jsx";
import { Contact } from "@/pages/contact/Contact";
import { Home } from "@/pages/home/Home.jsx";
import { Lease } from "@/pages/lease/Lease";
import { LeasedProperties } from "@/pages/lease/LeasedProperties";
import { LetterOfOffers } from "@/pages/letters/LetterOfOffers";
import { NotFound } from "@/pages/NotFound.jsx";
import { PrivacyPolicy } from "@/pages/privacyPolicy/PrivacyPolicy";
import { PropertyDetails } from "@/pages/property/PropertyDetails";
import { SearchResult } from "@/pages/search/SearchResult";
import SellWithStalwart from "@/pages/sellWithStalwart/SellWithStalwart";
import { SoldProperties } from "@/pages/soldProperties/SoldProperties";
import SwitchToStalwart from "@/pages/switchToStalwart/SwitchToStalwart";
import { Term } from "@/pages/terms/Term";
import UpcomingAuction from "@/pages/upcomingAuction/UpcomingAuction";
import UpcomingInspections from "@/pages/upcomingInspection/UpcomingInspections";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const IS_MAINTENANCE = false; // Toggle this flag

export default function AppRouter() {
  // Show only the maintenance page
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageWrapper>
        <Routes>
          {IS_MAINTENANCE ? (
            <Route path="/" element={<ComingSoon />} />
          ) : (
            <>
              <Route element={<AppLayout />}>
                <Route path={URLS.HOME} element={<Home />} />
                <Route path={URLS.ABOUT} element={<About />} />
                <Route path={URLS.CAREERS} element={<Careers />} />
                <Route path={URLS.CONTACT_US} element={<Contact />} />
                <Route path={URLS.BUY} element={<Buy />} />
                <Route path={URLS.SEARCH_RESULT} element={<SearchResult />} />
                <Route
                  path={URLS.LETTER_OF_OFFER}
                  element={<LetterOfOffers />}
                />
                <Route path={URLS.PRIVACY_POLICY} element={<PrivacyPolicy />} />
                <Route path={URLS.TERM_AND_CONDITION} element={<Term />} />

                <Route
                  path={URLS.SWITCH_TO_STALWART}
                  element={<SwitchToStalwart />}
                />
                <Route
                  path={URLS.SOLD_PROPERTIES}
                  element={<SoldProperties />}
                />
                <Route
                  path={URLS.UPCOMING_AUCTIONS}
                  element={<UpcomingAuction />}
                />
                <Route
                  path={URLS.UPCOMING_INSPECTIONS}
                  element={<UpcomingInspections />}
                />
                <Route
                  path={URLS.LEASE_PROPERTIES}
                  element={<LeasedProperties />}
                />
                <Route path={URLS.THANK_YOU} element={<ThankyouPage />} />
                <Route path={URLS.LEASE} element={<Lease />} />
                <Route
                  path={URLS.SELL_WITH_STALWART}
                  element={<SellWithStalwart />}
                />
                <Route path={URLS.PROPERTY} element={<PropertyDetails />} />

                <Route path="*" element={<NotFound />} />
              </Route>
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageWrapper>
    </BrowserRouter>
  );
}
