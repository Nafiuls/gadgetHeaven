import React, { useEffect, useState } from "react";
import { clearCart, getProducts, removeCart } from "../utils";
import CartCard from "../components/CartCard";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const products = getProducts();
    setProducts(products);
  }, []);

  const handleRemove = (id) => {
    removeCart(id);
    const products = getProducts();
    setProducts(products);
  };

  const handleSort = () => {
    const sorted = [...products].sort((a, b) => b.price - a.price);
    setProducts(sorted);
  };
  const totalPrice = products.reduce((acc, cv) => acc + cv.price, 0);

  const handlePurchase = () => {
    Swal.fire({
      title: "Congratulation",
      text: `Your total purchase amount is : ${totalPrice}`,
      icon: "success",
      confirmButtonText: "Close",
      confirmButtonColor: "#9538e2",
      willClose: () => {
        clearCart();
        setProducts([]);
        navigate("/");
      },
    });
  };

  const isCartEmpty = products.length === 0;

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
            <button
              onClick={() => handleSort()}
              className=" hover:bg-[#9538e2] hover:text-white transition-all cursor-pointer font-semibold border-2 border-[#9538e2] text-[#9538e2] px-5 py-1 rounded-full"
            >
              Sort By Price
            </button>
            <button
              disabled={isCartEmpty}
              onClick={handlePurchase}
              className=" btn btn-primary hover:text-white transition-all cursor-pointer font-semibold border-2  text-white px-5 py-1 rounded-full"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col gap-3 my-12">
        {products.map((item) => (
          <CartCard
            handleRemove={handleRemove}
            key={item.product_id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
