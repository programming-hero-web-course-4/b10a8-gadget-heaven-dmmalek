import { useEffect, useState } from "react";
import { getStoredData, getWishListData } from "../utility/utility";
import Cart from "../components/Dashboard/Cart";
import WishList from "../components/Dashboard/WishList";
import ShortAndPur from "../components/Dashboard/ShortAndPur";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | Gadget Heaven";
  }, []);
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  const [showCart, setShowCart] = useState(true);
  useEffect(() => {
    //cart data
    const getData = getStoredData();
    setCart(getData);

    //wish-list data
    const getWish = getWishListData();
    setWish(getWish);
  }, []);

  const handleSort = () => {
    const sorted = [...cart].sort((a, b) => b.price - a.price);
    console.log(sorted);
    setCart(sorted);
  };

  const handleCartClick = () => {
    setShowCart(true); // Show Cart Component
  };

  const handleWishClick = () => {
    setShowCart(false); // Show Wish Component
  };
  return (
    <>
      <div>
        <div>
          <h1>Product Details</h1>
          <button className="btn btn-accent" onClick={handleCartClick}>
            Cart
          </button>
          <button className="btn btn-accent" onClick={handleWishClick}>
            Wish
          </button>
        </div>

        <div>
          <ShortAndPur handleSort={handleSort}></ShortAndPur>
        </div>
        {/* Conditionally render Cart or Wish component based on state */}
        {showCart ? (
          <div>
            <h1 className="text-2xl">Cart List</h1>
            {cart.map((product, id) => (
              <Cart key={id} cart={product}></Cart>
            ))}
          </div>
        ) : (
          <div>
            <h1 className="text-4xl">WishList</h1>
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
