import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";
import Rheostat from "rheostat";

export default function Filters({ languageFilterList, filterByLanguage }) {
  const [timeOfDay, settimeOfDay] = useState([]);
  const [language, setLanguages] = useState([]);
  useEffect(() => {
    let newLangList = languageFilterList.reduce((acc, item, indx) => {
      let obj = { name: item, id: indx };
      acc.push(obj);
      return acc;
    }, []);
    console.log(newLangList);
    setLanguages(newLangList);
    settimeOfDay([
      { name: "Morning", id: 1 },
      { name: "Afternoon", id: 2 },
      { name: "Evening", id: 3 },
    ]);
  }, [languageFilterList]);
  const [selectedOption, setSelected] = useState([]);
  const handleSelect = (selectedList) => {
    // console.log(selectedList);
    setSelected(selectedList);
    filterByLanguage(selectedList.map((e) => e.name));
  };

  const handleRemove = (selectedList) => {
    // console.log(selectedList);
    setSelected(selectedList);
    filterByLanguage(selectedList.map((e) => e.name));
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col sm={2} className="mt-2">
          <Multiselect
            options={language}
            selectedValues={selectedOption}
            onSelect={handleSelect}
            onRemove={handleRemove}
            displayValue="name"
            showCheckbox={true}
            placeholder="Language Offered"
            closeOnSelect={false}
            avoidHighlightFirstOption={true}
            closeIcon="close"
          />
        </Col>
        <Col sm={2} className="mt-2">
          <Multiselect options={timeOfDay} selectedValues="" onSelect="" displayValue="name" showCheckbox={true} placeholder="Time of day" closeOnSelect={false} avoidHighlightFirstOption={true} closeIcon="close" />
        </Col>
        <Col sm={4} className="mt-2">
          <Rheostat min={1} max={100} values={[1, 100]} onChange={(e) => handleChange(e)} />
        </Col>
      </Row>
    </Container>
  );
}
