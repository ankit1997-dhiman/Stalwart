import { useState } from "react";
import { FooterIcon } from "./assets/icons/FooterIcon.jsx";
import HeroIntro from "./components/HeroIntro.jsx";
import AppRouter from "./routes/AppRouter.jsx";
import { IntroLogo } from "./assets/icons/IntroLogo.jsx";
// import { ReactLenis, useLenis } from "lenis/react";

const App = () => {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {/* <ReactLenis root> */}
      {/* <SmoothScroll /> */}
      {!introDone && (
        <HeroIntro
          logo={<IntroLogo />}
          title="PORTA AD DOMUM" // change to your brand
          // subtitle="Architecture & Interiors" // change as you need
          // onDone={() => setIntroDone(false)}
        />
      )}
      <AppRouter />
      {/* </SmoothScroll> */}
      {/* </ReactLenis> */}
    </>
  );
};

export default App;
