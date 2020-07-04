import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function CustomNavbar({ handleShow }) {
  let history = useHistory();
  const signOut = () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_USER_TOKEN)}`,
    };
    axios
      .post(process.env.REACT_APP_LOGOUT_USER_URL, {
        headers: headers,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        // console.log(process.env.REACT_APP_LOCAL_STORAGE_USER_TOKEN);
        console.log(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_USER_TOKEN));
        console.log(error.response);
        // if (error.response.data.message.includes("duplicate")) {
        //   this.setState({ errorSignUp: "This email already existed" });
        //   this.setState({ showSignUpSpinner: false });
        // }
      });
  };
  return (
    <div>
      {/* <Navbar fixed="top" style={{ display: "flex", textAlign: "center", justifyContent: "space-between", background: "rgba(0,0,0,0.1)" }}>
        <Navbar.Brand href="/" style={{ color: "rgb(245, 89, 95)", display: "flex", alignItems: "center" }}>
          <img alt="" src="/icon.png" width="40" height="40" /> <h3 className="ml-2">airbnb</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="">Host an experience</Nav.Link>

            {localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_USER_EMAIL) ? (
              <NavDropdown title={localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_USER_EMAIL)} id="basic-nav-dropdown">
                <NavDropdown.Item href="#" onClick={() => history.push("/404")}>
                  User Info
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#" onClick={signOut}>
                  Sign out
                </NavDropdown.Item>
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
      </Navbar> */}

      <Navbar fixed="top" expand="lg" bg="dark" style={{ display: "flex", textAlign: "center", justifyContent: "space-between", background: "rgba(0,0,0,0.1)" }}>
        <Navbar.Brand href="/" style={{ color: "rgb(245, 89, 95)", display: "flex", alignItems: "center" }}>
          <img alt="" src="/icon.png" width="40" height="40" /> <h3 className="ml-2">airbnb</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links">
            <Nav.Link href="">Host an experience</Nav.Link>
            {localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_USER_EMAIL) ? (
              <NavDropdown title={localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_USER_EMAIL)} id="basic-nav-dropdown">
                <NavDropdown.Item href="#" onClick={() => history.push("/404")}>
                  User Info
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#" onClick={signOut}>
                  Sign out
                </NavDropdown.Item>
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
