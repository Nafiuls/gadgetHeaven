import React from "react";
import { Link, NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-md gap-5 text-center">
      {categories?.map((category) => (
        <Link
          className="bg-[#9538e2] hover:bg-[#614479] transition-allf rounded-full py-3 text-white"
          to={`/category/${category.category}`}
          key={category.category}
        >
          {category.category}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
