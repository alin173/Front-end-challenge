import React, {useState} from "react";
import "./App.css";
import mockData from "./content.json";
import Navbar from "./components/Navbar";

function App() {
  
  const [details, setDetails] = useState(mockData.pages[0])

  return (
    <div className="main">
      <Navbar onDetailsChange={setDetails}/>
      <div className="marquee">
        <div className="content">
          <div className="headline">
            <h1>{details.title}</h1>
          </div>

          <div className="subhead">{details.blocks[0].subhead}</div>
        </div>

        <div className="cta-container">
          <div className="cta-text">
          {details.blocks[0].cta}
          </div>
          <div className="cta-button">    
          LETS TALK &#x2192;        
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
