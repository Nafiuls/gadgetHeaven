import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaCartShopping, FaHeart } from "react-icons/fa6";

const Navbar = () => {
  const { pathname } = useLocation();
  const navlinks = [
    { name: "Home", path: "/" },
    { name: "Statistic", path: "/statistic" },
    { name: "Dashboard", path: "/dashboard" },
  ];
  return (
    <div className="navbar bg-transparent flex items-center  lg:px-8 lg:py-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content flex flex-col gap-5 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navlinks.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-yellow-400 font-bold" : ""}`
                }
                key={item.name}
                to={item.path}
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
        </div>
        <a
          className={`btn btn-ghost text-xl ${
            pathname == "/" ? "text-white" : ""
          }`}
        >
          GadgetMania
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex gap-10 font-semibold">
          {navlinks.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-yellow-400 font-bold" : ""}`
              }
              key={item.name}
              to={item.path}
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="navbar-end text-white flex items-center gap-2">
        <Link to={"/dashboard/cart"}>
          <button className="p-2 cursor-pointer rounded-full bg-black">
            <FaCartShopping size={20} />
          </button>
        </Link>
        <Link to={"/dashboard/wishlist"}>
          <button className="p-2 cursor-pointer rounded-full bg-black">
            <FaHeart size={20} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
