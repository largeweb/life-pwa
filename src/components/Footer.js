import React from "react";
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

const Footer = () => {

  return (
    <div className="footer">
      {/* <a className="navtext" href="/">
        Link
      </a>
      <a className="navlink" href="/">
        Link
      </a> */}
      <div style={{textAlign: "center", padding: "10px"}}>
            <Link to={'/'}><span className="spanicon">🍓</span></Link>
            <Link to={'/'}><span className="spanicon">🌟</span></Link>
            <Link to={'/'}><span className="spanicon">🍌</span></Link>
            <Link to={'/'}><span className="spanicon">🌊</span></Link>
            <Link to={'/'}><span className="spanicon">🏘️</span></Link>
            <Link to={'/'}><span className="spanicon">🎪</span></Link>
        </div>
    </div>
  );
};

export default Footer;