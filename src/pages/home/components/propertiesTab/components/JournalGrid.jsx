import React from "react";
import JournalCard from "./JournalCard";
import image from "../../../../../assets/images/image-10.png";

const cards = [
  {
    image: image,
    title: "JOURNAL",
    description:
      "Mauris in est sed nibh tempor feugiat. Lorem ipsum dolor sit amet.",
  },
  {
    image: image,
    title: "JOURNAL",
    description:
      "Mauris in est sed nibh tempor feugiat. Lorem ipsum dolor sit amet.",
  },
  {
    image: image,
    title: "JOURNAL",
    description:
      "Mauris in est sed nibh tempor feugiat. Lorem ipsum dolor sit amet.",
  },
];

const JournalGrid = () => {
  return (
    <div className="md:py-7 py-6">
      <div className="flex md:flex-row flex-col gap-6 overflow-x-auto">
        {cards.map((card, idx) => (
          <JournalCard key={idx} {...card} />
        ))}
      </div>
    </div>
  );
};

export default JournalGrid;
