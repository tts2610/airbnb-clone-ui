import React from "react";
import { useParams } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import GridLayout from "react-grid-layout";
import data from "./sampleExperience.json";

export default function ExpDetail() {
  let { expId } = useParams();
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];
  return (
    <>
      <div style={{ backgroundColor: "black", height: "70vh" }}>
        <Container>
          <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
            <div key="a">
              <img alt="" src={data[0].images[0]}></img>
            </div>
            <div key="b">
              <img alt="" src={data[0].images[1]}></img>
            </div>
            <div key="c">
              <img alt="" src={data[0].images[2]}></img>
            </div>
          </GridLayout>
        </Container>
      </div>
    </>
  );
}
