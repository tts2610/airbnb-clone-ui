import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";
import Rheostat from "rheostat";

export default function Filters({ languageFilterList, filterByLanguage, filteredByPriceRange }) {
  const [timeOfDay, settimeOfDay] = useState([]);
  const [language, setLanguages] = useState([]);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(100);
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
    setMinPrice(e.values[0]);
    setMaxPrice(e.values[1]);
    filteredByPriceRange(minPrice, maxPrice);
  };

  const handleReset = () => {
    filterByLanguage([]);
    filteredByPriceRange(1, 100);
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
        <Col sm={4} className="mt-3">
          <Rheostat min={1} max={100} values={[minPrice, maxPrice]} onChange={(e) => handleChange(e)} />
          <h5>
            Min-Max: {minPrice} - {maxPrice}
          </h5>
        </Col>
        <Col sm={2} className="mt-2">
          <Button className="success" onClick={handleReset}>
            Reset
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
