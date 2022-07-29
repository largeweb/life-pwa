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

function PlayPage() {

  const [userInput, setUserInput] = useLocalStorage('userInput', 'empty')

  // 💪💪💪 EXERCISES 💪💪💪
  const [miles,setMiles] = useLocalStorage('milecount',0)
  const [pushups, setPushups] = useLocalStorage('pushupcount',0)
  const [pullups, setPullups] = useLocalStorage('pullupcount',0)
  const [squats,setSquats] = useLocalStorage('squatcount',0)
  const [core,setCore] = useLocalStorage('corecount',0)
  const [armcircles,setArmcircles] = useLocalStorage('armcirclecount',0)
  const [situps,setSitups] = useLocalStorage('situpcount',0)
  const [lunges,setLunges] = useLocalStorage('lungecount',0)
  const [butterflys,setButterflys] = useLocalStorage('butterflycount',0)
  const [mountainClimbers,setMountainClimbers] = useLocalStorage('mountainClimberscount',0)
  const [flys,setFlys] = useLocalStorage('flycount',0)

  const [locked, setLocked] = useLocalStorage('lockedbool',true)

  const setAllExerciseToZero = async () => {
    setMiles(0)
    setPushups(0)
    setPullups(0)
    setSquats(0)
    setCore(0)
    setArmcircles(0)
    setSitups(0)
    setLunges(0)
    setButterflys(0)
    setMountainClimbers(0)
    setFlys(0)
  }

  return (
    <div className="App">
      <Navbar />
      <div className='mainmenu'>
        <h1>EXERCISE 💪</h1>
        {locked=="true"
        ? <div />
        : <Link to={'/'}><button className='menubutton' >Back Home</button></Link>
        }
        <button>THIS IS THE PLAY PAGE BY THE WAY...😅</button>
        {locked=="true"
        ? <div />
        : <div>{userInput}</div>
        }
        {miles > 0
        ? <div style={{border:"5px solid gray", background:"cyan"}} value={miles} onClick={(e) => setMiles(parseInt(miles)-parseInt(5))}>MILES ✖️ [ -0.5 ] ✖️ {parseInt(miles)/parseInt(10)}</div>
        : <div />
        }
        {pushups > 0
        ? <div style={{border:"5px solid gray", background:"cyan"}} value={pushups} onClick={(e) => setPushups(parseInt(pushups)-parseInt(10))}>PUSHUPS ✖️ [ -10 ] ✖️ {pushups}</div>
        : <div />
        }
        {pullups > 0
        ? <div style={{border:"5px solid gray", background:"cyan"}} value={pullups} onClick={(e) => setPullups(parseInt(pullups)-parseInt(5))}>PULLUPS ✖️ [ -5 ] ✖️ {pullups}</div>
        : <div />
        }
        {squats > 0
        ? <div style={{border:"5px solid gray", background:"cyan"}} value={squats} onClick={(e) => setSquats(parseInt(squats)-parseInt(30))}>SQUATS ✖️ [ -30 ] ✖️ {squats}</div>
        : <div />
        }
        {core > 0
        ? <div style={{border:"5px solid gray", background:"cyan"}} value={core} onClick={(e) => setCore(parseInt(core)-parseInt(20))}>CORE ✖️ [ -20 ] ✖️ {core}</div>
        : <div />
        }
        {armcircles > 0
        ? <div style={{border:"5px solid gray", background:"cyan"}} value={armcircles} onClick={(e) => setArmcircles(parseInt(armcircles)-parseInt(25))}>ARMCIRCLES ✖️ [ -25 ] ✖️ {armcircles}</div>
        : <div />
        }
        {mountainClimbers > 0
        ? <div style={{border:"5px solid gray", background:"cyan"}} value={mountainClimbers} onClick={(e) => setMountainClimbers(parseInt(mountainClimbers)-parseInt(20))}>MOUNTAIN CLIMBERS ✖️ [ -20 ] ✖️ {mountainClimbers}</div>
        : <div />
        }
        {situps > 0
        ? <div style={{border:"5px solid gray", background:"cyan"}} value={situps} onClick={(e) => setSitups(parseInt(situps)-parseInt(25))}>SITUPS ✖️ [ -25 ] ✖️ {situps}</div>
        : <div />
        }
        {lunges > 0
        ? <div style={{border:"5px solid gray", background:"cyan"}} value={lunges} onClick={(e) => setLunges(parseInt(lunges)-parseInt(10))}>LUNGES ✖️ [ -10 ] ✖️ {lunges}</div>
        : <div />
        }
        {butterflys > 0
        ? <div style={{border:"5px solid gray", background:"cyan"}} value={butterflys} onClick={(e) => setButterflys(parseInt(butterflys)-parseInt(5))}>BUTTERFLYS ✖️ [ -5 ] ✖️ {butterflys}</div>
        : <div />
        }
        {flys > 0
        ? <div style={{border:"5px solid gray", background:"cyan"}} value={flys} onClick={(e) => setFlys(parseInt(flys)-parseInt(10))}>30LB. WEIGHTED FLYS ✖️ [ -10 ] ✖️ {flys}</div>
        : <div />
        }
        <hr></hr>
        {/* <div><div onClick={(e) => setLocked(false)}>add pushups</div></div> */}

        <div><div style={{border:"5px solid gray"}} hidden={locked=="true"} value={miles} onClick={(e) => setMiles(parseInt(miles)+parseInt(5))}>add miles</div></div>
        <div><div style={{border:"5px solid gray"}} hidden={locked=="true"} value={pushups} onClick={(e) => setPushups(parseInt(pushups)+parseInt(10))}>add pushups</div></div>
        <div><div style={{border:"5px solid gray"}} hidden={locked=="true"} value={pullups} onClick={(e) => setPullups(parseInt(pullups)+parseInt(5))}>add pullups</div></div>
        <div><div style={{border:"5px solid gray"}} hidden={locked=="true"} value={squats} onClick={(e) => setSquats(parseInt(squats)+parseInt(30))}>add squats</div></div>
        <div><div style={{border:"5px solid gray"}} hidden={locked=="true"} value={core} onClick={(e) => setCore(parseInt(core)+parseInt(20))}>add core</div></div>
        <div><div style={{border:"5px solid gray"}} hidden={locked=="true"} value={armcircles} onClick={(e) => setArmcircles(parseInt(armcircles)+parseInt(25))}>add armcircles</div></div>
        <div><div style={{border:"5px solid gray"}} hidden={locked=="true"} value={situps} onClick={(e) => setSitups(parseInt(situps)+parseInt(25))}>add situps</div></div>
        <div><div style={{border:"5px solid gray"}} hidden={locked=="true"} value={lunges} onClick={(e) => setLunges(parseInt(lunges)+parseInt(10))}>add lunges</div></div>
        <div><div style={{border:"5px solid gray"}} hidden={locked=="true"} value={butterflys} onClick={(e) => setButterflys(parseInt(butterflys)+parseInt(5))}>add butterflys</div></div>
        <div><div style={{border:"5px solid gray"}} hidden={locked=="true"} value={mountainClimbers} onClick={(e) => setMountainClimbers(parseInt(mountainClimbers)+parseInt(5))}>add mountainClimbers</div></div>
        <div><div style={{border:"5px solid gray"}} hidden={locked=="true"} value={flys} onClick={(e) => setFlys(parseInt(flys)+parseInt(5))}>add flys</div></div>
        {locked=="true"
        ? <div><div style={{border:"5px solid black", fontSize:"10px", width:"30%", marginLeft:"35%"}} value={locked} onClick={(e) => setLocked(!eval(locked))}>Exercise Mode On<br></br>🔒</div></div>
        : <div><div style={{border:"10px solid blue"}} value={locked} onClick={(e) => setLocked(!eval(locked))}>Exercise Mode Off</div></div>
        }
        {locked=="true"
        ? <div />
        : <div><div style={{border:"10px solid blue"}} value={locked} onClick={(e) => setAllExerciseToZero()}>Reset All</div></div>
        }
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default PlayPage;
