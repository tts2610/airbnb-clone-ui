import React from "react";
import { useParams } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function ExpDetail() {
  let { expId } = useParams();
  return (
    <>
      <div style={{ backgroundColor: "black", height: "70vh" }}>
        <Container>
          <Navbarstyle={{ display: "flex", textAlign: "center", justifyContent: "space-between", background: "rgba(0,0,0,0.1)" }}>
            <Navbar.Brand href="/" style={{ color: "rgb(245, 89, 95)", display: "flex", alignItems: "center" }}>
              <img alt="" src="/icon.png" width="40" height="40" /> <h3 className="ml-2">airbnb</h3>
            </Navbar.Brand>
            <Nav className="links">
              <Nav.Link href="">Host an experience</Nav.Link>
              <Nav.Link href="#features">Login</Nav.Link>
              <Nav.Link href="#pricing">Sign up</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </div>
    </>
  );
}
