import React from "react";
import { Navbar } from "react-bootstrap";

export default function Navbar() {
  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
      </Navbar>
    </div>
  );
}
