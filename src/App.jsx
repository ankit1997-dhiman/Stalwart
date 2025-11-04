import { useState } from "react";
import AppRouter from "./routes/AppRouter.jsx";
import "antd/dist/reset.css"; // ✅ Always load this first
import "./index.css"; // Tailwind / custom styles
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { HeaderLogo } from "./assets/icons/HeaderLogo.jsx";

const App = () => {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {/* {!introDone && (
        <HeroIntro
          logo={<HeaderLogo />}
          title="PORTA AD DOMUM" // change to your brand
          // subtitle="Architecture & Interiors" // change as you need
          onDone={() => setIntroDone(false)}
        />
      )} */}
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </>
  );
};

export default App;
