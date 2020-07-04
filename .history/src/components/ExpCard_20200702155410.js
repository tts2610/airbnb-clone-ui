import React from "react";
import { Card, Button, Row, Badge } from "react-bootstrap";

export default function ExpCard({ title, averageRating, tags, location }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="sampleExp.png" />
        <Card.ImgOverlay>
          <Row>
            <Badge variant="dark">Online</Badge>
          </Row>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{averageRating}</Card.Text>
          <Card.Text>{tags}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
