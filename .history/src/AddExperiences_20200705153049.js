import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Container } from "react-bootstrap";

export default function AddExperiences() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    dispatch({ type: "ADDNAVIGATOR", payload: { url: "" } });
  });
  return (
    <Container>
      <Form>
        <Form.Row>
          <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Row>
          <Form.Group controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" value="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}