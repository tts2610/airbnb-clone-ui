import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import data from "./sampleExperience.json";
import MyStackGrid from "./components/expDetail/MyStackGrid";
import DetailHeader from "./components/expDetail/DetailHeader";
import axios from "axios";

export default function ExpDetail() {
  let { expId } = useParams();
  const [exp, setExp] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(process.env.REACT_APP_GET_EXP + `/${expId}`).then((res) => console.log(res.data.experience));
  });
  return (
    <div className="expDetail">
      <div className="py-5" style={{ backgroundColor: "black", padding: "15px", width: "100vw" }}>
        <Container>
          <MyStackGrid exp={exp} />
          <DetailHeader exp={exp} />
        </Container>
      </div>

      <div className="py-4">
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
        <div style={{ display: "flex", justifyContent: "center", backgroundColor: "#f2f2f2", paddingTop: "150px", paddingBottom: "150px" }}>
          <Row style={{ width: "85%" }}>
            <Col sm={4}>
              <h1>Try something new together</h1>
            </Col>
            <Col sm={8} style={{ display: "flex" }}>
              <Col className="mr-2">
                <Row className="mb-3">
                  <i className="far fa-user-friends fa-3x"></i>
                </Row>
                <Row className="font-weight-bold">Small group activities</Row>
                <Row>Meet people from all over the world while learning something new together.</Row>
              </Col>
              <Col className="mr-2">
                <Row className="mb-3">
                  <i className="far fa-user-astronaut fa-3x"></i>
                </Row>
                <Row className="font-weight-bold">Thoughtful hosts</Row>
                <Row>Get to know hosts who share their expertise and a window to their world.</Row>
              </Col>
              <Col className="mr-2">
                <Row className="mb-3">
                  <i class="far fa-laptop fa-3x"></i>
                </Row>
                <Row className="font-weight-bold">Simple and global</Row>
                <Row>Join easily and participate from home without a lot of prep.</Row>
              </Col>
            </Col>
          </Row>
        </div>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "150px", paddingBottom: "150px" }}>
          <Row style={{ width: "85%" }}>
            <Col sm={4}>
              <h1>Guest reviews</h1>
              <h2 style={{ display: "flex" }}>
                <div className="mr-4">{exp.averageRating}</div>
                <div>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </h2>
            </Col>
            <Col sm={8}></Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
