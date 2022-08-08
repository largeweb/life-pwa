import React from 'react';
import {useState, useEffect} from "react"
import logo from '../logo.svg';
import '../App.css';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBFooter } from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
import useLocalStorage from "react-use-localstorage"

function ViewLife() {

  const [userInput, setUserInput] = useLocalStorage('userInput', 'empty')
  const [addInput, setAddInput] = useState('')

  const addToLife = async() => {
    setAddInput("test")
  }

  return (
    <div className="App">
      <Navbar />
      <div className='mainmenu'>
        <h1 style={{fontSize:"30px", fontWeight:"700"}}>💻 View 💻</h1>
        {/* <input type="text" style={{margin:"5px", border:"5px solid gray", borderRadius:"10%", width:"100%", height:"200px"}}></input> */}
        <textarea style={{margin:"5px", border:"5px solid gray", borderRadius:"10%", width:"90%", height:"200px"}} onChange={(e) => setAddInput(e.target.value)} value={addInput}></textarea>
        <button className='menubutton' onClick={addToLife}>Add to Life</button>
        <button className='menubutton' onClick={(e) => setAddInput('')}>Reset Text</button>
        <Link to={'/'}><button className='menubutton' >Back Home</button></Link>
        <div>{userInput}</div>
        <div>{addInput}</div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default ViewLife;
