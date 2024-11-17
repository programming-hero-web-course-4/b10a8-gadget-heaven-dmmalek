import { useNavigate } from "react-router-dom";

export default function ShortAndPur({
  handleSort,
  totalCost,
  setTotalCost,
  cart,
}) {
  const navigate = useNavigate();
  const handlePurchase = () => {
    localStorage.removeItem("cart");
    setTotalCost(0);
  };
  const handleRedirect = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1>Cart</h1>
        </div>
        <div>
          <h1>Total Cost :{totalCost} </h1>
        </div>
        {/* short by price button  */}
        <div>
          <button onClick={handleSort} className="btn btn-ghost">
            Short By Price
          </button>
        </div>
        {/* Purchase button */}
        <div>
          <button
            className="btn"
            onClick={() => {
              document.getElementById("my_modal_5").showModal();
              handlePurchase();
            }}
            disabled={cart.length === 0 || totalCost === 0}
          >
            Purchase
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                {cart.reduce((accu, item) => accu + item.price, 0)}
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button onClick={handleRedirect} className="btn">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
}
