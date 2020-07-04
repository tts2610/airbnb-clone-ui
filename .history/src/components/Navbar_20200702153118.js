import React from "react";
import { Navbar } from "react-bootstrap";

export default function CustomNavbar() {
  return (
    <div>
      <Navbar bg="light" style={{ display: "flex", textAlign: "center" }}>
        <Navbar.Brand href="#home">
          <img alt="" src="/icon.png" width="60" height="60" /> airbnb
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
