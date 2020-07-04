import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

export default function CustomJumbotron() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h4>Online Experiences</h4>
          <p>Unique activities to do from home, including cooking experiences with world-renowned chefs</p>
        </Container>
      </Jumbotron>
    </div>
  );
}
