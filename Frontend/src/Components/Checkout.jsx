import React from "react";
import "./navbar.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CheckoutSet, setName } from "../actions";

function Checkout() {
    const cart = useSelector((state) => state.cart);
    const totalPrice = useSelector((state) => state.price);
    const dispatch = useDispatch();



  return (
    <div>
      {cart.length > 0 ? (
        <div>
          {" "}
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "flex-start",
            }}
          >
            {cart.map((item) => {
              return (
                <li
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      gap: "15px",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={item.artworkUrl100}
                    />
                    <span>{item.name} -</span>
                  </span>
                  - {item.artistName}
                  {item.price}DZD
                </li>
              );
            })}
          </ul>
          Total price: {totalPrice}$<p>Number of items :{cart.length}</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Checkout confirmed")
            }}
          >
            <input
              type="text"
              onChange={(e) => dispatch(setName(e.target.value))}
              placeholder="Name"
            />
            <input type="text" placeholder="Address" />
            <button type="submit"> Confirm checkout </button>
          </form>
          <button onClick={() => dispatch(CheckoutSet())}>Checkout</button>
        </div>
      ) : (
        <p>Your Cart is empty..</p>
      )}
    </div>
  );
}

export default Checkout