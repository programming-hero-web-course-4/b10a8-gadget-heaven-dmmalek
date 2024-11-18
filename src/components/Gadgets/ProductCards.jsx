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
    <>
      <div className="my-16">
        <div className="my-16">
          <h1 className="text-center text-4xl font-bold">
            Explore Cutting-Edge Gadgets
          </h1>
        </div>
        <div className="lg:flex lg:justify-between mx-auto max-w-6xl gap-4">
          <Gadgets />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 grow">
            {filter.map((productData, id) => (
              <Card key={id} productData={productData}></Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCards;
