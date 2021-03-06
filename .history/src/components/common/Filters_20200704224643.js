import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export default function Filters() {
  const [selectedOption, setSelected] = useState(options);
  const handleChange = () => {
    setSelected(selectedOption);
  };
  return (
    <Container>
      <Multiselect
        options={options.value} // Options to display in the dropdown
        selectedValues={selectedOption} // Preselected value to persist in dropdown
        onSelect={handleChange} // Function will trigger on select event
        // onRemove={this.onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
      />
    </Container>
  );
}
