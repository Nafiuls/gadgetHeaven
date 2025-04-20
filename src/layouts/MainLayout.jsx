import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function MainLayout() {
  const { pathname } = useLocation();
  return (
    <>
      <Toaster />
      {/* navbar */}
      <div>{pathname !== "/" && <Navbar />}</div>
      {/* dynamic section */}
      <div className="min-h-screen lg:p-0 p-3 ">
        <Outlet />
      </div>
      {/* footer */}
      <Footer />
    </>
  );
}

export default MainLayout;
