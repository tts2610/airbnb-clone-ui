import React from "react";
import { Navbar } from "react-bootstrap";

export default function CustomNavbar() {
  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand href="#home">
          <img alt="" src="https://banner2.cleanpng.com/20180616/trp/kisspng-airbnb-computer-icons-accommodation-airbnb-logo-5b259ec19f76a7.0265607215291921296532.jpg" width="30" height="30" className="d-inline-block align-top" /> React Bootstrap
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
