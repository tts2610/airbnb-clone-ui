import React from "react";
import { useParams } from "react-router-dom";

export default function ExpDetail() {
  let { expId } = useParams();
  return (
    <Container>
      <h3>Requested topic ID: {expId}</h3>
    </Container>
  );
}
