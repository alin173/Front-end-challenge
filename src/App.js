import React, { useState } from "react";
import "./App.css";
import mockData from "./content.json";
import Navbar from "./components/Navbar";

function App() {
  const [details, setDetails] = useState(mockData.pages[0]);
const dataBlocks = details.blocks[0]

  const setPageData = (props) => {
    switch (props) {
      case 0:
        setDetails(mockData.pages[props]);
        break;
      case 1:
        setDetails(mockData.pages[props]);
        break;
      case 2:
        setDetails(mockData.pages[props]);
        break;
    }
  };
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
        <Navbar setPageData={setPageData} />
        <div className="marquee">
          <div className="content-container">
          <div className="content">
            <div className="headline">
              <h1>{details.title}</h1>
            </div>

            <div className="subhead">{dataBlocks.subhead}</div>
          </div>
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
