import React from "react";

const WishList = ({ wish }) => {
  const { product_image, product_title, description, price } = wish;
  return (
    <div>
      <h1 className="text-2xl font-bold">Wish List</h1>
      <div>
        <img src={product_image} alt={product_title} />
      </div>
      <div>
        <h1>{product_title}</h1>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default WishList;
