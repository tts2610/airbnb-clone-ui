import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";

export default function Filters({ languageFilterList }) {
  //   const [language, setLanguages] = useState([
  //     { name: "Srigar", id: 1 },
  //     { name: "Sam", id: 2 },
  //   ]);
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
          placeholder="Interest"
          closeOnSelect={false}
          avoidHighlightFirstOption={true}
          // style={{ chips: { background: "red" } }}
          closeIcon="close"
        />
      </div>
      {/* <div>
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
      </div> */}
      <Button variant="dark">Filter</Button>
    </Container>
  );
}
