import React from "react";
import { Card, Button } from "react-bootstrap";

export default function ExpCard({ title, averageRating, tags, location }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{averageRating}</Card.Text>
          <Card.Text>{tags}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
