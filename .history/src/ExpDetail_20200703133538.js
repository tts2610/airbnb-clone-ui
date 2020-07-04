import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Badge } from "react-bootstrap";
import data from "./sampleExperience.json";

import StackGrid from "react-stack-grid";

export default function ExpDetail() {
  let { expId } = useParams();
  let exp = data.find((e) => e._id === "5efadb0ba66f523e781a4105");
  return (
    <div className="expDetail">
      <div className="py-5" style={{ backgroundColor: "black", padding: "15px", width: "100vw" }}>
        <Container>
          <StackGrid columnWidth={340} duration={0} gutterWidth={10}>
            <div>
              <img alt="" src={exp.images[0]} width="340" height="460"></img>
            </div>
            <div>
              <img alt="" src={exp.images[2]} width="170" height="230"></img>
              <img alt="" src={exp.images[3]} width="170" height="230"></img>
              <img alt="" src={exp.images[4]} width="340" height="230"></img>
            </div>
            <div>
              <img alt="" src={exp.images[1]} width="340" height="460"></img>
            </div>
          </StackGrid>
          <Row className="mt-5" style={{ display: "flex", justifyContent: "center", color: "white" }}>
            <Col sm={3} style={{ paddingLeft: "0px" }}>
              <Badge variant="light" style={{ padding: "10px" }}>
                <i className="fas fa-caret-right mr-2"></i>Online Experience
              </Badge>
              <h1>{exp.title}</h1>
              <div>{exp.location}</div>
              <div className="mt-2">
                {exp.tags.map((e) => (
                  <Badge className="mr-2" variant="dark" style={{ padding: "5px" }}>
                    {e}
                  </Badge>
                ))}
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
                  <div className="text-muted">Duration</div>
                  <div>{exp.duration}</div>
                </div>
                <div>
                  <i className="fas fa-user-friends"></i>
                  <div className="text-muted">Group size</div>
                  <div>10 people</div>
                </div>
                <div>
                  <i className="fas fa-comments"></i>
                  <div className="text-muted">Hosted in</div>
                  <div>{exp.languages.join()}</div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <div className="mt-5" style={{ display: "flex", justifyContent: "center" }}>
          <Row style={{ width: "85%" }}>
            <Col sm={6}>
              <h1>What you'll do</h1>
            </Col>
            <Col sm={6}>
              <p style={{ whiteSpace: "pre-line" }}>{exp.description}</p>
            </Col>
          </Row>
        </div>
      </div>
      <div>
        <div className="py-3" style={{ display: "flex", justifyContent: "center", backgroundColor: "#f2f2f2" }}>
          <Row style={{ width: "85%" }}>
            <Col sm={4}>
              <h1>Try something new together</h1>
            </Col>
            <Col sm={8}>
              <Col>
                <Row>
                  <i className="far fa-user-friends fa-2x"></i>
                </Row>
                <Row className="font-weight-bold">Small group activities</Row>
                <Row>Meet people from all over the world while learning something new together.</Row>
              </Col>
              <Col>
                <Row>
                  <i className="far fa-user-friends fa-2x"></i>
                </Row>
                <Row className="font-weight-bold">Small group activities</Row>
                <Row>Meet people from all over the world while learning something new together.</Row>
              </Col>
              <Col>
                <Row>
                  <i className="far fa-user-friends fa-2x"></i>
                </Row>
                <Row className="font-weight-bold">Small group activities</Row>
                <Row>Meet people from all over the world while learning something new together.</Row>
              </Col>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
