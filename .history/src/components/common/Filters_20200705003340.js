import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";

export default function Filters({ languageFilterList }) {
  const [timeOfDay, settimeOfDay] = useState([
    { name: "Morning-before 12 pm", id: 1 },
    { name: "Afternoon-after 12 pm", id: 2 },
    { name: "Evening-after 5 pm", id: 3 },
  ]);
  const [language, setLanguages] = useState([]);
  useEffect(() => {
    let newLangList = languageFilterList.reduce((acc, item, indx) => {
      let obj = { name: item, id: indx };
      acc.push(obj);
      return acc;
    }, []);
    console.log(newLangList);
    setLanguages(newLangList);
  }, [languageFilterList]);
  const [selectedOption, setSelected] = useState([]);
  const handleChange = () => {
    setSelected(selectedOption);
  };
  return (
    <Container style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <Multiselect
          options={language}
          selectedValues={selectedOption}
          onSelect={handleChange}
          // onRemove={this.onRemove}
          displayValue="name"
          showCheckbox={true}
          placeholder="Language Offered"
          closeOnSelect={false}
          avoidHighlightFirstOption={true}
          // style={{ chips: { background: "red" } }}
          closeIcon="close"
        />
      </div>
      <div>
        <Multiselect
          options={timeOfDay}
          selectedValues={selectedOption}
          onSelect={handleChange}
          // onRemove={this.onRemove}
          displayValue="name"
          showCheckbox={true}
          placeholder="Time of day"
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
