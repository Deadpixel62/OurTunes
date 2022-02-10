import React from 'react'
import { useState } from 'react'
import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import Navbar from './Components/Navbar'
import Spec2 from './Components/Spec2.jsx'
import Checkout from './Components/Checkout'
import { Routes, Route, Link } from "react-router-dom";

function App() {
const count = useSelector((state)=> state.count)
const dispatch = useDispatch();


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Spec2 />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App
