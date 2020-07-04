import React, { useState } from "react";
import Select from "react-select";
import { Container } from "react-bootstrap";
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
      <Select defaultValue={[options[1], options[2]]} className="basic-multi-select" classNamePrefix="select" closeMenuOnSelect={false} value={selectedOption} isMulti options={options} />
    </Container>
  );
}
