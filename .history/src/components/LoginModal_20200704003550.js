import React from "react";
import { Modal, Button, Form, Badge } from "react-bootstrap";
import axios from "axios";

export default function LoginModal({ show, handleClose }) {
  const loginFB = () => {
    axios
      .get(`https://cloneairbnb2020.herokuapp.com/auth/facebook/login`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <div>
      <Modal show={show}>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label> Email address </Form.Label> <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label> Password </Form.Label> <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
          <Badge variant="primary" className="loginWithFB" onClick={() => loginFB()}>
            <i className="fab fa-facebook fa-2x mr-2"></i>
            <div>Login with Facebook</div>
          </Badge>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e) => handleClose(e, "login")}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleClose(e, "login")}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
