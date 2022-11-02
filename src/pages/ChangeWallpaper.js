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
        <h1 style={{fontSize:"30px", fontWeight:"700"}}>📋 Add 📋</h1>
        {/* <input type="text" style={{margin:"5px", border:"5px solid gray", borderRadius:"10%", width:"100%", height:"200px"}}></input> */}
        <textarea placeholder='Add File' style={{margin:"5px", border:"5px solid gray", borderRadius:"10%", width:"90%", height:"200px"}} onChange={(e) => setAddFile(e.target.value)} value={addFile}></textarea>
        <textarea placeholder='What to Add' style={{margin:"5px", border:"5px solid gray", borderRadius:"10%", width:"90%", height:"200px"}} onChange={(e) => setAddInput(e.target.value)} value={addInput}></textarea>
        <Link to={'/'}><button className='menubutton' >Back Home</button></Link>
        <div>{userInput}</div>
        <div>{addFile}</div>
        <div>{addInput}</div>
        <button className='menubutton' onClick={(e) => resetText()}>Reset Text</button>
        <button className='menubutton' style={{backgroundColor: pullButtonColor}} onClick={(e) => changewallpaperfetch('retro-green.jpeg')}>Retro Green</button>
        <button className='menubutton' style={{backgroundColor: pullButtonColor}} onClick={(e) => changewallpaperfetch('blue-grid.jpg')}>Blue Grid</button>
        <div style={{fontSize:"10px", textAlign:"left", marginBottom:"30px", marginLeft:"20px"}}>
          {fileText.map(txt => <div>{txt}</div>)}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default ChangeWallpaper;
