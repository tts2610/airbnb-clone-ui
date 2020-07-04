import React from "react";
import { Card, Row, Badge, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ExpCard({ title, price, location, images, _id }) {
  return (
    <div>
      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src={images[0]} style={{ borderRadius: "20px" }} />
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
            From $ {price}
            /person
          </Card.Text>
          <Link to={"/exp/" + _id} onClick={this.forceUpdate} className="stretched-link" />
        </Card.Body>
      </Card>
    </div>
  );
}
