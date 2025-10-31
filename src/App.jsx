import { useState } from "react";
import HeroIntro from "./components/HeroIntro.jsx";
import AppRouter from "./routes/AppRouter.jsx";
import { IntroLogo } from "./assets/icons/IntroLogo.jsx";
import "antd/dist/reset.css"; // ✅ Always load this first
import "./index.css"; // Tailwind / custom styles
import { ThemeProvider } from "./context/ThemeContext.jsx";

const App = () => {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {/* {!introDone && (
        <HeroIntro
          logo={<IntroLogo />}
          title="PORTA AD DOMUM" // change to your brand
          // subtitle="Architecture & Interiors" // change as you need
          // onDone={() => setIntroDone(false)}
        />
      )} */}
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </>
  );
};

export default App;
