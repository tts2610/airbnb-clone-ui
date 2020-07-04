import React from "react";
import { Modal, Button, Form, Badge } from "react-bootstrap";

export default function LoginModal({ show, handleClose }) {
  return (
    <div>
      <Modal show={show}>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label> Email address </Form.Label> <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted"> We 'll never share your email with anyone else.</Form.Text>{" "}
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label> Password </Form.Label> <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
          <Badge variant="primary" style={{ padding: "5px", display: "flex", textAlign: "center" }}>
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
