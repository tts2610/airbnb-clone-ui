import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import data from "./sampleExperience.json";

export default function ExpDetail() {
  let { expId } = useParams();
  return (
    <div className="expDetail">
      <div style={{ backgroundColor: "black", padding: "15px" }}>
        <Container>
          <Row>
            <Col sm={3} className="padding-0">
              <img alt="" src={data[1].images[0]} width="340" height="458"></img>
            </Col>
            <Col sm={3}>
              <img alt="" src={data[1].images[1]} width="340" height="458"></img>
            </Col>
            <Col sm={2} style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
              <Row>
                <img alt="" src={data[1].images[2]} width="170" height="225"></img>
              </Row>
              <Row className="mt-2">
                <img alt="" src={data[1].images[3]} width="170" height="225"></img>
              </Row>
            </Col>
            <Col sm={3}>
              <img alt="" src={data[1].images[4]} width="340" height="458"></img>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
