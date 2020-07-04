import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomNavbar from "./components/Navbar";
import data from "./sampleExperience.json";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      {data.map((e) => (
        <h1>e</h1>
      ))}
    </div>
  );
}

export default App;
