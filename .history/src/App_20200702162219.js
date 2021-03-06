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
      <div>
        {data.map((item, idx) => (
          <ExpCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
