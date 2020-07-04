import React from "react";
import { useParams } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import GridLayout from "react-grid-layout";
import data from "./sampleExperience.json";

export default function ExpDetail() {
  let { expId } = useParams();
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];
  return (
    <>
      <div style={{ backgroundColor: "black", height: "70vh" }}>
        <Navbar style={{ display: "flex", textAlign: "center", justifyContent: "space-between", background: "rgba(0,0,0,0.1)" }}>
          <Navbar.Brand href="/" style={{ color: "rgb(245, 89, 95)", display: "flex", alignItems: "center" }}>
            <img alt="" src="/icon.png" width="40" height="40" /> <h3 className="ml-2">airbnb</h3>
          </Navbar.Brand>
          <Nav className="links">
            <Nav.Link href="">Host an experience</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
            <Nav.Link href="#pricing">Sign up</Nav.Link>
          </Nav>
        </Navbar>
        <Container>
          <div>TTTS</div>
        </Container>
      </div>
    </>
  );
}
