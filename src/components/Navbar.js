import React from "react";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react"

const Navbar = () => {
  return (
    // <div style={{marginBottom:"8%"}}>
    <div>
        <div id='mainnav'>
        {/* <a className="navtext" href= */}
                              {/* Link */}
                            {/* </a> */}
        <div style={{textAlign: "center", padding: "13px"}}>
          <Link to={'/'} style={{left:"10%", width:"18%", position:"fixed"}}><button style={{fontSize:"13px"}}>🤖 BACK 🤖</button></Link>
          {/* <Link to={'/'} style={{left:"30%", width:"18%", position:"fixed"}}><button style={{fontSize:"13px"}}>🤖 BACK 🤖</button></Link>
          <Link to={'/'} style={{left:"50%", width:"18%", position:"fixed"}}><button style={{fontSize:"13px"}}>🤖 BACK 🤖</button></Link> */}
          <Link to={'/'} style={{left:"70%", width:"18%", position:"fixed"}}><button style={{fontSize:"13px"}}>🤖 BACK 🤖</button></Link>
        </div>
        {/* <a className="navlink" href="/">
                              Link
                            </a> */}
      </div>
    </div>
  );
};

export default Navbar;