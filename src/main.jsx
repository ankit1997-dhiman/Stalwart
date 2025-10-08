import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "antd/dist/reset.css"; // AntD v5 reset
import "./index.css"; // Tailwind
import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyleProvider layer>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </StyleProvider>
  </StrictMode>
);
