import React from 'react'
import { useState } from 'react'
import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import Navbar from './Components/Navbar'
import Spec2 from './Components/Spec2.jsx'
import Checkout from './Components/Checkout'

function App() {
const count = useSelector((state)=> state.count)
const dispatch = useDispatch();


  return (
    <div className="App">
      <Navbar/>
      <Spec2/>
      <Checkout/>
    </div>
  );
}

export default App
