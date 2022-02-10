import React from 'react'
import { useState } from 'react'
import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import Navbar from './Components/Navbar'
import Spec2 from './Components/Spec2.jsx'

function App() {
const count = useSelector((state)=> state.count)
const dispatch = useDispatch();


  return (
    <div className="App">
      <Navbar/>
      <Spec2/>
    </div>
  );
}

export default App
