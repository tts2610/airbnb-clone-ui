import React from "react";
import StackGrid from "react-stack-grid";

export default function MyStackGrid({ exp }) {
  return (
    <div>
      <StackGrid columnWidth={340} duration={0} gutterWidth={10}>
        <div>
          <img alt="" src={exp.images[0].url} width="340" height="460"></img>
        </div>
        <div>
          <img alt="" src={exp.images[2].url} width="170" height="230"></img>
          <img alt="" src={exp.images[3].url} width="170" height="230"></img>
          <img alt="" src={exp.images[4].url} width="340" height="230"></img>
        </div>
        <div>
          <img alt="" src={exp.images[1].url} width="340" height="460"></img>
        </div>
      </StackGrid>
    </div>
  );
}
