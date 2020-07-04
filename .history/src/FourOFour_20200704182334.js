import React from "react";
import { Container, Image } from "react-bootstrap";
export default function FourOhFourPage() {
  return (
    <div>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          margin: "0",
          position: "absolute",
          top: "20%",
        }}>
        <Image src={process.env.PUBLIC_URL + "/images/pngguru.com.png"} alt="" fluid />
      </Container>
    </div>
  );
}
