import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Badge, Spinner } from "react-bootstrap";

export default function SignupModal({ show, handleClose, signUpUser, showSpinner, error }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [country, setCountry] = useState("");
  const [retypeNotMatch, setRetypeNotMatch] = useState();

  const clearForm = () => {
    setEmail("");
    setName("");
    setPassword("");
    setRetypePassword("");
    setIntroduction("");
    setCountry("");
  };

  useEffect(() => {
    if (!show) clearForm();
  });

  return (
    <div>
      <Modal show={show}>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>
                Email address<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Name <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Password <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Confirm Password <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                value={retypePassword}
                onChange={(e) => {
                  if (e.target.value === password) setRetypeNotMatch(false);
                  else setRetypeNotMatch(true);
                  setRetypePassword(e.target.value);
                }}
                type="password"
                placeholder="Confirm Password"
              />
              <Form.Text style={{ color: "red" }}>{!retypeNotMatch || "Retyped Password is not matched"}</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Introduction</Form.Label>
              <Form.Control value={introduction} onChange={(e) => setIntroduction(e.target.value)} as="textarea" rows="3" />
            </Form.Group>
            <Form.Group>
              <Form.Label> Country </Form.Label> <Form.Control value={country} onChange={(e) => setCountry(e.target.value)} type="text" placeholder="Country" />
            </Form.Group>
          </Form>
          {error !== "" && <div style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>{error}</div>}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={(e) => {
              clearForm();
              handleClose(e);
            }}
            className="mr-2">
            Close
          </Button>
          <Button
            variant="success"
            onClick={() => {
              signUpUser(email, name, password, retypePassword, introduction, country);
            }}>
            {showSpinner && <Spinner className="mr-2" as="span" animation="border" size="sm" role="status" aria-hidden="true" />}
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
