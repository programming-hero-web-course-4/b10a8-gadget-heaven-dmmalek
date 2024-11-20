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
  const [totalCost, setTotalCost] = useState(0);
  const [active, setActive] = useState("cart");
  useEffect(() => {
    //cart data
    const getData = getStoredData();
    setCart(getData);
    //wish-list data
    const getWish = getWishListData();
    setWish(getWish);
  }, []);

  useEffect(() => {
    // Calculate total cost whenever cart is updated
    const total = cart.reduce((accu, item) => accu + item.price, 0);
    setTotalCost(total.toFixed(2));
  }, [cart]);
  const handleSort = () => {
    const sorted = [...cart].sort((a, b) => b.price - a.price);
    setCart(sorted);
  };

  const handleCartClick = () => {
    setShowCart(true); // Show Cart Component
    setActive("cart");
  };

  const handleWishClick = () => {
    setShowCart(false); // Show Wish Component
    setActive("wish");
  };
  return (
    <>
      <div>
        <div className="bg-customPurple space-y-10 py-4">
          <div className="max-w-2xl mx-auto space-y-5">
            <h1 className="text-white text-3xl font-bold text-center ">
              Dashboard
            </h1>
            <p className="text-white text-base text-center">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
          <div className="text-center ">
            <button
              className={`btn  text-lg font-medium border border-white rounded-3xl px-8 ${
                active === "cart"
                  ? "bg-white text-customPurple"
                  : "bg-transparent text-white"
              }`}
              onClick={handleCartClick}
            >
              Cart
            </button>
            <button
              className={`btn ml-4 text-lg font-medium border border-white rounded-3xl px-8 ${
                active === "wish"
                  ? "bg-white text-customPurple"
                  : "bg-transparent text-white"
              }`}
              onClick={handleWishClick}
            >
              Wishlist
            </button>
          </div>
        </div>

        <div>
          <ShortAndPur
            active={active}
            handleSort={handleSort}
            totalCost={totalCost}
            cart={cart}
            setTotalCost={setTotalCost}
          ></ShortAndPur>
        </div>
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
