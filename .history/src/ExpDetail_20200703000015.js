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
          <StackGrid columnWidth={340} duration={0} gutterWidth={10} style={{ width: "70%", margin: "0 auto" }}>
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
        </Container>
      </div>
    </div>
  );
}
