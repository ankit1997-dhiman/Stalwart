import { Grid, Modal } from "antd";
import TeamPopup from "./TeamPopup";
import React, { useState } from "react";
import image from "../../../assets/images/Team.png";
import ButtonWithIcon from "@/common/Button/ButtonWithIcon";
import { Link } from "react-router-dom";
import IconImage from "@/assets/icons/arrow-right.png";
import nehaImage from "@/assets/images/neha.jpg";
import jagroopImage from "@/assets/images/jagroop.jpg";
import sandeepImage from "@/assets/images/sandeep.jpg";
import dineshImage from "@/assets/images/dinesh.jpg";

const { useBreakpoint } = Grid;

const teamMembers = [
  { id: 1, name: "NEHA SANGWAN", image: nehaImage },
  { id: 2, name: "JAGROOP SINGH", image: jagroopImage },
  { id: 3, name: "SANDEEP KUMAR", image: sandeepImage },
  { id: 4, name: "DINESH SANGROHA", image: dineshImage },
];

console.log(teamMembers[0].image);

export default function MeetOurTeam() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [member, setMember] = useState({});
  console.log(member);

  const screens = useBreakpoint();

  let modalWidth = 1200;

  // responsive widths
  if (screens.xs) modalWidth = 300;
  if (screens.sm) modalWidth = 400;
  if (screens.md) modalWidth = 600;
  if (screens.lg) modalWidth = 900;
  if (screens.xl) modalWidth = 1200;

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
            Meet Our Team
          </p>
          <p className="text-white font-moderat-regular pt-10 lg:text-base">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <Link to="#">
            <ButtonWithIcon
              text=" Learn More"
              iconPosition="right"
              iconImage={IconImage}
              className="border-none bg-none !text-white font-bold font-moderat pt-15 text-sm"
            />
          </Link>
        </div>

        {/* Right Section - Team Grid */}
        <div className="xl:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative overflow-hidden"
              onClick={() => showModal(member)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full  object-cover grayscale hover:grayscale-0 transition"
              />
              <span className="absolute bottom-4 right-4 text-white text-sm uppercase">
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
        width={modalWidth}
        style={{ padding: 0 }}
      >
        <TeamPopup image={member.image} name={member.name} />
      </Modal>
    </section>
  );
}
