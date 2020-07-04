import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import data from "./sampleExperience.json";

import StackGrid from "react-stack-grid";

export default function ExpDetail() {
  let { expId } = useParams();
  return (
    <div className="expDetail">
      <div style={{ backgroundColor: "black", padding: "15px" }}>
        <Container style={{ maxWidth: "1500px" }}>
          <Row style={{ justifyContent: "center" }}>
            <Col sm={3}>
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

          <StackGrid columnWidth={150}>
            <div key="key1">Item 1</div>
            <div key="key2">Item 2</div>
            <div key="key3">Item 3</div>
          </StackGrid>
        </Container>
      </div>
    </div>
  );
}
