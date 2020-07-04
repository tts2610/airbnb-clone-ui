import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
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
    <Container>
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
        style={{
          chips: {
            // To change css chips(Selected options)
            background: "red",
          },option: { // To change css for dropdown options
	color: "rbga(255,255,255,0.5)";
  },
        }}
      />
    </Container>
  );
}
