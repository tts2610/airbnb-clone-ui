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
import axios from "axios";

export default class Home extends Component {
  state = {
    showLogin: false,
    showSignUp: false,
  };
  handleShow = (e, type) => {
    e.preventDefault();
    type === "login" ? this.setState({ showLogin: true }) : this.setState({ showSignUp: true });
  };
  handleClose = (e, type) => {
    e.preventDefault();
    type === "login" ? this.setState({ showLogin: false }) : this.setState({ showSignUp: false });
  };
  signUpUser = (email, name, password, introduction, country) => {
    const user = {
      email: email,
      name: name,
      password: password,
      introduction: introduction,
      country: country,
    };
    axios
      .post(`https://cloneairbnb2020.herokuapp.com/users/register`, user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error.response);
      });
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
        <LoginModal show={this.state.showLogin} handleClose={this.handleClose} />
        <SignupModal show={this.state.showSignUp} handleClose={this.handleClose} signUpUser={this.signUpUser} showSpinner={false} />
      </>
    );
  }
}
