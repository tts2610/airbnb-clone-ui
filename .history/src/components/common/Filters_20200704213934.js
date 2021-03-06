import React, { useState } from "react";
import MultiSelect from "@khanacademy/react-multi-select";
const options = [
  { label: "One", value: 1 },
  { label: "Two", value: 2 },
  { label: "Three", value: 3 },
];
export default function Filters() {
  const [selected, setSelected] = useState([]);
  return <MultiSelect options={options} selected={selected} onSelectedChanged={(selected) => setSelected(selected)} />;
}
