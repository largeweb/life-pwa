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

function AddSomething() {

  const [userInput, setUserInput] = useLocalStorage('userInput', 'empty')
  const [addInput, setAddInput] = useState('')

  return (
    <div className="App">
      <Navbar />
      <div className='mainmenu'>
        <h1 style={{fontSize:"40px", fontWeight:"700"}}>📋 Add 📋</h1>
        {/* <input type="text" style={{margin:"5px", border:"5px solid gray", borderRadius:"10%", width:"100%", height:"200px"}}></input> */}
        <textarea style={{margin:"5px", border:"5px solid gray", borderRadius:"10%", width:"90%", height:"200px"}} onChange={(e) => setAddInput(e.target.value)} value={addInput}></textarea>
        <Link to={'/'}><button className='menubutton' >Back Home</button></Link>
        <button className='menubutton' onClick={(e) => setAddInput('')}>Reset Text</button>
        <div>{userInput}</div>
        <div>{addInput}</div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default AddSomething;
