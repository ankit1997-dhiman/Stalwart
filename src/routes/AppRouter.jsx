import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CommingSoon from "../pages/CommingSoon";

const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/" element={<CommingSoon />} />
        <Route path="*" element={<Navigate to="/comming-soon" />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
