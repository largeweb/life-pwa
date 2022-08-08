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
import fs from "fs"
// import reader from "any-text"
// var reader = require('any-text')

function ViewLife() {

  const [userInput, setUserInput] = useLocalStorage('userInput', 'empty')
  const [fileInput, setFileInput] = useState('todo')

  // useEffect(() => {
  //   showFile()
  // }, [fileInput])

  // const showFile = async () => {
  //   const lifeFilePath = process.env.REACT_APP_LIFE_DIR.concat(fileInput)
  //   reader.getText(lifeFilePath)
  //   .then((data) => {
  //     console.log(data)
  //   })
  // }

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
        <Link to={'localhost:5000/pull-life'}><button className='menubutton' >PULL CHANGES</button></Link>
        <Link to={'localhost:5000/life'}><button className='menubutton' >GO TO LIFE</button></Link>
        <div>{userInput}</div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default ViewLife;
