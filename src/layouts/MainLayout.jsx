import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* dynamic section */}
      <div className="min-h-[calc(100vh-285px)]"></div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default MainLayout;
