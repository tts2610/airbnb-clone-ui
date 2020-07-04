import React from "react";
import { Navbar } from "react-bootstrap";

export default function CustomNavbar() {
  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand href="#home">
          <img alt="" src="/icon.png" width="60" height="60" className="d-inline-block align-top" /> React Bootstrap
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
