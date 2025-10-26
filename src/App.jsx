import AppRouter from "./routes/AppRouter.jsx";
// import { ReactLenis, useLenis } from "lenis/react";
import SmoothScroll from "./utils/SmoothScrollProvider.jsx";

const App = () => {
  // const lenis = useLenis((lenis) => {
  //   // called every scroll
  //   console.log(lenis);
  // });
  return (
    <>
      {/* <ReactLenis root> */}
      {/* <SmoothScroll /> */}
      <AppRouter />
      {/* </SmoothScroll> */}
      {/* </ReactLenis> */}
    </>
  );
};

export default App;
