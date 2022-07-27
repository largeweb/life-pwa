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
  const [locked, setLocked] = useLocalStorage('lockedbool',true)

  return (
    <div className="App">
      <Navbar />
      <div className='mainmenu'>
        <h1>EXERCISE 💪</h1>
        <Link to={'/'}><button className='menubutton'>Back Home</button></Link>
        <div>{userInput}</div>
        {pushups > 0
          ? <div style={{border:"5px solid gray", background:"cyan"}} value={pushups} onClick={(e) => setPushups(parseInt(pushups)-parseInt(10))}>PUSHUPS ✖️ [ -10 ] ✖️ {pushups}</div>
          : <div />
        }
        {pullups > 0
          ? <div style={{border:"5px solid gray", background:"cyan"}} value={pullups} onClick={(e) => setPullups(parseInt(pullups)-parseInt(5))}>PULLUPS ✖️ [ -5 ] ✖️ {pullups}</div>
          : <div />
        }
        <hr></hr>
        {/* <div><div onClick={(e) => setLocked(false)}>add pushups</div></div> */}

        {locked=="true"
          ? <div><div style={{border:"10px solid blue"}} value={locked} onClick={(e) => setLocked(!eval(locked))}>show elements</div></div>
          : <div><div style={{border:"10px solid blue"}} value={locked} onClick={(e) => setLocked(!eval(locked))}>hide elements</div></div>
        }
        <div><div style={{border:"5px solid gray"}} hidden={locked=="true"} value={pushups} onClick={(e) => setPushups(parseInt(pushups)+parseInt(10))}>add pushups</div></div>
        <div><div style={{border:"5px solid gray"}} hidden={locked=="true"} value={pullups} onClick={(e) => setPullups(parseInt(pullups)+parseInt(10))}>add pullups</div></div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Exercise;
