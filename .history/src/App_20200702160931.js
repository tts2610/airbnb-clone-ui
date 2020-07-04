import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomNavbar from "./components/Navbar";
import data from "./sampleExperience.json";
import ExpCard from "./components/ExpCard";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      {data.map((item) => (
        <ExpCard {...item} />
      ))}
    </div>
  );
}

export default App;
