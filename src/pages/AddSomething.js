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

function AddSomething() {

  const buttonColor = "rgb(208, 246, 206)"

  const [userInput, setUserInput] = useLocalStorage('userInput', 'empty')
  const [addFile, setAddFile] = useLocalStorage('addFilePath', 'school/added')
  const [addInput, setAddInput] = useState('')
  const [fileText, setFileText] = useState([])
  const [pullButtonColor, setPullButtonColor] = useState(buttonColor);
  const [pullButtonText, setPullButtonText] = useState("Add to Life");

  // const fetchPullLife = async () => {
  //   setPullButtonColor("pink")
  //   setPullButtonText("Pulling Life...")
  //   const response = await fetch('http://170.187.159.180:5000/pull-life', {
  //     method: 'POST'
  //   })
  //   .then(
  //   setTimeout(function(){
  //     console.log("Changing button color to add")
  //     addToLife()
  //   }, 2000)
  //   )
  // }
  const addToLife = async() => {
    setPullButtonColor("yellow")
    setPullButtonText("Adding")
    console.log("Will now try to add: {" + addInput + "} to: {" + addFile + "}")
    const response = await fetch('http://170.187.159.180:5000/addtolife', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ file: addFile, stuff: addInput })
    });
    const data = await response.json();
    let textArr = []
    for(let i = 0; i < data.lines.length; i++) {
      console.log(data.lines[i])
      textArr.push("["+i+"] "+data.lines[i])
    }
    setFileText(textArr)
    setPullButtonColor(buttonColor)
    setPullButtonText("Add to Life")
    // setTimeout(function(){
    //   console.log("Changing button color back")
    //   setPullButtonColor(buttonColor)
    //   setPullButtonText("Add to Life")
    // }, 2000)
  }

const resetText = async() => {
	setAddInput('');
}

  return (
    <div className="App background">
      <Navbar />
      <div className='mainmenu' id="maindiv">
        <h1 style={{fontSize:"30px", fontWeight:"700"}}>📋 Add 📋</h1>
        {/* <input type="text" style={{margin:"5px", border:"5px solid gray", borderRadius:"10%", width:"100%", height:"200px"}}></input> */}
        <textarea placeholder='Add File' style={{margin:"5px", border:"5px solid gray", borderRadius:"10%", width:"90%", height:"50px", fontSize:"20px"}} onChange={(e) => setAddFile(e.target.value)} value={addFile}></textarea>
        <textarea placeholder='What to Add' style={{margin:"5px", border:"5px solid gray", borderRadius:"10%", width:"90%", height:"200px", fontSize:"20px"}} onChange={(e) => setAddInput(e.target.value)} value={addInput}></textarea>
        {/* <Link to={'/'}><button className='menubutton' >Back Home</button></Link> */}
        <div>{userInput}</div>
        <div>{addFile}</div>
        {/* <div>{addInput}</div> */}
        <button className='menubutton' onClick={(e) => resetText()}>Reset Text</button>
        <button className='menubutton' style={{backgroundColor: pullButtonColor}} onClick={(e) => addToLife()}>{pullButtonText}</button>
        <div style={{fontSize:"10px", textAlign:"left", marginBottom:"30px", marginLeft:"5%", width:"90%", backgroundColor:"lightgray", borderRadius:"2%", border:"3px solid gray"}}>
          {fileText.map(txt => <div>{txt}</div>)}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default AddSomething;
