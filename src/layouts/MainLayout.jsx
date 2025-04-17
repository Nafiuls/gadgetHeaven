import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* dynamic section */}
      <div className="min-h-screen">
        <Outlet />
      </div>
      {/* footer */}
      <Footer />
    </>
  );
}

export default MainLayout;
