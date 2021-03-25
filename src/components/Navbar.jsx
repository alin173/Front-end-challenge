import React from "react";
import "../App.css";
import mockData from "../content.json";

function Navbar(onDetailsChange) {

  const test =()=>{
    onDetailsChange(mockData.pages[0])
  }
  return (
      <div className="nav">
        <div className="nav-container">
          <div className="header"> 
            <div className="logo">
              <img className="logo-image" src="https://i.imgur.com/2RKmLSk.png" />
            </div>
            <div className="menu">
              <button onClick={test}>Industries</button>
              <button>Services</button>
              <button>About Us</button>
            </div>
          </div>

          <div className="contact">
            <button id="contact">Contact Us</button>
          </div>
        </div>
      </div>
    
  );
}

export default Navbar;
