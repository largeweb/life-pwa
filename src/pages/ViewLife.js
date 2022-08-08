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
import env from "react-dotenv"

function ViewLife() {

  const [userInput, setUserInput] = useLocalStorage('userInput', 'empty')
  const [addInput, setAddInput] = useState('')
  const [fileInput, setFileInput] = useState('')

  useEffect(() => {
    showFile(fileInput)
  }, [fileInput])

  const showFile = async (file) => {
    const lifeFilePath = env.LIFE_DIR
    console.log("LIFE DIR IS: " + env.LIFE_DIR)
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => {
      const text = (e.target.result)
      console.log(text)
      alert(text)
    };
    reader.readAsText(e.target.files[0])
  }

  return (
    <div className="App">
      <Navbar />
      <div className='mainmenu'>
        <h1 style={{fontSize:"30px", fontWeight:"700"}}>💻 View 💻</h1>
        {/* <input type="text" style={{margin:"5px", border:"5px solid gray", borderRadius:"10%", width:"100%", height:"200px"}}></input> */}
        <button className='menubutton' onClick={(e) => setAddInput('todo')}>TODO</button>
        <Link to={'/'}><button className='menubutton' >Back Home</button></Link>
        <Link to={'/'}><button className='menubutton' >Back Home</button></Link>
        <div>{userInput}</div>
        <div>{addInput}</div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default ViewLife;