import React from "react";
import { useParams } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

import data from "./sampleExperience.json";

export default function ExpDetail() {
  let { expId } = useParams();
  return (
    <>
      <div style={{ backgroundColor: "black", height: "70vh" }}>
        <Container>
          <img alt="" src={data[0].images[0]}></img>

          <img alt="" src={data[0].images[1]}></img>

          <img alt="" src={data[0].images[2]}></img>

          <img alt="" src={data[0].images[3]}></img>

          <img alt="" src={data[0].images[4]}></img>
        </Container>
      </div>
    </>
  );
}
