import React from "react";
import { useParams } from "react-router-dom";

const ProductCards = () => {
  const { category } = useParams();

  return <div>product cards....</div>;
};

export default ProductCards;
