import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "../actions";
import { Link } from "react-router-dom";

function ProcessedCheckout() {
    const name = useSelector((state) => state.name);
    const dispatch = useDispatch();


  return (
    <div>
      <h2>Thank you for your purchase, {name} .</h2>
      <Link onClick={()=> dispatch(setName(""))} className="homeBtn" to="/">
        Home
      </Link>
    </div>
  );
}

export default ProcessedCheckout;
