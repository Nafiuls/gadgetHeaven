import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function MainLayout() {
  return (
    <>
      <Toaster />
      {/* navbar */}
      <Navbar />
      {/* dynamic section */}
      <div className="min-h-screen ">
        <Outlet />
      </div>
      {/* footer */}
      <Footer />
    </>
  );
}

export default MainLayout;
