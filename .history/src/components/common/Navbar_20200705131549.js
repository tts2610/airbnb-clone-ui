import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function CustomNavbar({ handleShow }) {
  let history = useHistory();
  const signOut = () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_USER_TOKEN)}`,
    };
    axios
      .post(
        process.env.REACT_APP_LOGOUT_USER_URL,
        {},
        {
          headers: headers,
        }
      )
      .then((res) => {
        console.log(res);
        localStorage.clear();
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const checkCredentials = () => {
    if (!localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_USER_TOKEN) && !localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_USER_EMAIL)) {
      handleShow("e", "login");
    }
  };
  return (
    <div>
      <Navbar className="navbar-dark" fixed="top" expand="lg" style={{ display: "flex", textAlign: "center", justifyContent: "space-between", background: "rgba(0,0,0,0.1)" }}>
        <Navbar.Brand href="/" style={{ color: "rgb(245, 89, 95)", display: "flex", alignItems: "center" }}>
          <img alt="" src="/icon.png" width="40" height="40" /> <h3 className="ml-2">airbnb</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links">
            <Nav.Link href="#" onClick={checkCredentials}>
              Host an experience
            </Nav.Link>
            {localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_USER_EMAIL) ? (
              <NavDropdown title={localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_USER_EMAIL)} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => history.push("/404")}>User Info</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={signOut}>Sign out</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <div onClick={(e) => handleShow(e, "login")}>
                  <Nav.Link href="#">Login</Nav.Link>
                </div>
                <div onClick={(e) => handleShow(e, "signup")}>
                  <Nav.Link href="#">Sign up</Nav.Link>
                </div>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
