import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomNavbar from "./components/Navbar";
import CustomJumbotron from "./components/Jumbotron";
import data from "./sampleExperience.json";
import ExpCard from "./components/ExpCard";
import { CardDeck, Container } from "react-bootstrap";
import CustomizeFooter from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <CustomJumbotron />
      <Container>
        <CardDeck className="mt-3">
          {data.map((item, idx) => (
            <ExpCard key={idx} {...item} />
          ))}
        </CardDeck>
        <CustomizeFooter />
      </Container>
    </Router>
  );
}

export default App;
