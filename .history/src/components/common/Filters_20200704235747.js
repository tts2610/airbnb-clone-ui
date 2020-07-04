import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";

export default function Filters() {
  const [option, setOption] = useState([
    { name: "Srigar", id: 1 },
    { name: "Sam", id: 2 },
  ]);
  const [selectedOption, setSelected] = useState([]);
  const handleChange = () => {
    setSelected(selectedOption);
  };
  return (
    <Container style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <Multiselect
          options={option}
          selectedValues={selectedOption}
          onSelect={handleChange}
          // onRemove={this.onRemove}
          displayValue="name"
          showCheckbox={true}
          placeholder="Interest"
          closeOnSelect={false}
          avoidHighlightFirstOption={true}
          // style={{ chips: { background: "red" } }}
          closeIcon="close"
        />
      </div>
      <div>
        <Multiselect
          options={option}
          selectedValues={selectedOption}
          onSelect={handleChange}
          // onRemove={this.onRemove}
          displayValue="name"
          showCheckbox={true}
          placeholder="Language offered"
          closeOnSelect={false}
          avoidHighlightFirstOption={true}
          // style={{ chips: { background: "red" } }}
          closeIcon="close"
        />
      </div>
      <Button variant="dark">Filter</Button>
    </Container>
  );
}
