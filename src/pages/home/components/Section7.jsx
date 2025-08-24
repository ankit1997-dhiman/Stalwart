import React from "react";
import logo from "../../../assets/images/Stalwart_Logo.png"

const Section7 = () => {
  return (
    <section
      className="relative w-full h-[364px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://source.unsplash.com/random/1920x364?nature')`,
      }}
    >
      {/* Overlay (optional, for darker text visibility) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        {/* Icon (replace with your svg/image if needed) */}
        <div className="flex justify-center">
         <img src={logo} alt="logo"  />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-serif tracking-wide pt-10">Nostra Fabula</h2>

        {/* Subtitle */}
        <p className="text-sm mt-1 uppercase tracking-widest">Our Story</p>
      </div>
    </section>
  );
};

export default Section7;
