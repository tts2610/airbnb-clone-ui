import React from "react";
import { Navbar } from "react-bootstrap";

export default function CustomNavbar() {
  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand href="#home" style={{ display: "flex", textAlign: "center" }}>
          <img alt="" src="/icon.png" width="60" height="60" /> React Bootstrap
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
