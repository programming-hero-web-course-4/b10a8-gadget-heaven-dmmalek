import { useEffect, useState } from "react";
import { getStoredData, getWishListData } from "../utility/utility";
import Cart from "../components/Dashboard/Cart";
import WishList from "../components/Dashboard/WishList";

const Dashboard = () => {
  const [cart, setCata] = useState([]);
  const [wish, setWish] = useState([]);
  const [showCart, setShowCart] = useState(false);
  useEffect(() => {
    //cart data
    const getData = getStoredData();
    setCata(getData);
    //wish-list data
    const getWish = getWishListData();
    setWish(getWish);
  }, []);

  const handleCartClick = () => {
    setShowCart(true); // Show Cart Component
  };

  const handleWishClick = () => {
    setShowCart(false); // Show Wish Component
  };
  return (
    <>
      <div>
        <h1>Product Details</h1>
        <button className="btn btn-accent" onClick={handleCartClick}>
          Cart
        </button>
        <button className="btn btn-accent" onClick={handleWishClick}>
          Wish
        </button>
        {/* Conditionally render Cart or Wish component based on state */}
        {showCart ? (
          <div>
            {cart.map((product, id) => (
              <Cart key={id} cart={product}></Cart>
            ))}
          </div>
        ) : (
          <div>
            {wish.map((wishdata, i) => (
              <WishList key={i} wish={wishdata}></WishList>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
