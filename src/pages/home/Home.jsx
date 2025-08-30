import { Section1 } from "./components/Section1.jsx";
import OurPhilosophy from "./components/OurPhilosophy.jsx";
import RequestAnAppraisal from "./components/RequestAnAppraisal.jsx";
import { Section4 } from "./components/Section4.jsx";
import PropertiesTab from "./components/propertiesTab/PropertiesTab.jsx";
import OurStory from "./components/OurStory.jsx";
import Section8 from "./components/Section8.jsx";
import InstagramPosts from "./components/InstagramPosts.jsx";
import CurrentProperties from "./components/CurrentProperties.jsx";
export const Home = () => {
  return (
    <>
      <Section1 />
      <OurPhilosophy />
      <RequestAnAppraisal />
      <Section4 />
      <PropertiesTab />
      <CurrentProperties />
      <OurStory />
      <Section8 />
      <InstagramPosts />
    </>
  );
};
