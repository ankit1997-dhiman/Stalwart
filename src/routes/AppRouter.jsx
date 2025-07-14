import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import CommingSoon from "../pages/CommingSoon";
import { Home } from "../pages/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/comming-soon" element={<CommingSoon />} />

        {/* ...repeat for all pages */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
