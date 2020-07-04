import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function CustomNavbar({ handleShow }) {
  return (
    <div>
      <Navbar fixed="top" style={{ display: "flex", textAlign: "center", justifyContent: "space-between", background: "rgba(0,0,0,0.1)" }}>
        <Navbar.Brand href="/" style={{ color: "rgb(245, 89, 95)", display: "flex", alignItems: "center" }}>
          <img alt="" src="/icon.png" width="40" height="40" /> <h3 className="ml-2">airbnb</h3>
        </Navbar.Brand>
        <Nav className="links">
          <Nav.Link href="">Host an experience</Nav.Link>
          <div onClick={(e) => handleShow(e, "login")}>
            <Nav.Link href="#">Login</Nav.Link>
          </div>
          <div onClick={(e) => handleShow(e, "signup")}>
            <Nav.Link href="#">Sign up</Nav.Link>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}