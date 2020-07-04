import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomNavbar from "./components/Navbar";
import data from "./sampleExperience.json";
import ExpCard from "./components/ExpCard";
import { CardDeck } from "react-bootstrap";
import CustomizeFooter from "./components/Footer";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <CustomizeJumbotron />
      <CardDeck className="mt-3">
        {data.map((item, idx) => (
          <ExpCard key={idx} {...item} />
        ))}
      </CardDeck>
      <CustomizeFooter />
    </div>
  );
}

export default App;
