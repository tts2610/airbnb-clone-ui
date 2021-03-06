import React, { useState, Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomNavbar from "./components/Navbar";
import CustomJumbotron from "./components/Jumbotron";
import data from "./sampleExperience.json";
import ExpCard from "./components/ExpCard";
import { CardDeck, Container } from "react-bootstrap";
import CustomizeFooter from "./components/Footer";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";

export default class Home extends Component {
  state = {
    showLogin: false,
    showSignUp: false,
  };
  handleShow = (e, type) => {
    e.preventDefault();
    this.setState({ showLogin: true });
  };
  handleClose = (e, type) => {
    e.preventDefault();
    this.setState({ showLogin: false });
  };
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
        <LoginModal show={this.state.show} handleClose={this.handleClose} />
        <SignupModal show={this.state.show} handleClose={this.handleClose} />
      </>
    );
  }
}
