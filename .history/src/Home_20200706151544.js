import React, { Component, useEffect, useState } from "react";
import "./App.css";
import CustomNavbar from "./components/common/Navbar";
import CustomJumbotron from "./components/common/Jumbotron";
import { useSelector } from "react-redux";
import ExpCard from "./components/common/ExpCard";
import { Container, CardDeck } from "react-bootstrap";
import CustomizeFooter from "./components/common/Footer";
import LoginModal from "./components/login/LoginModal";
import SignupModal from "./components/signup/SignupModal";
import axios from "axios";
import Filters from "./components/common/Filters";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const languageConvert = {
  Vietnameses: "vi",
  Korean: "ko",
  English: "en",
};
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignUpSpinner, setShowSignUpSpinner] = useState(false);
  const [errorSignUp, setErrorSignUp] = useState("");
  const [showLoginSpinner, setShowLoginSpinner] = useState(false);
  const [errorLogin, setErrorLogin] = useState("");
  const [loginNavigator, setLoginNavigator] = useState(false);
  const [languageFilterList, setLanguageFilterList] = useState([]);
  const [data, setData] = useState([]);

  const languages = useSelector((state) => state.languages);
  const minPrice = useSelector((state) => state.minPrice);
  const maxPrice = useSelector((state) => state.maxPrice);

  const getExps = async () => {
    let res = await axios.get(process.env.REACT_APP_GET_EXP);
    let { data } = res.data;
    setData(data);
    getLanguageList(data);
  };

  const getLanguageList = (data) => {
    let arr = new Set();
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      element.languages.forEach((item) => arr.add(getKeyByValue(languageConvert, item)));
    }

    setLanguageFilterList(Array.from(arr));
  };

  const getFilteredUrl = () => {
    return process.env.REACT_APP_GET_EXP + `/search?languages=${languages}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
  };

  const filterByLanguage = async () => {
    // if (languages.length === 0) {
    //   this.getExps();
    //   return;
    // }

    // languages = languages.map((item) => languageConvert[item]);

    let res = await axios.get(getFilteredUrl);
    let { data } = res.data;
    this.setState({ data: data });
  };

  const filteredByPriceRange = async () => {
    let res = await axios.get(getFilteredUrl);
    let { data } = res.data;
    this.setState({ data: data });
  };

  useEffect(() => {
    getExps();
  });

  const handleShow = (e, type) => {
    e && e.preventDefault();
    type === "login" ? setShowLogin(true) : setShowSignUp(true);
  };
  const handleClose = (e, type) => {
    e && e.preventDefault();
    if (type === "login") {
      setShowLogin(false);
      setErrorLogin("");
    } else {
      setShowSignUp(false);
      setErrorSignUp("");
    }
  };
  const signUpUser = (email, name, password, retypePassword, introduction, country, images) => {
    setShowSignUpSpinner(true);
    if (!email || !name || !password || !retypePassword) {
      setErrorSignUp("Please fill in all required fields");
      setShowSignUpSpinner(false);
      return;
    }
    var formData = new FormData();
    if (images) {
      for (const key of Object.keys(images)) {
        formData.append("images", images[key]);
      }
    }
    formData.append("email", email);
    formData.append("name", name);
    formData.append("password", password);
    formData.append("introduction", introduction);
    formData.append("country", country);
    axios
      .post(process.env.REACT_APP_SIGNUP_USER_URL, formData)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_USER_TOKEN, res.data.data.token);
        localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_USER_EMAIL, res.data.data.user.email);
        setShowSignUpSpinner(false);
        setShowSignUp(false);
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.data.message.includes("duplicate")) {
          setErrorSignUp("This email already existed");
          setShowSignUpSpinner(false);
        }
      });
  };
  const loginUser = (email, password) => {
    setShowLoginSpinner(true);
    if (!email || !password) {
      setErrorLogin("Please fill in all required fields");
      setShowLoginSpinner(false);
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
        setShowLoginSpinner(false);
        setShowLogin(false);
        setLoginNavigator(true);
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.data.message.toLowerCase().includes("can not find user")) {
          setErrorLogin("User not found");
          setShowLoginSpinner(false);
        } else if (error.response.data.message.toLowerCase().includes("password is incorrect")) {
          setErrorLogin("Email or Password is incorrect");
          setShowLoginSpinner(false);
        }
      });
  };

  return (
    <>
      <CustomNavbar handleShow={handleShow} />
      <CustomJumbotron />
      <Filters languageFilterList={languageFilterList} />
      <Container className="mt-5">
        {/* <h1 className="mb-3">Cook with Award-Winning Chefs</h1>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
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
          </Carousel> */}
        <h1 className="my-3">Starting in the next 6 hours</h1>
        <CardDeck>
          {data.map((item, idx) => (
            <ExpCard key={idx} {...item} />
          ))}
        </CardDeck>
        <CustomizeFooter />
      </Container>
      <LoginModal show={showLogin} handleClose={handleClose} loginUser={loginUser} showSpinner={showLoginSpinner} error={errorLogin} loginNavigator={loginNavigator} />
      <SignupModal show={showSignUp} handleClose={handleClose} signUpUser={signUpUser} showSpinner={showSignUpSpinner} error={errorSignUp} />
    </>
  );
}
