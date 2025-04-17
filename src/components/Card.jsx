import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { product_id, product_image, product_title, price } = product || {};

  return (
    <div>
      {" "}
      <div className="p-3 card bg-base-100  shadow-sm">
        <figure className="w-full">
          <img
            className="rounded-sm size-[150px] object-center object-cover"
            src={product_image}
            alt="Shoes"
          />
        </figure>
        <div className="space-y-3 mt-4">
          <h1 className="text-2xl font-bold">{product_title}</h1>
          <h1 className="text-xl text-gray-600">Price: {price}</h1>
          <Link to={`/product/${product_id}`}>
            {" "}
            <button
              className="border border-[#9538e2] rounded-full text-[#9538e2] font-semibold py-2 px-5 cursor-pointer
          hover:bg-[#9538e2] hover:text-white hover:border-none transition-all "
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
