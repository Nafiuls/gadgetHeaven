import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const ProductCards = () => {
  const data = useLoaderData();
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (category) {
      const filtered = [...data].filter(
        (product) => product.category === category
      );
      setProducts(filtered);
    } else {
      setProducts(data);
    }
  }, [category, data]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {products.map((product) => (
        <Card key={product.product_id} product={product} />
      ))}
    </div>
  );
};

export default ProductCards;
