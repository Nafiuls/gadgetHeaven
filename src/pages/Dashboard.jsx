import React from "react";
import Heading from "../components/Heading";
import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>GadgetMania | Dashboard</title>
      </Helmet>
      {/* dashboard banner content */}
      <div className="h-[300px] flex items-center flex-col justify-center bg-[#9538e2] text-white">
        <Heading
          main="dashboard"
          text="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        />
        <div className="my-6 flex gap-5 ">
          <NavLink to={"cart"}>
            <button className="text-white font-semibold border-2 border-white px-10 rounded-full py-1 hover:bg-white hover:text-black cursor-pointer transition-all ">
              Cart
            </button>
          </NavLink>
          <NavLink to={"wishlist"}>
            <button className="text-white font-semibold border-2 border-white px-10 rounded-full py-1 hover:bg-white hover:text-black cursor-pointer transition-all ">
              Wishlist
            </button>
          </NavLink>
        </div>
      </div>
      {/* outlet */}
      <div className="my-12 px-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
