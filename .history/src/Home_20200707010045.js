import React, { useEffect, useState } from "react";
import "./App.css";
import CustomNavbar from "./components/common/Navbar";
import CustomJumbotron from "./components/common/Jumbotron";
import { useSelector, useDispatch } from "react-redux";
import ExpCard from "./components/common/ExpCard";
import { Container, CardDeck } from "react-bootstrap";
import CustomizeFooter from "./components/common/Footer";
import LoginModal from "./components/login/LoginModal";
import SignupModal from "./components/signup/SignupModal";
import axios from "axios";
import Filters from "./components/common/Filters";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomPagination from "./components/common/CustomPagination";

export default function Home() {
  const dispatch = useDispatch();

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignUpSpinner, setShowSignUpSpinner] = useState(false);
  const [errorSignUp, setErrorSignUp] = useState("");
  const [showLoginSpinner, setShowLoginSpinner] = useState(false);
  const [errorLogin, setErrorLogin] = useState("");
  const [loginNavigator, setLoginNavigator] = useState(false);

  // const [tagFilterList, setTagFilterList] = useState([]);
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const searchParams = useSelector((state) => state.searchParams);

  const nextPage = () => {
    setActivePage(activePage + 1);
  };
  const previousPage = () => {
    setActivePage(activePage - 1);
  };

  const performFilter = (params) => {
    let searchUrl = process.env.REACT_APP_GET_EXP + `/search?priceMin=${params.minPrice ? params.minPrice : ""}&priceMax=${params.maxPrice ? params.maxPrice : ""}&languages=${params.languages}&tags=${params.tags}&page=${activePage}&perPage=12`;
    axios.get(searchUrl).then(function (res) {
      setTotalPage(res.data.data.pagination.totalPages);
      setData(res.data.data.experienceList);
    });
  };

  useEffect(() => {
    performFilter(searchParams);
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
        const { data } = res.data;
        localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_USER_TOKEN, data.token);
        localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_USER_EMAIL, data.user.email);

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
        const { data } = res.data;
        localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_USER_TOKEN, data.token);
        localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_USER_EMAIL, data.user.email);

        if (data.user.role === "host") {
          dispatch({ type: "VERIFYHOST" });
          localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_USER_HOST, true);
        }
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

  const handlePageClick = (e) => {
    const clickValue = e.target.offsetParent.getAttribute("data-page") ? e.target.offsetParent.getAttribute("data-page") : e.target.getAttribute("data-page");
    console.log(clickValue);
    // setActivePage(clickValue);
    dispatch({ type: "FILTER", payload: { searchParams: { page: clickValue } } });
  };

  return (
    <>
      <CustomNavbar handleShow={handleShow} />
      <CustomJumbotron />
      <Filters data={data} />
      <Container className="mt-5">
        {data.length !== 0 ? (
          <>
            <h1 className="my-3">Starting in the next 6 hours</h1>
            <CardDeck style={{ justifyContent: "center" }}>
              {data.map((item, idx) => (
                <ExpCard key={idx} {...item} />
              ))}
            </CardDeck>
            <CustomPagination handlePageClick={handlePageClick} nextPage={nextPage} previousPage={previousPage} maxPages={totalPage} active={activePage} />
          </>
        ) : (
          <h1>Nothing to show</h1>
        )}

        <CustomizeFooter />
      </Container>
      <LoginModal show={showLogin} handleClose={handleClose} loginUser={loginUser} showSpinner={showLoginSpinner} error={errorLogin} loginNavigator={loginNavigator} />
      <SignupModal show={showSignUp} handleClose={handleClose} signUpUser={signUpUser} showSpinner={showSignUpSpinner} error={errorSignUp} />
    </>
  );
}
