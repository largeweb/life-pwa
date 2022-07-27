import React from 'react';
import {useState, useEffect} from "react"
import logo from '../logo.svg';
import '../App.css';

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
// import Footer from "./components/Footer"
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBFooter } from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
// import { db } from "./firebase"
// import useLocalStorage from "use-local-storage"
import useLocalStorage from "react-use-localstorage"

function Exercise() {

  const [userInput, setUserInput] = useLocalStorage('userInput', 'empty')

  // 💪💪💪 EXERCISES 💪💪💪
  const [pushups, setPushups] = useLocalStorage('pushupcount',0)
  const [pullups, setPullups] = useLocalStorage('pullupcount',0)
  const [locked, setLocked] = useLocalStorage('lockedbool',false)

  return (
    <div className="App">
      <Navbar />
      <div className='mainmenu'>
        <h1>EXERCISE PAGE</h1>
        <Link to={'/'}><button className='menubutton'>Back Home</button></Link>
        <div>{userInput}</div>
        {pushups > 0
          ? <div>magical button</div>
          : <div>less magical button</div>
        }
        <div>{pushups}</div>
        <hr></hr>
        <div><div onClick={(e) => setLocked(false)}>add pushups</div></div>
      </div>
      <Footer />
    </div>
  );
}

export default Exercise;
