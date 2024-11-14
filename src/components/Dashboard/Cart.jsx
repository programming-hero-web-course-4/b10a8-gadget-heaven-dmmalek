import React from "react";

const Cart = ({ cart }) => {
  const { product_image, product_title, description, price } = cart;
  return (
    <div>
      <h1 className="text-2xl">Cart List</h1>
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

export default Cart;
