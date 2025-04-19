import React from "react";

const Heading = ({ main = "", text = "" }) => {
  return (
    <div>
      <p className="text-center font-black my-8 text-4xl capitalize">{main}</p>
      <p className="text-center max-w-3xl font-semibold">{text}</p>
    </div>
  );
};

export default Heading;
