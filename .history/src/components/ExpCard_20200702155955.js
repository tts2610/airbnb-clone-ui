import React from "react";
import { Card, Button, Row, Badge, Col } from "react-bootstrap";

export default function ExpCard({ title, averageRating, tags, location }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="sampleExp.png" />
        <Card.ImgOverlay>
          <Row>
            <Col>
              <Badge variant="dark">Online</Badge>
            </Col>
            <Col>
              <i className="fad fa-heart-circle fa-2x"></i>
            </Col>
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
