import toast from "react-hot-toast";

// get all products from local storage
const getProducts = () => {
  const all = localStorage.getItem("cart");
  if (all) {
    const products = JSON.parse(all);
    return products;
  } else {
    return [];
  }
};

// add a product to local storage

const addCart = (product) => {
  const cart = getProducts();
  const isExist = cart.find((item) => item.product_id === product.product_id);
  if (isExist) return toast.error("Already added to cart");
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  toast.success("Successfully added");
};

// remove product from local storage
const removeCart = (id) => {
  const cart = getProducts();
  const remaining = cart.filter((item) => item.product_id != id);
  localStorage.setItem("cart", JSON.stringify(remaining));
  toast.success("Successfully removed");
};

// get wihslist
const getWishlist = () => {
  const all = localStorage.getItem("wishlist");
  if (all) {
    const wihslist = JSON.parse(all);
    return wihslist;
  } else {
    return [];
  }
};

// add to wishlist

const addWishlist = (product) => {
  const wihslist = getWishlist();
  const isExist = wihslist.find(
    (item) => item.product_id === product.product_id
  );
  if (isExist) return toast.error("Already added to wishlist");
  wihslist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wihslist));
  toast.success("Successfully added");
};

// remove from wishlist
export { addCart, getProducts, addWishlist, removeCart };
