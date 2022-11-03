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
        <div style={{textAlign: "center", padding: "10px"}}>
          <Link to={'/'}>BACK 🤖</Link>
        </div>
        {/* <a className="navlink" href="/">
                              Link
                            </a> */}
      </div>
    </div>
  );
};

export default Navbar;