import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function MyModal({ show, handleClose }) {
  return (
    <div>
      <Modal show={show} onHide={(e) => handleClose(e)}>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e) => handleClose(e)}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleClose(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
