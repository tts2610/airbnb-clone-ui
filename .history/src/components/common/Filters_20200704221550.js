import React, { useState } from "react";
import MultiSelect from "@khanacademy/react-multi-select";
import { Container } from "react-bootstrap";
const options = [
  { label: "One", value: 1 },
  { label: "Two", value: 2 },
  { label: "Three", value: 3 },
];
export default function Filters() {
  const [selected, setSelected] = useState([]);
  return (
    <Container style={{ display: "flex", justifyContent: "space-between" }}>
      <MultiSelect valueRenderer="interesting"" overrideStrings="interesting" disableSearch={true} options={options} selected={selected} onSelectedChanged={(selected) => setSelected(selected)} />
      <MultiSelect disableSearch={true} options={options} selected={selected} onSelectedChanged={(selected) => setSelected(selected)} />
      <MultiSelect disableSearch={true} options={options} selected={selected} onSelectedChanged={(selected) => setSelected(selected)} />
      <MultiSelect disableSearch={true} options={options} selected={selected} onSelectedChanged={(selected) => setSelected(selected)} />
      <MultiSelect disableSearch={true} options={options} selected={selected} onSelectedChanged={(selected) => setSelected(selected)} />
    </Container>
  );
}
