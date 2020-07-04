import React from "react";
import { Navbar } from "react-bootstrap";

export default function CustomNavbar() {
  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand href="#home">
          <img alt="" src="https://toppng.com/uploads/preview/airbnb-a-icon-vector-logo-airbnb-logo-vector-115628719165xnp0e2zd1.png" width="60" height="60" className="d-inline-block align-top" /> React Bootstrap
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
