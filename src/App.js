import React, { useState } from "react";
import "./App.css";
import mockData from "./content.json";
import Navbar from "./components/Navbar";

function App() {
  const [pageData, setpageData] = useState(mockData.pages[0]);
  const dataBlocks = pageData.blocks[0];

  return (
    <div
      className="page-container"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/images/" + dataBlocks.background
        })`,
      }}
    >
      <div className="main">
        <Navbar setpageData={setpageData} />
        <div className="marquee">
          <div className="content">
            <div className="headline">
              <h1>{pageData.title}</h1>
            </div>

            <div className="subhead">{dataBlocks.subhead}</div>
          </div>

          <div className="cta-container">
            <div className="cta-text">{dataBlocks.cta}</div>
            <div className="cta-button-container">
              <button className="cta-button">
                <div className="cta-button-text">LETS TALK.</div>
                <div className="cta-button-arrow">&#x2192;</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
