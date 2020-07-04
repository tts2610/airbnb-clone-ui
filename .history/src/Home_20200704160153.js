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
    showLoginSpinner: false,
    errorLogin: "",
  };
  handleClose = (e, type) => {
    e.preventDefault();
    type === "login" ? this.setState({ showLogin: false, errorLogin: "" }) : this.setState({ showSignUp: false, errorSignUp: "" });
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
      .post(process.env.REACT_APP_SIGNUP_USER_URL, user)
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

  loginUser = (email, password) => {
    console.log(email, password);
    this.setState({ showLoginSpinner: true });
    if (!email || !password) {
      this.setState({ errorLogin: "Please fill in all required fields" });
      this.setState({ showLoginSpinner: false });
      return;
    }
    const user = {
      email: email,
      password: password,
    };

    axios
      .post(process.env.REACT_APP_LOGIN_USER_URL, user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.setState({ showLoginSpinner: false, showLogin: false });
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.data.message.toLowerCase().includes("can not find user")) {
          this.setState({ errorLogin: "User not found" });
          this.setState({ showLoginSpinner: false });
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
        <LoginModal show={this.state.showLogin} handleClose={this.handleClose} loginUser={this.loginUser} showSpinner={this.state.showLoginSpinner} error={this.state.errorLogin} />
        <SignupModal show={this.state.showSignUp} handleClose={this.handleClose} signUpUser={this.signUpUser} showSpinner={this.state.showSignUpSpinner} error={this.state.errorSignUp} />
      </>
    );
  }
}
