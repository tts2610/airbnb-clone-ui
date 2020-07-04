import React, { Component } from "react";
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
import Filters from "./components/common/Filters";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default class Home extends Component {
  state = {
    showLogin: false,
    showSignUp: false,
    showSignUpSpinner: false,
    errorSignUp: "",
    showLoginSpinner: false,
    errorLogin: "",
  };
  handleShow = (e, type) => {
    e.preventDefault();
    type === "login" ? this.setState({ showLogin: true }) : this.setState({ showSignUp: true });
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
        localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_USER_TOKEN, res.data.data.token);
        localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_USER_EMAIL, res.data.data.user.email);
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
        localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_USER_TOKEN, res.data.data.token);
        localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_USER_EMAIL, res.data.data.user.email);
        this.setState({ showLoginSpinner: false, showLogin: false });
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.data.message.toLowerCase().includes("can not find user")) {
          this.setState({ errorLogin: "User not found" });
          this.setState({ showLoginSpinner: false });
        } else if (error.response.data.message.toLowerCase().includes("password is incorrect")) {
          this.setState({ errorLogin: "Email or Password is incorrect" });
          this.setState({ showLoginSpinner: false });
        }
      });
  };

  render() {
    return (
      <>
        <CustomNavbar handleShow={this.handleShow} />
        <CustomJumbotron />
        <Filters />
        <Container className="mt-5">
          <h1>Cook with Award-Winning Chefs</h1>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            partialVisible
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 5,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable>
            {data.map((item, idx) => (
              <ExpCard key={idx} {...item} />
            ))}
          </Carousel>
          <CustomizeFooter />
        </Container>
        <LoginModal show={this.state.showLogin} handleClose={this.handleClose} loginUser={this.loginUser} showSpinner={this.state.showLoginSpinner} error={this.state.errorLogin} />
        <SignupModal show={this.state.showSignUp} handleClose={this.handleClose} signUpUser={this.signUpUser} showSpinner={this.state.showSignUpSpinner} error={this.state.errorSignUp} />
      </>
    );
  }
}
