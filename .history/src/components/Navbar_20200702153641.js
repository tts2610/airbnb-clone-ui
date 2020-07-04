import React from "react";
import { Navbar } from "react-bootstrap";

export default function CustomNavbar() {
  return (
    <div>
      <Navbar bg="light" style={{ display: "flex", textAlign: "center" }}>
        <Navbar.Brand href="#home" style={{ color: "#FF385C" }}>
          <img alt="" src="/icon.png" width="56" height="56" /> <h2>airbnb</h2>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
