import React from "react";

const CartCard = ({ item, handleRemove }) => {
  const { product_id, product_title, description, price, product_image } = item;

  return (
    <div class="bg-white rounded-md shadow-md p-4 ">
      <div class="flex items-center justify-between">
        <div class="flex lg:flex-row flex-col items-center space-x-4">
          <div class="lg:w-40 w-full bg-gray-200 rounded-md">
            <img
              className="h-full w-full"
              src={product_image}
              alt=""
              srcset=""
            />
          </div>
          <div>
            <h3 class="text-lg font-semibold text-gray-800">{product_title}</h3>
            <p class="text-sm text-gray-500">{description}</p>
            <p class="text-md font-medium text-gray-900">Price: $ {price}</p>
          </div>
        </div>
        <button
          onClick={() => handleRemove(product_id)}
          class="text-red-500 hover:text-red-700 cursor-pointer focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartCard;
