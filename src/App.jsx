import AppRouter from "./routes/AppRouter.jsx";
import { SmoothScrollProvider } from "./utils/SmoothScrollProvider.jsx";
import { Lenis as ReactLenis } from "lenis/react";

const App = () => {
  return (
    <>
    <ReactLenis root>
        <AppRouter />
    </ReactLenis>
      
    </>
  );
};

export default App;
