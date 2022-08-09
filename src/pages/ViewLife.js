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
  const [fileInput, setFileInput] = useState('summer/todo')
  const [fileText, setFileText] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  const fetchLifeText = async () => {
    const response = await fetch('http://170.187.159.180:5000/life', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ dir: fileInput+".txt" })
    });
    const data = await response.json();
    let textArr = []
    for(let i = 0; i < data.lines.length; i++) {
      console.log(data.lines[i])
      textArr.push("["+i+"] "+data.lines[i])
    }
    setFileText(textArr)
  }

  return (
    <div className="App">
      <Navbar />
      <div className='mainmenu'>
        <h1 style={{fontSize:"30px", fontWeight:"700"}}>💻 View 💻</h1>
        <textarea style={{margin:"5px", border:"5px solid gray", borderRadius:"10%", width:"90%", height:"200px"}} onChange={(e) => setFileInput(e.target.value)} value={fileInput}></textarea>
        <Link to={'/'}><button className='menubutton' >Back Home</button></Link>
        <button className='menubutton'onClick={(e) => fetchLifeText()} >View {process.env.REACT_APP_LIFE_DIR}{fileInput}.txt</button>
        <Link to={'http://170.187.159.180:5000/pull-life'}><button className='menubutton' >PULL CHANGES</button></Link>
        {/* <Link to={'http://170.187.159.180:5000/life'}><button className='menubutton' >GO TO LIFE</button></Link> */}
        <div>{userInput}</div>
        <div style={{fontSize:"20px", textAlign:"left", marginBottom:"30px", marginLeft:"30px"}}>
          {fileText.map(txt => <div>{txt}</div>)}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default ViewLife;
