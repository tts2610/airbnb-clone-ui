import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomNavbar from "./components/Navbar";
import data from "./sampleExperience.json";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      {data.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </div>
  );
}

export default App;
