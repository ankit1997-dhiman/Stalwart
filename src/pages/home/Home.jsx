import { Section1 } from "./components/Section1.jsx";
import OurPhilosophy from "./components/OurPhilosophy.jsx";
import RequestAnAppraisal from "./components/RequestAnAppraisal.jsx";
import { Section4 } from "./components/Section4.jsx";
import PropertiesTab from "./components/propertiesTab/PropertiesTab.jsx";
import OurStory from "./components/OurStory.jsx";
import Section8 from "./components/Section8.jsx";
import InstagramPosts from "./components/InstagramPosts.jsx";
import { CurrentProperties } from "./components/CurrentProperties";
export const Home = () => {
  return (
    <>
      <Section1 />
      <OurPhilosophy />

      <section className="bg-[#4F4C45] py-[79px] xl:px-0 px-12.5">
        <RequestAnAppraisal  lightMode={false}/>
      </section>

      <Section4 />
      <PropertiesTab />
      <section className="pt-9.5 pb-28">
      <CurrentProperties title="OUR CURRENT PROPERTIES" />
      </section>
      <OurStory />
      <Section8 />
      <InstagramPosts />
    </>
  );
};
