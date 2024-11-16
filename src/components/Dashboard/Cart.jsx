import React from "react";

const Cart = ({ cart }) => {
  const { product_image, product_title, description, price } = cart;
  return (
    <div>
      <div>
        <img src={product_image} alt={product_title} />
      </div>
      <div>
        <h1>{product_title}</h1>
        <p>{description}</p>
        <p>{price}</p>
        <button className="btn btn-accent">Remove</button>
      </div>
    </div>
  );
};

export default Cart;
