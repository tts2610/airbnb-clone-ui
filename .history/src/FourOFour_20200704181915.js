import React from "react";
import { Image } from "react-bootstrap";
export default function FourOhFourPage() {
  return (
    <div>
      <Image src={process.env.PUBLIC_URL + "/images/pngguru.com.png"} alt="" fluid />
    </div>
  );
}
