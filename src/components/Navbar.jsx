import React from "react";
import "../App.css";
import mockData from "../content.json";

function Navbar({setPageData}) {

 
  return (
      <div className="nav">
        <div className="nav-container">
          <div className="header"> 
            <div className="logo">
              <img className="logo-image" alt="logo" src={`${process.env.PUBLIC_URL}/images/abclogo.png`} />
            </div>
            <div className="menu">
            <button onClick={() => setPageData(0)}>Industries</button>
            <button onClick={() => setPageData(1)}>Services</button>
            <button onClick={() => setPageData(2)}>About Us</button>
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
