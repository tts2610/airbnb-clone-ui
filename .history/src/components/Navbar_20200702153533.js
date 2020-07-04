import React from "react";
import { Navbar } from "react-bootstrap";

export default function CustomNavbar() {
  return (
    <div>
      <Navbar bg="light" style={{ display: "flex", textAlign: "center" }}>
        <Navbar.Brand href="#home" style={{ color: "#FF385C" }}>
          <img alt="" src="/icon.png" width="60" height="60" /> <h1>airbnb</h1>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
