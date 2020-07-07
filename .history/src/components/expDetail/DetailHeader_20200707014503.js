import React from "react";
import { Row, Col, Badge } from "react-bootstrap";

export default function DetailHeader({ exp }) {
  return (
    <div>
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
                {e.tag}
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
              <div>{exp.duration} mins</div>
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
    </div>
  );
}
