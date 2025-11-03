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
    <div className="relative z-20 bg-white">
      <Section1 />
      <OurPhilosophy />
      <section className="bg-[#4F4C45] py-[79px] xl:px-0 px-12.5">
        <RequestAnAppraisal lightMode={false} />
      </section>
      <div className="bg-white">
        <Section4 />
      </div>
      <div className="bg-white">
        <PropertiesTab />
      </div>
      <section className="pt-9.5 pb-28 bg-white">
        <CurrentProperties
          title="OUR CURRENT PROPERTIES"
          desc={
            "As Queensland’s dedicated seller-exclusive agency, we represent only property owners and landlords — protecting their interests with precision, discipline, and intent across residential, lifestyle, acreage, commercial, and development projects, including pre-sales and strategic marketing."
          }
          status="ACTIVE"
        />
      </section>
      <OurStory />
      <div className=" bg-[#F4F2F0]">
        <Section8 />
      </div>
      <div className="relative z-20 bg-white ">
        <InstagramPosts />
      </div>
    </div>
  );
};
