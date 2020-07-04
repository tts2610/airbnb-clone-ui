import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function SignupModal({ show, handleClose }) {
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
            </Form.Group>{" "}
          </Form>{" "}
        </Modal.Body>{" "}
        <Modal.Footer>
          <Button variant="secondary" onClick={(e) => handleClose(e)}>
            Close{" "}
          </Button>{" "}
          <Button variant="primary" onClick={(e) => handleClose(e)}>
            Save Changes{" "}
          </Button>{" "}
        </Modal.Footer>{" "}
      </Modal>{" "}
    </div>
  );
}
