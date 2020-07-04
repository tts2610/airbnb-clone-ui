import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

export default function CustomJumbotron() {
  return (
    <div>
      <Jumbotron fluid style={{ backgroundImage: "url('https://a0.muscache.com/im/pictures/99f41c80-cadb-4db7-9d96-027b04c5dede.jpg?im_w=720')" }}>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
  );
}
