import React, { useEffect, useState } from "react";
import { getProducts } from "../utils";
import CartCard from "../components/CartCard";

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const products = getProducts();
    setProducts(products);
  }, []);

  const totalPrice = products.reduce((acc, cv) => acc + cv.price, 0);

  return (
    <div>
      <div className="flex items-center lg:flex-row flex-col justify-between">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="flex items-center lg:flex-row flex-col gap-5">
          <div>
            <h1 className="text-2xl font-bold capitalize">
              total cost : {totalPrice}
            </h1>
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-2">
            <button className=" hover:bg-[#9538e2] hover:text-white transition-all cursor-pointer font-semibold border-2 border-[#9538e2] text-[#9538e2] px-5 py-1 rounded-full">
              Sort By Price
            </button>
            <button className=" hover:bg-[#9538e2] hover:text-white transition-all cursor-pointer font-semibold border-2 border-[#9538e2] text-[#9538e2] px-5 py-1 rounded-full">
              Purchase
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col gap-3 my-12">
        {products.map((item) => (
          <CartCard key={item.product_id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
