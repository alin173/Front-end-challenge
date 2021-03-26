import React from "react";
import "../App.css";
import mockData from "../content.json";

function Navbar({setpageData}) {

 
  return (
      <div className="nav">
        <div className="nav-container">
          <div className="header"> 
            <div className="logo">
              <img className="logo-image" alt="logo" src={`${process.env.PUBLIC_URL}/images/abclogo.png`} />
            </div>
            <div className="menu">
              <button onClick={() => {setpageData(mockData.pages[0])}}>Industries</button>
              <button onClick={() => {setpageData(mockData.pages[1])}}>Services</button>
              <button onClick={() => {setpageData(mockData.pages[2])}}>About Us</button>
            </div>
          </div>

          <div className="contact">
            <button id="contact-button">Contact Us</button>
          </div>
        </div>
      </div>
    
  );
}


export default Navbar;
