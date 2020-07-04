import React, { useState } from "react";
import { Modal, Button, Form, Badge } from "react-bootstrap";

export default function SignupModal({ show, handleClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [country, setCountry] = useState("");
  const [retypeNotMatch, setRetypeNotMatch] = useState(true);
  const signUpUser = () => {
    console.log(email, password, introduction, country, retypePassword, retypeNotMatch);
  };
  return (
    <div>
      <Modal show={show}>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label> Email address </Form.Label> <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group>
              <Form.Label> Password </Form.Label> <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group>
              <Form.Label> Retype Password </Form.Label>{" "}
              <Form.Control
                value={retypePassword}
                onChange={(e) => {
                  setRetypePassword(e.target.value);
                  if (retypePassword === password) console.log("setRetypeNotMatch(false);");
                }}
                type="password"
                placeholder="Retype Password"
              />
              <Form.Text>{!retypeNotMatch || "Retyped Password is not matched"}</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Introduction</Form.Label>
              <Form.Control value={introduction} onChange={(e) => setIntroduction(e.target.value)} as="textarea" rows="3" />
            </Form.Group>
            <Form.Group>
              <Form.Label> Country </Form.Label> <Form.Control value={country} onChange={(e) => setCountry(e.target.value)} type="text" placeholder="Country" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e) => handleClose(e)}>
            Close
          </Button>
          <Button variant="primary" onClick={signUpUser}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
