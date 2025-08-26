import React from "react";
import image from "../../../assets/images/Team.png";
import { CgArrowLongRight } from "react-icons/cg";
const teamMembers = [
  { id: 1, name: "John Doe", image: "/images/member1.jpg" },
  { id: 2, name: "Jane Smith", image: "/images/member2.jpg" },
  { id: 3, name: "Alex Johnson", image: "/images/member3.jpg" },
  { id: 4, name: "Emily Brown", image: "/images/member4.jpg" },
  { id: 5, name: "Chris White", image: "/images/member5.jpg" },
  { id: 6, name: "Sophia Davis", image: "/images/member6.jpg" },
];

export default function MeetOurTeam() {
  return (
    <section className="bg-[#706C62] py-30 px-12.5 xl:px-0">
      <div className="container flex flex-col xl:flex-row gap-12 items-start">
        {/* Left Section */}
        <div className="xl:w-1/3 flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-4 uppercase text-white font-moderat-medium">
            Meet Our Team
          </h2>
          <p className="text-white mb-6 font-moderat-regular">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <a className="inline-flex items-center text-white  transition py-14.5 md:py-0 font-moderat-bold uppercase text-sm">
            Learn More{" "}
            <span className="pl-3">
              <CgArrowLongRight className="text-xl " />
            </span>
          </a>
        </div>

        {/* Right Section - Team Grid */}
        <div className="xl:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="relative overflow-hidden">
              <img
                src={image}
                alt={member.name}
                className="w-full h-[312px] object-cover grayscale hover:grayscale-0 transition"
              />
              <span className="absolute bottom-4 right-4 text-white text-sm uppercase">
                {member.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
