import React from "react";
import { Card, Button, Row, Badge, Col } from "react-bootstrap";

export default function ExpCard({ title, averageRating, tags, location }) {
  return (
    <div>
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src="sampleExp.png" style={{ borderRadius: "20px" }} />
        <Card.ImgOverlay>
          <Row>
            <Col style={{ display: "flex", alignItems: "center" }}>
              <Badge variant="dark">Online</Badge>
            </Col>
            <Col style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
              {/* <i className="fad fa-heart-circle fa-2x"></i> */}
              <i className="fal fa-heart-circle fa-2x"></i>
            </Col>
          </Row>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{averageRating}</Card.Text>
          <Card.Text>{location}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
