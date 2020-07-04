import React from "react";
import { useParams } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import GridLayout from "react-grid-layout";
import data from "./sampleExperience.json";

export default function ExpDetail() {
  let { expId } = useParams();
  const layout = [
    { i: "a", x: 0, y: 0, w: 2, h: 9, static: true },
    { i: "b", x: 2, y: 0, w: 2, h: 9, static: true },
    { i: "c", x: 4, y: 0, w: 2, h: 5, static: true },
    { i: "d", x: 4, y: 5, w: 2, h: 4, static: true },
    { i: "e", x: 6, y: 0, w: 2, h: 9, static: true },
  ];
  return (
    <>
      <div style={{ backgroundColor: "black", height: "70vh" }}>
        <Container>
          <GridLayout className="layout" layout={layout} cols={4} rowHeight={30} width={1200}>
            <div key="a">
              <img alt="" src={data[0].images[0]}></img>
            </div>
            <div key="b">
              <img alt="" src={data[0].images[1]}></img>
            </div>
            <div key="c">
              <img alt="" src={data[0].images[2]}></img>
            </div>
            <div key="d">
              <img alt="" src={data[0].images[3]}></img>
            </div>
            <div key="e">
              <img alt="" src={data[0].images[4]}></img>
            </div>
          </GridLayout>
        </Container>
      </div>
    </>
  );
}
