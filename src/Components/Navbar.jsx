import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "antd";
import imgSearch from "./images/icons8-search-60.png";
import imgLogo from "./images/icons8-itunes-50.png";
import imgCart from "./images/icons8-shopping-cart-50.png";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInputValue, getCart } from "../actions";
import { Link } from "react-router-dom";

function Navbar() {
  const inputValue = useSelector((state) => state.inputValue);
  const cartNum = useSelector((state) => state.cart.length);
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.price);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      dispatch(getCart());
    }
  }, []);

  const navigate = useNavigate();

  const deleteInput = () => {
    console.log(inputValue);
    dispatch(setInputValue(""));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setInputValue(""));
  };

  return (
    <>
      <nav>
        <Link to="/">
          <img src={imgLogo} />
        </Link>

        <form onSubmit={handleSubmit}>
          <input
            className="inputField"
            onChange={(e) => {
              dispatch(setInputValue(e.target.value.toLowerCase()));
            }}
            value={inputValue}
            type="text"
            placeholder="Search songs.."
          />

          <button className="search" type="submit">
            <img src={imgSearch} />
          </button>
        </form>
        <button onClick={deleteInput} className="deleteInput">
          X
        </button>
        <button onClick={() => setVisible(true)} className="cart">
          {" "}
          <img src={imgCart} />
          {cartNum > 0 ? (
            <span
              style={{
                backgroundColor: "#FF5C8D",
                padding: "0 4px",
                borderRadius: "16px",
              }}
            >
              {cartNum}
            </span>
          ) : (
            ""
          )}
        </button>
      </nav>

      <Modal
        title="Your cart"
        centered
        visible={visible}
        onOk={() => {
          setVisible(false);
          navigate("/Checkout");
          dispatch(setInputValue(""));
        }}
        onCancel={() => setVisible(false)}
        width={1000}
      >
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
                    width: "30vw",
                  }}
                >
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={item.artworkUrl100}
                  />
                  <span>{item.name}</span>
                </span>
                <span style={{ width: "15vw" }}>{item.artistName}</span>
                <span>{item.price} DZD</span>
              </li>
            );
          })}
        </ul>
        <p style={{ marginLeft: "800px" }}>Total price: {totalPrice} DZD</p>
      </Modal>
    </>
  );
}

export default Navbar;
