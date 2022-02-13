import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CheckoutSet, setName, deleteFromCart } from "../actions";
import { DeleteOutlined } from "@ant-design/icons";
import {Link } from "react-router-dom";


function Checkout() {
    const cart = useSelector((state) => state.cart);
    const totalPrice = useSelector((state) => state.price);
    const dispatch = useDispatch();
    const navigate = useNavigate();



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
              alignItems: "center",
              gap: "25px",
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
                      width: "30vw",
                    }}
                  >
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={item.artworkUrl100}
                    />
                    <span>{item.name}</span>
                  </span>
                  <span style={{ width: "15vw", marginRight: "10vw" }}>
                    {item.artistName}
                  </span>
                  <span>{item.price} DZD</span>

                  <DeleteOutlined
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(deleteFromCart(item));
                    }}
                    style={{
                      color: "red",
                      fontSize: "18px",
                      marginLeft: "6vw",
                    }}
                  />
                </li>
              );
            })}
          </ul>
          Total price: {totalPrice}$<p>Number of items :{cart.length}</p>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "2vh" }}
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Checkout confirmed");
              dispatch(CheckoutSet());
              navigate("/transactionCompleted");
            }}
          >
            <input
              className="formInput"
              type="text"
              onChange={(e) => dispatch(setName(e.target.value))}
              placeholder="Name"
              required
            />

            <input
              required
              className="formInput"
              type="text"
              placeholder="Address"
            />
            <button className="formBtn" type="submit">
              {" "}
              Confirm checkout{" "}
            </button>
          </form>
        </div>
      ) : (
        <p>
          Your cart is empty... <br />
          <Link to="/">Home</Link>
        </p>
      )}
    </div>
  );
}

export default Checkout