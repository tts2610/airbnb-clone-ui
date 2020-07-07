import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";
// import data from "./sampleExperience.json";
import MyStackGrid from "./components/expDetail/MyStackGrid";
import DetailHeader from "./components/expDetail/DetailHeader";
import axios from "axios";
import { useSelector } from "react-redux";

export default function ExpDetail() {
  let { expId } = useParams();
  // let exp = data.find((e) => e._id === "5efadb0ba66f523e781a4105");
  const [exp, setExp] = useState();
  const [users, setUsers] = useState([]);
  const isHost = useSelector((state) => state.isHost);
  useEffect(() => {
    axios.get(process.env.REACT_APP_GET_EXP + `/${expId}`).then((res) => setExp(res.data.data.experience));
    axios
      .get(process.env.REACT_APP_GET_USER_URL)
      .then((res) => console.log(res.data.data.userList))
      .then((res) => console.log(users));
  }, []);
  if (!exp) return <div></div>;
  return (
    <div className="expDetail">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" style={{ color: "rgb(245, 89, 95)", display: "flex", alignItems: "center" }}>
          <img alt="" src="/icon.png" width="40" height="40" /> <h3 className="ml-2">airbnb</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {(isHost || localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_USER_HOST)) && (
              <Link to={`/updateExp/${expId}`}>
                <Button variant="info">Update</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
                  <i className="far fa-laptop fa-3x"></i>
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
                <div className="mr-4">{Math.ceil(exp.averageRating)}</div>
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
