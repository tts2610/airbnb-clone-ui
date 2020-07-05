import React, { useState, useEffect } from "react";
import { Modal, Tab, Tabs } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function LoginModal({ show, handleClose, loginUser, showSpinner, error, loginNavigator }) {
  const navigator = useSelector((state) => state.navigator);
  let history = useHistory();
  const loginFB = () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://cloneairbnb2020.herokuapp.com/auth/facebook/login";
    axios.get(proxyurl + url).then((res) => {
      console.log(res.data);
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const clearForm = () => {
    setEmail("");

    setPassword("");
  };

  useEffect(() => {
    if (!show) clearForm();
    if (navigator !== "" && loginNavigator) {
      history.push(navigator);
    }
  });

  const loginBody = () =>{
    return(<Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                {" "}
                Email address <span style={{ color: "red" }}>*</span>{" "}
              </Form.Label>{" "}
              <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>
                {" "}
                Password <span style={{ color: "red" }}>*</span>{" "}
              </Form.Label>{" "}
              <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
          </Form>
          <Badge variant="primary" className="loginWithFB" onClick={() => loginFB()}>
            <i className="fab fa-facebook fa-2x mr-2"></i>
            <div>Login with Facebook</div>
          </Badge>
          {error !== "" && <div style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>{error}</div>}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={(e) => {
              clearForm();
              handleClose(e, "login");
            }}
            className="mr-2">
            Close
          </Button>
          <Button variant="success" onClick={(e) => loginUser(email, password)}>
            {showSpinner && <Spinner className="mr-2" as="span" animation="border" size="sm" role="status" aria-hidden="true" />}
            Login
          </Button>
        </Modal.Footer>);
  }
  return (
    <div>
      <Modal show={show}>

        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
    <Sonnet />
  </Tab>
  <Tab eventKey="profile" title="Profile">
    <Sonnet />
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    <Sonnet />
  </Tab>
</Tabs>
      </Modal>
    </div>
  );


  
}
