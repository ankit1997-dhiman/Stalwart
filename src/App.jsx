import AppRouter from "./routes/AppRouter.jsx";
import { ReactLenis, useLenis } from 'lenis/react'

const App = () => {
   const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })
  return (
    <>
      <ReactLenis root />
      <AppRouter />
    </>
  );
};

export default App;
