import "../index.css";
import { Outlet, useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
const Home = () => {
  const categories = useLoaderData();

  return (
    <div className="lg:px-20 my-5">
      <div className="bg-[#9538e2] rounded-2xl py-5 relative ">
        <div>
          <Navbar />
        </div>
        {/* content container */}
        <div className="text-center px-20 gap-8  text-white  flex flex-col items-center justify-center h-full">
          <h1 className="max-w-3xl leading-[60px] text-5xl font-bold capitalize">
            upgrade your tech accessorise with gadget mania accessorise
          </h1>
          <p className="font-semibold text-xl ">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices <br /> to the coolest accessories, we
            have it all!
          </p>
          <button className="mb-20 py-3 px-6 font-semibold cursor-pointer hover:bg-transparent hover:border-[2px] transition-all hover:text-white rounded-full bg-white text-purple-600">
            Shop Now!
          </button>
        </div>
        {/* image container */}
        <div className="p-10 left-0 bg-img absolute h-[300px] right-0 lg:top-[430px] py-3 backdrop-blur-lg rounded-md border border-white w-[80%] mx-auto"></div>
      </div>
      {/* others content */}
      <div className="my-[300px]">
        <Heading main="explore cutting-edge gadgets" />
        <div className="flex lg:flex-row flex-col gap-10 justify-center ">
          <div className="lg:w-[20%] w-full">
            <Categories categories={categories} />
          </div>
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
