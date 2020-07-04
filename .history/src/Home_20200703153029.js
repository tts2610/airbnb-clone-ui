import React, { useState, Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomNavbar from "./components/Navbar";
import CustomJumbotron from "./components/Jumbotron";
import data from "./sampleExperience.json";
import ExpCard from "./components/ExpCard";
import { CardDeck, Container } from "react-bootstrap";
import CustomizeFooter from "./components/Footer";
import MyModal from "./components/MyModal";

export default class Home extends Component {
  state = {
    show: true,
  };
  handleShow = () => {
    console.log("bbbbb");
    this.setState({ show: true });
  };
  handleClose() {
    this.setState({ show: false });
  }
  render() {
    return (
      <>
        <CustomNavbar handleShow={this.handleShow} />
        <CustomJumbotron />
        <Container>
          <CardDeck className="mt-3">
            {" "}
            {data.map((item, idx) => (
              <ExpCard key={idx} {...item} />
            ))}{" "}
          </CardDeck>{" "}
          <CustomizeFooter />
        </Container>{" "}
        <MyModal show={this.state.show} handleClose={() => this.handleClose} />
      </>
    );
  }
}
