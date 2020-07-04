import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function ExpDetail() {
  let { expId } = useParams();
  return (
    <Container>
      <div style={{ backgroundColor: "black", height: "70vh" }}></div>
    </Container>
  );
}
