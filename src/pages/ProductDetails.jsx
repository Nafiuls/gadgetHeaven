import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RatingDisplay from "../components/RatingDisplay";
import { addCart, addWishlist, getProducts } from "../utils";

const ProductDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [product, setProduct] = useState({});
  const [isCart, setIsCart] = useState(false);
  useEffect(() => {
    const singleProduct = data.find((product) => product.product_id === id);
    setProduct(singleProduct);
    const cartItems = getProducts();
    const isExist = cartItems.find(
      (item) => item.product_id === singleProduct.product_id
    );
    if (isExist) {
      setIsCart(true);
    }
  }, [data, id]);
  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = product || {};
  // handle add to cart function
  const handleAddToCart = (product) => {
    addCart(product);
    setIsCart(true);
  };
  // handle add to wishlist fnc
  const handleAddToWishlist = (product) => {
    addWishlist(product);
  };
  return (
    <div className="min-h-screen relative">
      <div className="h-[300px] bg-[#9538e2]">
        <div className="text-center text-white pt-5 space-y-3">
          <h1 className="text-3xl font-bold">Product Details</h1>
          <p className="max-w-2xl mx-auto font-semibold">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      {/* DETAILS CARD  */}
      <div className="max-w-4xl mx-auto relative top-[-150px] bg-white shadow-md rounded-2xl p-4 flex lg:flex-row flex-col gap-6 border border-gray-200">
        {/* Image Placeholder */}
        <div className="w-full lg:w-1/3 bg-gray-200 rounded-xl aspect-square">
          <img className="w-full h-full" src={product_image} alt="" />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-between w-2/3">
          {/* Product Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {product_title}
            </h2>
            <p className="text-lg font-semibold text-gray-700 mt-1">
              Price: <span className="text-black">{price}</span>
            </p>
            {availability ? (
              <span className="inline-block mt-2 text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full">
                In Stock
              </span>
            ) : (
              <span className="inline-block mt-2 text-xs font-medium text-red-700 bg-red-100 px-2 py-1 rounded-full">
                Out of Stock
              </span>
            )}
            <p className="mt-3 text-gray-600">{description}</p>

            {/* Specification */}
            <div className="mt-4">
              <p className="font-semibold text-sm text-gray-800">
                Specification:
              </p>
              <ul className="list-decimal list-inside text-sm text-gray-700 mt-1 space-y-1">
                {specification?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Rating */}
            <div className="mt-3">
              <RatingDisplay rating={rating} />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex items-center gap-3">
            {/* add to cart button*/}
            <button
              disabled={isCart}
              onClick={() => handleAddToCart(product)}
              className="btn btn-primary text-white cursor-pointer px-4 py-2 text-sm rounded-lg flex items-center gap-2 hover:bg-purple-700"
            >
              Add To Cart
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16 6a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V6zm-2 0v10H6V6h8zM8 8a1 1 0 000 2h4a1 1 0 100-2H8z" />
              </svg>
            </button>
            {/* wishlist button */}
            <button
              onClick={() => handleAddToWishlist(product)}
              className="text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364 4.318 13.682a4.5 4.5 0 010-6.364z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
