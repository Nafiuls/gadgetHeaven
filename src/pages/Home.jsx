import React from "react";
import "../index.css";
const Home = () => {
  return (
    <div>
      <div className="bg-[#9538e2] rounded-2xl py-20 relative">
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
          <button className="py-3 px-6 font-semibold cursor-pointer hover:bg-transparent hover:border-[2px] transition-all hover:text-white rounded-full bg-white text-purple-600">
            Shop Now!
          </button>
        </div>
        {/* image container */}
        <div className="p-3 absolute left-0 right-0 py-3 backdrop-blur-lg rounded-md top-[400px] border border-white w-[80%] mx-auto">
          <div className="bg-img"></div>
        </div>
      </div>
      {/* others content */}
    </div>
  );
};

export default Home;
