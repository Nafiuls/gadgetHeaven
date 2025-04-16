import React from "react";

const Card = ({ product }) => {
  const { product_image } = product || {};

  return (
    <div>
      {" "}
      <div className="p-3 card bg-base-100  shadow-sm">
        <figure>
          <img
            className="rounded-sm size-[150px] object-center object-cover"
            src={product_image}
            alt="Shoes"
          />
        </figure>
      </div>
    </div>
  );
};

export default Card;
