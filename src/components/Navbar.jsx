import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinks = [
    { name: "Home", paht: "/" },
    { name: "Statistic", paht: "/statistic" },
    { name: "Dashboard", paht: "/dashboard" },
  ];
  return (
    <div className="h-[600px] rounded-4xl bg-purple-600 text-white mx-10 my-10 px-8 py-6">
      {/* navbar */}
      <div className="navbar bg-transparent">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">GadgetMania</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu flex gap-5 text-[16px] font-semibold menu-horizontal px-1">
            {navlinks.map((item) => (
              <NavLink key={item.name}>{item.name}</NavLink>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
