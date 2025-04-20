import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ProductCards from "../components/ProductCards";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import About from "../pages/About";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <ProductCards />,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/category/:category",
            element: <ProductCards />,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/statistic",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "cart", // ✅ relative path
            element: <Cart />,
          },
          {
            path: "wishlist", // ✅ relative path
            element: <Wishlist />,
          },
        ],
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default routes;
