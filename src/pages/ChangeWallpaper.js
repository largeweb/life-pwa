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
import retrogreen from "../images/retro-green.jpg"
import bluegrid from "../images/blue-grid.jpg"
import redwave from "../images/red-wave.jpg"
import colorspace from "../images/color-space.gif"
import colorcircuit from "../images/color-circuit.jpg"
import bluecircle from "../images/blue-circle.jpg"

function ChangeWallpaper() {

  const buttonColor = "rgb(208, 246, 206)"

  const [userInput, setUserInput] = useLocalStorage('userInput', 'empty')
  const [addFile, setAddFile] = useLocalStorage('addFilePath', 'school/added')
  const [addInput, setAddInput] = useState('')
  const [fileText, setFileText] = useState([])
  const [pullButtonColor, setPullButtonColor] = useState(buttonColor);
  const [pullButtonText, setPullButtonText] = useState("Add to Life");

  // const changewallpaper = async (wallpaperid) => {
  //   const response = await fetch('http://170.187.159.180:5000/im', {
  //     method: 'GET'
  //   })
  //   .then(changewallpaperfetch(wallpaperid))
  // }
  const changewallpaperfetch = async(wallpaperid) => {
    // console.log("Will now try to add: {" + addInput + "} to: {" + addFile + "}")
    const response = await fetch(`http://170.187.159.180:5000/images/set/${wallpaperid}`, {
      method: 'POST'
      // headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify({ file: addFile, stuff: addInput })
    });
    const data = await response.json();
    console.log("Wallpaper should be changed now to " + data.mission)
    // let textArr = []
    // for(let i = 0; i < data.lines.length; i++) {
    //   console.log(data.lines[i])
    //   textArr.push("["+i+"] "+data.lines[i])
    // }
    // setFileText(textArr)
    // setTimeout(function(){
    //   console.log("Changing button color back")
    //   setPullButtonColor(buttonColor)
    //   setPullButtonText("Add to Life")
    // }, 2000)
    window.location.reload(false);
  }

const resetText = async() => {
	setAddInput('');
}

  return (
    <div className="App background">
      <Navbar />
      <div className='mainmenu' id="maindiv">
        <h1 style={{fontSize:"40px", fontWeight:"700"}}>🎨🖌️🎨</h1>
        {/* <input type="text" style={{margin:"5px", border:"5px solid gray", borderRadius:"10%", width:"100%", height:"200px"}}></input> */}
        {/* <textarea placeholder='Add File' style={{margin:"5px", border:"5px solid gray", borderRadius:"10%", width:"90%", height:"200px"}} onChange={(e) => setAddFile(e.target.value)} value={addFile}></textarea> */}
        {/* <textarea placeholder='What to Add' style={{margin:"5px", border:"5px solid gray", borderRadius:"10%", width:"90%", height:"200px"}} onChange={(e) => setAddInput(e.target.value)} value={addInput}></textarea> */}
        {/* <Link to={'/'}><button className='menubutton' >Back Home</button></Link> */}
        <div>{userInput}</div>
        {/* <div>{addFile}</div> */}
        {/* <div>{addInput}</div> */}
        {/* <button className='menubutton' onClick={(e) => resetText()}>Reset Text</button> */}
        <button className='menubutton' onClick={(e) => changewallpaperfetch('retro-green.jpg')} style={{backgroundImage: `url(${retrogreen})`, backgroundSize:"100px"}}><span style={{backgroundColor:"white", opacity:"0.5", padding:"5px", fontWeight:"700"}}>Retro Green</span></button>
        <button className='menubutton' onClick={(e) => changewallpaperfetch('blue-grid.jpg')} style={{backgroundImage: `url(${bluegrid})`, backgroundSize:"100px"}}><span style={{backgroundColor:"white", opacity:"0.5", padding:"5px", fontWeight:"700"}}>Blue Grid</span></button>
        <button className='menubutton' style={{backgroundImage: `url(${redwave})`, backgroundSize:"100px"}} onClick={(e) => changewallpaperfetch('red-wave.jpg')}><span style={{backgroundColor:"white", opacity:"0.5", padding:"5px", fontWeight:"700"}}>Red Wave</span></button>
        <button className='menubutton' style={{backgroundImage: `url(${bluecircle})`, backgroundSize:"100px"}} onClick={(e) => changewallpaperfetch('blue-circle.jpg')}><span style={{backgroundColor:"white", opacity:"0.5", padding:"5px", fontWeight:"700"}}>Blue Circle</span></button>
        <button className='menubutton' style={{backgroundImage: `url(${colorcircuit})`, backgroundSize:"100px"}} onClick={(e) => changewallpaperfetch('color-circuit.jpg')}><span style={{backgroundColor:"white", opacity:"0.5", padding:"5px", fontWeight:"700"}}>Color Circuit</span></button>
        <button className='menubutton' style={{backgroundImage: `url(${colorspace})`, backgroundSize:"100px"}} onClick={(e) => changewallpaperfetch('color-space.gif')}><span style={{backgroundColor:"white", opacity:"0.5", padding:"5px", fontWeight:"700"}}>Color Space</span></button>
        <div style={{fontSize:"10px", textAlign:"left", marginBottom:"30px", marginLeft:"20px"}}>
          {fileText.map(txt => <div>{txt}</div>)}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default ChangeWallpaper;
