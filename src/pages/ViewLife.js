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

  const buttonColor = "rgb(208, 246, 206)"
  const menuBackgroundColor = "rgb(191, 147, 147)"

  const [userInput, setUserInput] = useLocalStorage('userInput', 'empty')
  const [fileInput, setFileInput] = useLocalStorage('fileInput', 'summer/todo')
  const [fileText, setFileText] = useState([])
  const [loading, setLoading] = useState(false);
  const [anyText, setAnyText] = useState(false);
  const [pullButtonColor, setPullButtonColor] = useState(buttonColor);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  const fetchLifeText = async () => {
    setAnyText(true)
    const response = await fetch('http://170.187.159.180:5000/life', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ dir: fileInput+".txt" })
    });
    const data = await response.json();
    let textArr = []
    for(let i = 0; i < data.lines.length; i++) {
      console.log(data.lines[i])
      textArr.push(data.lines[i])
      // textArr.push("["+i+"] "+data.lines[i])
    }
    setFileText(textArr)
  }

  const fetchPullLife = async () => {
    setPullButtonColor("red")
    const response = await fetch('http://170.187.159.180:5000/pull-life', {
      method: 'POST'
    })
    .then(
    setTimeout(function(){
      console.log("fetching life text")
      fetchLifeText()
      setPullButtonColor(buttonColor)
    }, 2000)
    )
  }

  return (
    <div className="App background">
      <Navbar />
      <div className='mainmenu' id="maindiv">
        <h1 style={{fontSize:"30px", fontWeight:"700"}}>💻 View 💻</h1>
        <textarea style={{margin:"5px", border:"5px solid gray", borderRadius:"10%", width:"90%", height:"200px"}} onChange={(e) => setFileInput(e.target.value)} value={fileInput}></textarea>
        <button className='menubutton' onClick={(e) => fetchLifeText()} >View File</button>
        {/* <Link to={'/'}><button className='menubutton' >Back Home</button></Link> */}
        <button className='menubutton' style={{backgroundColor: pullButtonColor}} onClick={(e) => fetchPullLife()}>PULL CHANGES</button>
        {/* <Link to={'http://170.187.159.180:5000/life'}><button className='menubutton' >GO TO LIFE</button></Link> */}
        <div>{userInput}</div>
        {anyText &&
        // <div style={{fontSize:"14px", textAlign:"left", marginBottom:"30px", marginLeft:"-40px", marginRight:"-40px", padding:"2px", backgroundColor:menuBackgroundColor, fontWeight:"700", border:"5px solid gray"}}>
        //   {fileText.map(txt => <div>{txt}</div>)}
        // </div>
        <div style={{fontSize:"10px", textAlign:"left", marginBottom:"30px", marginLeft:"5%", width:"90%", backgroundColor:"lightgray", borderRadius:"1%", border:"3px solid gray"}}>
          {fileText.map(txt => <div>{txt}</div>)}
        </div>
        }
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default ViewLife;
