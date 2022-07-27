import React from "react";
import {useState, useEffect} from "react"

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
          <span className="spanicon">🍓</span>
            <span className="spanicon">🌟</span>
            <span className="spanicon">🍌</span>
            <span className="spanicon">🌊</span>
            <span className="spanicon">🏘️</span>
            <span className="spanicon">🎪</span>
        </div>
    </div>
  );
};

export default Footer;