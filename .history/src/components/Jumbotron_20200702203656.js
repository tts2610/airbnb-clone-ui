import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

export default function CustomJumbotron() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Online Experiences</h1>
          <h2>Unique activities to do from home, including cooking experiences with world-renowned chefs</h2>
        </Container>
      </Jumbotron>
    </div>
  );
}
