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
import {Helmet} from "react-helmet";

function App() {

  const [userInput, setUserInput] = useLocalStorage('userInput', 'empty')

  return (
    <div className="App" id="maindiv">
      <Helmet>
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover, width=device-width"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
      </Helmet>
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
          {userInput === "life" && <Link to={'/view'}><button className='menubutton'>View Life</button></Link> }
          {userInput === "life" && <Link to={'/managetodo'}><button className='menubutton'>Manage Todo</button></Link> }
          {userInput === "life" && <Link to={'/add'}><button className='menubutton'>Add Something</button></Link> }
          <Link to={'/generate'}><button className='menubutton'>Generate</button></Link>
          <Link to={'/play'}><button className='menubutton'>Play Area</button></Link>
          <Link to={'/exercise'}><button className='menubutton'>Exercise</button></Link>
          <Link to={'/changewallpaper'}><button className='menubutton'>Change Wallpaper</button></Link>
        </div>
      </div>
      {/* <div className='footer'><Footer /></div> */}
    </div>
  );
}

export default App;
