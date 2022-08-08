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
  const [fileInput, setFileInput] = useState('todo')

  useEffect(() => {
    showFile(fileInput)
  }, [fileInput])

  const showFile = async (e, file) => {
    const lifeFilePath = process.env.REACT_APP_LIFE_DIR + file
    console.log("LIFE DIR IS: " + lifeFilePath)
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => {
      const text = (e.target.result)
      console.log(text)
      alert(text)
    };
    reader.readAsText(lifeFilePath)
  }

  return (
    <div className="App">
      <Navbar />
      <div className='mainmenu'>
        <h1 style={{fontSize:"30px", fontWeight:"700"}}>💻 View 💻</h1>
        {/* <input type="text" style={{margin:"5px", border:"5px solid gray", borderRadius:"10%", width:"100%", height:"100px"}} onChange={(e) => setFileInput(e.target.data)}></input> */}
        <textarea style={{margin:"5px", border:"5px solid gray", borderRadius:"10%", width:"90%", height:"200px"}} onChange={(e) => setFileInput(e.target.value)} value={fileInput}></textarea>
        {/* <button className='menubutton' onClick={(e) => setAddInput('todo')}>TODO</button> */}
        <Link to={'/'}><button className='menubutton' >Back Home</button></Link>
        <button className='menubutton' >View {process.env.REACT_APP_LIFE_DIR}{fileInput}</button>
        <div>{userInput}</div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default ViewLife;
