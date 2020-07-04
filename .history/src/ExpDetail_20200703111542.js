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
          <Row className="mt-5" style={{ display: "flex", justifyContent: "center", color: "white" }}>
            <Col sm={3} style={{ paddingLeft: "0px" }}>
              <Badge variant="light" style={{ padding: "10px" }}>
                <i className="fas fa-caret-right mr-2"></i>Online Experience
              </Badge>
              <h1>Michelin Chef Cristina's Roman Cuisine</h1>
              <div>Rome, Italy</div>
              <div className="mt-2">
                <Badge variant="dark" style={{ padding: "5px" }}>
                  Cooking
                </Badge>
                <Badge className="ml-2" variant="dark" style={{ padding: "5px" }}>
                  Class
                </Badge>
              </div>
            </Col>
            <Col sm={7} style={{ alignItems: "center" }}>
              <Row style={{ justifyContent: "center", borderTop: "1px solid grey", borderBottom: "1px solid grey", padding: "15px" }}>
                <div>
                  <img className="mr-2" src="/phone_1.png" alt="" width="40" height="40"></img>Book and join this experience from your computer, phone, or tablet.
                </div>
              </Row>
              <Row className="ml-3 mt-5" style={{ justifyContent: "space-evenly" }}>
                <div>
                  <i className="fas fa-clock"></i>
                  <div>Duration</div>
                  <div>1 hour</div>
                </div>
                <div>
                  <i className="fas fa-user-friends"></i>
                  <div>Group size</div>
                  <div>10 people</div>
                </div>
                <div>
                  <i className="fas fa-comments"></i>
                  <div>Hosted in</div>
                  <div>English, Japan</div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container>What you'll do</Container>
      </div>
    </div>
  );
}
