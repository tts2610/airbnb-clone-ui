import React, { useState } from "react";
import { Modal, Button, Form, Badge } from "react-bootstrap";

export default function SignupModal({ show, handleClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [country, setCountry] = useState("");
  return (
    <div>
      <Modal show={show}>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label> Email address </Form.Label> <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group>
              <Form.Label> Password </Form.Label> <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group>
              <Form.Label> Retype Password </Form.Label> <Form.Control type="password" placeholder="Retype Password" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Introduction</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Form.Group>
              <Form.Label> Country </Form.Label> <Form.Control type="text" placeholder="Country" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e) => handleClose(e)}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleClose(e)}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
