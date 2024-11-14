import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import Gadgets from "./Gadgets";

const ProductCards = () => {
  const data = useLoaderData();
  const [filter, setFilter] = useState(data);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      const filterData = [...data].filter(
        (product) => product.category === category
      );
      setFilter(filterData);
    } else {
      setFilter(data);
    }
  }, [category, data]);

  return (
    <div className="flex justify-between">
      <Gadgets />
      <div className="grid grid-cols-3">
        {filter.map((productData, id) => (
          <Card key={id} productData={productData}></Card>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
