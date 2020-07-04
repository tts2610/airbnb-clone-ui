import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomNavbar from "./components/Navbar";
import CustomJumbotron from "./components/Jumbotron";
import data from "./sampleExperience.json";
import ExpCard from "./components/ExpCard";
import { CardDeck, Container } from "react-bootstrap";
import CustomizeFooter from "./components/Footer";
import MyModal from "./components/MyModal";

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  let handleShow = () => {
    console.log("aaa");
    setShow(true);
  };
  return (
    <>
      <CustomNavbar handleShow={() => handleShow} />
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
      <MyModal show={show} handleClose={() => handleClose} />
    </>
  );
}

export default Home;
