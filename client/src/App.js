import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ToolNavbar from "./components/Navbar";

function App() {
  return (
    <div className="homeApp">
      <nav>
        <ToolNavbar />
      </nav>
      <div className="searchBar">
    <div>
        <input className="inputProfil" type="text" placeholder="Search..." />
      </div>
      </div>
    </div>
  );
}

export default App;
