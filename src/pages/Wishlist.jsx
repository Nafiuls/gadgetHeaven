import React, { useEffect, useState } from "react";
import { getWishlist, removeWishlist } from "../utils";
import WishlistCard from "../components/WishlistCard";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const allWihslist = getWishlist();
    setWishlist(allWihslist);
  }, []);
  const handleRemove = (id) => {
    removeWishlist(id);
    const allWihslist = getWishlist();
    setWishlist(allWihslist);
  };
  return (
    <div>
      <div className="flex items-center lg:flex-row flex-col justify-between">
        <h1 className="text-2xl font-bold">Wishlist</h1>
      </div>
      <div>
        {wishlist.map((item) => (
          <WishlistCard handleRemove={handleRemove} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
