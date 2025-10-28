import { Grid, Modal } from "antd";
import TeamPopup from "./TeamPopup";
import React, { useState } from "react";
import nehaImage from "@/assets/images/neha.jpg";
import jagroopImage from "@/assets/images/jagroop.jpg";
import sandeepImage from "@/assets/images/sandeep.jpg";
import dineshImage from "@/assets/images/dinesh.jpg";

const { useBreakpoint } = Grid;

const teamMembers = [
  {
    id: 1,
    name: "DINESH SANGROHA",
    image: dineshImage,
    in: "Step In — with clarity.",
    out: "Step Out — with results.",
    position: "PRINCIPAL | LREA",
    desc: "With over 13 years of experience and multiple industry awards, Dinesh has built a real estate career defined by absolute candour, precision, and results. As the Principal of Stalwart Real Estate — Queensland’s dedicated seller-exclusive agency — he partners with property owners to design strategies that elevate homes, estates, and projects to the right buyers and the best outcomes. Under his leadership, Stalwart Real Estate stands for clarity, discipline, and integrity. Every campaign is crafted to create competition and deliver maximum value - supported by clear advice, strategic marketing, and negotiation designed to protect the owner’s interests above all else. Whether representing a suburban residence, lifestyle acreage, or large-scale development, Dinesh’s approach is grounded in transparency, structure, and measurable results — ensuring confidence from listing through to settlement.",
  },
  {
    id: 2,
    name: "SANDEEP KUMAR",
    image: sandeepImage,
    in: "Step In — to commitment.",
    out: "Step Out — with confidence.",
    position: "SALES EXECUTIVE  | LREA",
    desc: "Sandeep is known for his genuine nature, grounded approach, and unwavering dedication to his clients. With a deep understanding of local communities and a strong network built on trust, he consistently delivers results that reflect both integrity and intent. At Stalwart Real Estate, Sandeep’s focus is always on the seller — ensuring every campaign is guided by clear communication, attention to detail, and a work ethic that goes beyond expectations. His calm, thoughtful style and commitment to doing things the right way make him a trusted choice for property owners seeking confidence in every step of their sale. Driven by purpose and built on authenticity, Sandeep’s strength lies in his ability to connect — with people, with properties, and with outcomes that matter. Every interaction reflects the values Stalwart stands for: respect, performance, and trust.",
  },
  {
    id: 3,
    name: "JAGROOP SINGH",
    image: jagroopImage,
    in: "Step In — to trust.",
    out: "Step Out — with results.",
    position: "SALES EXECUTIVE  | LREA",
    desc: "Raman is a people-first professional who blends authenticity, energy, and results in equal measure. Fluent in multiple languages and deeply connected within the community, he builds meaningful relationships that extend beyond the transaction — earning trust through clarity, communication, and care. At Stalwart Real Estate, Raman represents the modern agent — family-oriented, disciplined, and committed to elevating the seller experience at every stage. His focus is unwavering: to raise the standard of service through transparency, precision, and follow-through that defines the Stalwart way. With a strong record of successful sales and an unshakable work ethic, Raman approaches every listing as a new opportunity to deliver above expectation — for clients, families, and the community he proudly serves.",
  },

  {
    id: 4,
    name: "NEHA SANGWAN",
    image: nehaImage,
    in: "Step In — to effortless leasing.",
    out: "Step Out — with peace of mind.",
    position: "LEASING EXECUTIVE ",
    desc: "Dedicated to property management, Neha is committed to delivering the highest level of service to both landlords and tenants. Her strong background in customer service, coupled with exceptional communication skills, enables her to handle every situation with professionalism and care. Known for her problem-solving ability and willingness to go the extra mile, Neha builds lasting relationships and ensures her clients always feel supported. At Stalwart Real Estate, she plays an essential role in maintaining the agency’s standard of clarity, consistency, and trust — values that define every leasing experience. With Neha, every property is managed with precision and every client is treated like family.",
  },
];

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
            Meet Our Team
          </p>
          <p className="text-white font-moderat-regular pt-10 lg:text-base">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Right Section - Team Grid */}
        <div className="xl:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {teamMembers.map((member) => (
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
        <TeamPopup
          image={member.image}
          name={member.name}
          desc={member.desc}
          inTitle={member.in}
          outTitle={member.out}
          position={member.position}
        />
      </Modal>
    </section>
  );
}
