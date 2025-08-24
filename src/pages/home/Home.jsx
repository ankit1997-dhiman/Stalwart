import { Section1 } from "./components/Section1.jsx";
import OurPhilosophy from "./components/OurPhilosophy.jsx";
import RequestAnAppraisal from "./components/RequestAnAppraisal.jsx";
import { Section4 } from "./components/Section4.jsx";
import Section5 from "./components/section/Section5.jsx";
import Section6 from "./components/Section6.jsx";
import Section7 from "./components/Section7.jsx";
import Section8 from "./components/Section8.jsx";
import InstagramPosts from "./components/InstagramPosts.jsx";
import Footer from "@/components/footer/Footer.jsx";
export const Home = () => {
  return (
    <>
      <Section1 />
      <OurPhilosophy />
      <RequestAnAppraisal />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <InstagramPosts />
      <Footer/>
    </>
  );
};
