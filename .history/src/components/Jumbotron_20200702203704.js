import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

export default function CustomJumbotron() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Online Experiences</h1>
          <p>Unique activities to do from home, including cooking experiences with world-renowned chefs</p>
        </Container>
      </Jumbotron>
    </div>
  );
}
