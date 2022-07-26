import React from 'react';
import {useState, useEffect} from "react"
import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBFooter } from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
// import { db } from "./firebase"
import useLocalStorage from "use-local-storage"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='mainmenu'>
        <button className='menubutton'>Button</button>
      </div>
    </div>
  );
}

export default App;
