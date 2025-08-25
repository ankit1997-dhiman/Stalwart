import React from "react";
import Footer from "@/components/footer/Footer";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />

      <main className="">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default AppLayout;
