import React from "react";
import FeaturedSection from "./propertiesTab/components/FeaturedSection.jsx";
import JournalGrid from "./propertiesTab/components/JournalGrid.jsx";

const Section8 = () => {
  return (
    <section className="bg-white">
      <div className="container py-34 lg:py-36 px-12.5 xl:px-0 ">
        <FeaturedSection />
        <JournalGrid />
      </div>
    </section>
  );
};

export default Section8;
