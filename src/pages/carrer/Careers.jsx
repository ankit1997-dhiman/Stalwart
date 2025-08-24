import React from "react";
import CareerForm from "./components/CareerForm";
import Footer from "@/components/footer/Footer";
import bgImage from "../../assets/images/bg-image.png";

const Careers = () => {
  return (
    <>
      <section
        className="h-screen flex items-center justify-center bg-cover bg-center px-12.5 md:px-0"
        style={{
          backgroundImage: `url(${bgImage})`, // use imported image
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <img src="/src/assets/images/Stalwart_Logo.png" alt="logo" />
            </div>
            <div className="text-white uppercase">Careers</div>
          </div>
        </div>
      </section>

      <CareerForm />
      <Footer />
    </>
  );
};

export default Careers;
