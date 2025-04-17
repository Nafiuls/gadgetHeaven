import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-md gap-5 text-center">
      {categories?.map((category) => (
        <NavLink
          className={({ isActive }) =>
            `bg-[#9538e2] hover:bg-[#614479] transition-allf rounded-full py-3 text-white ${
              isActive ? "bg-gray-400" : ""
            }`
          }
          to={`/category/${category.category}`}
          key={category.category}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
