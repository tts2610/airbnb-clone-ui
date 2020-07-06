import React from "react";
import { Card, Row, Badge, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ExpCard({ title, price, location, images, _id, imageUrls }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={images.length !== 0 ? images[0].url : imageUrls[0]} style={{ borderRadius: "20px" }} />
        <Card.ImgOverlay>
          <Row>
            <Col style={{ display: "flex", alignItems: "center" }}>
              <Badge variant="dark" style={{ padding: "8px" }}>
                Online
              </Badge>
            </Col>
            <Col style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
              <i className="far fa-heart-circle fa-2x"></i>
            </Col>
          </Row>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Text className="text-uppercase"> {location} </Card.Text> <Card.Text className="cardTitle"> {title} </Card.Text>{" "}
          <Card.Text>
            From $ {_id}
            /person
          </Card.Text>
          <Link to={"/exp/" + _id} className="stretched-link" />
        </Card.Body>
      </Card>
    </div>
  );
}
