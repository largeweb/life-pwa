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

function GeneratePage() {

  const buttonColor = "rgb(208, 246, 206)"
  const buttonColor2 = "#39ff14"

  const [userInput, setUserInput] = useLocalStorage('userInput', 'empty')
  const [recent1, setRecent1] = useLocalStorage('recent1', 'school/abc')
  const [recent2, setRecent2] = useLocalStorage('recent2', 'school/abc')
  const [endPrompt, setEndPrompt] = useLocalStorage('endprompt', '1:')
  const [prompt, setPrompt] = useLocalStorage('prompt', 'generate more todos from:')
  const [addFile, setAddFile] = useLocalStorage('addFilePath', 'school/abc')
  const [genResponse, setGenResponse] = useState('genResponse', '')
  const [addInput, setAddInput] = useState('')
  const [fileText, setFileText] = useState([])
  const [pullButtonColor, setPullButtonColor] = useState(buttonColor);
  const [pullButtonText, setPullButtonText] = useState("Add to Life");
  const [anyText, setAnyText] = useState(false);

  const fetchGenerate = async () => {
    setPullButtonColor("pink")
    setPullButtonText("Generating...")
    const response = await fetch('http://170.187.159.180:5000/generate', {
      method: 'POST'
    })
    .then(
    setTimeout(function(){
      console.log("Changing button color to add")
      addToLife()
    }, 2000)
    )
  }
  const addToLife = async() => {
    if(recent1!=addFile) {
      setRecent2(recent1)
      setRecent1(addFile)
    }
    // setRecent1(addFile)
    setAnyText(true)
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
      // textArr.push("["+i+"] "+data.lines[i])
      textArr.push(data.lines[i])
    }
    setFileText(textArr)
    setPullButtonColor(buttonColor2)
    setPullButtonText("Request Received")
    // setTimeout(async function(){
      // console.log("Changing button color back")
      // setPullButtonColor(buttonColor)
      // setPullButtonText("Add to Life")
      const response2 = await fetch('http://170.187.159.180:5000/viewadded', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ file: addFile })
      });
      const data2 = await response2.json();
      textArr = []
      for(let i = 0; i < data2.lines.length; i++) {
        console.log(data2.lines[i])
        // textArr.push("["+i+"] "+data.lines[i])
        textArr.push(data2.lines[i])
      }
      setFileText(textArr)
      setPullButtonColor(buttonColor)
      setPullButtonText("Add More?")
    // }, 3000)
  }

const resetText = async() => {
	setAddInput('');
}

// const chooseRecent = async(num) => {
//   if(num==1) {
//     setAddFile(recent1)
//   } else if (num==2) {
//     setAddFile()
//   }
// }

  return (
    <div className="App background">
      <Navbar />
      <div className='mainmenu' id="maindiv">
        <h1 style={{fontSize:"30px", fontWeight:"700"}}>📋 Generate 📋</h1>
        {/* <input type="text" style={{margin:"5px", border:"5px solid gray", borderRadius:"10%", width:"100%", height:"200px"}}></input> */}
        <textarea placeholder='Prompt?' style={{margin:"5px", border:"5px solid gray", borderRadius:"10%", width:"90%", height:"200px", fontSize:"20px"}} onChange={(e) => setAddInput(e.target.value)} value={prompt}></textarea>
        <textarea placeholder='File' style={{margin:"5px", border:"5px solid gray", borderRadius:"10%", width:"90%", height:"50px", fontSize:"20px"}} onChange={(e) => setAddFile(e.target.value)} value={addFile}></textarea>
        {/* <button className='menubutton' style={{backgroundColor: pullButtonColor}} onClick={(e) => setAddFile(recent1)}>{recent1}</button>
        <button className='menubutton' style={{backgroundColor: pullButtonColor}} onClick={(e) => setAddFile(recent2)}>{recent2}</button> */}
        <textarea placeholder='End Prompt?' style={{margin:"5px", border:"5px solid gray", borderRadius:"10%", width:"90%", height:"200px", fontSize:"20px"}} onChange={(e) => setAddInput(e.target.value)} value={endPrompt}></textarea>
        {/* <Link to={'/'}><button className='menubutton' >Back Home</button></Link> */}
        {/* <div>{userInput}</div> */}
        {/* <div>{addFile}</div> */}
        {/* <div>{addInput}</div> */}
        <button className='menubutton' style={{backgroundColor: pullButtonColor}} onClick={(e) => addToLife()}>{pullButtonText}</button>
        <button className='menubutton' onClick={(e) => resetText()}>Reset Text</button>
        {anyText &&
        <div style={{fontSize:"10px", textAlign:"left", marginBottom:"30px", marginLeft:"5%", width:"90%", backgroundColor:"lightgray", borderRadius:"1%", border:"3px solid gray", padding:"4px"}}>
          {fileText.map(txt => <div>{txt}</div>)}
        </div>
        }
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default GeneratePage;
