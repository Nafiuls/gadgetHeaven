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
  if (isExist) return alert("already exist");
  console.log(cart);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
};

// remove product from local storage

export { addCart, getProducts };
