import React from 'react';
import {useState, useEffect} from "react"
import logo from '../logo.svg';
import '../App.css';

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
// import Footer from "./components/Footer"
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBFooter } from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
// import { db } from "./firebase"
// import useLocalStorage from "use-local-storage"
import useLocalStorage from "react-use-localstorage"
import { db } from '../firebase'
import { collection , onSnapshot, serverTimestamp, addDoc, updateDoc } from 'firebase/firestore';

function TicTacToe() {

  const [userInput, setUserInput] = useLocalStorage('userInput', 'empty')
  const [input, setInput] = useState('')
  const [placement, setPlacement] = useState({})
  const [nextTurn, setNextTurn] = useState('')
	// const [seats, setSeats] = useState([''])

  // const [placement, setPlacement] = useState({
  //   "topleft":"empty",
  //   "topmiddle":"empty",
  //   "topright":"empty",
  //   "middleleft":"empty",
  //   "middlemiddle":"empty",
  //   "middleright":"empty",
  //   "bottomleft":"empty",
  //   "bottommiddle":"empty",
  //   "bottomright":"empty"
  // })

  let defaultstring = ' '

  useEffect(() => {
    onSnapshot(collection(db,'tic-tac-toe'),(snapshot) =>{
      setPlacement(snapshot.docs.map(doc => doc.data()))
    })
    console.log(placement)
    console.log(placement["m1"] || defaultstring)


  }, [input])

  useEffect(() => {
    if(nextTurn=="x") {
      setNextTurn("o")
    } else if(nextTurn=="o") {
      setNextTurn("x")
    }
  }, [placement])




  const addTile=(e, index)=>{
	console.log("Adding tile: " + {nextTurn} + " to position: " + index)
	// console.log(input)
    e.preventDefault();
	updateDoc(collection(db,'tic-tac-toe'),{
	   index:nextTurn,
	   timestamp: serverTimestamp()
	})
  setPlacement(index, nextTurn)
    // setSeats([...seats,input]);
    // setInput('')
	// console.log(input)
  };



  return (
    <div className="App">
      <Navbar />
      <div className='mainmenu' id="maindiv">
        <h1> <span style={{fontSize:"40px", fontWeight:"700"}}>Tic</span> <span style={{fontSize:"30px", fontWeight:"700"}}>Tac</span> <span style={{fontSize:"22px", fontWeight:"700"}}>Toe</span></h1>
        <h1>⭕❌⭕❌⭕❌</h1>
        <Link to={'/play'}><button className='menubutton' >Back Play</button></Link>
        <table>
          <tr>
            <td style={{borderRight:"5px solid black", borderBottom:"5px solid black"}}>{placement.m1}</td>
            <td style={{borderRight:"5px solid black", borderBottom:"5px solid black"}}>Test</td>
            <td style={{borderBottom:"5px solid black"}}>Test</td>
          </tr>
          <tr>
            <td style={{borderRight:"5px solid black", borderBottom:"5px solid black"}}>Test</td>
            <td style={{borderRight:"5px solid black", borderBottom:"5px solid black"}}>Test</td>
            <td style={{borderBottom:"5px solid black"}}>Test</td>
          </tr>
          <tr>
            <td style={{borderRight:"5px solid black"}}>Test</td>
            <td style={{borderRight:"5px solid black"}}>Test</td>
            <td>Test</td>
          </tr>
        </table>
        <div>{userInput}</div>
        <button className='menubutton' onClick={(e) => setInput('test')}>Tic Tac Test</button>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default TicTacToe;
