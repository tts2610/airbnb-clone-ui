import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export default function Filters() {
  const [selectedOption, setSelected] = useState(null);
  const handleChange = () => {
    setSelected(selectedOption);
  };
  return (
    <Container>
      <Multiselect options={options} displayValue="key" showCheckbox={true} />{" "}
    </Container>
  );
}
