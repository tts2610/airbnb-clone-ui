import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function CustomNavbar() {
  return (
    <div>
      <Navbar bg="light" style={{ display: "flex", textAlign: "center", justifyContent: "space-between" }}>
        <Navbar.Brand href="#home" style={{ color: "rgb(245, 89, 95)", display: "flex", alignItems: "center" }}>
          <img alt="" src="/icon.png" width="40" height="40" /> <h3 className="ml-2">airbnb</h3>
        </Navbar.Brand>
        <Nav className="mr-0">
          <Nav.Link href="#home">Host an experience</Nav.Link>
          <Nav.Link href="#features">Login</Nav.Link>
          <Nav.Link href="#pricing">Sign up</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
