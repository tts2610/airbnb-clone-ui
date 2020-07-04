import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function ExpDetail() {
  let { expId } = useParams();
  return (
    <Container>
      <h3>Requested topic ID: {expId}</h3>
    </Container>
  );
}
