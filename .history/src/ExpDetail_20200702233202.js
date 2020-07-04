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
        <Container>
          {/* <Row style={{ justifyContent: "center" }}>
            <Col sm={3}>
              
            </Col>
            <Col sm={3}>
              
            </Col>
            <Col sm={2} style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
              <Row>
                
              </Row>
              <Row className="mt-2">
                
              </Row>
            </Col>
            <Col sm={3}>
              
            </Col>
          </Row> */}

          <StackGrid columnWidth={340}>
            <div>
              <img alt="" src={data[1].images[0]} width="340" height="450"></img>
            </div>
            <div>
              <img alt="" src={data[1].images[1]} width="340" height="450"></img>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img alt="" src={data[1].images[2]} width="170" height="230"></img>
              <img alt="" src={data[1].images[3]} width="170" height="230"></img>
            </div>
            <div>
              <img alt="" src={data[1].images[4]} width="340" height="450"></img>
            </div>
          </StackGrid>
        </Container>
      </div>
    </div>
  );
}
