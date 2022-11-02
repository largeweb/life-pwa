import React from 'react';
import {useState, useEffect} from "react"
import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
// import Footer from "./components/Footer"
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBFooter } from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
// import { db } from "./firebase"
// import useLocalStorage from "use-local-storage"
import useLocalStorage from "react-use-localstorage"
import fs from 'fs'

function App() {

  const [userInput, setUserInput] = useLocalStorage('userInput', 'empty')

  return (
    <div className="App">
      <Navbar />
      <div>
        <div className='mainmenu'>
          <input
            type="text"
            placeholder="Enter your message!"
            value={userInput}
            className='inputfield'
            onChange={(e) => setUserInput(e.target.value)} />
          {/* <div>{userInput}</div> */}
        </div>
      </div>
      <div>
        <div className='mainmenu'>
          <div>{userInput}</div>
          <Link to={'/play'}><button className='menubutton'>Play Area</button></Link>
          <Link to={'/exercise'}><button className='menubutton'>Exercise</button></Link>
          <Link to={'/add'}><button className='menubutton'>Add Something</button></Link>
          {userInput === "life"
          ? <Link to={'/view'}><button className='menubutton'>View Life</button></Link>
          : <div />
          }
        </div>
      </div>
      {/* <div className='footer'><Footer /></div> */}
    </div>
  );
}

export default App;
