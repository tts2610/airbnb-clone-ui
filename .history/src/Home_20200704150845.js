import React, { useState, Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomNavbar from "./components/common/Navbar";
import CustomJumbotron from "./components/common/Jumbotron";
import data from "./sampleExperience.json";
import ExpCard from "./components/common/ExpCard";
import { CardDeck, Container } from "react-bootstrap";
import CustomizeFooter from "./components/common/Footer";
import LoginModal from "./components/login/LoginModal";
import SignupModal from "./components/signup/SignupModal";
import axios from "axios";

export default class Home extends Component {
  state = {
    showLogin: false,
    showSignUp: false,
    showSignUpSpinner: false,
    errorSignUp: "",
  };
  handleShow = (e, type) => {
    e.preventDefault();
    type === "login" ? this.setState({ showLogin: true }) : this.setState({ showSignUp: true });
  };
  handleClose = (e, type) => {
    e.preventDefault();
    type === "login" ? this.setState({ showLogin: false }) : this.setState({ showSignUp: false, errorSignUp: "" });
  };
  signUpUser = (email, name, password, retypePassword, introduction, country) => {
    this.setState({ showSignUpSpinner: true });
    if (!email || !name || !password || !retypePassword) {
      this.setState({ errorSignUp: "Please fill in all required fields" });
      this.setState({ showSignUpSpinner: false });
      return;
    }
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
        this.setState({ showSignUpSpinner: false, showSignUp: false });
      })
      .catch((error) => {
        if (error.response.data.message.includes("duplicate")) {
          this.setState({ errorSignUp: "This email already existed" });
          this.setState({ showSignUpSpinner: false });
        }
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
        <SignupModal show={this.state.showSignUp} handleClose={this.handleClose} signUpUser={this.signUpUser} showSpinner={this.state.showSignUpSpinner} error={this.state.errorSignUp} />
      </>
    );
  }
}
