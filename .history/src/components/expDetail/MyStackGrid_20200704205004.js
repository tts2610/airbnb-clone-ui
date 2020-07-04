import React from "react";
import StackGrid from "react-stack-grid";

export default function MyStackGrid({ exp }) {
  return (
    <div>
      {/* <StackGrid columnWidth={340} duration={0} gutterWidth={10}>
        <div>
          <img alt="" src={exp.images[0]} width="340" height="460"></img>
        </div>
        <div>
          <img alt="" src={exp.images[2]} width="170" height="230"></img>
          <img alt="" src={exp.images[3]} width="170" height="230"></img>
          <img alt="" src={exp.images[4]} width="340" height="230"></img>
        </div>
        <div>
          <img alt="" src={exp.images[1]} width="340" height="460"></img>
        </div>
      </StackGrid> */}

      <div class="grid-container">
        <div class="grid-item-1">
          <img alt="" src={exp.images[0]} width="340" height="460"></img>
        </div>
        <div class="grid-item-2">
          <img alt="" src={exp.images[2]} width="170" height="230"></img>
        </div>
        <div class="grid-item-3">
          <img alt="" src={exp.images[3]} width="170" height="230"></img>
        </div>
        <div class="grid-item-4">
          <img alt="" src={exp.images[4]} width="340" height="230"></img>
        </div>
        <div class="grid-item-5">
          <img alt="" src={exp.images[1]} width="340" height="460"></img>
        </div>
      </div>
    </div>
  );
}
