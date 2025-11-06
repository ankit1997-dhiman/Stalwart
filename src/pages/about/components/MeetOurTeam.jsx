import React, { useState } from "react";
import { Grid, Modal } from "antd";
import TeamPopup from "./TeamPopup";
import { aboutPageContent } from "@/constants/about/aboutPageContent";

const { useBreakpoint } = Grid;

export default function MeetOurTeam() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [member, setMember] = useState({});

  const screens = useBreakpoint();

  let modalWidth = 1200;

  // responsive widths
  if (screens.xs) modalWidth = 400;
  if (screens.sm) modalWidth = 400;
  if (screens.md) modalWidth = 600;
  if (screens.lg) modalWidth = 900;
  if (screens.xl) modalWidth = 1400;

  const showModal = (teamMember) => {
    setMember(teamMember);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-[#706C62] py-30 px-12.5 xl:px-0">
      <div className="container flex flex-col xl:flex-row gap-12 items-start custom-modal">
        {/* Left Section */}
        <div className="xl:w-1/3 flex flex-col justify-center">
          <p className="text-xl lg:text-2xl font-semibold uppercase text-white font-moderat-medium">
            {aboutPageContent.MEET_OUR_TEAM_TITLE}
          </p>
          {aboutPageContent.MEET_OUR_TEAM_PARA.map((text, i) => (
            <p
              className="text-white font-moderat-regular pt-10 lg:text-base"
              key={i}
            >
              {text}
            </p>
          ))}
        </div>

        {/* Right Section - Team Grid */}
        <div className="xl:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {aboutPageContent.teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative overflow-hidden cursor-pointer"
              onClick={() => showModal(member)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full  object-cover grayscale hover:grayscale-0 transition"
              />
              <span className="absolute bottom-4 right-4 text-white text-sm uppercase font-moderat-medium">
                {member.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Modal
        className="!p-0 custom-modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        width={{
          xs: "100%",
          sm: "400px",
          md: "600px",
          lg: "1200px",
          xl: "1200px",
          xxl: "1200px",
        }}
        style={{ padding: 0 }}
      >
        <TeamPopup member={member} />
      </Modal>
    </section>
  );
}
