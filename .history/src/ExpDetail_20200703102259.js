import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Badge } from "react-bootstrap";

import data from "./sampleExperience.json";

import StackGrid from "react-stack-grid";

export default function ExpDetail() {
  let { expId } = useParams();
  return (
    <div className="expDetail">
      <div style={{ backgroundColor: "black", padding: "15px", width: "100vw" }}>
        <Container>
          <StackGrid columnWidth={340} duration={0} gutterWidth={10}>
            <div>
              <img alt="" src={data[1].images[0]} width="340" height="460"></img>
            </div>
            <div>
              <img alt="" src={data[1].images[2]} width="170" height="230"></img>
              <img alt="" src={data[1].images[3]} width="170" height="230"></img>
              <img alt="" src={data[1].images[4]} width="340" height="230"></img>
            </div>
            <div>
              <img alt="" src={data[1].images[1]} width="340" height="460"></img>
            </div>
          </StackGrid>
          <Row>
            <Col sm={3}>
              <Badge variant="light" style={{ padding: "10px" }}>
                <i className="fas fa-caret-right mr-2"></i>Online Experience
              </Badge>
              <div>Michelin Chef Cristina's Roman Cuisine</div>
              <div>Rome, Italy</div>
              <Badge variant="dark">Cooking</Badge>
              <Badge variant="dark">Class</Badge>
            </Col>
            <Col sm={7}></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
