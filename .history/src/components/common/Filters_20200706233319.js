import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";
import Rheostat from "rheostat";
import { useDispatch } from "react-redux";

const languageConvert = {
  Vietnameses: "vi",
  Korean: "ko",
  English: "en",
};
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

export default function Filters({ data, filterByLanguage, filteredByPriceRange }) {
  const [tags, setTags] = useState([]);
  const [language, setLanguages] = useState([]);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(100);

  const dispatch = useDispatch();
  const getLanguageList = (data) => {
    let arr = new Set();
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      element.languages.forEach((item) => arr.add(getKeyByValue(languageConvert, item)));
    }
    let newLangList = Array.from(arr).reduce((acc, item, indx) => {
      let obj = { name: item, id: indx };
      acc.push(obj);
      return acc;
    }, []);
    setLanguages(newLangList);
  };

  const getTagList = (data) => {
    let arr = new Set();
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      element.tags.forEach((item) => arr.add(item.tag));
    }

    let newTagList = Array.from(arr).reduce((acc, item, indx) => {
      let obj = { name: item, id: indx };
      acc.push(obj);
      return acc;
    }, []);

    setTags(newTagList);
  };
  useEffect(() => {
    getLanguageList(data);
    getTagList(data);
  }, [data]);
  const [selectedOption, setSelected] = useState([]);
  const handleSelectLanguage = (selectedList) => {
    setSelected(selectedList);
    dispatch({ type: "FILTER", payload: { searchParams: { languages: selectedList.map((e) => languageConvert[e.name]) } } });
    // filterByLanguage();
  };

  const handleRemoveLanguage = (selectedList) => {
    setSelected(selectedList);
    dispatch({ type: "FILTER", payload: { searchParams: { languages: selectedList.map((e) => languageConvert[e.name]) } } });
    // filterByLanguage();
  };

  const handleChange = (e) => {
    setMinPrice(e.values[0]);
    setMaxPrice(e.values[1]);
    dispatch({ type: "FILTER", payload: { searchParams: { minPrice: e.values[0], maxPrice: e.values[1] } } });
  };

  const handleReset = () => {
    filterByLanguage([]);
    setMinPrice(1);
    setMaxPrice(100);
  };

  return (
    <Container>
      <Row>
        <Col sm={2} className="mt-2">
          <Multiselect
            options={language}
            selectedValues={selectedOption}
            onSelect={handleSelectLanguage}
            onRemove={handleRemoveLanguage}
            displayValue="name"
            showCheckbox={true}
            placeholder="Language Offered"
            closeOnSelect={false}
            avoidHighlightFirstOption={true}
            closeIcon="close"
          />
        </Col>
        <Col sm={2} className="mt-2">
          <Multiselect options={tags} selectedValues="" onSelect="" displayValue="name" showCheckbox={true} placeholder="Tags" closeOnSelect={false} avoidHighlightFirstOption={true} closeIcon="close" />
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
