import React, { useState } from "react";

export default function ShortAndPur({ handleSort }) {
  return (
    <>
      <div className="flex items-center">
        <div>
          <h1>Cart</h1>
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
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            open modal
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
}
